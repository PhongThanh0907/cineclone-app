import React from "react";

import HeaderTitleMovie from "../../../components/HeaderTitleMovie";
import Promotion from "../../../components/Promotion";
import ItemMovieDetail from "./ItemMovieDetail";

const DetailMovie = () => {
  return (
    <div className="py-10 mainBackground">
      <HeaderTitleMovie />
      <ItemMovieDetail />
      <Promotion />
    </div>
  );
};

export default DetailMovie;
