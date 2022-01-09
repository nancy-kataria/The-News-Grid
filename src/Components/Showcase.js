import React from "react";
import { Link } from "react-router-dom";
// import axios from 'axios'

function Showcase() {
  // const [items, setItems] = useState([])
  // useEffect(() => {
  //     axios
  //     .get(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US,CA,IN&topic=world&sources=nytimes.com,theguardian.com&page_size=1`, {
  //         headers: {
  //           'x-api-key': 'QPunDyFLCyvXkfiRFW_PCSasmCOCm1HORbLiC5t33ow'
  //         }
  //        })
  //     .then((res)=>{
  //         setItems(res.data.articles)
  //         // console.log(res)
  //     })
  //     .catch((err)=>{
  //         console.log(err)
  //     })
  // }, [])

  return (
    <header id="showcase">
      <div className="container">
        <div className="showcase-container">
          <div className="showcase-content">
            <Link to="/worldNews">
              <div className="category category-sports">World</div>
            </Link>
            <h1>Covid live news: official cases in Africa pass 10m; London hospital chief says 10% of staff unvaccinated</h1>
            <p>A security officer stands guard at the Olembe stadium in Yaounde, Cameroon, which is to host the opening ceremony of the Africa Cup of Nations...</p>
            <a
              href='https://www.theguardian.com/world/live/2022/jan/09/covid-live-news-coronavirus-uk-self-isolation-philippines-new-daily-case-record-latest-updates'
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Showcase;
