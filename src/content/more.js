import React, { useState, useEffect } from "react";
// import { ReactComponent as Icon } from "../img/like.svg";
import Api from "../helpersAPI";
// import { Link } from "react-router-dom";

import "./page.css";

export const More = ({
  match: {
    params: { id },
  },
}) => {
  const [detail, setDetail] = useState([]);
  const [load, setLoad] = useState(true);

  // const _detail = [];
  // _detail.push(detail);

  const getMoviesMore = async () => {
    const info = await Api.getMoviesMore(id).catch(console.log);
    if (info) setDetail(info);
    if (load) setLoad(false);
  };
  useEffect(() => {
    getMoviesMore();
    console.log(Object.entries(detail));
  }, []);

  const renderMovie = () => {
    return Object.entries(detail).map(
      ({ poster_path, release_date, title }, id) => (
        <div key={id} className="cart">
          <div className="poster">
            <img src={Api.poster_url + poster_path} alt={title} />
          </div>
          <div className="poster">{release_date}</div>
          <div className="poster">{title}</div>
        </div>
      )
    );
  };

  if (load) {
    return <div>...load</div>;
  } else {
    return <div className="wraper">{renderMovie()}</div>;
  }
};
