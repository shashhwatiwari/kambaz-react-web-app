// import { Link } from "react-router-dom";
// import { Nav } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {useLocation} from "react-router";
//
// export default function TOC() {
//   const { pathname } = useLocation();
//   return (
//     <div className="p-4">
//       <h2 className="mb-3">Table of Contents</h2>
//       <Nav className="nav-pills d-flex justify-content-start gap-2 flex-wrap">
//         <Nav.Item>
//           <Nav.Link as={Link} to="/Labs" className="text-dark bg-white border w-auto">
//             Labs
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/Labs/Lab1" className="text-dark bg-white border w-auto" active={pathname.includes("Lab1")}>
//             Lab 1
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/Labs/Lab2" className="text-dark bg-white border w-auto" active={pathname.includes("Lab2")}>
//             Lab 2
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/Labs/Lab3" className="text-dark bg-white border w-auto" active={pathname.includes("Lab3")}>
//             Lab 3
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/Kambaz" className="text-white bg-danger w-auto">
//             Kambaz
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/LandingPage" className="text-white bg-secondary w-auto">
//             Landing Page
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <div className="p-4">
      <h2 className="mb-3">Table of Contents</h2>
      <Nav className="nav-pills d-flex justify-content-start gap-2 flex-wrap">
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/Labs"
            className={`w-auto border ${pathname === "/Labs" ? "bg-indigo text-white" : "text-danger bg-white"}`}
          >
            Labs
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/Labs/Lab1"
            className={`w-auto border ${pathname === "/Labs" || pathname.includes("Lab1") ? "bg-indigo text-white" : "text-danger bg-white"}`}
          >
            Lab 1
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/Labs/Lab2"
            className={`w-auto border ${pathname.includes("Lab2") ? "bg-indigo text-white" : "text-danger bg-white"}`}
          >
            Lab 2
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/Labs/Lab3"
            className={`w-auto border ${pathname.includes("Lab3") ? "bg-indigo text-white" : "text-danger bg-white"}`}
          >
            Lab 3
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/Labs/Lab4"
            className={`w-auto border ${pathname.includes("Lab4") ? "bg-indigo text-white" : "text-danger bg-white"}`}
          >
            Lab 4
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/Labs/Lab5"
            className={`w-auto border ${pathname.includes("Lab5") ? "bg-indigo text-white" : "text-danger bg-white"}`}
          >
            Lab 5
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/Kambaz"
            className={`w-auto border ${pathname.includes("Kambaz") ? "bg-indigo text-white" : "text-danger bg-white"}`}
          >
            Kambaz
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="https://github.com/shashhwatiwari/kambaz-react-web-app"
            className={`w-auto border ${pathname.includes("Github") ? "bg-indigo text-white" : "text-danger bg-white"}`}
          >
            Github
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/LandingPage"
            className={`w-auto border ${pathname.includes("LandingPage") ? "bg-indigo text-white" : "text-danger bg-white"}`}
          >
            Landing Page
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Custom style for #747bff background */}
      <style>{`
        .bg-indigo {
          background-color: #e60000 !important;
        }
      `}</style>
    </div>
  );
}
