import React, { useState ,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'react-uuid'
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'

function Add() {
  const [id,setId]=useState('')
  const[uname,setUname]=useState('')
  const [age,setAge]=useState(0)
  const[desig,setDesig]=useState('')
  const[salary,setSalary]=useState(0)

  useEffect(()=>{
    setId(uuid().slice(0,3))
  },[])

  let location = useNavigate()

// data automatically refresh then using preventDefault method.this inside addEmployee e.preventDefault
  const addEmployee=async (e)=>{
    e.preventDefault()
    // console.log((uuid().slice(0,3)));
    setId(uuid().slice(0,3))
    const body={
      id,uname,age,designation:desig,salary
    }
   const result=await axios.post('http://localhost:8000/addEmployee',body)
   console.log(result);
   alert(result.data.message)
   location('/')
    // console.log(body);
    // console.log(id);
    // console.log(uname);
    // console.log(age);
    // console.log(desig);
    // console.log(salary);
  }

  return (
    <div className=''>
          <Form className='p-5 w-50 container'> 
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control onChange={(e)=>setUname(e.target.value)} type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Age</Form.Label>
        <Form.Control onChange={(e)=>setAge(e.target.value)} type="text" placeholder="" />
      </Form.Group> 
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Designation</Form.Label>
        <Form.Control onChange={(e)=>setDesig(e.target.value)} type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Salary</Form.Label>
        <Form.Control onChange={(e)=>setSalary(e.target.value)} type="text" placeholder="" />
      </Form.Group>
      <Button onClick={(e)=>addEmployee(e)}  variant="primary" className='text-white fw-bold border-5'>Add</Button>{' '}
     <Link to={'/'}>
     <Button variant="secondary" className='text-white fw-bold border-5'>Cancel</Button>{' '}
     
     </Link> 
     
     </Form>
    </div>
  )
}

export default Add