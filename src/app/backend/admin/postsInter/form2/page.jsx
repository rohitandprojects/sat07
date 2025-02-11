"use client";

import { useEffect } from "react";
//import { useCategoryForm } from "./contexts/PostsFormContext";
import { useSearchParams } from "next/navigation";
import { usePostsForm } from "./contexts/PostsFormContext";
import { useCategoriesInter } from "@/app/lib/firebase/categoryInter/read";
import { useAuthors } from "@/app/lib/firebase/author/read";
import { spaceToHyphen } from "@/utils/transformName";
import { RTEField4 } from "./components/RTEField4";
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
                <div>International Product </div>
            </h3>
            <Link href={'/backend/admin/postsInter'}>
                <button className="btn position-relative">Back</button>
            </Link>
        </div>
        <div className="category-form-sample">
            <div className="category-form">
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
                    <div className="form-group">
                        <label className="form-label"><strong>Product Name</strong> <span>*</span></label>
                        <input type="text" className="form-control" placeholder="Product Name"
                        onChange={(e) => {
                            handleData('name', e.target.value)
                        }}
                        value={data?.name}
                        required />
                    </div>
                    <div className="form-group">
                        <label className="form-label"><strong>Product Path (Same as Product name)</strong> <span>*</span></label>
                        <input type="text" className="form-control" placeholder="Product Slug"
                        disabled={updatePostsId}
                        onChange={(e) => {
                            let slugName = (e.target.value).toLowerCase();
                             handleData('slug', spaceToHyphen(slugName));
                        }}
                        value={data?.id}
                        required />
                    </div>
                    <SelectCateoryField></SelectCateoryField>
                    <div className="form-group">
                        <label className="form-label"><strong>Product Image</strong> <span>*</span></label>
                        <div className="product-image-wrap">
                            <div className="product-image">
                                {data?.productURL && <div className="icon-img"><img src={data?.productURL} className="cat-img" alt="" /></div>}
                                {image && <div className="icon-new-img"><img src={URL.createObjectURL(image)} className="cat-img" alt="" /></div>}                        
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
                     
                    <div className="form-group">
                        <label className="form-label"><strong>Product Details...</strong><span>*</span></label>
                        <RTEField4></RTEField4>
                    </div>

                    <div className="form-group">
                        <label className="form-label"><strong>Buy Now Link</strong><span>*</span></label>
                        <input type="text" className="form-control" placeholder="Buy Now Link"
                        onChange={(e) => {
                            handleData('buyNow', e.target.value)
                        }}
                        value={data?.buyNow}
                         />
                    </div>
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
            <div className="category-sample">
                <img src="/international-detail-2.webp" className="w-100" alt="detail"/>
            </div>
        </div>
    </main>
}

function SelectCateoryField(){
    const {
        data,
        handleData,
    } = usePostsForm();
    const { data: categories} = useCategoriesInter();
    return <div className="form-group">
        <label className="form-label"><strong>Product Category</strong><span>*</span></label>
        <select className="form-control" name="categoryId" id="categoryId" required
        value={data?.categoryId}
        onChange={(e) =>{
            handleData('categoryId', e.target.value);
        }}
        >
            <option value="">Select Category</option>
            {categories && categories?.map((item, key) => {
                return <option value={spaceToHyphen(item?.id)} key={key}>{item?.name}</option>
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
        <select className="form-control" name="authorsId" id="authorsId" required
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
