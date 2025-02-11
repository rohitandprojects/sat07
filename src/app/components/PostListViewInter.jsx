import Link from "next/link";
/*import { getAuthors } from "../lib/firebase/author/read_server";*/
import ExportedImage from "next-image-export-optimizer";
/*import { getCategoryInter } from "../lib/firebase/categoryInter/read_server";*/
/*import { getAllPosts } from "../lib/firebase/postInter/read_server";
import Image from "next/image";

export default async function PostsListViewInter(){
    const posts = await getAllPosts();
    if (!posts) {
        return <div>
            <h3>Product Not Available</h3>
        </div>
    }
    return <section><div className="row">
        {posts?.map((post, key) =>{
            return <PostCardInter post={post} key={key} />
        })}
    </div></section>
}*/

export function PostCardInter({ post }) {
    return <> {(!post?.content4) && <div className="col-lg-4 col-md-4 col-sm-4 product-list-col">
    <Link href={`/product/international-detail/${post?.id}`} className="product-list">
        <div className="product-img-holder position-relative"><div className="product-holder position-relative"><ExportedImage src={post?.productURL} width={300} height={300} alt={post?.name}/></div></div>
        <div className="product-title">{post?.name} <span></span></div>
    </Link>
</div>}{post?.content4 && <div className="row m-0 international-product-detail2"><div className="col-lg-7 col-md-7 col-sm-7 whole-spices-col">
     <div className="whole-spices-img-holder">
       <ExportedImage src={post?.productURL} className="w-100 h-auto" width={975} height={668} alt={post?.name}/>
       {/* <img src="/images/whole-spices.webp" width="975" height="668" className="w-100 h-auto" alt="Whole Spices"/> */}
     </div>
   </div>
   <div className="col-lg-5 col-md-5 col-sm-5">
     {post?.content4 && <div dangerouslySetInnerHTML={{__html: post?.content4}} className="whole-spices-ul btmToTp2"></div>}
     {/* <ul className="whole-spices-ul row">
       <li>Chilli</li><li>Ajwain seeds</li>
       <li>Turmeric</li><li>Dry red chilli whole</li>
       <li>Cumin</li><li>Garam masala whole</li>
       <li>Black cumin spices</li><li>Black cardamon</li>
       <li>Coriander seeds</li> <li>Char magaz</li>
       <li>Cumin seeds</li><li>Quinoa seeds</li>
       <li>Fennel seeds</li><li>Nutmeg seeds</li>
       <li>Black pepper whole</li><li>Cinnamon stick flat</li>
       <li>Kalonji</li><li>Clove</li>
       <li>Star anise</li><li>Brown flax seeds</li>
       <li>Mace</li><li>Black mustard small</li>
       <li>Dill seeds</li><li>Sesame seeds white</li>
       <li>Fenugreek seeds</li><li>Sesame seeds black</li>
     </ul> */}
   </div></div>
    }
    </>
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
        <img src={category?.iconURL} height={50} width={50} alt=""/>
        <h4>{category?.name}</h4>
    </div>
}
<CategoryCard categoryId={post?.categoryId} />*/