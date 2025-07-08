import { Link } from "react-router-dom";
export default function LandingPage() {
    return (
        <div>
            <h1>Shashwat Tiwari</h1>
            <h2>NUID: 002476249</h2>
            <h2>CS5610 - Web Development Section 1 (Summer 2)</h2>
            <h2>Links</h2>
            <ul>
                <li><Link to={"/Labs"}>Labs</Link></li>
                <li><Link to={"/Kambaz"}>Kambaz</Link></li>
                <li><Link to={"https://github.com/shashhwatiwari/kambaz-react-web-app"}>Github repo</Link></li>
            </ul>
        </div>
    );
}