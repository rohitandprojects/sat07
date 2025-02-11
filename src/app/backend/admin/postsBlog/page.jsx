import Link from "next/link";
//import PostsListView from "./components/PostsListView";
import PostsListView from "@/app/backend/admin/postsBlog/components/PostsListView";
//import CategoriesListView from '@/app/backend/admin/categories/components/CategoriesListView';
import { getAllCategories } from "@/app/lib/firebase/categoryBlog/read_server";

export default async function Page(){
    const matchCateName = await getAllCategories();
    return <div className="categories-page">         
        <div className="d-flex w-100 justify-content-between add-categories align-items-center">
            <h3>Blog Posts</h3>
            <div>
                <Link href={'/backend/admin/postsBlog/form'}>
                    <button className="btn position-relative">Add New Blog Post</button>
                </Link>
            </div>
        </div>
        <PostsListView matchCateName={matchCateName}></PostsListView>
    </div>
}