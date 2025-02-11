//'use client';
 
import { getAllPostsWithCategory } from "@/app/lib/firebase/postBlog/read_server";
import { getAllCategories } from "@/app/lib/firebase/categoryBlog/read_server";
import { hyphenToSpace } from "@/utils/transformName";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export default async function generateStaticParams({ params }) {
  const { categoryId } = params;
  const posts = await getAllPostsWithCategory(categoryId);
  const matchCateName = await getAllCategories();

  return <div className="categories-page">
            <div className="d-flex w-100 justify-content-between add-categories align-items-center">
                <h3>
                    {matchCateName?.map((posted, key) => {
                        return <>{(posted?.id == categoryId) && <div key={key} data-key={key} className="admin-cate-title"><h1>{posted?.name}</h1></div>}</>
                    })}
                </h3>
                <div>
                    <Link href={'/backend/admin/postsBlog/form'}>
                        <button className="btn position-relative">Add New Post</button>
                    </Link>
                </div>
            </div> 
          <div>
          <table className="table admin-blog-post">
            <thead>
            <tr>
                <th>Sr.</th>
                <th>Product</th>
                <th>Product Title</th>
                <th>Slug(URL)</th>
                <th>Category</th>
                <th>Slogan</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
            posts?.map((item, key) => {
                return  <><tr key={item.name}>
                <td>{key + 1}</td>
                <td>
                    <div className="product-imgs"><img src={item?.productURL} width="300" height="300" alt={item?.name}/></div>
                    <div className="w-100 timestamp-div">
                        <p>Created Date</p>
                        <p>{item?.timestamp.toDate().toLocaleDateString('en-US', {day:'2-digit', month:'2-digit', year:'numeric'})}</p>
                        <p>{item?.timestamp.toDate().toLocaleTimeString('en-US', {hour:'2-digit',minute:'2-digit',second:'2-digit'})}</p>
                    </div>
                </td>
                <td>{item?.name}</td>
                <td className="text-break">{item?.slug}</td>
                <td className="catename-slug">
                    {matchCateName?.map((cateName, key) => {
                        return <>{(cateName?.id == item?.categoryId) && <p key={key}><span>Name:</span><strong>{cateName?.name}</strong></p>}</>
                    })}
                    <p><span>id:</span>{item?.categoryId}</p>
                </td>
                <td><div className="admin-blog-content">{item?.content && <div dangerouslySetInnerHTML={{__html: item?.content}} className="font10"></div>}</div></td>
                <td>
                    <Link href={`/backend/admin/postsBlog/form?id=${item?.id}`} className="btn">EDIT</Link>
                    {/* {!item?.content4 && <Link href={`/backend/admin/postsBlog/form?id=${item?.id}`} className="btn">EDIT</Link>}
                    {item?.content4 && <Link href={`/backend/admin/postsBlog/form2?id=${item?.id}`} className="btn">EDIT</Link>} */}
                </td>
        </tr>
            </> 
            })
        } 
        </tbody>
        </table>  
        </div>    
        {/* {posts?.map((post, key) => {
          return <div key={key}>
            
            <div className="product-img-holder position-relative"><div className="product-holder position-relative"><ExportedImage src={post?.productURL} width={300} height={300} alt={post?.name}/></div></div><div>{post?.name}</div>
            <Link href={`/backend/admin/posts/form?id=${post?.id}`} className="btn">EDIT</Link>
          </div>
        })} */}
  </div>
    
}