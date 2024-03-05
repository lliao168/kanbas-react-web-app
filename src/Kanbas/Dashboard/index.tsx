import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
// import { courses } from "../Database";
import { FaEllipsisVertical, FaFilePen} from "react-icons/fa6";
import "./index.css";

function Dashboard() {
    const [courses, setCourses] = useState(db.courses);
    return (
        <div className="p-4">
        <h1>Dashboard</h1> 
        <hr />
        <h2 className="ms-4">Published Courses ({courses.length})</h2> 
        <hr className="ms-4 mb-0"/>
        <div className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4 mt-0 ms-2">
              {courses.map((course) => (<div key={course._id} className="col" style={{width: "300px"}}>
                    <div className="card">
                        <img src={`/images/${course.image}`} className="card-img-top"
                            style={{height: "150px"}}/>
                        <Link to={"#"} className="position-absolute top-0 end-0 p-3"><FaEllipsisVertical style={{color:"white", fontSize:"20px"}}/></Link>    
                        <div className="card-body">
                            <Link className="card-title" to={`/Kanbas/Courses/${course._id}`}
                                style={{textDecoration: "none", color: "navy", fontWeight: "bold", 
                                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block"}}>
                                {course.name}</Link>
                            <p className="card-text mb-0" style={{ color:"grey", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block"}}>{course.courseNumber}</p>
                            <p className="card-text" style={{ fontSize: '12px', color:"grey", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block"}}>{course.term}</p>
                            <Link to={`/Kanbas/Courses/${course._id}/Home`}> <FaFilePen style={{ color: "grey"}}/></Link>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    </div>
    );
}
export default Dashboard;