import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Sports() {
    
    const [items, setItems] = useState([])
    useEffect(()=>{
        axios
        .get(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US,CA,IN&topic=sport&sources=nytimes.com,theguardian.com&page_size=15`, {
            headers: {
              'x-api-key': 'QPunDyFLCyvXkfiRFW_PCSasmCOCm1HORbLiC5t33ow'
            }
           })
        .then((res)=>{
            setItems(res.data.articles)
            // console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return (
        <div className='API-container'>
            <h1>Sports News</h1>
            {items.map(article => (
                <div className='box' key={Math.random()}>
                <img src={article.media} alt={`sports-${article.published_date}`} ></img>
                <div>
                <a href={article.link} target="_blank" rel="noreferrer">
                    <h3 key={article.published_date}>{article.title}</h3>
                </a>
                <p>{article.summary}</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Sports