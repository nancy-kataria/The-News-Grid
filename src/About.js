import React from 'react'

function About() {
    return (
        <section id='about'>
            <div className='container'>
                <div className='page-container'>
                    <article className='card'>
                        <h1 className='l-heading'>About Our Organization</h1>
                        <p>Instead of the traditional models of family-owned, corporate-funded and controlled
                            or advertising-driven newspapers, websites and TV channels, can we reimagine
                            the media as a joint venture in the public sphere between journalists, readers
                            and a concerned citizenry? One in which decisions over what to cover and how,
                            who to hire and where to send a correspondent or photographer, are taken by
                            editors on the basis of professional judgment, without worrying about what a
                            proprietor or politician, official or advertiser might think or want.</p>
                        <p>The comprehensive news portal covers all the latest developments on a real-time
                            basis in the fields of politics, sports, business, lifestyle, entertainment
                            and even local city issues, offering you a complete perspective of your world.
                            Analysis from expert and celebrity columnists give you unique insight into
                            developments, helping you stay a step ahead. The website and its social handles
                            also feature unique content – such as ‘Aur Batao’ a popular celebrity talk show</p>
                        <p>If good journalism is to survive and thrive, it can only do so by being both
                            editorially and financially independent. This means relying principally on
                            contributions from readers and concerned citizens who have no interest other
                            than to sustain a space for quality journalism.</p>
                        <p>As a publication, The News Wave will be firmly committed to the public interest and
                            democratic values. Apart from providing authoritative analysis and commentary,
                            the aim, as our resources grow, is to build ourselves as a platform driven by
                            good old-fashioned reporting on issues of national and international importance
                            and interest. Being on the web also means using new media technologies to change
                            the way stories are told. With data and interactive charts, video and audio as
                            integral parts of the narrative structure when warranted.</p>
                    </article>
                    <aside className='card bg-primary'>
                        <h2>Join Our Club</h2>
                        <p>It's free and only takes a minute.</p>
                        <button className='btn btn-dark btn-block'>Join Now</button>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default About