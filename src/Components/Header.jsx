import React from "react";

export default function Header() {
  return (
    <header>
      <h1>
        <img
          className="title_logo"
          src="./public/logo/small_cloud_logo.png"
          alt="logo de l'application - Un nuage"
        />
        <span>MyWeatherApp</span>
      </h1>
    </header>
  );
}
