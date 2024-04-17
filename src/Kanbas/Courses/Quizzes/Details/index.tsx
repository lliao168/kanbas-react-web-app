import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate} from "react-router-dom";
import { assignments } from "../../../Database";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../../store";
import { PiPencil } from "react-icons/pi";
import { FaArrowRightFromBracket, FaBan, FaChartSimple, FaCircle, FaCircleCheck, FaFileImport, FaXmark } from "react-icons/fa6";
import { RiProhibitedLine } from "react-icons/ri";

import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    selectAssignment,
  } from "../../../Courses/Assignments/assignmentsReducer";

import * as client from "../../../Courses/Assignments/client";  

import { findAssignmentsForCourse, createAssignment } from "../../../Courses/Assignments/client";

function QuizDetailsScreen() {
    const { courseId, assignmentId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        findAssignmentsForCourse(courseId)
          .then((assignments) =>
            dispatch(selectAssignment(assignments))
        );
      }, [courseId]);   
    const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
    interface Assignment {
        _id: string;
        title: string;
        course: string;
        category: string;
        description: string;
        isPublished: boolean;
    }

    const assignment = assignmentList.find(
        (assignment) => assignment.course === courseId && assignment._id === assignmentId && (assignment.category === "QUIZZES" || assignment.category === "EXAM")
    );

    const handleEditClick = () => {
        navigate(`/Kanbas/Courses/${courseId}/Quizzes/${assignment._id}/Editor`);
    };

    const handlePreviewClick = () => {
        navigate(`/Kanbas/Courses/${courseId}/Quizzes/${assignment._id}/Preview`);
    }



    const handlePublish = (assignmentId : Assignment | null) => {
        if (!assignmentId) return;
        const assignment = assignmentList.find(a => a._id === assignmentId);
        if (assignment) {
            const updatedAssignment = {...assignment, isPublished: !assignment.isPublished};
            client.updateAssignment(updatedAssignment).then(() => {  
                dispatch(updateAssignment(updatedAssignment));
            })
        }
    };

return  (
    <div>

        <h1>
            {assignment.title}
        </h1>

        {assignment && (
                <button type="button" onClick={handleEditClick} className="btn btn-light float-end m-2">
                    <PiPencil /> Edit
                </button>
        )}

        <button type="button" onClick={handlePreviewClick} className="btn btn-light float-end m-2">
                 Preview
            </button>

        {assignment.isPublished ? (
                <button className="btn btn-success float-end m-2" onClick={() => handlePublish(assignment._id)}>
                <FaCircleCheck style={{color:"white"}} /> Published</button>
                                    ) : (
                <button className="btn btn-light float-end m-2" onClick={() => handlePublish(assignment._id)} >
                <RiProhibitedLine className="text-muted me-1" />
                Unpublish</button>)}      

        <h2>{assignment.description}</h2>
        <label className="form-check-label" htmlFor="shuffleCheck">
                            {assignment.shuffleAnswer ? 'Yes' : 'No'}
                        </label>
                        <br/>
        <label>{assignment.dueDate}</label>                
        
    </div>

);

}
export default QuizDetailsScreen;