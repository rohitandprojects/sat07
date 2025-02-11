//"use client";
import { getPosts } from "@/app/lib/firebase/post/read_server";
import { hyphenToSpace } from "@/utils/transformName";
import Link from "next/link";
import Script from 'next/script';
import gsap from "gsap";
//import hidesidebar from "@/app/product/domestic/hideSidebar";

export default async function Page({ params }){
  //const hyphenToSpace = (str) => str.replace(/-/g, ' ');
  const { productId } = params;
  const post = await getPosts(productId);
  return <>
  <div className="learn-more-div position-fixed pf-left">     
    <Link className="view-job-offers-link position-relative" href={`/product/domestic/${post?.categoryId}`}>Back to {hyphenToSpace(post?.categoryId)}</Link>
    {/* <a href="domestic-product-range.html" class="view-job-offers-link position-relative">Back to Ground Spices</a> */}
  </div>
  {/* <hideSidebar></hideSidebar> */}
  <div className="learn-more-div position-fixed pf-right">
    {post?.buyNow && <Link className="view-job-offers-link position-relative" href={post?.buyNow} target="_blank">Buy Now</Link>}
  </div>
  <section className="section product-detail-banner">
    <div className="product-detail-title pageLoad">
      <h1 className="text-center" data-text={'detail'}>{post?.name}</h1>
    </div>
    <div className="product-large-img"><img src={post?.productURL} className="w-100" width="619" height="740" alt={post?.name}/></div>
    {/* <Link href={`/product/domestic/${post?.categoryId}`}>{post?.categoryId}</Link> */}
  </section>
  {(post?.slogan1 || post?.slogan2) &&
    <section className="section teekha-kamal">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="btmToTp">{post?.slogan1} <span>{post?.slogan2}</span></h2>
            {/* <h2 className="btmToTp">
            Teekha Kamal
            <span>Laal Bemisaal</span>
            </h2> */}
            {post?.content && <div dangerouslySetInnerHTML={{__html: post?.content}} className="dishes-memorable btmToTp"></div>}
            {/* <div dangerouslySetInnerHTML={{__html: post?.content}} className="dishes-memorable btmToTp"></div> */}          
            {/* <div className="dishes-memorable btmToTp"><p>Make your dishes
            memorable with the
            vibrant colour and
            spicy flavour of <strong>Satvam Chilli Powder</strong>.</p></div> */}
          </div>
        </div>
      </div>      
    </section>
    }
    {(post?.redIconOneURL || post?.redIconTwoURL || post?.redIconThreeURL || post?.redIconFourURL) &&
    <section className="section features">
      <div className="container">
        <div className="row">      
          <div className="col-12">
            <div className="row justify-content-center">
            {post?.redIconOneText && 
              <div className="col-lg-3 col-md-3 col-sm-3 teekha-col">
                <div className="teekha-card btmToTp">
                  <div className="teekha-icon">
                    <img src={post?.redIconOneURL} className="w-100 h-auto" width="619" height="740" alt={post?.redIconOneText}/>
                    {/* <img src="/images/icon-thermometere.svg" alt="Moderately Pungent"/> */}
                  </div>
                  <p>{post?.redIconOneText}</p>
                  {/* <p>Moderately<br/>Pungent</p> */}
                </div>
              </div>
              }
              {post?.redIconTwoText && 
              <div className="col-lg-3 col-md-3 col-sm-3 teekha-col">
                <div className="teekha-card btmToTp2">
                  <div className="teekha-icon">
                    <img src={post?.redIconTwoURL} className="w-100 h-auto" width="619" height="740" alt={post?.redIconTwoText}/>
                    {/* <img src="/images/icon-quality.svg" alt="Top-Quality"/> */}
                  </div>
                  <p>{post?.redIconTwoText}</p>
                  {/* <p>Made from Top-Quality<br/>Guntur Chillies</p> */}
                </div>
              </div>
              }
              {post?.redIconThreeText && 
              <div className="col-lg-3 col-md-3 col-sm-3 teekha-col">
                <div className="teekha-card btmToTp3">
                  <div className="teekha-icon">
                    <img src={post?.redIconThreeURL} className="w-100 h-auto" width="619" height="740" alt={post?.redIconThreeText}/>
                    {/* <img src="/images/icon-dark.svg" alt="Naturally Dark"/> */}
                  </div>
                  <p>{post?.redIconThreeText}</p>
                  {/* <p>Naturally Dark<br/> Red in Colour</p> */}
                </div>
              </div>
              }
              {post?.redIconFourText && 
              <div className="col-lg-3 col-md-3 col-sm-3 teekha-col">
                <div className="teekha-card btmToTp4">
                  <div className="teekha-icon">
                      <img src={post?.redIconFourURL} className="w-100 h-auto" width="619" height="740" alt={post?.redIconFourText}/>
                      {/* <img src="/images/icon-cryogenic.svg" alt="cryogenic"/> */}
                  </div>
                  <p>{post?.redIconFourText}</p>
                  {/* <p>Ground Using Cryogenic <br/> Technology</p> */}
                </div>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
    }
    {(post?.pouch?.length || post?.box?.length || post?.jar?.length || post?.container?.length) &&
    <section className="section sku" id="panels">
      <div id="panels-container" className="sku-section">
        <div className="container">
          <div className="row">
            <div className="col-12 btmToTp">
              <h2>SKU</h2>
              <ul className="sku-list">
                {/* <li className={post?.pouch.length > 0 ? 'active' : ''}>Pouch</li> */}
                <li className={post?.pouch && post?.pouch.length > 0 ? 'active' : ''}>Pouch</li>
                <li className={post?.box && post?.box.length > 0 ? 'active' : ''}>Box</li>                
                <li className={post?.jar && post?.jar.length > 0 ? 'active' : ''}>Jar</li>
                <li className={post?.container && post?.container.length > 0 ? 'active' : ''}>Container</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="container">
            <div className="cards-wrapper flex-wrap">
            </div>
        </div> */}
         
        <div className="panel-main sku-pouch btmToTp2">
          <article id="panel-2" className="panel gray">
            <div className="cards-wrapper">
              {post?.pouch && post?.pouch.length > 0 && post?.pouch.map((imgSrc,index) => {
                const title = hyphenToSpace(imgSrc?.split('.')[0]) || 'pounch ' + index;
               return <div className="sku-card" key={imgSrc}><div className="sku-icon"><img src={`/images/sku/${imgSrc}`} alt={title}/></div></div>
              })}
              {post?.box && post?.box.length > 0 && post?.box.map((imgSrc,index) => {
                const title = hyphenToSpace(imgSrc?.split('.')[0]) || 'box ' + index;
               return <div className="sku-card" key={imgSrc}><div className="sku-icon"><img src={`/images/sku/${imgSrc}`} alt={title}/></div></div>
              })}
              {post?.jar && post?.jar.length > 0 && post?.jar.map((imgSrc,index) => {
                const title = hyphenToSpace(imgSrc?.split('.')[0]) || 'jar ' + index;
               return <div className="sku-card" key={imgSrc}><div className="sku-icon"><img src={`/images/sku/${imgSrc}`} alt={title}/></div></div>
              })}
              {post?.container && post?.container.length > 0 && post?.container.map((imgSrc,index) => {
                const title = hyphenToSpace(imgSrc?.split('.')[0]) || 'container ' + index;
               return <div className="sku-card" key={imgSrc}><div className="sku-icon"><img src={`/images/sku/${imgSrc}`} alt={title}/></div></div>
              })}
            </div>
          </article>
        </div>
      </div>
    </section>}
    {post?.content2 &&
    <section className="section ingredients">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ingredients-watermark btmToTp">Ingredients</div>
              <h2 className="btmToTp2">These are my parts</h2>
              {post?.content2 && <div dangerouslySetInnerHTML={{__html: post?.content2}} className="btmToTp3 max-width815 ms-auto me-auto"></div>}
            </div>
        </div>
      </div>
    </section>
    }
    <section className="section standardize">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="w-100 justify-content-center align-items-center">
                <li><img src="/images/fssai.webp" width="187" height="107" alt="fssai" /></li>
                <li><img src="/images/ISO.webp" width="103" height="106" alt="ISO" /></li>
                <li><img src="/images/export-quality-product.webp" width="148" height="95" alt="export quality product" /></li>
                {/* <li><img src="/images/BRC-Food.webp" width="92" height="149" alt="BRC-Food"/></li>
                <li><img src="/images/FDA.webp" width="181" height="79" alt="FDA"/></li>
                <li><img src="/images/HALAL.webp" width="97" height="149" alt="HALAL"/></li> */}
						</ul>
              {/* <div className="btmToTp4 fssai-iso-export"><span className="p-0"><img src="/images/fssai-iso-export-1.svg" width="515" height="106" alt="fssai-iso-export"/></span></div> */}
          </div>
        </div>
      </div>
    </section>
    {post?.expiry &&
    <section className="section best-before">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ingredients-watermark btmToTp">Best Before</div>
            <h2 className="btmToTp2">{post?.expiry} Months</h2>
            <p className="btmToTp3">From the date of packaging</p>
          </div>
        </div>
      </div>
    </section>
    }
    <section className="section spice-it-up">
      <div className="container">
        <div className="row">
          <div className="col-12">
          <h1 className="btmToTp">{post?.SpiceItUpTitle}</h1>
          {post?.content3 && <div dangerouslySetInnerHTML={{__html: post?.content3}} className="max-width590 ms-auto me-auto btmToTp2"></div>}
            {/* <h1 className="btmToTp">Spice it Up</h1>
            <p className="btmToTp2">Enjoy an array of dishes ranging from<br/>
              chutney, gravy and sauces,<br/>
              that are irresistible with the authentic taste of chilli powder<br/>
              sourced from the best farms.</p> */}
          </div>
        </div>
      </div>
    </section>
    {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js" />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js" />
    <Script src="/js/panels.js" strategy="afterInteractive" /> */}
    {/* <section className="section product-detail-banner product-detail-banner-footer">
      <div className="product-detail-title">
        <h1 className="text-center">Turmeric<br/>Powder</h1>
      </div>
      <div className="product-large-img"><img src="/images/chilli 2.webp" className="w-100" width="619" height="740" alt="Chilli Powder"/></div>
    </section> */}
  {/* <main>
        <div className="row">
              <div className="col-12 page-title">
                <h1 className="text-center" data-text={'detail'}>
                {post?.name}
                </h1>
              </div>
          </div>
        <h2>Product : {post?.name}</h2>
        <p>slug: {post?.slug} || category Name: <Link href={`/product/domestic/${post?.categoryId}`}>{post?.categoryId}</Link> || page url: {productId}</p>
        <div><img src={post?.productURL} alt=""/> </div>
    </main> */}
</>}