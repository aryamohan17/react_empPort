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
    <div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 mt-5">
        <Card style={{ width: '15rem' }}>
        <h3>View profile</h3>

      <Card.Img variant="top" src="https://i.postimg.cc/0jM13p1h/user.png" width={75} height={110}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <h6>Employee name:- {employee.uname}</h6>
        <Card.Text>
         <p>Designation:- {employee.designation}</p>
         <p>Age:- {employee.age}</p>
         <p>Salary:- {employee.salary}</p>

        </Card.Text>
        {/* <Button variant="primary"></Button> */}
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4"></div>
      </div>
     
    </div>
  )
}

export default View