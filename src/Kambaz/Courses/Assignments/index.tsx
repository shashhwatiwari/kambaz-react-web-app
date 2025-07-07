export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment"
        placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kambaz/Courses/1234/Assignments/201">
            A2 - Git & Version Control
          </a><br />
          <p>Week 1 | <b>Not Available until</b> June 10 at 12:00am | <b>Due</b> June 17 at 11:59pm | 100 pts</p>
        </li>
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kambaz/Courses/1234/Assignments/202">
            A3 - Node.js + Express Intro
          </a><br />
          <p>Week 2 | <b>Not Available until</b> June 17 at 12:00am | <b>Due</b> June 24 at 11:59pm | 100 pts</p>
        </li>
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kambaz/Courses/1234/Assignments/203">
            A4 - MongoDB Integration
          </a><br />
          <p>Week 3 | <b>Not Available until</b> June 24 at 12:00am | <b>Due</b> July 1 at 11:59pm | 100 pts</p>
        </li>
      </ul>
    </div>
  );
}
