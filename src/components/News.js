import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8872901d422b46ccaff1d40589029842&page=${this.state.page}&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  // handlePrev = () => {
  //   this.componentDidMount(
  //     this.setState({
  //       page: this.state.page - 1,
  //     })
  //   );
  // };
  // handleNext = () => {
  //   this.componentDidMount(
  //     this.setState({
  //       page: this.state.page + 1,
  //     })
  //   );
  // };
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8872901d422b46ccaff1d40589029842&page=${
      this.state.page - 1
    }&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };
  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8872901d422b46ccaff1d40589029842&page=${
      this.state.page + 1
    }&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
  };
  render() {
    return (
      <div className="container my-2">
        <h3>News Reaper - Top Headlines</h3>
        <div className="row my-3 d-flex justify-content-between">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description : ""}
                  newsUrl={element.url}
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://thumbs.dreamstime.com/b/newspaper-wooden-table-93401143.jpg"
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 15)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
