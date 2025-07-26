import Labs from "./Labs";
import Kambaz from "./Kambaz";
import LandingPage from "./Landing Page";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import store from "./Kambaz/store";
import { Provider } from "react-redux";


export default function App() {
  return (
    <HashRouter>
        <Provider store={store}>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="LandingPage" />} />
              <Route path="/Labs/*" element={<Labs />} />
              <Route path="/Kambaz/*" element={<Kambaz />} />
              <Route path='/LandingPage' element={<LandingPage/>} />
            </Routes>
          </div>
        </Provider>
    </HashRouter>
);}
