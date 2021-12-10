import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import '../App.css';

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        console.log("Hello I am a constructor")
        this.state = {
            articles:[],
            page: 1,
            totalResults: 70
        }
    }

    async updateNews(pageNo){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f77c7a6bde164b85a8c17cbd4edfd78e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }

    async componentDidMount(){
        window.scrollTo(0, 0);
        this.updateNews();
    }
    handleNextClick = async ()=>{
        this.setState({page:this.state.page+1})
        this.updateNews()
        window.scrollTo(0, 0);
    }
    
    handlePrevClick = async ()=>{
        // console.log("Prev")
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f77c7a6bde164b85a8c17cbd4edfd78e&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({
        //     articles:parsedData.articles,
        //     page: this.state.page - 1,
        // })
        this.setState({page:this.state.page-1})
        this.updateNews();
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="container my-3">
                <h1 style={{margin: '35px', textAlign: 'center'}}> NewsMonkey Top Headlines.</h1>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return  <div className="col-md-4" key={element.url}>
                    <Newsitem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}  author={element.author} date = {element.publishedAt} />
                </div>
                })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
