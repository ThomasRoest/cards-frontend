import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHome = styled.div`
  text-align: center;
  a {
    width: 200px;
    margin-bottom: 10px;
  }
`;

const Home = () => {
  if (true) {
    return (
      <StyledHome>
        <div className="empty">
          <div className="empty-icon">
            <i className="icon icon-3x icon-mail" />
          </div>
          <h1 className="empty-title h3">Cards</h1>
          <p className="empty-subtitle">Sign up to get started</p>
          <div className="empty-action">
            <Link className="btn btn-primary" to="/register">
              Register
            </Link>
          </div>
          <div className="empty-action">
            <Link className="btn btn-default" to="/login">
              Login
            </Link>
          </div>
        </div>
      </StyledHome>
    );
  } else {
    return <p>user is logged id</p>;
  }
};

export default Home;
