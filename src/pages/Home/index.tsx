import React from "react";

import Movies from "../../components/Movies";
import Promotion from "../../components/Promotion";
import News from "../../components/News";

const HomePage = () => {
  return (
    <div className="mainBackground">
      <Movies />
      <Promotion />
      <News />
    </div>
  );
};

export default HomePage;
