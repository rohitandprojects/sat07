//import { getAllPostsWithCategory } from "@/app/lib/firebase/post/read_server";
/*'use client';*/
import { PostCard } from "@/app/components/PostListView";
import { getAllPostsWithCategory } from "@/app/lib/firebase/post/read_server";
import { getAllCategories } from "@/app/lib/firebase/category/read_server";
import ListingLoading from "../../listing-loading";
//import { hyphenToSpace } from "@/utils/transformName";
 
export default async function generateStaticParams({ params }) {  
  const { categoryId } = params;
  //console.log(categoryId + '  params');
  //alert('click on link: ');
  //const { categoryName } = params.name;
  const posts = await getAllPostsWithCategory(categoryId);
  const matchCateName = await getAllCategories();
  const total = matchCateName.length - 1;
  //console.log(categoryId + '  hi')
   //const spaceToHyphen = (str) => str.replace(/\s+/g, '-');
  return <section className="section margin-top120">
      <div className="container">
          <div className="row">
              {matchCateName?.map((posted, key) => {
                return <div key={key} className="col-12 page-title">
                  {(posted?.id == categoryId) && <h1 className="text-center">{posted?.name}</h1>}
                </div>
              })}
          </div>
          <div className="row">
              <div className="col-12 product-section">
                <div className="row">
                    {posts?.map((post, key) => {
                      return <PostCard post={post} key={key} />
                    })} 
                </div>
            </div>
          </div>
      </div>
      <div className="product-loader min-height100 text-center">
        <ListingLoading></ListingLoading>
        {matchCateName?.map((posted, key) => {
          return <div key={key} className="">
            {(posted?.id == categoryId) && <h2 className="text-center p-0">{matchCateName[key+1]?.name}</h2>}
            {(posted?.id == categoryId) && (key == total) && <h2 className="text-center p-0">{matchCateName[0]?.name}</h2>}
          </div>
        })}
      </div>
    </section>
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