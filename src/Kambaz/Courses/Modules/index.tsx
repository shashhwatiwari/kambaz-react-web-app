// export default function Modules() {
//     return (
//       <div>
//         <button>Collapse All</button>
//         <button>View Progress</button>
//         <button>Publish All</button>
//         <button>+ Module</button>
//         <ul id="wd-modules">
//           <li className="wd-module">
//             <div className="wd-title">Week 1 - Introduction to Data Structures</div>
//             <ul className="wd-lessons">
//               <li className="wd-lesson">
//                 <span className="wd-title">LEARNING OBJECTIVES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Understand fundamental data structures</li>
//                   <li className="wd-content-item">Learn about arrays and linked lists</li>
//                   <li className="wd-content-item">Analyze time and space complexity</li>
//                 </ul>
//               </li>
//               <li className="wd-lesson">
//                 <span className="wd-title">READING</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Data Structures & Algorithms - Chapter 1</li>
//                 </ul>
//               </li>
//               <li className="wd-lesson">
//                 <span className="wd-title">SLIDES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Introduction to Data Structures</li>
//                   <li className="wd-content-item">Array Operations and Implementation</li>
//                   <li className="wd-content-item">Linked List Basics</li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//           <li className="wd-module">
//             <div className="wd-title">Week 2 - Stacks and Queues</div>
//             <ul className="wd-lessons">
//               <li className="wd-lesson">
//                 <span className="wd-title">LEARNING OBJECTIVES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Implement stack data structure</li>
//                   <li className="wd-content-item">Understand queue operations (FIFO)</li>
//                   <li className="wd-content-item">Apply stacks and queues to real-world problems</li>
//                 </ul>
//               </li>
//               <li className="wd-lesson">
//                 <span className="wd-title">READING</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Stacks and Queues</li>
//                 </ul>
//               </li>
//               <li className="wd-lesson">
//                 <span className="wd-title">SLIDES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Stack Operations: Push, Pop, Peek</li>
//                   <li className="wd-content-item">Priority Queues and Deques</li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//           <li className="wd-module">
//             <div className="wd-title">Week 3 - Trees and Binary Search</div>
//             <ul className="wd-lessons">
//               <li className="wd-lesson">
//                 <span className="wd-title">LEARNING OBJECTIVES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Understand tree data structures</li>
//                 </ul>
//               </li>
//               <li className="wd-lesson">
//                 <span className="wd-title">SLIDES</span>
//                 <ul className="wd-content">
//                   <li className="wd-content-item">Binary Tree Fundamentals</li>
//                   <li className="wd-content-item">In-order, Pre-order, Post-order Traversal</li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//   );
// }
import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />  LEARNING OBJECTIVES <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Introduction to the course</span> <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Learn what is Web Development</span><LessonControlButtons />
                        </ListGroup.Item>

                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />   READING <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Full Stack Developer - Chapter 1 - Introduction</span> <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Full Stack Developer - Chapter 2 - Creating User</span><LessonControlButtons />
                        </ListGroup.Item>

                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Introduction to Web Development</span><LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Creating an HTTP server with Node.js</span><LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Creating a React Application</span><LessonControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>

                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" />Week 2<ModuleControlButtons /> </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Understand HTML document structure</span><LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Learn basic HTML elements and attributes</span><LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />READING<LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Full Stack Developer - Chapter 3 - HTML Basics</span><LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Full Stack Developer - Chapter 4 - HTML Elements</span><LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">HTML Document Structure</span><LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Common HTML Elements</span><LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">HTML Attributes and Properties</span><LessonControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" /> Week 3 <ModuleControlButtons /></div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Introduction to CSS and styling concepts</span><LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> <span className="ms-5">Learn CSS selectors and properties</span><LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />READING<LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Full Stack Developer - Chapter 5 - CSS Fundamentals</span><LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> <span className="ms-5">Full Stack Developer - Chapter 6 - CSS Layout</span><LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Introduction to CSS</span><LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">CSS Selectors and Specificity</span><LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /><span className="ms-5">Box Model and Layout Basics</span><LessonControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}