import React, { useState, useEffect } from "react";
import { ReactComponent as Icon } from "../img/like.svg";
import { Link } from "react-router-dom";
import Api from "../helpersAPI";

import "./page.css";

export const FavoritPage = () => {
  const [count, setCount] = useState(1);
  const [movie, setMovies] = useState([]);
  const [load, setLoad] = useState(true);

  const getMovies = async () => {
    const info = await Api.getMovies().catch(console.log);
    if (info) setMovies(info.results);
    if (load) setLoad(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const onAddFavorit = (title) => () => {
    const _movie = [...movie];
    const index = _movie.findIndex((m) => m.title === title);
    console.log(index);
  };
  const onIncrementMinus = () => {
    setCount(count - 1);
    getMovies();
  };
  const onIncrementPlas = () => {
    setCount(count + 1);
    getMovies();
  };
  const listPages = () => {
    return (
      <div className="pages">
        <button className="previos" onClick={onIncrementMinus}>
          previos
        </button>
        <div>{count}</div>
        <button className="next" onClick={onIncrementPlas}>
          next
        </button>
      </div>
    );
  };

  const renderMovie = () => {
    return movie.map(({ poster_path, release_date, title }, id) => (
      <div key={id} className="cart">
        <div className="poster">
          <img src={Api.poster_url + poster_path} alt="poster film" />
        </div>
        <div className="poster">{title}</div>
        <div className="poster">{release_date}</div>
        <div className="buttons">
          <button onClick={onAddFavorit(title)} className="like">
            <Icon />
          </button>
          <Link to={`/more/${id}`} className="more ">
            More
          </Link>
        </div>
      </div>
    ));
  };

  if (load) {
    return <div>...load</div>;
  } else {
    return (
      <div className="wraper">
        {renderMovie()}
        {listPages()}
      </div>
    );
  }
};
