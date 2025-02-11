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
import { useCategoriesBlog } from "@/app/lib/firebase/categoryBlog/read";
import { redirect } from 'next/navigation'; 
import BlogBanner from "./components/blog-banner";
import LetsConnect from "./components/letsconnect";
export default function Page(){
    
    const { data, error, isLoading } = useCategoriesBlog();
    if(isLoading){
        return <div className='vw-100 vh-100 position-fixed top-0 start-0 d-flex align-items-center justify-content-center loading-text'><h3>...loading...</h3></div>
    }
    if (data?.length){
        return redirect(`/blog/${data[0]?.id}`)
    }
    if (!data?.length){
        return <><BlogBanner></BlogBanner><div className='cust-pad-left-right pt-5 pb-5'><div className="container-fluid"><h3>Post not found...</h3></div></div><LetsConnect></LetsConnect></>
    }
    
}