import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Showcase() {

    const [items, setItems] = useState([])
    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7fb8837d50d14a26b59aefa20c8d43fb')
            const items = await data.json();
            console.log(items);
            setItems(items.articles);
        }
        fetchItems()
    }, [])

    return (
        <header id='showcase'>
            <div className='container'>
                <div className='showcase-container'>
                    <div className='showcase-content'>
                        {
                            items[4] ? (
                                <>
                                    <Link to='/sportsNews'>
                                        <div className='category category-sports'>Sports</div>
                                    </Link>
                                    <h1>{items[4].title}</h1>
                                    <p>{items[4].content}</p>
                                    <a href={items[4].url} target='_blank' className='btn btn-primary' rel="noreferrer">Read More</a>
                                </>
                            ): null
                        }
                        </div>
                </div>
            </div>
        </header>
    )
}

export default Showcase
