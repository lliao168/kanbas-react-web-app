import {Link} from "react-router-dom";
import Assignment3 from "./a3";
import Nav from "../Nav";
function Labs() {
    return (
        <div>
            <Nav/>
            {/* <Link to="/Labs/a3">A3</Link> |
            <Link to="/Kanbas">Kanbas</Link> |
            <Link to="/hello">Hello</Link> | */}
            <Assignment3/>
            {/* <h1>Assignment 4</h1> */}
        </div>
    );
}

export default Labs;