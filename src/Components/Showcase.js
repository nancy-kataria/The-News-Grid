import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Showcase() {

    const [items, setItems] = useState([])
    useEffect(() => {
        axios
        .get(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US,CA,IN&topic=world&sources=nytimes.com,theguardian.com&page_size=1`, {
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
        <header id='showcase'>
            <div className='container'>
                <div className='showcase-container'>
                    <div className='showcase-content'>
                        {
                            items[0] ? (
                                <>
                                    <Link to='/worldNews'>
                                        <div className='category category-sports'>World</div>
                                    </Link>
                                    <h1>{items[0].title}</h1>
                                    <p>{items[0].summary.slice(0,150)}...</p>
                                    <a href={items[0].link} target='_blank' className='btn btn-primary' rel="noreferrer">Read More</a>
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
