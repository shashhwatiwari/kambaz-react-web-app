import { FaPlus } from "react-icons/fa6";
import { Button, InputGroup } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";
export default function AssignmentControls() {
    return (
        <div id="wd-assignments-controls"
             className="d-flex justify-content-between align-items-center w-100"
        style={{
         marginLeft: "-1rem",
         marginRight: "-1rem",
         paddingLeft: "1rem",
         paddingRight: "1rem"
     }}>
            <InputGroup className="me-1" style={{width: "40%"}}>
                <InputGroup.Text>
                    <CiSearch/>
                </InputGroup.Text>
                <Form.Control
                    type="search"
                    placeholder="Search..."
                    size="lg"
                />
            </InputGroup>

            <div className="ms-auto">
                <Button variant="secondary" size="lg" className="me-1"
                        id="wd-add-assignment-group-btn">
                    <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                    Group
                </Button>
                <Button variant="danger" size="lg" className="me-1" id="wd-add-assignment-btn">
                    <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                    Assignment
                </Button>
            </div>
        </div>
    );
}