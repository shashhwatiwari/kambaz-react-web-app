import { Link, useLocation, useParams } from "react-router-dom";
import "../styles.css";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();

  // internal and external links
  const internalLinks = ["Home", "Modules", "Assignments", "Grades", "Quizzes", "People"];
  const externalLinks = {
    Piazza: "https://piazza.com",
    Zoom: "https://zoom.us",
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {internalLinks.map((link) => {
        const targetPath = `/Kambaz/Courses/${cid}/${link}`;
        const isActive = pathname.includes(`/${link}`);
        return (
          <Link
            key={link}
            to={targetPath}
            className={`list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}
          >
            {link}
          </Link>
        );
      })}

      {Object.entries(externalLinks).map(([label, url]) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="list-group-item border border-0 text-danger"
        >
          {label}
        </a>
      ))}
    </div>
  );
}
