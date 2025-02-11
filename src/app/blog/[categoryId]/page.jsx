//import { getAllPostsWithCategory } from "@/app/lib/firebase/post/read_server";
import { PostCardBlog } from "@/app/components/PostListViewBlog";
import { getAllPostsWithCategory } from "@/app/lib/firebase/postBlog/read_server";
import { getAllCategories } from "@/app/lib/firebase/categoryBlog/read_server";
import BlogBanner from "../components/blog-banner";
import LetsConnect from "../components/letsconnect";
//import { hyphenToSpace } from "@/utils/transformName";
//import { useRouter } from 'next/navigation';
import Link from "next/link";
import Script from 'next/script';
import Sidebar from "../@sidebar/page";


 
export default async function generateStaticParams({ params }) {
  const { categoryId } = params;
  const scrollToSection = (id) => {
	const element = document.getElementById(id)
	element?.scrollIntoView({ behavior: "smooth"});
 };
   
  //console.log(params.name);
  //alert('click on link: ');
  //const { categoryName } = params.name;
  const posts = await getAllPostsWithCategory(categoryId);
  const matchCateName = await getAllCategories();
  //console.log(categoryId + '  hi')
   //const spaceToHyphen = (str) => str.replace(/\s+/g, '-');
  return <>
  <BlogBanner></BlogBanner>
<section className="section blog-page cust-pad-left-right" id="section1">
			<div className="container-fluid">
        <div className="row">
            {matchCateName?.map((cateName, key) => {
              return <div key={key} className="col-lg-8 col-md-8 col-sm-8 blog-title">
                {(cateName?.id == categoryId) && <h1>{cateName?.name}</h1>}
              </div>
            })}
        </div>    
        <div className="row blog-spacing">
            <div className="col-lg-8 col-md-8 col-sm-8">
            <div className="row"> 
              {posts?.map((post, key) => {
                  return <PostCardBlog post={post} key={key} />
              })}
              </div> 
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4"><Sidebar></Sidebar></div>
        </div>
			</div>
		</section>
    <LetsConnect></LetsConnect>
    {/* <section className="domestic-international position-relative">			
			<div className="container-fluid position-relative" ref={letsConnectRef}>
				<div className="lets-connect position-absolute">
					<div className="satvam-circle"><h1><span>Let's</span>Connect.</h1></div>
				</div>
				<div className="row">
					<ModelComponent></ModelComponent>
				</div>
			</div>	
		</section> */}
    </>
}

{/* return(
  <section className="section margin-top120">
      <div className="container">         
          <div className="row">
              <div className="col-12 page-title">
              <h1 className="text-center">{}Ground Spices</h1>
              </div>
          </div>
          <div className="row">
              <div className="col-12 product-section">
              <div className="row">{posts?.map((post, key) => {
                    return <PostCard post={post} key={key} />
                  })} 
              </div>
          </div>
      </div>
  </section>
  
) */}