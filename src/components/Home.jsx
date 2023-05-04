import {React,useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom' 
import axios from 'axios'


function Home() {
    const [allEmployees,setEmployees]=useState([])
    const fetchData=async ()=>{
      const result = await axios.get('http://localhost:8000/getAllEmployee')
      setEmployees(result.data.employees);
    }
   

    const handleDelete=async (id)=>{
      const result =await  axios.delete('http://localhost:8000/deleteEmployee/'+id)
        console.log(result);
        alert(result.data.message)
        fetchData()
    }
    useEffect(()=>{
        fetchData()
      },[])
    return (
        <div>
            <Link to={'/add'}>
            <Button className='mt-5 ms-5' variant="warning"><i class="fa-solid fa-plus"></i> Add data</Button>{' '}

            </Link>

            <Table className='ms-5 mt-1 pe-5 ' striped bordered hover>
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allEmployees?.map((item,index)=>(
                            
                            <tr>
                            <td>{index+1}</td>
                            <td>{item.uname}</td>
                            <td>{item.age}</td>
                            <td>{item.designation}</td>
                            <td>{item.salary}</td>
                            <td>
                                <Link to={'/view/'+item.id}>
                                <Button variant="success" ><i class="fa-regular fa-eye" ></i> View</Button>{' '}

                                </Link>
                                <Link to={`/edit/${item.id}`}>
                                    <Button variant="secondary" ><i class="fa-solid fa-pen-to-square"></i> Edit</Button>
                                
                                </Link>
                                {/* <Link to={'/editData/'+item.id}>
                                    <Button variant='secondary'><i class="fa-solid fa-pen-to-square"></i> Edit</Button>{' '}
                                </Link> */}
                                <Button variant="primary" onClick={()=>handleDelete(item.id)}   ><i class="fa-solid fa-trash"></i> Delete</Button>{' '}
    
                            </td>
                        </tr>
                        ))
                    }
                   

                </tbody>
            </Table>

        </div>
    )
}

export default Home