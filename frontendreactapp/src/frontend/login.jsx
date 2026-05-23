import { useState } from 'react';
export default function Login() 
{
    const [student, setStudent] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => 
    {
        e.preventDefault(); // to avoid page reloading

        if(student.email=="klu@gmail.com" && student.password=="klu")
        {
            alert("Login Success")
        }
        else
        {
            alert("Login Fail")

        }
    };
    return (
        <div className="add-student-form">
            
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={student.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={student.password} onChange={handleChange} required />
                </div>
                <button type="submit">Login</button>
                <button type="reset">Clear</button>
            </form>
        </div>
    );
}
