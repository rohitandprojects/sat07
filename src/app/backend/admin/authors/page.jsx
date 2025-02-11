import Link from "next/link";
import AuthorsListView from "./components/AuthorsListView";
 
//import CategoriesListView from '@/app/backend/admin/categories/components/CategoriesListView';

export default function Page(){
    return <main className="categories-page">
         
        <div className="d-flex w-100 justify-content-between add-categories align-items-center">
            <h3>Authors</h3>
            <Link href={'/backend/admin/authors/form'}>
                <button className="btn position-relative">Add</button>
            </Link>
        </div>
        <section>
            <AuthorsListView></AuthorsListView>
        </section>
    </main>
}