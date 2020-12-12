import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, key, size, linkurl, match, history }) => (
  <div
    key={key}
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkurl}`)}
  >
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="background-image"
    />

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <h1 className="subtitle">SHOP NOW</h1>
    </div>
  </div>
);

export default withRouter(MenuItem);
