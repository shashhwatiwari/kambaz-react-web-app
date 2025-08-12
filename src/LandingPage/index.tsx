// import { Link } from "react-router-dom";
// import { ButtonGroup, Button } from "react-bootstrap";
// export default function LandingPage() {
//     return (
//         <div className='d-flex flex-column justify-content-center align-items-center'>
//             <div className='text-center'>
//                 <h1>Sanshrit Bakshi</h1>
//                 <h2 className='text-danger'>NUID: <span className="text-black">002407899</span></h2>
//                 <h2>CS 5610 - Web Development - Summer 2 - 2025</h2>
//             </div>
//             <br /><br /><br />
//             <h2>Links</h2>
//             <ButtonGroup className="w-50 shadow-sm">
//                 <Button
//                     variant="outline-primary"
//                     as={Link as any}
//                     to="/Labs"
//                     className="py-3 fw-bold border-2"
//                 >
//                     Labs
//                 </Button>
//                 <Button
//                     variant="outline-success"
//                     as={Link as any}
//                     to="/Kambaz"
//                     className="py-3 fw-bold border-2"
//                 >
//                     Kambaz
//                 </Button>
//                 <Button
//                     variant="outline-dark"
//                     href="https://github.com/Sanshrit/kambaz-react-web-app"
//                     target="_blank"
//                     className="py-3 fw-bold border-2"
//                 >
//                     My GitHub
//                 </Button>
//             </ButtonGroup>
//         </div>
//     );
// }

import { Link } from "react-router-dom";
import { Card, Button, Stack } from "react-bootstrap";
import './LandingPageStyles.css';

export default function LandingPage() {
  return (
    <div className="p-4">
      <Card className="p-4 shadow-sm">
        <Card.Body>
          <Card.Title as="h1">Shashwat Tiwari</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            NUID: 002476249
          </Card.Subtitle>
          <Card.Text>
            CS5610 - Web Development Section 1 [Summer 2]
          </Card.Text>

          <h4 className="mt-4">Links</h4>
          <Stack gap={2} className="col-md-5">
            <Link to="/Labs">
              <Button variant="light" className="text-dark border">Labs</Button>
            </Link>
            <Link to="/Kambaz">
              <Button variant="danger" className="text-white">Kambaz</Button>
            </Link>
            <a
              href="https://github.com/shashhwatiwari/kambaz-react-web-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="github-pill text-white w-100">
                GitHub Repo
              </Button>
            </a>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
}
