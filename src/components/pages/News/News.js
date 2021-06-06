import { useEffect, useState } from 'react'
import { NewsContext } from '../../comp';
import {NotFound} from '..';
export default function News() {
    // const apiKey = '399670270042486fa7ad704b8edacfc9';
    // const [news, setnews] = useState(null);
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=399670270042486fa7ad704b8edacfc9');
    //         const data = await response.json();
         
    //         setnews(data);
    //     }
    //     fetchData();
    // }, []);
    
    return (
        // <div className="container">
        //     <div className="row">
        //         <NewsContext news={news} />
        //     </div>
        // </div>
        <NotFound/>
    );
}