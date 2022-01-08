import React, {useState, useEffect} from 'react'

function Sports() {
    
    const [items, setItems] = useState([])
    useEffect(()=>{
        const fetchItems = async() => {
            const data = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7fb8837d50d14a26b59aefa20c8d43fb')
            const items = await data.json();
            console.log(items);
            setItems(items.articles);
        }
        fetchItems()
    }, [])

    return (
        <div className='API-container'>
            <h1>Sports News</h1>
            {items.map(article => (
                <div className='box'>
                <img src={article.urlToImage} alt={`sports-${article.publishedAt}`} ></img>
                <div>
                <a href={article.url} target="_blank" rel="noreferrer">
                    <h3 key={article.publishedAt}>{article.title}</h3>
                </a>
                <p>{article.content}</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Sports