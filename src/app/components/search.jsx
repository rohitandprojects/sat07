import React, { useEffect, useState } from 'react'
import { db } from "@/app/lib/firebase";
import { collection, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
//import { getAllPosts } from "@/app/lib/firebase/postInter/read_server";
//import { useRouter } from 'next/navigation';
import Link from "next/link";

const Search = () => {
    //onst routers = useRouter();
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]); // useState to store the data
    const [dataInter, setDataInter] = useState([]); // useState to store the data
    const [dataBlog, setDataBlog] = useState([]); // useState to store the data
    const [loading, setLoading] = useState(false);
    const normalizeString = (str) => {
      return str.replace(/\s+/g, ' ').trim().toLowerCase(); // Replaces multiple spaces with a single space
    };
    const filteredItems = data.filter(item =>
      item?.name.toLowerCase().includes(normalizeString(inputValue.toLowerCase()))
    );
    const filteredInterItems = dataInter.filter(item =>
      item?.name.toLowerCase().includes(normalizeString(inputValue.toLowerCase()))
    );
    const filteredBlogItems = dataBlog.filter(item =>
      item?.name.toLowerCase().includes(normalizeString(inputValue.toLowerCase()))
    );

    const handleSubmit = async (e) => {
      //if (!inputValue) return;
      e.preventDefault();
      if(inputValue.trim() !== '') {
        //console.log('inputValue: '+inputValue);       
        e.preventDefault(); 
        setLoading(true);  
        try {          
          // Fetch data from Firebase Firestore
          const querySnapshot1 = await getDocs(collection(db, 'posts'));
          const fetchedData1 = querySnapshot1.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          // Fetch data from Firebase Firestore
          const querySnapshot2 = await getDocs(collection(db, 'postsInter'));
          const fetchedData2 = querySnapshot2.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          // Fetch data from Firebase Firestore
          const querySnapshot3 = await getDocs(collection(db, 'postsBlog'));
          const fetchedData3 = querySnapshot3.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          if(fetchedData1.length > 0){
            setData(fetchedData1); // Update the state with fetched data
            //console.log('data.length 1: '+ fetchedData1.length);
          }
          if(fetchedData2.length > 0){
            setDataInter(fetchedData2);
            //console.log('data.length 2: '+ fetchedData2.length);
          }
          if(fetchedData3.length > 0){
            setDataBlog(fetchedData3);
            console.log('fetchedData3: '+ fetchedData3.length);
            //console.log('data.length 2: '+ fetchedData2.length);
          }
        } catch (error) {
          //console.error('Error fetching data: ', error);
        } finally {
          setLoading(false);
          //routers.push(`/`);
        }
       
    }
        //console.log('data.length: '+ data.length + ' dataInter:' + dataBlog);
       
        
    };
  return (
    <>
        <div className="search-sub position-absolute">
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setInputValue(e.target.value)}
             value={inputValue} className="form-control" placeholder="Search for product in the Satvam World." />
            <button type="submit" disabled={loading} className={`search-btn position-absolute  ${loading ? 'disabled' : ''}`}><img src="/images/search.svg" width={37} height={37} className="w-100 d-block h-auto" alt="search" /><span className="position-absolute"><img src="/images/search.svg" width={37} height={37} className="w-100 d-block h-auto" alt="search" /></span></button>
            {loading && <div className="search-loading w-100 text-center"><span className="position-absolute">... loading ...</span></div>}
          </form>
        </div>
         {/* <form onSubmit={handleSubmit}>
          
         <input type='text'
            onChange={(e) => setInputValue(e.target.value)}
             value={inputValue}/>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>
      </form> */}
        <div className='search-result position-absolute' data-lenis-prevent>
          <div className='search-result-sub overflow-auto cust-pad-left-right' data-lenis-prevent>
          <div className='search-product-row'>
            {data.length > 0 ? (
              <div>
                <h3>Domestic Products</h3>
                <ul>
                  {
                    inputValue.trim() !== ''
                      ? (
                        // Code to render when inputValue is not empty
                        filteredItems.length > 0 ? (
                          filteredItems.map((item, index) => (
                            <li key={index}>
                              <Link href={`/product/domestic-detail/${item?.id}`} target="_blank" className="view-job-offers-link position-relative">{item?.name}</Link>
                            </li>
                          ))
                        ) : (
                          <li className='no-product'>No product available with this "<strong>{inputValue}</strong>" name</li>
                        )
                      )
                      : (
                        // Code to render when inputValue is empty
                        <li className='no-product'>No product available</li>
                      )
                  }
                    {/* { (inputValue.trim() !== '') && data.map((item, index) => {
                        return item?.name.toLowerCase().includes(normalizeString(inputValue.toLowerCase())) ? (
                            <li key={index} style={{border:'1px solid green'}}>{item?.name}</li>
                        ) : null;
                    })}                                                                 */}
                </ul>
              </div>             
              ) : (
                <ul><li className='no-product'> </li></ul>
            )}
            {/* <p>---------------------------------------------</p>
            <ul>
              {data.map(item => (
              <li key={item.id} style={{border:'1px solid green'}}>
                  {JSON.stringify(item)}
              </li>
              ))}
            </ul> */}
            {/* {(!inputValue == ' ') && dataInter.map((item, index) => {
                    return item?.name.toLowerCase().includes(inputValue.toLowerCase()) ? (
                        <li key={index} style={{border:'1px solid green'}}>{item?.name}</li>
                    ) : null; 
            })} */}
          </div>
          <div className='search-product-row'>
            {dataInter.length > 0 ? (
              <div>
                <h3>International Products</h3>
                <ul>
                  {
                    inputValue.trim() !== ''
                      ? (
                        // Code to render when inputValue is not empty
                        filteredInterItems.length > 0 ? (
                          filteredInterItems.map((item, index) => (
                            <li key={index}><Link href={`/product/international-detail/${item?.id}`} target="_blank" className="view-job-offers-link position-relative">{item?.name}</Link></li>
                          ))
                        ) : (
                          <li className='no-product'>No product available with this "<strong>{inputValue}</strong>" name</li>
                        )
                      )
                      : (
                        // Code to render when inputValue is empty
                        <li className='no-product'>No product available</li>
                      )
                  }
                    {/* { (inputValue.trim() !== '') && dataInter.map((item, index) => {
                        return item?.name.toLowerCase().includes(normalizeString(inputValue.toLowerCase())) ? (
                            <li key={index} style={{border:'1px solid green'}}>{item?.name}</li>
                        ) : null;
                    })}*/}
                </ul>
              </div>             
              ) : (
                <ul><li className='no-product'> </li></ul>
            )}
          </div>
          <div className='search-product-row search-blog-row'>
            {dataBlog.length > 0 ? (
              <div>
                <h3>Blog Posts</h3>
                <ul>
                  {
                    inputValue.trim() !== ''
                      ? (
                        // Code to render when inputValue is not empty
                        filteredBlogItems.length > 0 ? (
                          filteredBlogItems.map((item, index) => (
                            <li key={index}><Link href={`/blog/${item?.categoryId}/${item?.id}`} target="_blank" className="view-job-offers-link position-relative">{item?.name}</Link></li>
                          ))
                        ) : (
                          <li className='no-product'>No post available with this "<strong>{inputValue}</strong>" name</li>
                        )
                      )
                      : (
                        // Code to render when inputValue is empty
                        <li className='no-product'>No post available</li>
                      )
                  }
                    {/* { (inputValue.trim() !== '') && dataInter.map((item, index) => {
                        return item?.name.toLowerCase().includes(normalizeString(inputValue.toLowerCase())) ? (
                            <li key={index} style={{border:'1px solid green'}}>{item?.name}</li>
                        ) : null;
                    })}*/}
                </ul>
              </div>             
              ) : (
                <ul><li className='no-product'> </li></ul>
            )}
          </div>
      </div>
      </div>
    </>
  )
}

export default Search