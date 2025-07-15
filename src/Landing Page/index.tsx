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
