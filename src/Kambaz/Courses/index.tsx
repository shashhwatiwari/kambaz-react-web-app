import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import {FaAlignJustify} from "react-icons/fa";
import AssignmentEditor from "./Assignments/Editor";
export default function Courses() {
  return (
      <div id="wd-courses">
        <h2 className="text-danger"><FaAlignJustify className="me-4 fs-4 mb-1"/> Course 1234 </h2>
        <hr/>
        <div className="d-flex">
          <div className="d-none d-md-block">
            < CourseNavigation/>
          </div>
          <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home"/>}/>
              <Route path="Home" element={<Home/>}/>
              <Route path="Modules" element={< Modules/>}/>
              <Route path="Assignments" element={<Assignments/>}/>
              <Route path="Assignments/:aid" element={<AssignmentEditor/>}/>
              <Route path="Grades" element={<h2>Grades</h2>}/>
              <Route path="Quizzes" element={<h2>Quizzes</h2>}/>
              <Route path="People" element={<h2>People</h2>}/>
            </Routes>
          </div>
        </div>
      </div>
            );
            }
