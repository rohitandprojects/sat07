import Link from "next/link";
import CategoriesBlogListView from '@/app/backend/admin/categoriesBlog/components/CategoriesBlogListView';

export default function Page(){
    return <main className="categories-page">
        <div className="d-flex w-100 justify-content-between add-categories align-items-center">
            <h3>Blog Categories</h3>
            <Link href={'/backend/admin/categoriesBlog/form'}>
                <button className="btn position-relative">Add</button>
            </Link>
        </div>
        <section>
            <CategoriesBlogListView></CategoriesBlogListView>
        </section>
    </main>
}