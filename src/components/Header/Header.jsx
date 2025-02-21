import { NavLink } from "react-router-dom";

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
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
              textDecoration: "none",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
              textDecoration: "none",
            })}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
