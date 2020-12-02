// import React, { useState, useEffect } from "react";
// // import { ReactComponent as Icon } from "../img/like.svg";
// import Api from "../helpersAPI";
// // import { Link } from "react-router-dom";

// import "./page.css";

// export const More = ({
//   match: {
//     params: { id },
//   },
// }) => {
//   const [detail, setDetail] = useState([]);

//   const getMoviesMore = async () => {
//     const info = await Api.getMoviesMore(id).catch(console.log);
//     if (info) setDetail(info);
//     console.log(info);
//   };

//   useEffect(() => {
//     getMoviesMore();

//     console.log(detail);
//   }, []);

//   const renderMovie = () => {
//     return detail.map(({ poster_path, release_date, title, id }) => (
//       <div key={id} className="cart">
//         <div className="poster">
//           <img src={Api.poster_url + poster_path} alt={title} />
//         </div>
//         <div className="poster">{release_date}</div>
//         <div className="poster">{title}</div>
//       </div>
//     ));
//   };

//   return <div className="wraper"> {renderMovie} </div>;
// };

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
      <div
        style={{ backgroundImage: `url(${Api.poster_url + backdrop_path})` }}
      >
        <h3>{original_title}</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>
          {genres.map(({ name }) => (
            <div key={name}>{name}</div>
          ))}
        </p>
        <img src={`${Api.poster_url + poster_path}`} />
      </div>
    );
  }
};
