import React,{ useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'

function Register() {
    const[username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const[Email,setEmail]=useState('')

    let location = useNavigate()

    const registerEmployee=async (e)=>{
        e.preventDefault()
        // console.log((uuid().slice(0,3)));
        const body={
          username,password,Email
        }
       const result=await axios.post('http://localhost:8000/registerEmployee',body)
    //    console.log(result);
       alert(result.data.message)
       location('/login')
        // console.log(body);
        // console.log(id);
        // console.log(uname);
        // console.log(age);
        // console.log(desig);
        // console.log(salary);
      }
  return (
    <div>

<Form className='p-5 w-50 container'> 
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Employee username</Form.Label>
        <Form.Control onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="" />
      </Form.Group> 
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="" />
      </Form.Group>
     
      <Button onClick={(e)=>registerEmployee(e)}  variant="primary" className='text-white fw-bold border-5'>Register</Button>{' '}
     <Link to={'/'}>
     <Button variant="secondary" className='text-white fw-bold border-5'>Cancel</Button>{' '}
     
     </Link> 
     
     </Form>

    </div>
  )
}

export default Register