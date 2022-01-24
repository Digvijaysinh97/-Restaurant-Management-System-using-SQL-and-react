import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import Axios from "axios";
import home from "../../Assets/home.png";
import tur from "../../Assets/tur.PNG";
import { Reveal, Tween } from "react-gsap";
import TextG from "../../Components/TextG";

function HomePage() {
  const [movieName, setMoviename] = useState("");
  const [movieReview, setMoviereview] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setList(response.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieRe: movieReview,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className="homepage">
      <div className="hp_img">
        <img
          src={home}
          // src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
          // src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1347&q=80"
          // src="https://lh5.googleusercontent.com/proxy/moWhfDJS58O2j22XBjCeQ6MTFarEzIW5A-vBeH7SvwL3Q7JQqEC1o2sDvPS-ue3rLdOMx1sL-aWI8cR8H-mc54p0M9WJ0XplRQGiJ3rEyRZcRfUG7ggTT8YFP9L1Ox7O6Ne-4oVsXfPdQDGJ4vuSYYk3NP6m63eVwJo=s0-d"
          // src="https://cdn.shopify.com/s/files/1/1124/7646/products/Missoni-Home-Canvas-Wallpaper-10165_800x.jpg?v=1561638547"
          // src="https://www.koziel.fr/15804-pdt_1500/brown-plain-canvas-jute-wallpaper.jpg"
          alt=""
        ></img>
      </div>

      <div className="greet_hp">
        <Tween
          from={{ x: "-100px", opacity: 0 }}
          duration={1.5}
          ease="back.out(1.1)"
        >
          <div>
            <h1>WELCOME TO OUR PROJECT</h1>
          </div>
        </Tween>

        <br />
        <Tween
          from={{ y: "100px", opacity: 0 }}
          duration={1.5}
          ease="back.out(1.1)"
        >
          <div>
            <p>Dhruv Prajapati AU1940192</p>
          </div>
        </Tween>
        <br />
        <Tween
          from={{ y: "-100px", opacity: 0 }}
          duration={1.5}
          ease="back.out(1.1)"
        >
          <div>
            <p>Digvijaysinh Gohil AU1940199</p>
          </div>
        </Tween>
        <br />
        <Tween
          from={{ y: "100px", opacity: 0 }}
          duration={2.2}
          ease="back.out(1.1)"
        >
          <div>
            <p>Aaryan Mori AU1940194</p>
          </div>
        </Tween>
        <br />
        <br />
        <br />
        <h2>Move To Header for Links</h2>
      </div>
    </div>
  );
}

export default HomePage;

{
  /* <div className="greet_hp1">
  <label>Movie Name</label>
  <input
    type="text"
    name="movieName"
    onChange={(e) => {
      setMoviename(e.target.value);
    }}
  ></input>
  <label>Review</label>
  <input
    type="text"
    name="review"
    onChange={(e) => {
      setMoviereview(e.target.value);
    }}
  ></input>
  <button onClick={submitReview}>Submit</button>
  {list.map((val) => {
    return (
      <h1>
        Name: {val.cName} Phone:{val.cPhone}
      </h1>
    );
  })}
</div>; */
}
