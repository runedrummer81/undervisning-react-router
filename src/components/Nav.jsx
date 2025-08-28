import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Forside</NavLink> | <NavLink to="/about">Om</NavLink> |{" "}
      <NavLink to="/contact">Kontact</NavLink>
    </nav>
  );
}
