import React, { useCallback, useState } from "react";

import DropdownItem from "./DropdownItem";

export default function Header() {
  const [users, setUsers] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const debounce = (func) => {
    let timer;
    return (...args) => {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 300);
    };
  };

  const fetchData = (e) => {
    if (e?.target?.value) {
      fetch(`https://api.github.com/search/users?q=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => setUsers(data.items))
        .catch((err) => console.log(err));
    } else {
      setUsers([]);
    }
  };

  const onChange = useCallback(debounce(fetchData), []);

  const handleFocus = (bool) => {
    setTimeout(() => {
      setIsFocused(bool);
    }, 200);
  };

  return (
    <div className="header">
      <div className="text-container">
        <h1 className="text">🐙 Github Users</h1>
      </div>

      <div className="input-container">
        <input
          placeholder="search..."
          className="input"
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
          onChange={onChange}
        />
        {users?.length && isFocused ? (
          <div className="dropdown-container">
            {users?.map((u) => (
              <DropdownItem
                key={u.id}
                avatar_url={u.avatar_url}
                login={u.login}
                html_url={u.html_url}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
