import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const { pathname } = useLocation();
  const links = ["Signin", "Signup", "Profile"];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/Kambaz/Account/${link}`;
        const isActive = pathname === linkPath;
        return (
          <Link
            key={link}
            to={linkPath}
            className={`list-group-item border border-0 ${isActive ? "active text-dark" : "text-danger"}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}