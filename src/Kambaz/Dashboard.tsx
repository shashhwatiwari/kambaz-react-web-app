// import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
//       <div id="wd-dashboard-courses">
//         <div className="wd-dashboard-course">
//           < Card.Img variant="top" src="/images/webdev.png" width="100%" height={160} />
//           <div>
//             <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/2101/Home">
//               CS2101 Web Development
//             </Link>
//             < Card.Text className="wd-dashboard-course-title">
//               Learn to build modern web apps using React and Node.js
//             </ Card.Text>
//             <Link to="/Kambaz/Courses/2101/Home"> Go </Link>
//           </div>
//         </div>
//
//         <div className="wd-dashboard-course">
//           <img src="/logo192.png" width={100} />
//           <div>
//             <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/2150/Home">
//               CS2150 Algorithms & Data Structures
//             </Link>
//             <p className="wd-dashboard-course-title">
//               In-depth study of searching, sorting, graphs, and recursion
//             </p>
//             <Link to="/Kambaz/Courses/2150/Home"> Go </Link>
//           </div>
//         </div>
//
//         <div className="wd-dashboard-course">
//           <img src="/logo192.png" width={100} />
//           <div>
//             <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/2300/Home">
//               CS2300 Artificial Intelligence
//             </Link>
//             <p className="wd-dashboard-course-title">
//               Explore AI fundamentals like search, logic, and learning
//             </p>
//             <Link to="/Kambaz/Courses/2300/Home"> Go </Link>
//           </div>
//         </div>
//
//         <div className="wd-dashboard-course">
//           <img src="/logo192.png" width={100} />
//           <div>
//             <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/2405/Home">
//               CS2405 Human-Computer Interaction
//             </Link>
//             <p className="wd-dashboard-course-title">
//               Study user interfaces and user experience design
//             </p>
//             <Link to="/Kambaz/Courses/2405/Home"> Go </Link>
//           </div>
//         </div>
//
//         <div className="wd-dashboard-course">
//           <img src="/logo192.png" width={100} />
//           <div>
//             <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/2500/Home">
//               CS2500 Cybersecurity Basics
//             </Link>
//             <p className="wd-dashboard-course-title">
//               Introduction to digital security, encryption, and threats
//             </p>
//             <Link to="/Kambaz/Courses/2500/Home"> Go </Link>
//           </div>
//         </div>
//
//         <div className="wd-dashboard-course">
//           <img src="/logo192.png" width={100} />
//           <div>
//             <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/2601/Home">
//               CS2601 Cloud Computing
//             </Link>
//             <p className="wd-dashboard-course-title">
//               Learn about AWS, distributed systems, and scalability
//             </p>
//             <Link to="/Kambaz/Courses/2601/Home"> Go </Link>
//           </div>
//         </div>
//
//         <div className="wd-dashboard-course">
//           <img src="/logo192.png" width={100} />
//           <div>
//             <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/2707/Home">
//               CS2707 Blockchain Fundamentals
//             </Link>
//             <p className="wd-dashboard-course-title">
//               Understand how blockchains and smart contracts work
//             </p>
//             <Link to="/Kambaz/Courses/2707/Home"> Go </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="p-3">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/2101/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img variant="top" src="/images/webdev.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS2101 Web Development
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Learn to build modern web apps using React and Node.js
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/2150/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img variant="top" src="/images/algo.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS2150 Algorithms & Data Structures
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    In-depth study of searching, sorting, graphs, and recursion
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* Repeat <Col> blocks for other courses as needed... */}

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/2150/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img variant="top" src="/images/AI.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS2300 Artificial Intelligence
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >Explore AI fundamentals like search, logic, and learning
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/2150/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img variant="top" src="/images/HCI.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS2450 Human Computer Interaction
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >Study user interfaces and user experience design
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/2150/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img variant="top" src="/images/cybersec.jpg" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS2500 Cybersecurity Basics
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >Introduction to digital security, encryption, and threats
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/2150/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img variant="top" src="/images/cloud.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS2707 Cloud Computing Basics
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >Learn about AWS, distributed systems, and scalability
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/2150/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img variant="top" src="/images/blockchain.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS2707 Blockchain Fundamentals
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >Understand how blockchains and smart contracts work
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
