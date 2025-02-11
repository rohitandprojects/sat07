import Link from "next/link";
/*import { getAuthors } from "../lib/firebase/author/read_server";*/
import ExportedImage from "next-image-export-optimizer";
/*import { getCategory } from "../lib/firebase/category/read_server";*/
// import { getAllPosts } from "../lib/firebase/post/read_server";

// export default async function PostsListView(){
//     const posts = await getAllPosts();
//     if (!posts) {
//         return <div>
//             <h3>Product Not Available</h3>
//         </div>
//     }
//     return <section><div className="row">
//         {posts?.map((post, key) =>{
//             return <PostCard post={post} key={key} />
//         })}
//     </div></section>
// }

export function PostCard({ post }) {
    return <div className="col-lg-4 col-md-4 col-sm-4 product-list-col">
        {/* <Link href={`/product/domestic/${post.categoryId}/${post?.id}`} className="product-list"> */}
        <Link href={`/product/domestic-detail/${post?.id}`} className="product-list">
            <div className="product-img-holder position-relative"><div className="product-holder position-relative"><ExportedImage src={post?.productURL} width={300} height={300} className="w-auto h-auto mw-100 mh-100" alt={post?.name}/></div>
                {/* <span className="cat-name position-absolute"></span> */}</div>
            <div className="product-title">{post?.name} <span></span></div>
            {/* <div><AuthorCard authorsId={post.authorsId} /></div>
            <div><CategoryCard categoriesId={post.categoryId} /></div> */}
        </Link>
    </div>
}
/*
export function domesticPostCard({ post }) {
    return <div className="col-lg-4 col-md-4 col-sm-4 product-list-col">
        <Link href={`/product/domestic/${post?.id}`} className="product-list">
            <div className="product-img-holder position-relative"><img src={post?.productURL} width="300" height="300" alt="Chilli Powder"/>
                <span className="cat-name position-absolute"></span></div>
            <div className="product-title">{post?.name} <span></span></div>
            <div><AuthorCard authorsId={post.authorsId} /></div>
            <div><CategoryCard categoriesId={post.categoriesId} /></div>
        </Link>
    </div>
}


async function AuthorCard({ authorsId }) {
    const author = await getAuthors(authorsId);
    return <div className="d-flex gap-2 align-items-center author">
        <img src={author?.photoURL} height={100} width={100} alt=""/>
        <h4>{author?.name}</h4>
    </div>
}

async function CategoryCard({ categoriesId }) {
    const category = await getCategory(categoriesId);
    return <div className="d-flex gap-2 align-items-center">
        <ExportedImage src={category?.iconURL} height={50} width={50} alt=""/>
        <h4>{category?.name}</h4>
    </div>
}*/
/*<CategoryCard categoryId={post?.categoryId} />*/