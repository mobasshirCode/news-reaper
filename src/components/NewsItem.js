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
        <img src={props.imageUrl} className="card-img-top" alt="..." style={{height : "210px", objectFit: "cover"}} />
        <div
          className="card-body "
          style={{
            backgroundColor: props.mode === "dark" ? "#060c36" : "white",
            color: props.mode === "dark" ? "white" : "black",
            height: "280px",
            
          }}
        >
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}...</p>
          <p className="card-text">
            <small
              style={{
                color : "grey",
                position: "absolute",
                bottom: "50px"
              }}
            >
              By {props.author} on {new Date(props.date).toLocaleString()}
            </small>
          </p>
          <a
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "black",
              color: props.mode === "dark" ? "black" : "white",
              position : "absolute",
              bottom : "10px"
            }}
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
