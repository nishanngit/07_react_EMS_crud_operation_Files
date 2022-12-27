import React, {useState, useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid'

function Add() {
  const [id,setId]=useState('')
const [uname,setUname]=useState('')
const [age,setAge]=useState('')
const [desg,setDesg]=useState('')
const [salary,setSalary]=useState('0')

let history=useNavigate()

const handleAdd=(e)=>{
  e.preventDefault()
  let ids = uuid();
  console.log(ids);
  let uniqueId = ids.slice(0,8)
  console.log(uniqueId);
  Employee.push({
    id:uniqueId,
    uname:uname,
    age:age,
    desg:desg,
    salary:salary
  })
  history('/')
}
  return (
    <>
        <h1 className='text-primary text-center mt-5'>Add Employee Management</h1>
        <p className='text-center'>Employee management is the effort to help employees do their best work each day in order to achieve the larger goals of the organization.</p>
       <Row>
        <Col>
        <img alt='img' height={"600px"} width={"600px"} src="https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="/>
        </Col>
        <Col>
        <Form className='border border-3 p-4'>
   
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text"
          onChange={(e)=>setUname(e.target.value)}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" 
        onChange={(e)=>setAge(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" 
        onChange={(e)=>setDesg(e.target.value)}
        />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" 
      onChange={(e)=>setSalary(e.target.value)} 
        />
      </Form.Group>

      <Button 
      onClick={(e)=>handleAdd(e)} 
      variant="primary" type="submit">
        Add
      </Button>
    </Form>
        </Col>
       </Row>
    </>
  )
}

export default Add