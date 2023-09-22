import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const apiKey1 = "8872901d422b46ccaff1d40589029842";
const apiKey2 = "8f59f1d0c9ca4d8da82432d9348f5181";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async updateNews() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?&country=in&apikey=${apiKey2}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePrev = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNext = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  render() {
    return (
      <div className="container my-2">
        <h1 className="text-center" style={{ margin: "30px 0" }}>
          News Reaper - Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row my-3 ">
          {!this.state.loading &&
            this.state.articles.map((element) => {
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
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
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
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
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
