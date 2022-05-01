import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import { About } from "../components/About";
import { Home } from "../components/Home";
import { Users } from "../components/Users";

import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="Logo React" />
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/*" element={<Users />} />
          <Route path="about/*" element={<About />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}