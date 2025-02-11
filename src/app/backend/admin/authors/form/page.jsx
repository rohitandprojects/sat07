"use client";

import { useEffect } from "react";
//import { useCategoryForm } from "./contexts/AuthorsFormContext";
import { useSearchParams } from "next/navigation";
import { useAuthorsForm } from "./contexts/AuthorsFormContext";

export default function Page(){
    const searchParams = useSearchParams();
    const updateAuthorsId = searchParams.get('id');

    const {
        data,
        isLoading,
        error,
        isDone,
        handleData,
        handleCreate,
        handleUpdate,
        handleDelete,
        image, setImage,fetchData
    } = useAuthorsForm();

    useEffect(() => {
        if(updateAuthorsId){
            fetchData(updateAuthorsId)
        }
    }, [updateAuthorsId]);

    return <main className="w-100">
        <h3 className="category-form-title align-items-center">
            {updateAuthorsId && <span className="update-text">Update/Delete</span>}
            {!updateAuthorsId && <span className="creater-text">Create</span>}
            <div>Author Form </div>
        </h3> 
        
        <form className="category-form"
            onSubmit={(e) => {
                e.preventDefault();
                if(updateAuthorsId){
                    handleUpdate();
                } else {
                    handleCreate();
                }
            }}
        >
            <div className="form-group">
                <label className="form-label">Author Name <span>*</span></label>
                <input type="text" className="form-control" placeholder="Author Name"
                onChange={(e) => {
                    handleData('name', e.target.value)
                }}
                value={data?.name}
                required />
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="form-group">
                <label className="form-label">Author Email <span>*</span></label>
                <input type="email" className="form-control" placeholder="Author Email"
                onChange={(e) => {
                    handleData('email', e.target.value)
                }}
                value={data?.email}
                 required />
            </div>
            {data?.photoURL && <div><img src={data?.photoURL} className="cat-img" alt="" /></div>}
            {image && <div><img src={URL.createObjectURL(image)} className="cat-img" alt="" /></div>}
            <div className="form-group">
                <label className="form-label">Author Image  </label>
                <input type="file" accept="image/*" className="form-control" placeholder="Author Image"
                onChange={(e) => {
                    setImage(e.target.files[0]); 
                }}
                />
            </div>
            { error && <p className="error">{error}</p> }
            <div className="d-flex two-by-two">
            {!isDone &&
                <button 
                    type="submit" 
                    disabled={isLoading || isDone}
                    className="btn d-block">
                    {isLoading ? "Loading..." : data?.photoURL ? "Update" : "Create"}
                </button>
            }             
            { updateAuthorsId && !isDone &&
                <button 
                    onClick={(e) =>{
                        e.preventDefault();
                        // TODO delete
                        handleDelete(updateAuthorsId);
                    }}
                    disabled={isLoading || isDone}
                    className="btn d-block">
                    {isLoading ? "Loading..." : "Delete"}
                </button>
            }
            </div>
            {isDone && <p className="isDone">Successfully {updateAuthorsId ? "Update" : "Created"} !</p>}
        </form>
    </main>
}