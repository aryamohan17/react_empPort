import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

function View() {
  const [employee,setEmployee]=useState({})
  const params = useParams()

  const fetchEmp = async () => {
    const result = await axios.get('http://localhost:8000/getemployee/' + params.id)
    setEmployee(result.data.employee)
    // console.log(result.data.employee);
    // setId(result.data.employee.id)
    // setUname(result.data.employee.uname)
    // setAge(result.data.employee.age)
    // setDesig(result.data.employee.designation)
    // setSalary(result.data.employee.salary)
  }
  console.log(employee);
  useEffect(() => {
    fetchEmp()
  }, [])
  return (
    <div>View
      <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/0jM13p1h/user.png" />
      <Card.Body>
        <Card.Title>Employee name:- {employee.uname}</Card.Title>
        <Card.Text>
         <p>Designation:- {employee.designation}</p>
         <p>Age:- {employee.age}</p>
         <p>Salary:- {employee.salary}</p>

        </Card.Text>
        {/* <Button variant="primary"></Button> */}
      </Card.Body>
    </Card>
    </div>
  )
}

export default View