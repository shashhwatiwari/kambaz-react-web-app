// // import { FormControl, ListGroup } from "react-bootstrap";
// // import ModulesControls from "./ModulesControls";
// // import { BsGripVertical } from "react-icons/bs";
// // import ModuleControlButtons from "./ModuleControlButtons";
// // import LessonControlButtons from "./LessonControlButtons";
// // import { useParams } from "react-router";
// // import { useState } from "react";
// // import { addModule, editModule, updateModule, deleteModule } from "./reducer";
// // import { useSelector, useDispatch } from "react-redux";
// //
// // export default function Modules() {
// //   const { cid } = useParams();
// //   const [moduleName, setModuleName] = useState("");
// //   const { modules } = useSelector((state: any) => state.modulesReducer);
// //   const dispatch = useDispatch();
// //
// //   const currentUser = useSelector((state: any) => state.accountReducer?.currentUser);
// //   const isFaculty = currentUser?.role === "FACULTY";
// //
// //   return (
// //     <div className="me-4">
// //       {/* showing the controls  when user is faculty */}
// //       {isFaculty && (
// //         <>
// //           <ModulesControls
// //             setModuleName={setModuleName}
// //             moduleName={moduleName}
// //             addModule={() => {
// //               dispatch(addModule({ name: moduleName, course: cid }));
// //               setModuleName("");
// //             }}
// //           />
// //           <br /><br /><br /><br />
// //         </>
// //       )}
// //
// //       <ListGroup id="wd-modules" className="rounded-0">
// //         {modules
// //           .filter((module: any) => module.course === cid)
// //           .map((module: any) => (
// //             <ListGroup.Item
// //               key={module._id}
// //               className="wd-module p-0 mb-5 fs-5 border-gray"
// //             >
// //               <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
// //                 <div className="d-flex align-items-center">
// //                   <BsGripVertical className="me-2 fs-3" />
// //
// //                   {!module.editing && <span>{module.name}</span>}
// //                   {module.editing && isFaculty && (
// //                     <FormControl
// //                       className="w-50 d-inline-block"
// //                       defaultValue={module.name}
// //                       onChange={(e) =>
// //                         dispatch(updateModule({ ...module, name: e.target.value }))
// //                       }
// //                       onKeyDown={(e) => {
// //                         if (e.key === "Enter") {
// //                           dispatch(updateModule({ ...module, editing: false }));
// //                         }
// //                       }}
// //                     />
// //                   )}
// //                 </div>
// //
// //                 {isFaculty && (
// //                   <ModuleControlButtons
// //                     moduleId={module._id}
// //                     deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
// //                     editModule={(moduleId) => dispatch(editModule(moduleId))}
// //                   />
// //                 )}
// //               </div>
// //
// //               {module.lessons && (
// //                 <ListGroup className="wd-lessons rounded-0">
// //                   {module.lessons.map((lesson: any) => (
// //                     <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1">
// //                       <BsGripVertical className="me-2 fs-3" />
// //                       {lesson.name}
// //                       {/* Only show LessonControlButtons if user is FACULTY */}
// //                       {isFaculty && <LessonControlButtons />}
// //                     </ListGroup.Item>
// //                   ))}
// //                 </ListGroup>
// //               )}
// //             </ListGroup.Item>
// //           ))}
// //       </ListGroup>
// //     </div>
// //   );
// // }
// import { FormControl, ListGroup } from "react-bootstrap";
// import ModulesControls from "./ModulesControls";
// import { BsGripVertical } from "react-icons/bs";
// import ModuleControlButtons from "./ModuleControlButtons";
// import LessonControlButtons from "./LessonControlButtons";
// import { useParams } from "react-router";
// import { useState } from "react";
// import { addModule, editModule, updateModule, deleteModule } from "./reducer";
// import { useSelector, useDispatch } from "react-redux";
//
// export default function Modules() {
//   const { cid } = useParams();
//   const [moduleName, setModuleName] = useState("");
//   const { modules } = useSelector((state: any) => state.modulesReducer);
//   const dispatch = useDispatch();
//
//   const currentUser = useSelector((state: any) => state.accountReducer?.currentUser);
//   const isFaculty = currentUser?.role === "FACULTY";
//
//   return (
//     <div className="me-4">
//       <ModulesControls
//         setModuleName={setModuleName}
//         moduleName={moduleName}
//         addModule={() => {
//           dispatch(addModule({ name: moduleName, course: cid }));
//           setModuleName("");
//         }}
//         isFaculty={isFaculty}
//       />
//       <br /><br /><br /><br />
//
//       <ListGroup id="wd-modules" className="rounded-0">
//         {modules
//           .filter((module: any) => module.course === cid)
//           .map((module: any) => (
//             <ListGroup.Item
//               key={module._id}
//               className="wd-module p-0 mb-5 fs-5 border-gray"
//             >
//               <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
//                 <div className="d-flex align-items-center">
//                   <BsGripVertical className="me-2 fs-3" />
//
//                   {!module.editing && <span>{module.name}</span>}
//                   {module.editing && isFaculty && (
//                     <FormControl
//                       className="w-50 d-inline-block"
//                       defaultValue={module.name}
//                       onChange={(e) =>
//                         dispatch(updateModule({ ...module, name: e.target.value }))
//                       }
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter") {
//                           dispatch(updateModule({ ...module, editing: false }));
//                         }
//                       }}
//                     />
//                   )}
//                 </div>
//
//                 {isFaculty && (
//                   <ModuleControlButtons
//                     moduleId={module._id}
//                     deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
//                     editModule={(moduleId) => dispatch(editModule(moduleId))}
//                   />
//                 )}
//               </div>
//
//               {module.lessons && (
//                 <ListGroup className="wd-lessons rounded-0">
//                   {module.lessons.map((lesson: any) => (
//                     <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1">
//                       <BsGripVertical className="me-2 fs-3" />
//                       {lesson.name}
//                       {/* Only show LessonControlButtons if user is FACULTY */}
//                       {isFaculty && <LessonControlButtons />}
//                     </ListGroup.Item>
//                   ))}
//                 </ListGroup>
//               )}
//             </ListGroup.Item>
//           ))}
//       </ListGroup>
//     </div>
//   );
// }

import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { addModule, editModule, updateModule, deleteModule, setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client.ts";
import * as modulesClient from "./client.ts";
export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";
    const dispatch = useDispatch();
    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));

    };
    const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
    };
    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };
    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };

    useEffect(() => {
        fetchModules();
    }, []);

    return (
        <div>
            <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={createModuleForCourse} />
            <br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup className="wd-lessons rounded-0">
                    {modules.map((module: any) => (
                        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {!module.editing && module.name}
                                {module.editing && (
                                    <FormControl className="w-50 d-inline-block"
                                        onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                saveModule({ ...module, editing: false });
                                            }
                                        }}
                                        defaultValue={module.name} />
                                )}
                                <ModuleControlButtons moduleId={module._id} deleteModule={(moduleId) => removeModule(moduleId)} editModule={(moduleId) => dispatch(editModule(moduleId))} />
                            </div>
                            {module.lessons && (
                                <ListGroup className="wd-lessons rounded-0">
                                    {
                                        module.lessons.map((lesson: any) => (
                                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                                <BsGripVertical className="me-2 fs-3" /> {lesson.name} {isFaculty && <LessonControlButtons />}
                                            </ListGroup.Item>
                                        ))
                                    }
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    ))
                    }
                </ListGroup>
            </ListGroup>
        </div>
    );
}