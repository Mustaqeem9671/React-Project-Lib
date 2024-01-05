import React from "react";
import "../styles/Home.css";
// import pic from '../images/library.jpg'

const Home = () => {
  return (
    <div className="home">
      <div className="libcontent">
        <div className="text">
          <h1>Digital Libray</h1> <hr />
          <p>
            When the Libraries are closed, use our convenient book drops to
            return materials. Visit our Digital Library for 24/7 access to
            eBooks, audiobooks, magazines, movies, music, learning and more.
          </p>
          <input type="button" value="Learn ->" />
        </div>
      </div>

      <div className="libcontent2">
        <div className="text2">
          <p>About</p>
          <h1>Cos Cob Libray</h1> <hr />
          <p>
            Greenwich Library recently announced a new plan for the
            much-anticipated Cos Cob Branch Library renovation. The revised plan
            considers ideas raised by the community to expand the community room
            for greater program capacity, increase space dedicated to children's
            services, and enhance the collections to make it a go-to
            destination.{" "}
          </p>
          <input type="button" value="Learn More" />
        </div>
      </div>

      <div className="design">
        <div className="events">
          <h1>This Month Events.</h1>
          <p>
            These printable one-page calendars for each Greenwich Library branch
            are fridge-ready.
          </p>
          <input type="button" value="Print The Calender" />
        </div>
      </div>

      <div className="libcontent3">
        <div className="text3">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
