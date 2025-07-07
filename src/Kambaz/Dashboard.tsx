import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/logo192.png" width={100} />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/2101/Home">
              CS2101 Web Development
            </Link>
            <p className="wd-dashboard-course-title">
              Learn to build modern web apps using React and Node.js
            </p>
            <Link to="/Kambaz/Courses/2101/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/logo192.png" width={100} />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/2150/Home">
              CS2150 Algorithms & Data Structures
            </Link>
            <p className="wd-dashboard-course-title">
              In-depth study of searching, sorting, graphs, and recursion
            </p>
            <Link to="/Kambaz/Courses/2150/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/logo192.png" width={100} />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/2300/Home">
              CS2300 Artificial Intelligence
            </Link>
            <p className="wd-dashboard-course-title">
              Explore AI fundamentals like search, logic, and learning
            </p>
            <Link to="/Kambaz/Courses/2300/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/logo192.png" width={100} />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/2405/Home">
              CS2405 Human-Computer Interaction
            </Link>
            <p className="wd-dashboard-course-title">
              Study user interfaces and user experience design
            </p>
            <Link to="/Kambaz/Courses/2405/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/logo192.png" width={100} />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/2500/Home">
              CS2500 Cybersecurity Basics
            </Link>
            <p className="wd-dashboard-course-title">
              Introduction to digital security, encryption, and threats
            </p>
            <Link to="/Kambaz/Courses/2500/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/logo192.png" width={100} />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/2601/Home">
              CS2601 Cloud Computing
            </Link>
            <p className="wd-dashboard-course-title">
              Learn about AWS, distributed systems, and scalability
            </p>
            <Link to="/Kambaz/Courses/2601/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/logo192.png" width={100} />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/2707/Home">
              CS2707 Blockchain Fundamentals
            </Link>
            <p className="wd-dashboard-course-title">
              Understand how blockchains and smart contracts work
            </p>
            <Link to="/Kambaz/Courses/2707/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
