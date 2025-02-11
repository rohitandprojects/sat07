import React, { useEffect, useState } from 'react'
import { db } from "@/app/lib/firebase";
import { collection, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
//import { getAllPosts } from "@/app/lib/firebase/postInter/read_server";
import { useRouter } from 'next/navigation';

const Search2 = () => {
    const routers = useRouter();

    const [data, setData] = useState([]); // useState to store the data
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      //if (!inputValue) return;
      setLoading(true);
  
      try {
        // Fetch data from Firebase Firestore
        const querySnapshot = await getDocs(collection(db, 'postsInter'));
        const fetchedData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setData(fetchedData); // Update the state with fetched data
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
        //routers.push(`/`);
      }
    };
  return (
    <div>
        {/* <form onSubmit={handelSearchSubmit}>
            <input type='text'
            onChange={(e) => setSearch(e.target.value)}
             value={search}/> <button>Search</button>
        </form> */}
         <form onSubmit={handleSubmit}>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>
      </form>
      <div>
        {data.length > 0 ? (
          <ul>
            {data.map(item => (
              <li key={item.id}>
                {JSON.stringify(item)}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  )
}

export default Search2