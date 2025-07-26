// import ModulesControls from "./ModulesControls";
// import "../../styles.css";
// import LessonControlButtons from "./LessonControlButtons";
// import { BsGripVertical } from "react-icons/bs";
// import ModuleControlButtons from "./ModuleControlButtons";
// import { useParams } from "react-router";
// import * as db from "../../Database";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { addModule, editModule, updateModule, deleteModule }
//   from "./reducer";
// import { useSelector, useDispatch } from "react-redux";
// import {FormControl} from "react-bootstrap";
//
//
// export default function Modules() {
//   const { cid } = useParams();
//   const [modules, setModules] = useState<any[]>(db.modules);
//   const [moduleName, setModuleName] = useState("");
//   const addModule = () => {
//     setModules([ ...modules, { _id: uuidv4(), name: moduleName, course: cid, lessons: [] } ]);
//     setModuleName("");
//   };
//   const deleteModule = (moduleId: string) => {
//     setModules(modules.filter((m) => m._id !== moduleId));
//   };
//
//   const editModule = (moduleId: string) => {
//     setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
//   };
//   const updateModule = (module: any) => {
//     setModules(modules.map((m) => (m._id === module._id ? module : m)));
//   };
//
//
//   const { modules } = useSelector((state: any) => state.modulesReducer);
//   const dispatch = useDispatch();
//
//
//   return (
//     <div className="me-4">
//       <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={addModule} /><br /><br /><br /><br />
//       <ul id="wd-modules" className="list-group rounded-0">
//       {modules
//           .filter((module: any) => module.course === cid)
//           .map((module: any) => (
//               <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//                   <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
//                       <div className="d-flex align-items-center">
//                           <BsGripVertical className="me-2 fs-3"/>
//                           {!module.editing && <span>{module.name}</span>}
//                           {module.editing && (
//                               <FormControl
//                                   className="w-50 d-inline-block"
//                                   defaultValue={module.name}
//                                   onChange={(e) => updateModule({...module, name: e.target.value})}
//                                   onKeyDown={(e) => {
//                                       if (e.key === "Enter") {
//                                           updateModule({...module, editing: false});
//                                       }
//                                   }}
//                               />
//                           )}
//                       </div>
//                       {module.lessons && (
//                           <ul className="wd-lessons list-group rounded-0">
//                               {module.lessons.map((lesson: any) => (
//                                   <li className="wd-lesson list-group-item p-3 ps-1">
//                                       <BsGripVertical className="me-2 fs-3"/> {lesson.name}
//                                       <LessonControlButtons/>
//                                   </li>
//                               ))}
//                           </ul>
//                       )}
//               </li>
//           ))}
//       </ul>
//     </div>
// );
// }

import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import { useState } from "react";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div className="me-4">
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
      <br /><br /><br /><br />

      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroup.Item
              key={module._id}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  {!module.editing && <span>{module.name}</span>}
                  {module.editing && (
                    <FormControl
                      className="w-50 d-inline-block"
                      defaultValue={module.name}
                      onChange={(e) =>
                        dispatch(updateModule({ ...module, name: e.target.value }))
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...module, editing: false }));
                        }
                      }}
                    />
                  )}
                </div>
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>

              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name} <LessonControlButtons />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
