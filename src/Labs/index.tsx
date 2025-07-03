import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
      <div id="wd-labs">
          <h1>Shashwat Tiwari</h1>
          <h2>CS5610 Web Development Section - 1 (Summer 2)</h2>
          Please&nbsp;<a href="https://github.com/shashhwatiwari/kambaz-react-web-app" id="wd-github">Click
              here</a> for the Repository
          <h1>Labs</h1>
          <TOC/>
          <Routes>
              <Route path="/" element={<Navigate to="Lab1"/>}/>
              <Route path="Lab1" element={<Lab1/>}/>
              <Route path="Lab2/*" element={<Lab2/>}/>
              <Route path="Lab3/*" element={<Lab3/>}/>
          </Routes>
      </div>
  );
}
