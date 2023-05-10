import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';


function Edit() {
  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [age, setAge] = useState(0)
  const [desig, setDesig] = useState('')
  const [salary, setSalary] = useState(0)

  const params = useParams()
  console.log(params.id);
  let location = useNavigate()

  const fetchEmp = async () => {
    const result = await axios.get('http://localhost:8000/getemployee/' + params.id)
    // console.log(result.data.employee);
    setId(result.data.employee.id)
    setUname(result.data.employee.uname)
    setAge(result.data.employee.age)
    setDesig(result.data.employee.designation)
    setSalary(result.data.employee.salary)
  }
  const handleUpdate = async (e) => {
    e.preventDefault()

    const body = {
      id, uname, age, desig, salary
    }
    const result = await axios.post('http://localhost:8000/editEmp', body)
    alert(result.data.message)
    location('/home')

    // alert(result.data.message)
    // console.log(result);
  }


  useEffect(() => {
    fetchEmp()
  }, [])
  return (
    <div>
      <Form className='p-5 w-50 container'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control type="text" value={uname} onChange={(e) => setUname(e.target.value)}
            placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder=""
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Designation</Form.Label>
          <Form.Control type="text" value={desig} onChange={(e) => setDesig(e.target.value)}
            placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Salary</Form.Label>
          <Form.Control type="text" value={salary} onChange={(e) => setSalary(e.target.value)}
            placeholder="" />
        </Form.Group>
        <Button variant="primary" onClick={(e) => handleUpdate(e)}
          className='text-white fw-bold border-5'>update</Button>
        <Link to={'/'}>
          <Button variant="secondary" className='text-white fw-bold border-5'>Cancel</Button>

        </Link>

      </Form>
    </div>
  )
}

export default Edit