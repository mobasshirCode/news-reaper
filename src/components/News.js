import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount(){
    let url =  "https://newsapi.org/v2/top-headlines?country=in&apiKey=8872901d422b46ccaff1d40589029842"
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles})
  }
  render() {
    return (
      <div className="container my-2">
        <h3>News Reaper - Top Headlines</h3>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return <div className="col-md-4 my-3" key={element.url}>
              <NewsItem
                title={element.title?element.title.slice(0,45):""}
                description={element.description?element.description:""}
                newsUrl={element.url}
                imageUrl={element.urlToImage?element.urlToImage:"https://thumbs.dreamstime.com/b/newspaper-wooden-table-93401143.jpg"}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}
