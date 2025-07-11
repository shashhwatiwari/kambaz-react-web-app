import Account from "./Account";
import {Routes, Route, Navigate} from "react-router-dom"
import KambazNavigation from "./Navigation";
import Dashboard from "./Dashboard.tsx";
import Courses from "./Courses";
export default function Kambaz() {
  return (
      <div id="wd-kambaz">
          <table>
              <tr>
                  <td valign="top">
                      <KambazNavigation/>
                  </td>
                  <td valign="top">
                      <h1>Kambaz</h1>
                      <Routes>
                          <Route path="/" element={<Navigate to="Account"/>}/>
                          <Route path="/Account/*" element={<Account/>}/>
                          <Route path="/Dashboard" element={<Dashboard/>}/>
                          <Route path="/Courses/:cid/*" element={<Courses />} />
                          <Route path="/Calendar" element={<h1>Calendar</h1>} />
                          <Route path="/Inbox" element={<h1>Inbox</h1>} />
                      </Routes>
                    </td>
              </tr>
          </table>
      </div>
);}
