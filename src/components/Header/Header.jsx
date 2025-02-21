import { NavLink } from "react-router";

const Header = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "gray" }}>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "1rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
