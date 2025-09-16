import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddStudent from './AddStudent';
import ViewAllStudents from './ViewAllStudents';
import './navbar.css';
import NotFound from './NotFound';
import UpdateStudent from './UpdateStudent';
import DeleteStudent from './DeleteStudent';
import DisplayStudent from './DisplayStudent';
import Login from './login';

export default function NavBar() {
    return (
        <div className="navbar">

            <nav className="nav-links">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="login" className="nav-item">Login</Link>
                <Link to="/addstudent" className="nav-item">Add Student</Link>
                <Link to="/viewallstudents" className="nav-item">View All Students</Link>
                <Link to="deletestudent" className="nav-item">View / Delete Student</Link>
                <Link to="updatestudent" className="nav-item">Update Student</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/addstudent" element={<AddStudent/>} />
                <Route path="/viewallstudents" element={<ViewAllStudents/>} />
                <Route path="/updatestudent" element={<UpdateStudent/>} />
                <Route path="deletestudent" element={<DeleteStudent/>} />
                <Route path="displaystudent/:id" element={<DisplayStudent/>} />
                <Route path="login" element={<Login/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            
        </div>
    );
}
