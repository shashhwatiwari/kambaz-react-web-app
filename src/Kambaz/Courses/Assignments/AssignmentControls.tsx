// import { Button } from "react-bootstrap";
// import { FaPlus } from "react-icons/fa6";
// //import { useDispatch } from "react-redux";
// import { useParams, useNavigate } from "react-router";
//
// export default function AssignmentsControls() {
//     //const dispatch = useDispatch();
//     const { cid } = useParams();
//     const navigate = useNavigate();
//
//
//     return (
//         <div id="wd-assignment-controls" className="text-nowrap">
//             <Button
//                 variant="danger"
//                 size="lg"
//                 className="me-1 float-end"
//                 onClick={() => {
//                     // Don't create the assignment yet, just navigate to the editor
//                     navigate(`/Kambaz/Courses/${cid}/Assignments/new`);
//                 }}
//             >
//                 <FaPlus /> Assignment
//             </Button>
//             <Button variant="secondary" size="lg" className="me-1 float-end">
//                 <FaPlus /> Group
//             </Button>
//         </div >
//     );
// }
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function AssignmentsControls() {
    const { cid } = useParams();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";

    return (
        <div id="wd-assignment-controls" className="d-flex justify-content-between align-items-center">
            <InputGroup className="me-3" style={{ width: "300px" }}>
                <InputGroup.Text>
                    <FaSearch />
                </InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="Search for Assignments"
                />
            </InputGroup>

            <div className="text-nowrap">
                {isFaculty && (
                    <Button
                        variant="danger"
                        size="lg"
                        className="me-1"
                        onClick={() => {
                            navigate(`/Kambaz/Courses/${cid}/Assignments/new`);
                        }}
                    >
                        <FaPlus /> Assignment
                    </Button>
                )}
                <Button variant="secondary" size="lg">
                    <FaPlus /> Group
                </Button>
            </div>
        </div>
    );
}