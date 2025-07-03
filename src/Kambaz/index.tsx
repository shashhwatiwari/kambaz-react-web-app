import Account from "./Account";
import {Routes, Route, Navigate} from "react-router-dom"
import KambazNavigation from "./Navigation";
import Dashboard from "./Dashboard.tsx";
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
                      </Routes>
                    </td>
              </tr>
          </table>
      </div>
);}
