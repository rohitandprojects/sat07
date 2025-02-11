import Link from "next/link";
import CategoriesListView from '@/app/backend/admin/advertisement/components/CategoriesListView';

export default function Page(){
    return <main className="categories-page">
        <div className="d-flex w-100 justify-content-between add-categories align-items-center">
            <h3>Advertisement</h3>
            <Link href={'/backend/admin/advertisement/form'}>
                <button className="btn position-relative">Add</button>
            </Link>
        </div>
        <section>
            <CategoriesListView></CategoriesListView>
        </section>
    </main>
}