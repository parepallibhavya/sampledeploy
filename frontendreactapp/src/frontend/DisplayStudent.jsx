import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function DisplayStudent() {
  const [student, setStudent] = useState(null);
  const { id } = useParams(); /// path params

  useEffect(() => 
    {
    const fetchStudent = async () => 
    {
      if (id) 
     { 
        try 
        {
          const response = await axios.get(`http://localhost:2021/student/display?id=${id}`);
          setStudent(response.data);
        } 
        catch (error) 
        {
          console.error(error.message);
        }
      }
    };

    fetchStudent();
  }, [id]); // Only depends on id

  return (
    student ? (
      <div className='profile-card'>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Gender:</strong> {student.gender}</p>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Contact:</strong> {student.contact}</p>
      </div>
    ) : (
      <p style={{ color: "red", fontWeight: "bolder" }}>Student Data Not Found</p>
    )
  );
}
