import React, { useState, useEffect } from "react";

import Api from "../helpersAPI";

import "./page.css";
import "./more.css";

export const More = ({
  match: {
    params: { id },
  },
}) => {
  const [detail, setDetail] = useState({});
  const [load, setLoad] = useState(true);

  const getMoviesMore = async () => {
    const info = await Api.getMoviesMore(id).catch(console.log);
    if (info) setDetail(info);
    if (load) setLoad(false);
  };
  useEffect(() => {
    getMoviesMore();
  }, []);

  if (load) {
    return <div>...load</div>;
  } else {
    const {
      original_title,
      overview,
      poster_path,
      genres,
      backdrop_path,
    } = detail;
    return (
      <section
        className="containerFilm"
        // style={{
        //   backgroundImage: `url(${Api.poster_url + backdrop_path})`,
        // }}
      >
        <img
          className="backgroundFilm"
          src={`${Api.poster_url + backdrop_path}`}
        />
        <div>
          <img src={`${Api.poster_url + poster_path}`} />
        </div>
        <div>
          <h3>{original_title}</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres.map(({ name }) => (
              <div key={name}>{name}</div>
            ))}
          </p>
        </div>
      </section>
    );
  }
};
