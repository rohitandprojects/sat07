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
import Link from 'next/link';
import { useState, useEffect } from "react";
import { PostCardBlog } from "@/app/components/PostListViewBlog";
import { getAllPosts } from "@/app/lib/firebase/postBlog/read_server";
//import { useCategoriesBlog } from "@/app/lib/firebase/categoryBlog/read";
//import { redirect } from 'next/navigation'; 
import BlogBanner from "./components/blog-banner";
import ExploreMore from './components/explore-more';
import Sidebar from './@sidebar/page';
import Loading from '../components/Loader';


export default function PostsListView() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            const result = await getAllPosts();
            setPosts(result);
            setLoading(false); // Set loading to false after data is fetched
        }
        fetchPosts();
    }, []);

    if (loading) {
        return <Loading></Loading>
    }

    if (!posts) {
        return <div>
            <BlogBanner></BlogBanner><div className='cust-pad-left-right pt-5 pb-5'><div className="container-fluid"><h3>Post not found...</h3></div></div><LetsConnect></LetsConnect>
        </div>
    }

    return (
        <section>
            <BlogBanner></BlogBanner>
            <section className="section blog-page cust-pad-left-right" id="section1">
			    <div className="container-fluid">
                    <div className="row">
                        {/* {matchCateName?.map((cateName, key) => {
                        return <div key={key} className="col-lg-8 col-md-8 col-sm-8 blog-title">
                            {(cateName?.id == categoryId) && <h1>{cateName?.name}</h1>}
                        </div>
                        })} */}
                        <div className="col-lg-8 col-md-8 col-sm-8 blog-title">
                            <h1>All Blog Posts</h1>
                        </div>
                    </div>    
                    <div className="row blog-spacing">
                        <div className="col-lg-4 col-md-4 col-sm-4"><Sidebar></Sidebar></div>
                        <div className="col-lg-8 col-md-8 col-sm-8">
                            <div className="row"> 
                            {posts?.map((post, key) => {
                                return <PostCardBlog post={post} key={key} />
                            })}
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
            <ExploreMore></ExploreMore>
        </section>
    );
}
export function PostCard({ post }) {
    return <div className="col-lg-4 col-md-4 col-sm-4 product-list-col">
        <Link href={`/product/${post?.id}`} className="product-list">
            <div className="product-img-holder position-relative"><img src={post?.productURL} width="300" height="300" alt={post?.name}/>
                <span className="cat-name position-absolute"></span></div>
            <div className="product-title">{post?.name} <span></span></div>
            {/* <div><AuthorCard authorsId={post.authorsId} /></div>
            <div><CategoryCard categoriesId={post.categoryId} /></div> */}
        </Link>
    </div>
}


// export default async function PostsListView(){
//     const posts = await getAllPosts();
//     if (!posts) {
//         return <div>
//             <h3>Post Not Available</h3>
//         </div>
//     }
//     return <section><div className="row">
//         {posts?.map((post, key) =>{
//             return <PostCard post={post} key={key} />
//         })}
//     </div></section>

// }


// export default function Page(){
    
//     const { data, error, isLoading } = useCategoriesBlog();
//     if(isLoading){
//         return <div className='vw-100 vh-100 position-fixed top-0 start-0 d-flex align-items-center justify-content-center loading-text'><h3>...loading...</h3></div>
//     }
//     if (data?.length){
//         return redirect(`/blog/${data[0]?.id}`)
//     }
//     if (!data?.length){
//         return <><BlogBanner></BlogBanner><div className='cust-pad-left-right pt-5 pb-5'><div className="container-fluid"><h3>Post not found...</h3></div></div><LetsConnect></LetsConnect></>
//     }
    
// }