import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function HomeArticles() {

    const [items, setItems] = useState([])
    // const [sportsItems, setSportItems] = useState([])
    // const [busItems, setBusItems] = useState([])
    // const [techItems, setTechItems] = useState([])

    useEffect(() => {
        axios
        .get(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US,CA,IN&topic=world&sources=nytimes.com,theguardian.com&page_size=7`, {
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

        // axios
        // .get(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US,CA,IN&topic=sport&sources=nytimes.com,theguardian.com&page_size=1`, {
        //     headers: {
        //       'x-api-key': 'QPunDyFLCyvXkfiRFW_PCSasmCOCm1HORbLiC5t33ow'
        //     }
        //    })
        // .then((res)=>{
        //     setSportItems(res.data.articles)
        //     // console.log(res)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })

        // axios
        // .get(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US,CA,IN&topic=business&sources=nytimes.com,theguardian.com&page_size=1`, {
        //     headers: {
        //       'x-api-key': 'QPunDyFLCyvXkfiRFW_PCSasmCOCm1HORbLiC5t33ow'
        //     }
        //    })
        // .then((res)=>{
        //     setBusItems(res.data.articles)
        //     // console.log(res)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })

        // axios
        // .get(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US,CA,IN&topic=tech&sources=nytimes.com,theguardian.com&page_size=1`, {
        //     headers: {
        //       'x-api-key': 'QPunDyFLCyvXkfiRFW_PCSasmCOCm1HORbLiC5t33ow'
        //     }
        //    })
        // .then((res)=>{
        //     setTechItems(res.data.articles)
        //     // console.log(res)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
    }, [])

    return (
        <section id='home-articles' className='py-2'>
            <h2>Editor Picks</h2>
            <div className='articles-container'>
                <article className='card'>
                    {
                        items[0] ? (
                            <>
                                <img src={items[0].media} alt='Sports-0'></img>
                                <div>
                                    <Link to='/sportsNews'>
                                        <div className='category category-sports'>Sports</div>
                                    </Link>
                                    <h3>
                                        <a href={items[0].link} target='_blank' rel="noreferrer">{items[0].title}</a>
                                    </h3>
                                    <p>{items[0].summary.slice(0,100)}</p>
                                </div>
                            </>
                        ) : null
                    }
                </article>
                <article className='card'>
                    <Link to='/technologyNews'>
                        <div className='category category-tech'>Technology</div>
                    </Link>
                    {
                        items[1] ? (
                            <>
                                <h3>
                                    <a href={items[1].link} target='_blank' rel="noreferrer">{items[1].title}</a>
                                </h3>
                                <p>{items[1].summary.slice(0,100)}</p>
                            </>
                        ) : null
                    }
                </article>
                <article className='card'>
                    {
                        items[2] ? (
                            <>
                                <img src={items[2].media} alt='Business-1'></img>
                                <div>
                                    <Link to='/businessNews'>
                                        <div className='category category-business'>Business</div>
                                    </Link>
                                    <h3>
                                        <a href={items[2].link} target='_blank' rel="noreferrer">{items[2].title}</a>
                                    </h3>
                                    <p>{items[2].summary.slice(0,100)}</p>
                                </div>
                            </>
                        ) : null
                    }
                </article>
                <article className='card'>
                    {
                        items[3] ? (
                            <>
                                <Link to='/technologyNews'>
                                    <div className='category category-tech'>Technology</div>
                                </Link>
                                <h3>
                                    <a href={items[3].link} target='_blank' rel="noreferrer">{items[3].title}</a>
                                </h3>
                                <p>{items[3].summary.slice(0,100)}</p>
                                <img src={items[3].media} alt='Technology-2'></img>
                            </>
                        ) : null
                    }
                </article>
                <article className='card'>
                    {
                        items[4] ? (
                            <>
                                <img src={items[4].media} alt='Business-2'></img>
                                <div>
                                    <Link to='/businessNews'>
                                        <div className='category category-business'>Business</div>
                                    </Link>
                                    <h3>
                                        <a href={items[4].link} target='_blank' rel="noreferrer">{items[4].title}</a>
                                    </h3>
                                    <p>{items[4].summary.slice(0,100)}</p>
                                </div>
                            </>
                        ) : null
                    }

                </article>
                <article className='card bg-primary'>
                    <Link to='/sportsNews'>
                        <div className='category category-sports'>Sports</div>
                    </Link>
                    {
                        items[5] ? (
                            <>
                                <h3>
                                    <a href={items[5].link} target='_blank' rel="noreferrer">{items[5].title}</a>
                                </h3>
                                <p>{items[5].summary.slice(0,100)}</p>
                            </>
                        ) : null
                    }
                </article>
                <article className='card'>
                    {
                        items[6] ? (
                            <>
                                <div>
                                    <Link to='/entertainmentNews'>
                                        <div className='category category-ent'>entertainment</div>
                                    </Link>
                                    <h3>
                                        <a href={items[6].link} target='_blank' rel="noreferrer">{items[6].title}</a>
                                    </h3>
                                    <p>{items[6].summary.slice(0,100)}</p>
                                </div>
                                <img src={items[6].media} alt='Entertainment-1'></img>
                            </>
                        ) : null
                    }
                </article>
            </div>
        </section>
    )
}

export default HomeArticles
