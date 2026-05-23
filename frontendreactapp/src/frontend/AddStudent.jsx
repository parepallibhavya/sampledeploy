import { useState } from 'react';
import axios from 'axios';
import config from './config';

export default function AddStudent() 
{

    const [student, setStudent] = useState({
        name: '',
        gender: '',
        age: '',
        department: '',
        email: '',
        contact: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => 
    {
        e.preventDefault(); // to avoid page reloading
        try
        {
            const response = await axios.post(`${config.url}/student/add-`, student);
            if (response.status === 200) // if succcessfully added
            {
                setMessage(response.data);
                setStudent({
                    name: '',
                    gender: '',
                    age: '',
                    department: '',
                    email: '',
                    contact: ''
                });
            }
        } 
        catch (error) 
        {
            console.log(error.message); // for debugging purpose
            setMessage(error.message);
        }
    };

    return (
        <div className="add-student-form">
            {
            message?
            <p style={{color:"red",fontWeight:"bolder"}}>{message}</p>:
            <p></p>
            }
            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={student.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Gender</label>
                    <select name="gender" value={student.gender} onChange={handleChange} required >
                        <option value="">---Select Gender---</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHERS">Others</option>
                    </select>
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" name="age" value={student.age} onChange={handleChange} required />
                </div>
                <div>
                    <label>Department</label>
                    <select name="department" value={student.department} onChange={handleChange} required >
                        <option value="">---Select Department---</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="CS&I">CS&IT</option>
                    </select>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={student.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Contact</label>
                    <input type="number" name="contact" value={student.contact} onChange={handleChange} required />
                </div>
                <button type="submit">Add</button>
                <button type="reset">Clear</button>
            </form>
        </div>
    );
}
