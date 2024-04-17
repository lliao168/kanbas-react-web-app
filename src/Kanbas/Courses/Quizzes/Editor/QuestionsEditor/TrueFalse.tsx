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

import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    selectAssignment,
  } from "../../../../Courses/Assignments/assignmentsReducer";

import * as client from "../../../../Courses/Assignments/client";  
import { findAssignmentsForCourse, createAssignment } from "../../../../Courses/Assignments/client";

function QuizTrueFalseEditor({onCancel} : any) {
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
    const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
    interface Assignment {
        _id: string;
        title: string;
        course: string;
        category: string;
        description: string;
        isPublished: boolean;
    }

    const [quizInstructions, setQuizInstructions] = useState('');
    const handleInstructionsChange = (value : any) => {
        setQuizInstructions(value);
        dispatch(updateAssignment({...assignment, description: value}));
    };

    const [quizQuestion, setQuizQuestion] = useState('');
    const handleQuestionChange = (value : any) => {
        setQuizQuestion(value);
        // dispatch(updateAssignment({...assignment, description: value}));
    };

    const [correctAnswer, setCorrectAnswer] = useState<boolean | null> (null);
    const handleCorrectAnswerChange = (e : any) => {
        setCorrectAnswer(e.target.value === 'true' ? true : false);
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
        
    };

    return(
        <div>
            <form>
                <div className="col-12">
                        <label>Enter your question text then select if True or False is the correct answer</label>
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

                <div className="form-check">
                    <input
                        className="form-check-input" 
                        type="radio" 
                        name="correctAnswer" 
                        id="trueOption" 
                        value="true" 
                        checked={correctAnswer === true} 
                        onChange={handleCorrectAnswerChange}
                    />
                    <label className="form-check-label" htmlFor="trueOption">True</label>
                </div>

                <div className="form-check mt-5">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="correctAnswer" 
                        id="falseOption" 
                        value="false" 
                        checked={correctAnswer === false} 
                        onChange={handleCorrectAnswerChange}
                    />
                    <label className="form-check-label" htmlFor="falseOption">False</label>
                </div>

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
export default QuizTrueFalseEditor;