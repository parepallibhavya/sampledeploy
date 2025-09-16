import { useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function DeleteStudent() 
{
  const [students, setStudents] = useState([]); // empty array
  const [error, setError] = useState('');

  const navigate = useNavigate();


   const fetchStudents = async () => 
    {
      try 
      {
        const response = await axios.get('http://localhost:2021/student/viewall');
        setStudents(response.data);
      } 
      catch (error) 
      {
        setError(error.message);
      }
    };

    const deleteStudent = async (id) => 
    {
            try 
            {
                await axios.delete(`http://localhost:2021/student/delete?id=${id}`);
                fetchStudents();
            } 
            catch (error) 
            {
                setError(error.message);
            }
    }

    const displayStudent = async (id) => 
        {
            try 
            {
              navigate(`/displaystudent/${id}`)
            } 
            catch (error) 
            {
              console.error(error.message);
            }
        
        }

    useEffect(() => {
      fetchStudents();
    }, []);


  return (
    <div>
      <h3>View / Delete Student</h3>
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
              <th>Action</th>
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
                <td>
              <button onClick={()=>displayStudent(student.id)}>View</button> 
              <button onClick={()=>deleteStudent(student.id)}>Delete</button>      
                </td>
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
