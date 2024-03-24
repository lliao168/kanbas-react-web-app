import axios from "axios";

export const fetchAllCourses = async () => { 
    const response = await axios.get("http://localhost:4000/api/courses");
    return response.data;
};