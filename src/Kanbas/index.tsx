import KanbasNavigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import * as db from "./Database";
import { useState } from "react";


function Kanbas() {
    const [courses, setCourses] = useState<any[]>(db.courses);
    const [course, setCourse] = useState({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", courseNumber: "CS5610.35159.202430", 
        term: "202430_2 Spring 2024 Semester Full Term",
        termCode: "Spring 2 2024"
    });
    const addNewCourse = () => {
        setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
    };
    const deleteCourse = (courseId: any) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
        courses.map((c) => {
            if (c._id === course._id) {
            return course;
            } else {
            return c;
            }
        })
        );
    };

    return (
    <div className="d-flex">
        <div>
            <KanbasNavigation/>
        </div>
        <div style={{ flexGrow: 1 }}>
            {/* <h1>Account</h1>
            <h1>Dashboard</h1>
            <h1>Courses</h1> */}
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<h1>Account</h1>} />
                <Route path="Dashboard" element={<Dashboard 
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>} />
                {/* <Route path="Courses" element={<Courses />} /> */}
                <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
            </Routes>
        </div>
    </div>
    );
}
export default Kanbas;