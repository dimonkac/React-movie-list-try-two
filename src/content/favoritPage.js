import React, { useState, useEffect, Fragment } from "react";
import { ReactComponent as Icon } from "../img/like.svg";
import { Link } from "react-router-dom";
import Api from "../helpersAPI";

import "./page.css";

export const FavoritPage = () => {
  const [movie, setMovies] = useState([]);
  const [favorit, setFavorit] = useState(
    JSON.parse(localStorage.getItem("favorit"))
  );
  const [load, setLoad] = useState(true);

  const getMovies = async () => {
    const promises = await favorit.map((id) => Api.getMoviesMore(id));
    Promise.all(promises).then((res) => setMovies(res));
    console.log(movie);
    if (load) setLoad(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const onAddFavorit = (id) => () => {
    if (favorit.includes(id)) {
      favorit.splice(favorit.indexOf(id), 1);
    } else {
      movie.push(id);
    }
    localStorage.setItem("favorit", JSON.stringify(favorit));
    console.log(favorit);
    getMovies();
  };

  const renderMovie = () => {
    return movie.map(({ poster_path, release_date, title, id }) => (
      <Fragment>
        <div key={id} className="cart">
          <div className="poster">
            <img src={Api.poster_url + poster_path} alt="poster film" />
          </div>
          <div className="poster">{title}</div>
          <div className="poster">{release_date}</div>
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
      </Fragment>
    ));
  };

  if (load) {
    return <div>...load</div>;
  } else {
    return (
      <div className="wraper">
        {renderMovie()}
        <div className="carteg"></div>
        <div className="carteg"></div>
        <div className="carteg"></div>
      </div>
    );
  }
};
