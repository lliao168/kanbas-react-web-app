import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { Link, useParams, useNavigate} from "react-router-dom";
import { FaCaretDown, FaPlus } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from '../../../store';
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
  } from "../../../Courses/Assignments/assignmentsReducer";

import * as client from "../../../Courses/Assignments/client";  
import { findAssignmentsForCourse, createAssignment } from "../../../Courses/Assignments/client";

function QuizMultipleChoiceEditor() {
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
        if (!assignment.dueDate || !assignment.availableFromDate || !assignment.availableUntilDate) {
            alert("All date fields ('Due to', 'Available from', and 'Until') are required to save this assignment.");
            return;
        }
        if (assignmentId && assignmentId !== 'new') {
            handleUpdateAssignment(); 
        } else {
            // const newAssignmentDetails = {
            //     ...assignment,
            //     course: courseId,
            //     category: assignment.category
            // };
            // dispatch(addAssignment(newAssignmentDetails));
            handleAddAssignment();
        }
        navigate(`/Kanbas/Courses/${courseId}/Quizzes/${assignment._id}`);
    };

    return(
        <div>
            
            
                
        </div>
    );
}
export default QuizMultipleChoiceEditor;