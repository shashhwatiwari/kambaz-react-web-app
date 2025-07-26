// // import { useState } from "react";
// // import { v4 as uuidv4 } from "uuid";
// import { Link } from "react-router-dom";
// // import * as db from "./Database";
// import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
//
//
// interface DashboardProps {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => void;
//   deleteCourse: (courseId: string) => void;
//   updateCourse: () => void;
// }
//
// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse
// }: DashboardProps)  {
//
//   return (
//     <>
//       <div id="wd-dashboard">
//         <h1 id="wd-dashboard-title">Dashboard</h1>
//         <hr/>
//         <div className="d-flex justify-content-between align-items-center">
//           <h5 className="mb-0">New Course</h5>
//           <div className="d-flex justify-content-end gap-2">
//             <Button
//                 variant="warning"
//                 onClick={updateCourse}
//                 id="wd-update-course-button"
//             >
//               Update
//             </Button>
//
//             <Button
//                 variant="success"
//                 onClick={addNewCourse}
//                 id="wd-add-course-button"
//             >
//               Add
//             </Button>
//           </div>
//         </div>
//
//         <FormControl
//             className="my-2"
//             placeholder="New Course"
//             value={course.name}
//             onChange={(e) => setCourse({...course, name: e.target.value})}
//         />
//
//         <FormControl
//             as="textarea"
//             rows={3}
//             className="mb-3"
//           placeholder="New Description"
//           value={course.description}
//           onChange={(e) => setCourse({ ...course, description: e.target.value })}
//         />
//         <hr/>
//         <hr/>
//         <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//         <hr/>
//         <div id="wd-dashboard-courses">
//           <Row xs={1} md={5} className="g-4">
//             {courses.map((course) => (
//               <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//                 <Card>
//                   <Link to={`/Kambaz/Courses/${course._id}/Home`}
//                         className="wd-dashboard-course-link text-decoration-none text-dark">
//                     <Card.Img src={`/images/${course.image}`} variant="top" width="100%" height={160} />
//                     <Card.Body className="card-body">
//                       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                         {course.name} </Card.Title>
//                       <Card.Text className="wd-dashboard-course-description overflow-hidden"
//                                  style={{height: "100px"}}>
//                         {course.description} </Card.Text>
//                         <div className="d-flex justify-content-between mt-2">
//                           {/* Left side */}
//                           <Button variant="primary">Go</Button>
//
//                           {/* Right side */}
//                           <div className="d-flex gap-2">
//                             <Button
//                                 id="wd-edit-course-click"
//                                 variant="warning"
//                                 onClick={(event) => {
//                                   event.preventDefault();
//                                   setCourse(course);
//                                 }}
//                             >
//                               Edit
//                             </Button>
//
//                             <Button
//                                 id="wd-delete-course-click"
//                                 variant="danger"
//                                 onClick={(event) => {
//                                   event.preventDefault();
//                                   deleteCourse(course._id);
//                                 }}
//                             >
//                               Delete
//                             </Button>
//                           </div>
//                         </div>
//                     </Card.Body>
//                   </Link>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </div>
//       </div>
//     </>
//   );
// }
//

import { Link } from "react-router-dom";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";



export default function Dashboard(
{ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; }) {
  return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr/>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">New Course</h5>
          <div className="d-flex justify-content-end gap-2">
            <Button
                variant="warning"
                onClick={updateCourse}
                id="wd-update-course-button">
              Update
            </Button>

            <Button
                variant="success"
                onClick={addNewCourse}
                id="wd-add-course-button">

              Add
            </Button>
          </div>
        </div>

        <FormControl
            className="my-2"
            placeholder="New Course"
            value={course?.name || ""}
            onChange={(e) => setCourse({...course, name: e.target.value})}
        />

        <FormControl
            as="textarea"
            rows={3}
            className="mb-3"
            placeholder="New Description"
            value={course?.description || ""}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
        />
        <hr/>
        <hr/>
        <h2 id="wd-dashboard-published">Published Courses ({courses?.length || 0})</h2>
        <hr/>
        <div id="wd-dashboard-courses">
          <Row xs={1} md={5} className="g-4">
            {courses?.map((course) => (
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img src={`/images/${course.image}`} variant="top" width="100%" height={160} />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name} </Card.Title>
                      <Card.Text className="wd-dashboard-course-description overflow-hidden"
                                 style={{height: "100px"}}>
                        {course.description} </Card.Text>
                        <div className="d-flex justify-content-between mt-2">
                          {/* Left side */}
                          <Button variant="primary">Go</Button>

                          {/* Right side */}
                          <div className="d-flex gap-2">
                            <Button
                                id="wd-edit-course-click"
                                variant="warning"
                                onClick={(event) => {
                                  event.preventDefault();
                                  setCourse(course);
                                }}
                            >
                              Edit
                            </Button>

                            <Button
                                id="wd-delete-course-click"
                                variant="danger"
                                onClick={(event) => {
                                  event.preventDefault();
                                  deleteCourse(course._id);
                                }}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
  );
}