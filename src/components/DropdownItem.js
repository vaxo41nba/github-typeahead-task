import React from "react";

export default function DropdownItem({ avatar_url, login, html_url }) {
  return (
    <a
      href={html_url}
      target="_blank"
      rel="noreferrer"
      className="dropdown-item"
    >
      <img className="dropdown-img" src={avatar_url} alt={login} />
      <span className="dropdown-id">{login}</span>
    </a>
  );
}
