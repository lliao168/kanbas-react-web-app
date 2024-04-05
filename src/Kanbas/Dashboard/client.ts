import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
export const fetchAllCourses = async () => { 
    const response = await axios.get("http://localhost:4000/api/courses");
    return response.data;
};