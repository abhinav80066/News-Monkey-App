import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles = [
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Myanmar charges US journalist with terrorism",
                "description": "Danny Fenster, already on trial, is now facing new charges which could lead to a life sentence.",
                "url": "http://www.bbc.co.uk/news/world-asia-59238866",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4CA5/production/_121512691_mediaitem121512687.jpg",
                "publishedAt": "2021-11-10T17:22:28.6947533Z",
                "content": "Image caption, Danny Fenster was detained at Yangon international airport in May\r\nMilitary-ruled Myanmar has charged an American journalist with sedition and terrorism, which carry a maximum sentence… [+2189 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Kyle Rittenhouse: Accused teen takes stand in his own defence",
                "description": "Kyle Rittenhouse, 18, broke down in tears as he told he court he shot three men in self-defence.",
                "url": "http://www.bbc.co.uk/news/world-us-canada-59239853",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5993/production/_121513922_gettyimages-1236479580.jpg",
                "publishedAt": "2021-11-10T17:22:21.1966191Z",
                "content": "Image source, Getty Images\r\nImage caption, Kyle Rittenhouse broke into tears on the stand as he testified in his own defence\r\nA US teenager charged with shooting three people during civil unrest on t… [+1454 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Missing French teenage jogger found alive says she escaped kidnappers",
                "description": "The 17-year-old was found in a state of shock about 10km from where she had gone for a run.",
                "url": "http://www.bbc.co.uk/news/world-europe-59231418",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D156/production/_121509535_sable-sur-sarthe.jpg",
                "publishedAt": "2021-11-10T17:07:20.5054223Z",
                "content": "Image source, Getty Images\r\nImage caption, Prosecutor Céline Maigné (L) said the girl had been found alive and was receiving medical care\r\nA teenaged jogger found alive more than a day after she disa… [+2911 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Belarus accused of state terrorism over migrant crisis",
                "description": "Poland's prime minister says Belarus is flying in migrants and sending them to the border.",
                "url": "http://www.bbc.co.uk/news/world-europe-59237413",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C5C6/production/_121503605_kurds.jpg",
                "publishedAt": "2021-11-10T16:22:24.3331314Z",
                "content": "Image source, Reuters/social media\r\nImage caption, At least 2,000 people are now gathered at the Belarusian border with Poland\r\nPolish Prime Minister Mateusz Morawiecki has accused Belarus of committ… [+4193 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "US prices rising at 6.2%, fastest rate for three decades",
                "description": "Prices rose 6.2% in the year to October, pushed up by higher costs for food and fuel.",
                "url": "http://www.bbc.co.uk/news/business-59236432",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10806/production/_121509576_gettyimages-857840090.jpg",
                "publishedAt": "2021-11-10T16:07:23.9026296Z",
                "content": "Image source, Getty Images\r\nAmericans' cost of living is rising faster than it has for three decades, with food and fuel driving the increases.\r\nThe consumer prices index for October showed prices ro… [+3199 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Clinton aide on laptop that may have lost the election",
                "description": "The FBI reinvestigated Hillary Clinton's emails after seizing a laptop from Huma Abedin's then-husband.",
                "url": "http://www.bbc.co.uk/news/world-us-canada-59236320",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1581A/production/_121509088_p0b3d7x4.jpg",
                "publishedAt": "2021-11-10T15:37:20.067631Z",
                "content": "Huma Abedin was one of Hillary Clinton's closest aides during the 2016 US election. But the Democrat's campaign was seriously damaged by a scandal involving Ms Abedin's then-husband, disgraced former… [+542 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Germany coronavirus: Record rise prompts warning of 100,000 deaths",
                "description": "The state of Saxony has the highest rate of infection in Germany and the lowest vaccine take-up.",
                "url": "http://www.bbc.co.uk/news/world-europe-59234443",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1B44/production/_121508960_leipzig2.jpg",
                "publishedAt": "2021-11-10T15:07:41.7970498Z",
                "content": "By Jenny HillBBC News Leipzig, Germany\r\nImage caption, Of the 18 patients on this Covid ward in Leipzig, 14 were unvaccinated\r\nOne of Germany's top virologists has warned that a further 100,000 peopl… [+3720 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Shein: The secretive Chinese brand dressing Gen Z",
                "description": "Shein's popularity has shot up during the pandemic, targeting young shoppers with low-cost products.",
                "url": "http://www.bbc.co.uk/news/business-59163278",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1536/production/_121503450_gettyimages-1315930455-1.jpg",
                "publishedAt": "2021-11-10T13:07:22.728285Z",
                "content": "By Lora JonesBusiness reporter, BBC News\r\nIt's a familiar sight scrolling through YouTube, TikTok and Instagram: A teenager dumps a \"haul\" of clothing from Shein on her bed, trying on each outfit in … [+8877 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Afghanistan's ghost soldiers undermined fight against Taliban - ex-official",
                "description": "Thousands of troops who were supposed to fight the Taliban did not exist, a former minister says.",
                "url": "http://www.bbc.co.uk/news/world-asia-59230564",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17142/production/_121503549_gettyimages-1064355654-1.jpg",
                "publishedAt": "2021-11-10T10:07:23.0149766Z",
                "content": "Image source, Los Angeles Times via Getty\r\nImage caption, Afghanistan fell to the Taliban in August\r\nAfghanistan's ex-finance minister has blamed the government's fall on corrupt officials who invent… [+2576 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "BBC News",
                "title": "COP26: Draft climate deal calls for tougher climate targets",
                "description": "The agreement - which is still to be finalised - asks countries to strengthen their national goals by the end of 2022.",
                "url": "http://www.bbc.co.uk/news/live/world-59226174",
                "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.2.0/bbc_news_logo.png",
                "publishedAt": "2021-11-10T08:52:24.0264461Z",
                "content": "The document may be just seven pages long but it attempts to steer COP26 towards a series of significant steps that will prevent global temperatures going above 1.5C this century. \r\nPerhaps the most … [+1213 chars]"
            }
        ]
    constructor() {
        super();
        console.log("Hello I am a constructor")
        this.state = {
            articles:this.articles,
            page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f77c7a6bde164b85a8c17cbd4edfd78e&page=1&pageSize=15";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }
    handleNextClick = async ()=>{
        console.log("Next")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f77c7a6bde164b85a8c17cbd4edfd78e&page=${this.state.page+1}&pageSize=15`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles:parsedData.articles,
            page: this.state.page + 1,
        })
    }
    
    handlePrevClick = async ()=>{
        console.log("Prev")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f77c7a6bde164b85a8c17cbd4edfd78e&page=${this.state.page-1}&pageSize=15`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles:parsedData.articles,
            page: this.state.page - 1,
        })
    }

    render() {
        return (
            <div className="container my-3">
                <h2> News Top Headlines.</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return  <div className="col-md-4" key={element.url}>
                    <Newsitem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
                })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1}type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button type="button" class="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
