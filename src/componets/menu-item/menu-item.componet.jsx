import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, key, size }) => (
  <div
    key={key}
    className={`${size} menu-item`}
  >
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className='background-image'
    />

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <h1 className="subtitle">SHOP NOW</h1>
    </div>
  </div>
);

export default MenuItem;
