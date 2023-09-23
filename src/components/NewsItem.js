import React from "react";

const NewsItem = (props) => {
  return (
    <div>
      <div className="card">
        <span
          className="position-absolute top-0   badge bg-success"
          style={{ display: "flex", justifyContent: "end", right: 0 }}
        >
          {props.source}
        </span>
        <img src={props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {props.author} on {new Date(props.date).toLocaleString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={props.newsUrl}
            target="_blank"
            className="btn btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
