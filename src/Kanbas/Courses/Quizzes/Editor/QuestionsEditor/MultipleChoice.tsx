import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { Link, useParams, useNavigate} from "react-router-dom";
import { FaCaretDown, FaPlus } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from '../../../../store';
import { Modal, Button} from 'react-bootstrap';
import { RxRocket } from "react-icons/rx";
import { RiProhibitedLine } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CiSearch } from "react-icons/ci";
import { BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill, BsPencil} from "react-icons/bs";
import { CiTrash } from "react-icons/ci";
import { GoTrash } from "react-icons/go";

import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    selectAssignment,
  } from "../../../../Courses/Assignments/assignmentsReducer";

import * as client from "../../../../Courses/Assignments/client";  
import { findAssignmentsForCourse, createAssignment } from "../../../../Courses/Assignments/client";

function QuizMultipleChoiceEditor({onCancel} : any) {
    const { assignmentId, courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        findAssignmentsForCourse(courseId)
          .then((assignments) =>
            dispatch(selectAssignment(assignments))
        );
      }, [courseId]);   
    const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
    // const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
    const assignment = assignmentList.find(
        (assignment) => assignment.course === courseId && assignment._id === assignmentId && (assignment.category === "QUIZZES" || assignment.category === "EXAM")
    );
    interface Assignment {
        _id: string;
        title: string;
        course: string;
        category: string;
        description: string;
        isPublished: boolean;
    }

    const [quizQuestion, setQuizQuestion] = useState('');
    const handleQuestionChange = (value : any) => {
        setQuizQuestion(value);
        // dispatch(updateAssignment({...assignment, description: value}));
    };

    const [choices, setChoices] = useState([{id: 1, text:'', isCorrect: false}]);
    const handleChoiceTextChange = (id : any, text : any) => {
        setChoices(choices.map(choice => {
            if (choice.id === id) {
                return {...choice, text};
            }
            return choice;
        }))
    };
    const handleCorrectChoiceChange = (id : any) => {
        setChoices(choices.map(choice => {
            return {...choice, isCorrect: choice.id === id};
        }));
    };
    const handleAddChoice = () => {
        const newId = choices.length > 0 ? choices[choices.length - 1].id + 1 : 1;
        setChoices([...choices, {id: newId, text: '', isCorrect: false}]);
    };
    const handleRemoveChoice = (id : any) => {
        setChoices(choices.filter(choice => choice.id !== id));
    };


    const handleAddAssignment = () => {
        const newAssignmentDetails = {
            ...assignment,
            course: courseId,
            category: assignment.category
        };
        if(courseId) {
            client.createAssignment(courseId, newAssignmentDetails).then((newAssignmentDetails) => {
                dispatch(addAssignment(newAssignmentDetails));
            });
        }
      };

    const handleUpdateAssignment = async () => {
        const status = await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };

    const handleSave = () => {
        const questionData = {
            question: quizQuestion,
            choices,
        };
        navigate(`/Kanbas/Courses/${courseId}/Quizzes/${assignment._id}`);
    };

    const handleCancel = () => {

    }

    return(
        <div className="flex-fill">
            <form>
                <div className="col-12">
                        <label>Enter your question and multiple answers, then select the one correct answer.</label>
                </div> 
                <div className="col-12">
                        <label htmlFor="Quiz Question"
                            className="form-label mt-2" style={{fontWeight:"bold"}}>
                            Question:</label>
                            <ReactQuill 
                                theme="snow"
                                value={quizQuestion}
                                onChange={handleQuestionChange}
                            />
                </div>
                <div>
                    <label htmlFor="Answers"
                            className="form-label mt-2" style={{fontWeight:"bold"}}>
                            Answers:</label>
                </div>
                
                    {choices.map((choice, index) => (
                    <div className="row g-3" style={{marginLeft:"20px", marginRight:"20px", marginTop:"5px" }} key={choice.id}> 
                            <div className="col-md-6" style={{width:"200px"}}>
                                <label htmlFor={`choice-${choice.id}`} style={{marginLeft: '5px'}}>
                                    Correct Answer
                                </label>    
                            </div>
                            <div className="col-md-6" style={{width:"30px", marginLeft:"-80px"}}>
                                <input
                                        type="radio"
                                        id={`choice-${choice.id}`} 
                                        name="correctChoice"
                                        className="me-2"
                                        checked={choice.isCorrect}
                                        onChange={() => handleCorrectChoiceChange(choice.id)}
                                    /> 
                                
                                 
                            </div>
                            <div className="col-md-6" style={{width:"300px"}}>
                                <textarea
                                    className="form-control" 
                                    style={{height:"30px"}}
                                    value={choice.text}
                                    onChange={(e) => handleChoiceTextChange(choice.id, e.target.value)}
                                />  
                            </div>    
                            <div className="col-md-6">
                                <button className="ms-2" onClick={() => handleRemoveChoice(choice.id)} style={{border:"none", backgroundColor:"white"}}><GoTrash/></button>
                            </div>
                            
                    </div>
                    ))}
                

                <button className="ms-2 mt-2 float-end" onClick={handleAddChoice} style={{backgroundColor:"white", border:"none", color:"crimson"}}>+ Add Another Answer</button>


                <div className="col-md-6 text-align:left mt-5">
                        <button 
                            className="btn btn-light"
                            onClick={(e) => {
                                e.preventDefault(); 
                                onCancel(); 
                            }}>
                            Cancel
                        </button>
                        <button onClick={handleSave}  className="btn btn-danger ms-2">
                        Update Question
                        </button>
                </div>    

            </form>
            
                
        </div>
    );
}
export default QuizMultipleChoiceEditor;