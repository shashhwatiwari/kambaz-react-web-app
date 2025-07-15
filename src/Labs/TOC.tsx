import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TOC() {
  return (
    <div className="p-4">
      <h2 className="mb-3">Table of Contents</h2>
      <Nav className="flex-column nav-pills gap-2 w-auto">
        <Nav.Item>
          <Nav.Link as={Link} to="/Labs" className="text-dark bg-white border w-auto">
            Labs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/Labs/Lab1" className="text-dark bg-white border w-auto">
            Lab 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/Labs/Lab2" className="text-dark bg-white border w-auto">
            Lab 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/Labs/Lab3" className="text-dark bg-white border w-auto">
            Lab 3
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/Kambaz" className="text-white bg-danger w-auto">
            Kambaz
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/LandingPage" className="text-white bg-secondary w-auto">
            Landing Page
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

