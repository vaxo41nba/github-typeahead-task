import React from "react";

export default function Card({ avatar_url, login, html_url }) {
  return (
    <a href={html_url} target="_blank" rel="noreferrer" className="card">
      <img className="card-img" src={avatar_url} alt={login} />
      <span className="login-id">{login}</span>
    </a>
  );
}
