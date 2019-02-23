import React from "react";

const MainCard = () => {
  return (
    <div className="card">
      {/* <div className="card-image">
        <img src="img/osx-el-capitan.jpg" className="img-responsive" />
      </div> */}
      <div className="card-header">
        <div className="card-title h5">Quote of the day</div>
        <div className="card-subtitle text-gray">this is a card subtitle</div>
      </div>
      <div className="card-body">
        on Reading, like exercise, it almost doesn't matter what you do, as long
        as you do it everyday. - Naval ravikant
      </div>
      {/* <div className="card-footer">
        <button className="btn btn-primary">and a button here</button>
      </div> */}
    </div>
  );
};

export default MainCard;
