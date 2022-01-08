import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function HomeArticles() {

    const [entItems, setEntItems] = useState([])
    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=7fb8837d50d14a26b59aefa20c8d43fb')
            const entItems = await data.json();
            setEntItems(entItems.articles);
        }
        fetchItems()
    }, [])

    const [sportsItems, setSportItems] = useState([])
    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7fb8837d50d14a26b59aefa20c8d43fb')
            const items = await data.json();
            console.log(items);
            setSportItems(items.articles);
        }
        fetchItems()
    }, [])

    const [busItems, setBusItems] = useState([])
    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7fb8837d50d14a26b59aefa20c8d43fb')
            const items = await data.json();
            console.log(items);
            setBusItems(items.articles);
        }
        fetchItems()
    }, [])

    const [techItems, setTechItems] = useState([])
    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7fb8837d50d14a26b59aefa20c8d43fb')
            const items = await data.json();
            console.log(items);
            setTechItems(items.articles);
        }
        fetchItems()
    }, [])

    return (
        <section id='home-articles' className='py-2'>
            <h2>Editor Picks</h2>
            <div className='articles-container'>
                <article className='card'>
                    {
                        sportsItems[3] ? (
                            <>
                                <img src={sportsItems[3].urlToImage} alt='Sports-1'></img>
                                <div>
                                    <Link to='/sportsNews'>
                                        <div className='category category-sports'>Sports</div>
                                    </Link>
                                    <h3>
                                        <a href={sportsItems[3].url} target='_blank' rel="noreferrer">{sportsItems[3].title}</a>
                                    </h3>
                                    <p>{sportsItems[3].content}</p>
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
                        techItems[3] ? (
                            <>
                                <h3>
                                    <a href={techItems[3].url} target='_blank' rel="noreferrer">{techItems[3].title}</a>
                                </h3>
                                <p>{techItems[3].content}</p>
                            </>
                        ) : null
                    }
                </article>
                <article className='card'>
                    {
                        busItems[5] ? (
                            <>
                                <img src={busItems[5].urlToImage} alt='Business-1'></img>
                                <div>
                                    <Link to='/businessNews'>
                                        <div className='category category-business'>Business</div>
                                    </Link>
                                    <h3>
                                        <a href={busItems[5].url} target='_blank' rel="noreferrer">{busItems[5].title}</a>
                                    </h3>
                                    <p>{busItems[5].content}</p>
                                </div>
                            </>
                        ) : null
                    }
                </article>
                <article className='card'>
                    {
                        techItems[6] ? (
                            <>
                                <Link to='/technologyNews'>
                                    <div className='category category-tech'>Technology</div>
                                </Link>
                                <h3>
                                    <a href={techItems[6].url} target='_blank' rel="noreferrer">{techItems[6].title}</a>
                                </h3>
                                <p>{techItems[6].content}</p>
                                <img src={techItems[6].urlToImage} alt='Technology-2'></img>
                            </>
                        ) : null
                    }
                </article>
                <article className='card'>
                    {
                        busItems[12] ? (
                            <>
                                <img src={busItems[12].urlToImage} alt='Business-2'></img>
                                <div>
                                    <Link to='/businessNews'>
                                        <div className='category category-business'>Business</div>
                                    </Link>
                                    <h3>
                                        <a href={busItems[12].url} target='_blank' rel="noreferrer">{busItems[12].title}</a>
                                    </h3>
                                    <p>{busItems[12].content}</p>
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
                        sportsItems[2] ? (
                            <>
                                <h3>
                                    <a href={sportsItems[2].url} target='_blank' rel="noreferrer">{sportsItems[2].title}</a>
                                </h3>
                                <p>{sportsItems[2].content}</p>
                            </>
                        ) : null
                    }
                </article>
                <article className='card'>
                    {
                        entItems[9] ? (
                            <>
                                <div>
                                    <Link to='/entertainmentNews'>
                                        <div className='category category-ent'>entertainment</div>
                                    </Link>
                                    <h3>
                                        <a href={entItems[9].url} target='_blank' rel="noreferrer">{entItems[9].title}</a>
                                    </h3>
                                    <p>{entItems[9].content}</p>
                                </div>
                                <img src={entItems[9].urlToImage} alt='Entertainment-1'></img>
                            </>
                        ) : null
                    }
                </article>
            </div>
        </section>
    )
}

export default HomeArticles
