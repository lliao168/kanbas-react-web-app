import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";

function Dashboard() {
    return (
        <div className="p-4">
        <h1>Dashboard</h1> 
        <hr />
        <h2 className="ms-4">Published Courses (12)</h2> 
        <hr className="ms-4 mb-0"/>
        <div className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4 mt-0 ms-2">
              {courses.map((course) => (<div className="col" style={{width: "300px"}}>
                    <div className="card">
                        <img src= "/images/webdevelopment.jpg" className="card-img-top"
                            style={{height: "150px"}}/>
                        <Link to={"#"} className="position-absolute top-0 end-0 p-4"><i className="fa fa-ellipsis-v ms-2" style={{color:"white", fontSize:"24px"}}></i></Link>    
                        <div className="card-body">
                            <Link className="card-title" to={`/Kanbas/Courses/${course._id}`}
                                style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                {course.name}</Link>
                            <p className="card-text">CS5610 Web Development</p>
                            <Link to={"/Kanbas/Courses"}> <i className="fa-regular fa-file-pen" style={{color:"grey"}}></i></Link>
                        </div>
                    </div>
                </div>))}
                {/* <div className="col" style={{width: "300px"}}>
                    <div className="card">
                        <img src="/images/reactjs.png" className="card-img-top"
                            style={{height: "150px"}}/>
                        <Link to={"#"} className="position-absolute top-0 end-0 p-4"><i className="fa fa-ellipsis-v ms-2" style={{color:"white", fontSize:"24px"}}></i></Link>
                        <div className="card-body">
                            <Link className="card-title" to={"/Kanbas/Courses"}
                                style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                CS1234 React JS</Link>
                            <p className="card-text">Full Stack software developer</p>
                            <Link to={"/Kanbas/Courses"}> <i className="fa-regular fa-file-pen" style={{color:"grey"}}></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col" style={{width: "300px"}}>
                    <div className="card">
                        <img src="/images/reactjs.png" className="card-img-top"
                            style={{height: "150px"}}/>
                        <Link to={"#"} className="position-absolute top-0 end-0 p-4"><i className="fa fa-ellipsis-v ms-2" style={{color:"white", fontSize:"24px"}}></i></Link>
                        <div className="card-body">
                            <Link className="card-title" to={"/Kanbas/Courses"}
                                style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                CS1234 React JS</Link>
                            <p className="card-text">Full Stack software developer</p>
                            <Link to={"/Kanbas/Courses"}> <i className="fa-regular fa-file-pen" style={{color:"grey"}}></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col" style={{width: "300px"}}>
                    <div className="card">
                        <img src="/images/reactjs.png" className="card-img-top"
                            style={{height: "150px"}}/>
                        <Link to={"#"} className="position-absolute top-0 end-0 p-4"><i className="fa fa-ellipsis-v ms-2" style={{color:"white", fontSize:"24px"}}></i></Link>
                        <div className="card-body">
                            <Link className="card-title" to={"/Kanbas/Courses"}
                                style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                CS1234 React JS</Link>
                            <p className="card-text">Full Stack software developer</p>
                            <Link to={"/Kanbas/Courses"}> <i className="fa-regular fa-file-pen" style={{color:"grey"}}></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col" style={{width: "300px"}}>
                    <div className="card">
                        <img src="/images/reactjs.png" className="card-img-top"
                            style={{height: "150px"}}/>
                        <Link to={"#"} className="position-absolute top-0 end-0 p-4"><i className="fa fa-ellipsis-v ms-2" style={{color:"white", fontSize:"24px"}}></i></Link>
                        <div className="card-body">
                            <Link className="card-title" to={"/Kanbas/Courses"}
                                style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                CS1234 React JS</Link>
                            <p className="card-text">Full Stack software developer</p>
                            <Link to={"/Kanbas/Courses"}> <i className="fa-regular fa-file-pen" style={{color:"grey"}}></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col" style={{width: "300px"}}>
                    <div className="card">
                        <img src="/images/reactjs.png" className="card-img-top"
                            style={{height: "150px"}}/>
                        <Link to={"#"} className="position-absolute top-0 end-0 p-4"><i className="fa fa-ellipsis-v ms-2" style={{color:"white", fontSize:"24px"}}></i></Link>
                        <div className="card-body">
                            <Link className="card-title" to={"/Kanbas/Courses"}
                                style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                CS1234 React JS</Link>
                            <p className="card-text">Full Stack software developer</p>
                            <Link to={"/Kanbas/Courses"}> <i className="fa-regular fa-file-pen" style={{color:"grey"}}></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col" style={{width: "300px"}}>
                    <div className="card">
                        <img src="/images/reactjs.png" className="card-img-top"
                            style={{height: "150px"}}/>
                        <Link to={"#"} className="position-absolute top-0 end-0 p-4"><i className="fa fa-ellipsis-v ms-2" style={{color:"white", fontSize:"24px"}}></i></Link>
                        <div className="card-body">
                            <Link className="card-title" to={"/Kanbas/Courses"}
                                style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                CS1234 React JS</Link>
                            <p className="card-text">Full Stack software developer</p>
                            <Link to={"/Kanbas/Courses"}> <i className="fa-regular fa-file-pen" style={{color:"grey"}}></i></Link>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    );
}
export default Dashboard;