// import { useParams } from "react-router";
import { courses } from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import { FaGlasses } from "react-icons/fa6";
import Home from "./Home";
import Assignments from "./Assignments";

function Courses() {
        const { courseId } = useParams();
        const course = courses.find((course) => course._id === courseId);
    return (
        <div>
            <div className="d-none d-md-block">
                    {/* <h4><HiMiniBars3 style={{color:"crimson", fontWeight:"normal"}}/> {course?.name}</h4> */}
                    <li className="d-flex justify-content-end align-items-center" style={{ marginLeft: "20px"}}>
                                <div className="col-auto">
                                    <button className="btn btn-primary border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#collpaseKanbasNavigation" aria-expanded="false" aria-controls="collpaseKanbasNavigation" style={{backgroundColor: "white"}}>
                                        <HiMiniBars3 style={{color:"crimson", fontWeight:"normal"}}/>
                                    </button>
                                </div>    
                                <div className="d-flex flex-grow-1 align-item-center mt-3">
                                    <nav style={{ "--bs-breadcrumb-divider": "'>'" } as any} aria-label="breadcrumb">
                                        <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#" style={{textDecoration: "none", color:"crimson"}}>{course?.name}</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Modules</li>
                                        </ul>
                                    </nav>   
                                </div>    
                                <div>
                                    <button type="button" className="btn btn-light">
                                        <FaGlasses/><span className="ms-2">Student View</span>
                                    </button>
                                </div>    
                    </li>
            </div>    
                <CourseNavigation />
                <div>
                    <div
                        className="overflow-y-scroll position-fixed bottom-0 end-0"
                        style={{ left: "260px", top: "60px" }} >
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home/>} />
                            <Route path="Modules" element={<Modules/>} />
                            <Route path="Piazza" element={<h1>Piazza</h1>} />
                            <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                            <Route path="Assignments" element={<Assignments/>} />
                            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                            <Route path="Grades" element={<h1>Grades</h1>} />
                            <Route path="People" element={<h1>People</h1>} />
                            <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
                            <Route path="Discussions" element={<h1>Discussions</h1>} />
                            <Route path="Annoucements" element={<h1>Announcements</h1>} />
                            <Route path="Pages" element={<h1>Pages</h1>} />
                            <Route path="Files" element={<h1>Files</h1>} />
                            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                            <Route path="Settings" element={<h1>Settings</h1>} />
                        </Routes>
                    </div>
                </div>
        </div>
    )
}

export default Courses;