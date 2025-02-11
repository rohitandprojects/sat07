import Link from "next/link";
//import PostsListView from "./components/PostsListView";
import PostsListView from "@/app/backend/admin/posts/components/PostsListView";
//import CategoriesListView from '@/app/backend/admin/categories/components/CategoriesListView';
/**/
import { getAllCategories } from "@/app/lib/firebase/category/read_server";

export default async function Page(){
    const matchCateName = await getAllCategories();
    return <div className="categories-page">         
        <div className="d-flex w-100 justify-content-between add-categories align-items-center">
            <h3>Domestic Products</h3>
            <Link href={'/backend/admin/posts/form'}>
                <button className="btn position-relative">Add New Product</button>
            </Link>
        </div>
        <PostsListView matchCateName={matchCateName}></PostsListView>
    </div>
}