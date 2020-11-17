import React, { useState, useEffect } from "react";
import { ReactComponent as Icon } from "../img/like.svg";

import "./wraper.css";

const API_KEY = "ebea8cfca72fdff8d2624ad7bbf78e4c";
const poster_url = "http://image.tmdb.org/t/p/w342";

export const Wraper = () => {
  const [count, setCount] = useState(3);
  const [movie, setMovie] = useState([]);
  const [load, setLoad] = useState(true);

  const onIncrementMinus = () => {
    setCount(count - 1);
  };
  const onIncrementPlas = () => {
    setCount(count + 1);
  };

  const listPages = () => {
    return (
      <form className="pages">
        <button className="previos" onClick={onIncrementMinus}>
          previos
        </button>
        <div>{count - 1}</div>
        <div>{count}</div>
        <div>{count + 1}</div>
        <button className="next" onClick={onIncrementPlas}>
          next
        </button>
      </form>
    );
  };

  const getMovie = async () => {
    const info = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${count}`
    )
      .then((res) => res.json())
      .then((json) => {
        setLoad(false);
        setMovie(json.results);
      });
    if (info) setMovie(info);
  };
  useEffect(() => {
    getMovie();
  }, []);

  const renderMovie = () => {
    return movie.map(({ poster_path, release_date, title }, i) => (
      <div key={i} className="cart">
        <div className="poster">
          <img src={poster_url + poster_path} alt="poster film" />
        </div>
        <div className="poster">{release_date}</div>
        <div className="poster">{title}</div>
        <div className="like">
          <Icon />
        </div>
      </div>
    ));
  };

  if (load) {
    return <div>...load</div>;
  } else {
    return (
      <div>
        <div className="wraper">{renderMovie()}</div> {listPages()}
      </div>
    );
  }
};
