import { ListGroup } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentHandler from "./AssignmentHandler";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      {/* Top Controls */}
      <div className="wd-assignments-controls-container mb-4 d-flex justify-content-between align-items-center">
        <AssignmentControls />
      </div>

      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroup.Item className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary text-white d-flex justify-content-between align-items-center">
            <span>
              <BsGripVertical className="me-2 fs-3 wd-assignment-drag" />
              Assignments
            </span>
            <AssignmentControlButtons />
          </div>

          <ListGroup>
            {/* A1 */}
            <ListGroup.Item className="wd-assignment p-3 ps-1 list-group-item rounded-0 d-flex align-items-center">
              <span className="wd-assignment-icon-container d-flex align-items-center me-3">
                <BsGripVertical className="me-2 fs-3 wd-assignment-drag" />
                <LuNotebookPen className="wd-assignment-icon fs-4" />
              </span>
              <div className="wd-assignment-text flex-grow-1">
                <a href="#/kambaz/Courses/1234/Assignments/1" className="wd-assignment-name fw-bold text-decoration-none">
                  A2 - Node.js + Express Intro
                </a>
                <div className="wd-assignment-description small mt-1">
                  <span className="text-danger">Multiple Modules</span> |
                  <span className="fw-semibold"> Not available until </span> Sep 10 at 09:00 |
                  <span className="fw-semibold"> Due </span> Sep 20 at 11:59 |
                  100 pts
                </div>
              </div>
              <AssignmentHandler />
            </ListGroup.Item>

            {/* A2 */}
            <ListGroup.Item className="wd-assignment p-3 ps-1 list-group-item rounded-0 d-flex align-items-center">
              <span className="wd-assignment-icon-container d-flex align-items-center me-3">
                <BsGripVertical className="me-2 fs-3 wd-assignment-drag" />
                <LuNotebookPen className="wd-assignment-icon fs-4" />
              </span>
              <div className="wd-assignment-text flex-grow-1">
                <a href="#/kambaz/Courses/1234/Assignments/2" className="wd-assignment-name fw-bold text-decoration-none">
                  A3 - MongoDB Integration
                </a>
                <div className="wd-assignment-description small mt-1">
                  <span className="text-danger">Multiple Modules</span> |
                  <span className="fw-semibold"> Not available until </span> Sep 17 at 09:00 |
                  <span className="fw-semibold"> Due </span> Sep 24 at 11:59 |
                  100 pts
                </div>
              </div>
              <AssignmentHandler />
            </ListGroup.Item>

            {/* A3 */}
            <ListGroup.Item className="wd-assignment p-3 ps-1 list-group-item rounded-0 d-flex align-items-center">
              <span className="wd-assignment-icon-container d-flex align-items-center me-3">
                <BsGripVertical className="me-2 fs-3 wd-assignment-drag" />
                <LuNotebookPen className="wd-assignment-icon fs-4" />
              </span>
              <div className="wd-assignment-text flex-grow-1">
                <a href="#/kambaz/Courses/1234/Assignments/2" className="wd-assignment-name fw-bold text-decoration-none">
                  A4 - PostgreSQL
                </a>
                <div className="wd-assignment-description small mt-1">
                  <span className="text-danger">Multiple Modules</span> |
                  <span className="fw-semibold"> Not available until </span> Sep 25 at 09:00 |
                  <span className="fw-semibold"> Due </span> October 2 at 11:59 |
                  100 pts
                </div>
              </div>
              <AssignmentHandler />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
