"use client";

import { useEffect } from "react";
//import { useCategoryForm } from "./contexts/PostsFormContext";
import { useSearchParams } from "next/navigation";
import { usePostsForm } from "./contexts/PostsFormContext";
import { useCategoriesBlog } from "@/app/lib/firebase/categoryBlog/read";
import { useAuthors } from "@/app/lib/firebase/author/read";
import { spaceToHyphen } from "@/utils/transformName";
import { RTEField } from "./components/RTEField";
import Link from "next/link";

export default function Page(){
    const searchParams = useSearchParams();
    const updatePostsId = searchParams.get('id');
    const {
        data,
        isLoading,
        error,
        isDone,
        handleData,
        handleSKU,
        handleCreate,
        handleUpdate,
        handleDelete,
        image, setImage,
        fetchData
    } = usePostsForm();

    useEffect(() => {
        if(updatePostsId){
            fetchData(updatePostsId)
        }
    }, [updatePostsId]);

    return <main className="w-100">
        <div className="d-flex w-100 justify-content-between add-categories align-items-center mb-3">
            <h3 className="category-form-title align-items-center">
                {updatePostsId && <span className="update-text">Update/Delete</span>}
                {!updatePostsId && <span className="creater-text">Upload</span>}
                <div>Blog Posts </div>
            </h3>
            <Link href={'/backend/admin/postsBlog'}>
                <button className="btn position-relative">Back</button>
            </Link>
        </div>
        <div className="category-form-sample d-block">
            <div className="category-form flex-fill">
                <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            if(updatePostsId){
                                handleUpdate();
                            } else {
                                handleCreate();
                            }
                        }}
                    >
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="form-group">
                                    <label className="form-label"><strong>Post Name</strong> <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="Post Name"
                                    onChange={(e) => {
                                        handleData('name', e.target.value)
                                    }}
                                    value={data?.name}
                                    required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label"><strong>Post Path (Same as Post name)</strong> <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="Post Slug"
                                    disabled={updatePostsId}
                                    onChange={(e) => {
                                        let slugName = (e.target.value).replace(/[^\w a-zA-Z0-9]/g, '').toLowerCase();
                                        handleData('slug', spaceToHyphen(slugName));
                                    }}
                                    value={data?.id}
                                    required />
                                </div>
                                <SelectCateoryField></SelectCateoryField>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="form-group">
                                    <label className="form-label"><strong>Post Image</strong> <span>*</span></label>
                                    <div className="product-image-wrap">
                                        <div className="product-image" style={{height:"190px"}}>
                                            {data?.productURL && <div className="icon-img" style={{height:"190px"}}><img src={data?.productURL} className="cat-img" alt="" /></div>}
                                            {image && <div className="icon-new-img" style={{height:"190px"}}><img src={URL.createObjectURL(image)} className="cat-img" alt="" /></div>}                        
                                        </div>
                                        <div className="product-control">
                                            {/* <label className="form-label">Product Image</label> */}
                                            <input type="file" accept="image/*" className="form-control" placeholder="Product Image"
                                            onChange={(e) => {
                                                setImage(e.target.files[0]); 
                                            }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label className="form-label"><strong>Post Details...</strong><span>*</span></label>
                                    <RTEField></RTEField>
                                </div>
                            </div>
                        </div>
                    {/* <SelectAuthorField></SelectAuthorField> */}
                    {/* <div className="form-group">
                        <label>Product Category</label>
                        <select className="form-control"                 
                            onChange={(e) => {
                                handleData('ProductCategory', e.target.value)
                            }}
                            value={data?.ProductCategory}
                            required >

                            <option>Select Category</option>
                            <option value="Chili Powder">Chili Powder</option>
                            <option value="Turmeric Powder">Turmeric Powder</option>
                            <option value="Dhaniya Jeera powder">Dhaniya Jeera powder</option>
                            <option value="Dhaniya Powder">Dhaniya Powder</option>
                            <option value="Jeera Powder">Jeera Powder</option>
                        </select>
                    </div> */}
                    
                    {/* <div className="form-group">
                        <label className="form-label"><strong>Post Date</strong> <span>*</span></label>
                        <input type="date" className="form-control" placeholder="Post Date"
                        onChange={(e) => {
                            handleData('postDate', e.target.value)
                        }}
                        value={data?.postDate}
                        required />
                    </div> */}
                    
                    { error && <p className="error">{error}</p> }
                    <div className="d-flex two-by-two">
                    {!isDone &&
                        <button 
                            type="submit" 
                            disabled={isLoading || isDone}
                            className="btn d-block">
                            {isLoading ? "Loading..." : data?.productURL ? "Update" : "Create"}
                        </button>
                    }             
                    { updatePostsId && !isDone &&
                        <button 
                            onClick={(e) =>{
                                e.preventDefault();
                                // TODO delete
                                handleDelete(updatePostsId);
                            }}
                            disabled={isLoading || isDone}
                            className="btn d-block">
                            {isLoading ? "Loading..." : "Delete"}
                        </button>
                    }
                    </div>
                    {isDone && <p className="isDone">Successfully {updatePostsId ? "Update" : "Created"} !</p>}
                </form>
            </div>
            {/* <div className="category-sample">
                <img src="/blog-layout.webp" className="w-100" alt="blog detail"/>
            </div> */}
        </div>
    </main>
}

function SelectCateoryField(){
    const {
        data,
        handleData,
    } = usePostsForm();
    const { data: categories} = useCategoriesBlog();
    return <div className="form-group">
        <label className="form-label"><strong>Product Category</strong><span>*</span></label>
        <select className="form-control form-select" name="categoryId" id="categoryId" required
        value={data?.categoryId}
        onChange={(e) =>{
            handleData('categoryId', e.target.value);
        }}
        >
            <option value="">Select Category</option>
            {categories && categories?.map((item, key) => {
                return <option value={item?.id} key={key}>{item?.name}</option>
            })}

        </select>
    </div>
    
} 

function SelectAuthorField(){
    const {
        data,
        handleData,
    } = usePostsForm();
    const { data: authors} = useAuthors();
    return <div className="form-group">
        <label className="form-label">Author Category<span>*</span></label>
        <select className="form-control form-select" name="authorsId" id="authorsId" required
        value={data?.authorsId}
        onChange={(e) =>{
            handleData('authorsId', e.target.value)
        }}
        >
            <option value="">Select Author</option>
            {authors && authors?.map((item, key) => {
                return <option value={item?.id} key={key}>{item?.name}</option>
            })}

        </select>
    </div>
    
} 
