import { ListGroup } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentHandler from "./AssignmentHandler";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

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
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <ListGroup.Item
                  key={assignment._id}
                  className="wd-assignment p-3 ps-1 list-group-item rounded-0 d-flex align-items-center"
                >
                  <span className="wd-assignment-icon-container d-flex align-items-center me-3">
                    <BsGripVertical className="me-2 fs-3 wd-assignment-drag" />
                    <LuNotebookPen className="wd-assignment-icon fs-4" />
                  </span>
                  <div className="wd-assignment-text flex-grow-1">
                    <Link
                      to={`/kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-name fw-bold text-decoration-none"
                    >
                      {assignment.title}
                    </Link>
                    <div className="wd-assignment-description small mt-1">
                      <span className="text-danger">Multiple Modules</span> |
                      <span className="fw-semibold"> Not available until </span>
                      {assignment.available ? `${assignment.available.split('T')[0]} at ${assignment.available.split('T')[1]}` : 'TBD'} |
                      <span className="fw-semibold"> Due </span>
                      {assignment.due ? `${assignment.due.split('T')[0]} at ${assignment.due.split('T')[1]}` : 'TBD'} |
                      {assignment.points} pts
                    </div>
                  </div>
                  <AssignmentHandler />
                </ListGroup.Item>
              ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}