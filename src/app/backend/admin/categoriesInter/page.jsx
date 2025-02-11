import Link from "next/link";
import CategoriesInterListView from '@/app/backend/admin/categoriesInter/components/CategoriesInterListView';

export default function Page(){
    return <main className="categories-page">
        <div className="d-flex w-100 justify-content-between add-categories align-items-center">
            <h3>International Categories</h3>
            <Link href={'/backend/admin/categoriesInter/form'}>
                <button className="btn position-relative">Add</button>
            </Link>
        </div>
        <section>
            <CategoriesInterListView></CategoriesInterListView>
        </section>
    </main>
}