import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", 
    "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const { pathname } = useLocation();
    return (
        
        <ul className="wd-navigation">
            <span style={{color:"grey", fontSize:"12px", 
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block", marginLeft: "10px"}}>202430_2 Spring 2024 Semester</span>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
                    <Link to={link}>{link}</Link>
                </li>
            ))}
        </ul>
    );
    }
    export default CourseNavigation;