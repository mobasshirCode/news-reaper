import React from "react";

export default function About(props) {

  document.title = "About - News Reaper";
  let myStyle = {
    color: props.mode === "light" ? "#030a24" : "white",
    backgroundColor: props.mode === "light" ? "#d4ddfa" : "#162533",
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h1 className="my-3">About News Reaper</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={{ border: "1px solid white" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Introduction to News Reaper
              </button>
            </h2>
            <div
              id="collapseOne"
              style={myStyle}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>Welcome to News Reaper!</strong>
                <br />
                News Reaper is your trusted source for the latest headlines and news stories. We bring you the news you need to know, powered by the NewAPI API.
                <br />
                However, due to the restrictions of the free version of the API, we have created a static app that fetches data from JSON files to ensure you can access news effortlessly.
                <br />
                Here's what News Reaper offers:
                <br />
                <strong>Breaking News:</strong> Stay updated with the latest breaking news.
                <br />
                <strong>In-Depth Coverage:</strong> Dive deep into stories that matter to you.
                <br />
                <strong>Customizable News Feeds:</strong> Personalize your news experience.
                <br />
                <strong>Real-time Updates:</strong> Get news as it happens.
                <br />
                <strong>User-Friendly Interface:</strong> Our app is easy and intuitive to use.
                <br />
                <br />
                Explore the world of news with News Reaper!
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{ border: "1px solid white" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Meet the News Reaper Team
              </button>
            </h2>
            <div
              id="collapseTwo"
              style={myStyle}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                News Reaper is brought to you by a dedicated team of developers and news enthusiasts.
                <br />
                Meet our team member:
                <br />
                <strong>Mobasshir Rahman:</strong> As the sole member of our team, I've utilized my expertise in web development to create News Reaper.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{ border: "1px solid white" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Our Commitment to You
              </button>
            </h2>
            <div
              id="collapseThree"
              style={myStyle}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {">"} At News Reaper, we're dedicated to delivering the latest news to you.
                <br /> {">"} We are committed to providing reliable and up-to-date news.
                <br /> {">"} Your trust in us drives us to excel in our mission.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{ border: "1px solid white" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Thank You for Choosing News Reaper
              </button>
            </h2>
            <div
              id="collapseFour"
              style={myStyle}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We appreciate your trust in News Reaper. Our mission is to provide you with the latest news in an easy-to-use format.
                <br />
                Here's a quick summary:
                <br />
                - Stay informed with our app.
                <br />
                - Meet our dedicated team.
                <br />
                - Join our community for news discussions.
                <br />
                Get started with <strong>News Reaper</strong> today and stay informed!
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{ border: "1px solid white" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Explore More
              </button>
            </h2>
            <div
              id="collapseFive"
              style={myStyle}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Discover our other projects and explore our portfolio of work:
                <br />
                Visit our <strong>Project Showcase</strong>:
                <br />
                <a target="_blank" rel="noopener noreferrer" href="https://mr-showcase.netlify.app/">
                  <button className="btn btn-primary m-2">
                    Project Showcase
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
