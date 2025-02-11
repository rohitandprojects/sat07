//import PostsListView from "../components/PostListView";
/*import PostsListView from "@/app/components/PostListView";
export default function Home() {
    return(
        <section className="section margin-top120">
            <div className="container">         
                <div className="row">
                    <div className="col-12 page-title">
                    <h1 className="text-center">Ground Spices</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 product-section">
                        <div className="row">
                            <PostsListView></PostsListView>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}*/
"use client";
import { useCategories } from "@/app/lib/firebase/category/read";
import { redirect } from 'next/navigation'; 
export default function Page(){
    const { data, error, isLoading } = useCategories();
    if (data?.length){
        return redirect(`/product/domestic/${data[0]?.id}`)
    }
}