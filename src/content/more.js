import React, { useState, useEffect } from "react";
import { ReactComponent as Icon } from "../img/like.svg";
import Api from "../helpersAPI";
import { Link } from "react-router-dom";

import "./page.css";

export const More = () => {
  const [movie, setMovies] = useState([]);
  const [load, setLoad] = useState(true);

  const getMovies = async (id) => {
    const info = await Api.getMovies(id).catch(console.log);
    if (info) setMovies(info.results);
    if (load) setLoad(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const renderMovie = () => {
    return movie.map(({ poster_path, release_date, title }, id) => (
      <div key={id} className="cart">
        <div className="poster">
          <img src={Api.poster_url + poster_path} alt={title} />
        </div>
        <div className="poster">{release_date}</div>
        <div className="poster">{title}</div>
      </div>
    ));
  };

  if (load) {
    return <div>...load</div>;
  } else {
    return <div className="wraper">{renderMovie()}</div>;
  }
};
