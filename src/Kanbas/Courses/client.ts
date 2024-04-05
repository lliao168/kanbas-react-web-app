import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
export const fetchAllCourses = async () => { 
    const response = await axios.get("http://localhost:4000/api/courses");
    return response.data;
};

export const fetchCourseById = async (id: string) => {
    const response = await axios.get(`http://localhost:4000/api/courses/${id}`);
    return response.data;
}

export const createCourse = async (course: any) => {
    const response = await axios.post("http://localhost:4000/api/courses", course);
    return response.data;
};

export const deleteCourse = async (id: string) => {
    const response = await axios.delete(`http://localhost:4000/api/courses/${id}`);
    return response.data;
};

export const updateCourse = async (course: any, id: string) => {
    const response = await axios.put(`http://localhost:4000/api/courses/${id}`, course);   
    return response.data;
} 