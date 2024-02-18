import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { FaCaretDown, FaPlus } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { PiDotsSixVerticalBold } from "react-icons/pi";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
    return (
        <>
        <div className="flex-fill">
            {/* {<!-- Add buttons and other fields here -->} */}
            <div style={{margin:"5px", padding:"15px"}}>
                              <li className="list-group-item d-flex justify-content-end align-items-center">
                                <div className="col float-start">
                                  
                                  <input type="text" className="form-control w-25" id="points" placeholder="Search for Assignment"/>
                                </div>
                                  <button type="button" className="btn btn-light float end m-2">
                                    + Group
                                  </button>
                                  <button type="button" className="btn btn-danger float end m-2">
                                    + Assignments
                                  </button>
                                  <button type="button" className="btn btn-light float-end m-2">
                                    <FaEllipsisV/>
                                  </button>
                              </li>
                        
            </div>
            <hr/>
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <PiDotsSixVerticalBold style={{fontSize:"1.3em"}}/> 
                        <FaCaretDown className="ms-2 me-2"/>
                        Assignments
                        
                        <span className="float-end">
                            <button className="btn btn-light rounded border border-light">
                                        40% of Total
                            </button>
                            <FaPlus className="ms-2" />
                            <FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                        <li className="list-group-item">
                            <PiDotsSixVerticalBold style={{fontSize:"1.3em"}}/> 
                            <HiOutlinePencilSquare className="ms-3" style={{color:"green"}}/>                           
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{textDecoration:"none", color:"black", fontWeight:"bold"}} className="ms-3">{assignment.title}</Link>
                            <div className="ms-3 mb-2" style={{flexWrap:"wrap", overflowWrap:"break-word"}}>    
                                <Link to="#" className="" style={{textDecoration: "none", color:"crimson", fontSize:"0.8em", marginLeft:"55px"}}>Multiple modules </Link> 
                                <span style={{color:"grey", fontSize:"0.8em"}}>| Due date: 2024-01-22 23:59:59 | 100pts</span>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success me-3" /><FaEllipsisV className="me-4" />
                                </span>
                            </div>    
                            
                        </li>))}
                    </ul>
                </li>
            </ul>
        </div>
        </>
    );
}
export default Assignments;