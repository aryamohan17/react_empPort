import {React,useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'


function Admin() {

  const[Email,setEmail]=useState('')

  const [password,setPassword]=useState('')
  let location = useNavigate()

  const loginEmployee=async (e)=>{
      e.preventDefault()
      // console.log((uuid().slice(0,3)));
      const body={
        Email,password
      }
     const result=await axios.post('http://localhost:8000/loginEmployee',body)
  //    console.log(result);
     alert(result.data.message)
     location('/home')
      // console.log(body);
      // console.log(id);
      // console.log(uname);
      // console.log(age);
      // console.log(desig);
      // console.log(salary);
    }
 
  return (
    <div>
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/ncTkNfcs/TCS-NS-logo.png"
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{' '}
             Tata Consultancy service
          </Navbar.Brand>
          <Nav>
            {/* <Nav.Link href="register"><i class="fa-solid fa-user"></i> Login</Nav.Link> */}
            <Nav.Link eventKey={2} >
              <h3>Employee portal</h3>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Form className='p-5 w-50 container'> 
      <h1>Login</h1>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="" />
      </Form.Group> 
       
     
      <Button onClick={(e)=>loginEmployee(e)}  variant="primary" className='text-white fw-bold border-5'>Login</Button>{' '}
     <Link to={'/'}>
     <Button variant="secondary" className='text-white fw-bold border-5'>Cancel</Button>{' '}
     
     </Link> 
     
     </Form>

    </div>
  )
}

export default Admin