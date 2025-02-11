"use client";
import Link from "next/link";
import CategoriesAboutListView from '@/app/backend/admin/categoriesAbout/components/CategoriesAboutListView';
import { useCategoriesAbout } from "@/app/lib/firebase/categoryAbout/read";
export default function Page(){
    const { data, error, isLoading } = useCategoriesAbout();
    if (isLoading){
        return <p className="loading">Loading...</p>
    }
    if (error){
        return <p className="loading error">error...</p>
    }
    if (!data){
        return <p className="loading error">Data not found!</p>
    }
    console.log(data.id);
    return <main className="categories-page">
        <div className="d-flex w-100 justify-content-between add-categories align-items-center">
            <h3>Corporate Video & Apply Now</h3>
{
    (!data[0]?.id || !data[1]?.id) && <Link href={'/backend/admin/categoriesAbout/form'}><button className="btn position-relative">Add</button></Link>
}
            {/* <Link href={'/backend/admin/categoriesAbout/form'}>
                <button className="btn position-relative">Add</button>
            </Link> */}
        </div>
        <section>
            <CategoriesAboutListView></CategoriesAboutListView>
        </section>
    </main>
}