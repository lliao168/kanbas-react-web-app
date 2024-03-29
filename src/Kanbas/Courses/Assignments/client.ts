import axios from "axios";
import { assignments } from "../../Database";
const COURSES_API = "http://localhost:4000/api/courses";
const ASSIGNMENTS_API = "http://localhost:4000/api/assignments";
export const updateAssignment = async (assignment: any) => {
    const response = await axios.
      put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.data;
  };  
export const deleteAssignment = async (assignmentId: any) => {
  const response = await axios
    .delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};
export const createAssignment = async (courseId : string, assignment: any) => {
    const response = await axios.post(
      `${COURSES_API}/${courseId}/assignments`,
      assignment
    );
    return response.data;
  };  
export const findAssignmentsForCourse = async (courseId? : string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};


