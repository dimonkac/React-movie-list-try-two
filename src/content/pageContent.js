import React, { useState, useEffect } from "react";
import { ReactComponent as Icon } from "../img/like.svg";
import Api from "../helpersAPI";
import { Link } from "react-router-dom";

import "./page.css";

export const Content = () => {
  const [count, setCount] = useState(1);
  const [movie, setMovies] = useState([]);
  const [load, setLoad] = useState(true);
  const favorit = JSON.parse(localStorage.getItem("favorit"));

  const url = "http://api.themoviedb.org/3";
  const key = "ebea8cfca72fdff8d2624ad7bbf78e4c";

  const getMovies = async () => {
    const info = await fetch(
      `${url}/movie/now_playing?api_key=${key}&language=en-US&page=${count}`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
        setLoad(false);
      });
  };
  useEffect(() => {
    getMovies();
  }, []);

  const onAddFavorit = (id) => () => {
    if (favorit.includes(id)) {
      favorit.splice(favorit.indexOf(id), 1);
    } else {
      favorit.push(id);
    }
    localStorage.setItem("favorit", JSON.stringify(favorit));
    console.log(localStorage);
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
    return movie.map(({ poster_path, release_date, title, id }) => (
      <div key={id} className="cart">
        <div className="poster">
          <img src={Api.poster_url + poster_path} alt={title} />
        </div>
        <div className="poster">{title}</div>
        <div className="poster">Release date:{release_date}</div>
        <div className="buttons">
          <button
            active={favorit.includes(id)}
            onClick={onAddFavorit(id)}
            className="like"
          >
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
