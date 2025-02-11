//'use client';
 
import { getAllPostsWithCategory } from "@/app/lib/firebase/postInter/read_server";
import { getAllCategories } from "@/app/lib/firebase/categoryInter/read_server";
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
                    <Link href={'/backend/admin/postsInter/form'}>
                        <button className="btn position-relative">Add New Product</button>
                    </Link>
                    <Link href={'/backend/admin/postsInter/form2'} className="ms-2">
                        <button className="btn position-relative">Add New Small Product</button>
                    </Link>
                </div>
            </div> 
          <div>
          <table className="table">
            <thead>
            <tr>
                <th>Sr.</th>
                <th>Product</th>
                <th>Product Title</th>
                <th>Slug(URL)</th>
                <th>Category</th>
                <th>Slogan</th>
                <th className="icon-th">Icons</th>
                <th className="packaging">Packaging</th>
                <th className="ingredients">Ingredients</th>
                <th className="expiry">Expiry</th>
                <th className="last-title-and-description">Last Title</th>
                <th className="pro-link">Link</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
            posts?.map((item, key) => {
                return  <>{(!item?.content4) && <tr key={item.name}>
                    <td>{key + 1}</td>
                    <td>
                        <div className="product-imgs"><img src={item?.productURL} width="300" height="300" alt={item?.name}/></div>
                        <div className="w-100 timestamp-div">
                            <p>Created Date</p>
                            <p>{item?.timestamp.toDate().toLocaleDateString('en-US', {day:'2-digit', month:'2-digit', year:'numeric'})}</p>
                            <p>{item?.timestamp.toDate().toLocaleTimeString('en-US', {hour:'2-digit',minute:'2-digit'})}</p>
                        </div>
                    </td>
                    <td>{item?.name}</td>
                    <td>{item?.slug}</td>
                    <td className="catename-slug">
                        {matchCateName?.map((cateName, key) => {
                            return <>{(cateName?.id == item?.categoryId) && <p key={key}><span>Name:</span><strong>{cateName?.name}</strong></p>}</>
                        })}
                        <p><span>id:</span>{item?.categoryId}</p>
                    </td>
                    <td><div className="slogan-wrap"><h5>{item?.slogan1}</h5><h5>{item?.slogan2}</h5> {item?.content && <div dangerouslySetInnerHTML={{__html: item?.content}} className="font10"></div>}</div></td>
                    <td className="icon-th">
                        {(item?.redIconOneURL?.length || item?.redIconTwoURL?.length || item?.redIconThreeURL?.length || item?.redIconFourURL?.length) &&
                        <div className="icon-wrap">
                            {item?.redIconOneURL?.length && <div className="icon-th"><img src={item?.redIconOneURL} width="50" height="50" alt=""/><p>{item?.redIconOneText}</p></div>}
                            {item?.redIconTwoURL?.length && <div className="icon-th"><img src={item?.redIconTwoURL} width="50" height="50" alt=""/><p>{item?.redIconTwoText}</p></div>}
                            {item?.redIconThreeURL?.length && <div className="icon-th"><img src={item?.redIconThreeURL} width="50" height="50" alt=""/><p>{item?.redIconThreeText}</p></div>}
                            {item?.redIconFourURL?.length && <div className="icon-th"><img src={item?.redIconFourURL} width="50" height="50" alt=""/><p>{item?.redIconFourText}</p></div>}
                        </div>
                        }
                    </td>
                    <td className="packaging">
                        {(item?.pouch?.length || item?.box?.length || item?.jar?.length || item?.smallJar?.length || item?.container?.length) &&
                        <div className="packaging-wrap">
                            <div className="packaging-row">
                                {item?.pouch && item?.pouch.length > 0 && item?.pouch.map((imgSrc,index) => {
                                    const title = hyphenToSpace(imgSrc?.split('.')[0]) || 'pounch ' + index;
                                return <div className="packaging-card" key={imgSrc}><div className="sku-icon"><img src={`/images/sku/${imgSrc}`} alt={title}/></div><h4>{title}</h4></div>
                                })}
                            </div>
                            <div className="packaging-row">
                                {item?.box && item?.box.length > 0 && item?.box.map((imgSrc,index) => {
                                    const title = hyphenToSpace(imgSrc?.split('.')[0]) || 'pounch ' + index;
                                return <div className="packaging-card" key={imgSrc}><div className="sku-icon"><img src={`/images/sku/${imgSrc}`} alt={title}/></div><h4>{title}</h4></div>
                                })}
                            </div>
                            <div className="packaging-row">
                                {item?.jar && item?.jar.length > 0 && item?.jar.map((imgSrc,index) => {
                                    const title = hyphenToSpace(imgSrc?.split('.')[0]) || 'pounch ' + index;
                                return <div className="packaging-card" key={imgSrc}><div className="sku-icon"><img src={`/images/sku/${imgSrc}`} alt={title}/></div><h4>{title}</h4></div>
                                })}
                            </div>
                            <div className="packaging-row">
                                {item?.smallJar && item?.smallJar.length > 0 && item?.smallJar.map((imgSrc,index) => {
                                    const title = hyphenToSpace(imgSrc?.split('.')[0]) || 'pounch ' + index;
                                return <div className="packaging-card" key={imgSrc}><div className="sku-icon"><img src={`/images/sku/${imgSrc}`} alt={title}/></div><h4>{title}</h4></div>
                                })}
                            </div>
                            
                            <div className="packaging-row packaging-container">
                                {item?.pallet && item?.pallet.length > 0 && item?.pallet.map((imgSrc,index) => {
                                    const title = hyphenToSpace(imgSrc?.split('.')[0]) || 'pounch ' + index;
                                return <div className="packaging-card pallet-card" key={imgSrc}><div className="sku-icon"><img src={`/images/sku/${imgSrc}`} alt={title}/></div><h4>{title}</h4></div>
                                })}
                                {item?.container && item?.container.length > 0 && item?.container.map((imgSrc,index) => {
                                    const title = hyphenToSpace(imgSrc?.split('.')[0]) || 'pounch ' + index;
                                return <div className="packaging-card" key={imgSrc}><div className="sku-icon"><img src={`/images/sku/${imgSrc}`} alt={title}/></div><h4>{title}</h4></div>
                                })}
                            </div>
                        </div>
                        }
                    </td>
                    <td className="ingredients">
                        {item?.content2 && <div dangerouslySetInnerHTML={{__html: item?.content2}} className="font10"></div>}
                    </td>
                    <td className="expiry">
                    {item?.expiry && <h5>{item?.expiry} Months</h5>}
                    </td>
                    <td className="last-title-and-description"><div className="last-title-width">
                        <h5 className="btmToTp">{item?.SpiceItUpTitle}</h5>
                        {item?.content3 && <div dangerouslySetInnerHTML={{__html: item?.content3}} className="font10"></div>}</div>
                    </td>
                    
                    {item?.content4 && <td><div dangerouslySetInnerHTML={{__html: item?.content4}} className="listing-ul"></div></td> }
                    <th className="pro-link">
                        {item?.buyNow && <Link href={item?.buyNow} target="_blank">buy now</Link>}
                    </th>
                    <td>
                        <Link href={`/backend/admin/postsInter/form?id=${item?.id}`} className="btn">EDIT</Link>
                        {/* {!item?.content4 && <Link href={`/backend/admin/postsInter/form?id=${item?.id}`} className="btn">EDIT</Link>}
                        {item?.content4 && <Link href={`/backend/admin/postsInter/form2?id=${item?.id}`} className="btn">EDIT</Link>} */}
                    </td>
            </tr>}
            {(item?.content4) && <tr key={item.name+key + 1}> 
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
                    <td>{item?.slug}</td>
                    <td className="catename-slug">
                        {matchCateName?.map((cateName, key) => {
                            return <>{(cateName?.id == item?.categoryId) && <p key={key}><span>Name:</span><strong>{cateName?.name}</strong></p>}</>
                        })}
                        <p><span>id:</span>{item?.categoryId}</p>
                    </td>
                    <td colSpan={'6'}>
                        {item?.content4 && <div dangerouslySetInnerHTML={{__html: item?.content4}} className="whole-spices-ul"></div>}
                    </td>
                    <th className="pro-link">
                        {item?.buyNow && <Link href={item?.buyNow} target="_blank">buy now</Link>}
                    </th>
                    <td><Link href={`/backend/admin/postsInter/form2?id=${item?.id}`} className="btn">EDIT</Link></td>
            </tr>}</> 
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