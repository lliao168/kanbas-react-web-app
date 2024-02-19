import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments, quizzes } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
    const { quizId } = useParams();
    const quiz = quizzes.find(
    (quiz) => quiz._id === quizId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="flex-fill p-4" >
            <div>
                            <li className="list-group-item d-flex justify-content-end align-items-center">
                                <FaCheckCircle style={{color:"green"}}/>
                                    <span className="m-1" style={{color:"green"}}>Published</span>
                                    <button type="button" className="btn btn-light float-end m-2">
                                        <FaEllipsisV/>
                                    </button>
                            </li>
                            <hr className="mt-0" style={{color:"grey"}} />
            </div>
            <form>
                <div className="row g-3 justify-content-center">
                    <div className="col-12">
                        <label htmlFor="Assignment Name"
                            className="form-label">
                            Assignment Name</label>
                        <input value={assignment?.title}
                            className="form-control mb-2" />
                    </div>    

                    <div className="col-12">
                        <textarea className="form-control"
                            id="textarea1"
                            rows={3}
                            placeholder="Assignment Description. In this assignment we are learning about HTML."></textarea>
                    </div>
                </div>

                    <div className="d-grid gap-3 container text-sm-end justify-content-center mt-3">
                                        <div className="row" >
                                            <label htmlFor="points" className="col-sm-2  
                                            col-form-label col-form-label-sm">Points</label>
                                            <div className="col-sm">
                                                <input type="number" className="form-control" id="points"/>
                                            </div>
                                        </div>

                                        <div className="row" >
                                            <label htmlFor="assignment-group" className="col-sm-2  
                                            col-form-label col-form-label-sm">Assignment Group</label>
                                            <div className="col-sm">
                                                <select className="form-select">
                                                    <option selected>ASSIGNMENTS</option>
                                                    <option value="1">QUIZZES</option>
                                                    <option value="2">EXAM</option>
                                                    <option value="3">PROJECT</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <label htmlFor="display-grade" className="col-sm-2  
                                            col-form-label col-form-label-sm">Display Grade</label>
                                            <div className="col-sm">
                                                <select className="form-select">
                                                    <option selected>Percentage</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row" style={{textAlign:"left"}}>
                                            <label htmlFor="display-grade" className="col-sm-2  
                                            col-form-label col-form-label-sm"></label>
                                            <div className="col-sm">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                    Do not count this assignment towards the final grade
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <label htmlFor="display-grade" className="col-sm-2  
                                            col-form-label col-form-label-sm">Submission Type</label>
                                            <div className="d-grid gap-3 col-sm border border-1 rounded">
                                                <select className="form-select mt-3 w-25">
                                                    <option selected>Online</option>
                                                </select> 
                                                
                                                <div style={{textAlign:"left"}}>
                                                    <label><b>Online Entry Options</b></label>
                                                </div>
                                                
                                                <div className="form-check" style={{textAlign:"left"}}>
                                                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                    Text Entry
                                                    </label>
                                                </div>
                                                
                                                <div className="form-check" style={{textAlign:"left"}}>
                                                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                    Website URL
                                                    </label>
                                                </div>
                                                
                                                <div className="form-check" style={{textAlign:"left"}}>
                                                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                    Media Recordings
                                                    </label>
                                                </div>
                                                
                                                <div className="form-check" style={{textAlign:"left"}}>
                                                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                    Student Annotations
                                                    </label>
                                                </div>
                                                
                                                <div className="form-check mb-4" style={{textAlign:"left"}}>
                                                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                    File Uploads
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <label htmlFor="display-grade" className="col-sm-2  
                                            col-form-label col-form-label-sm">Assign</label>
                                            
                                            <div className="d-grid gap-3 col-sm border border-1 rounded">
                                                
                                                <div className="row g-3">
                                                    <div className="col-12" style={{textAlign:"left"}}>
                                                        <label htmlFor="Assign to"
                                                            className="form-label mt-3"><b>
                                                            Assign to</b></label>
                                                        <div className="d-grid gap-3 col-sm border border-1 rounded">
                                                            <div>
                                                            <button type="button" className="btn btn-light float end m-2">
                                                                Everyone<FaXmark className="ms-1"/>
                                                            </button>
                                                            </div>
                                                        </div>
                                                    </div>
                            
                                                    <div className="col-12" style={{textAlign:"left"}}>
                                                        <label htmlFor="Due"
                                                            className="form-label"><b>
                                                            Due to</b></label>
                                                        <input type="date"
                                                            className="form-control"
                                                            id="due-date"
                                                            placeholder=""/>
                                                    </div>
                
                                                    <div className="col-md-6" style={{textAlign:"left"}}>
                                                        <label htmlFor="available-from" className="form-label"><b>Available from</b></label>
                                                        <input type="date" className="form-control mb-4" id="available-from"/>
                                                    </div>
                                                    
                                                    <div className="col-md-6" style={{textAlign:"left"}}>
                                                        <label htmlFor="until" className="form-label"><b>Until</b></label>
                                                        <input type="date" className="form-control mb-4" id="until"/>
                                                    </div>
                                                    
                                                </div>  
                                                
                                                <div className="d-flex row justify-content-end">
                                                    <button type="button" className="btn btn-light border border-1">
                                                        <i className="fa-light fa-plus me-2"></i>+ Add
                                                    </button> 
                                                </div> 
                                
                                            </div>
                                        </div>
                    </div>
                
            </form>

            <hr style={{color:"grey"}} />

            <form>
                <div className="row g-3">
                    <div className="col-md-6 text-align:left">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                            <label className="form-check-label" htmlFor="gridCheck">
                                              Notify uders that this content has changed
                                            </label>
                                        </div>
                    </div>
    
                    <div className="col-md-6 text-align:left">
                        <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                        Save
                        </button>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                            className="btn btn-danger float-end">
                            Cancel
                        </Link>
                    </div>    
                </div>    
            </form>

        </div>
    );
}
export default AssignmentEditor;