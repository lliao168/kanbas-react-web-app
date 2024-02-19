import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
import {HiEllipsisVertical } from "react-icons/hi2";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { GrLink } from "react-icons/gr";
import { FaArrowRightFromBracket, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
            {/* <!-- Add buttons here --> */}
            <div>
                <li className="list-group-item d-flex justify-content-end align-items-center buttons mt-3">
                    <button className="btn btn-light float-end m-1">Collapse All</button>
                    <button className="btn btn-light float-end m-1">View Progress</button>
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaCheckCircle style={{color:"green"}}/>Push All
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-danger float-end m-1">+ Module</button>
                    <button type="button" className="btn btn-light float-end m-1">
                        <FaEllipsisV/>
                    </button>
                </li>

                <hr style={{color:"grey", marginLeft:"20px", marginRight:"20px"}} />
                                        
            </div>
            <ul className="list-group wd-modules">
                {modulesList.map((module) => (
                    <li
                        className="list-group-item"
                        onClick={() => setSelectedModule(module)}>
                        <div>
                            <PiDotsSixVerticalBold style={{fontSize:"1.3em"}} className="me-2" />
                            <FaCaretDown className="me-2"/>
                            <span style={{fontWeight:"bold"}}>{module.name}</span>
                            <span className="float-end">
                                <FaCheckCircle className="text-success me-2" />
                                <FaPlus className="ms-2" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                        </div>
                        {selectedModule._id === module._id && (
                        <ul className="list-group">    
                            <li className="list-group-item">
                                <PiDotsSixVerticalBold style={{fontSize:"1.3em"}} className="me-3" />
                                {module.category}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </li>
                            {module.lessons?.map((lesson) => (        
                            <li className="list-group-item">
                                <PiDotsSixVerticalBold style={{fontSize:"1.3em"}} className="me-2" />
                                <span className="ms-4">{lesson.name}</span>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </li>
                            ))} 

                            <li className="list-group-item">
                                <PiDotsSixVerticalBold style={{fontSize:"1.3em"}} className="me-3" />
                                {module.category2}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </li>
                            {module.lessons2?.map((lesson) => (        
                            <li className="list-group-item">
                                <PiDotsSixVerticalBold style={{fontSize:"1.3em"}} className="me-3" />
                                <span className="ms-4">{lesson.name}</span>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </li>
                            ))} 

                            <li className="list-group-item">
                                <PiDotsSixVerticalBold style={{fontSize:"1.3em"}} className="me-3" />
                                {module.category3}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </li>
                            {module.lessons3?.map((lesson) => (        
                            <li className="list-group-item">
                                <PiDotsSixVerticalBold style={{fontSize:"1.3em"}} className="me-2" />
                                <GrLink style={{color:"green"}} />
                                <Link to="#" className="ms-4" style={{textDecoration:"none", color:"crimson"}}>{lesson.name}</Link>
                                <FaArrowRightFromBracket className="ms-2" style={{color:"crimson"}} />
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </li>
                            ))} 
                        </ul>
                        )} 
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;