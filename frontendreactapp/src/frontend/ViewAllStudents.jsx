import { useEffect, useState } from 'react';
import axios from 'axios';
import config from './config';

export default function ViewAllStudents() 
{
  const [students, setStudents] = useState([]); // empty array
  const [error, setError] = useState('');

   const fetchStudents = async () => 
    {
      try 
      {
        const response = await axios.get(`${config.url}/student/viewall`);
        setStudents(response.data);
      } 
      catch (error) 
      {
        setError(error.message);
      }
    };

    useEffect(() => {
      fetchStudents();
    }, []);


  return (
    <div>
      <h3>View All Students</h3>
      {
          students ? 
         <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Department</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.age}</td>
                <td>{student.department}</td>
                <td>{student.email}</td>
                <td>{student.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>:
        error?
        <p>{error}</p> :
        <p>No students found</p>
      }
    </div>
  );
}
