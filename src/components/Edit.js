import React, {useState, useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';

function Edit() {
const [id,setId]=useState('')
const [uname,setUname]=useState('')
const [age,setAge]=useState('')
const [desg,setDesg]=useState('')
const [salary,setSalary]=useState('0')

useEffect(()=>{
  setId(localStorage.getItem('id'))
  setUname(localStorage.getItem('uname'))
  setAge(localStorage.getItem('age'))
  setDesg(localStorage.getItem('desg'))
  setSalary(JSON.parse(localStorage.getItem('salary')))
},[])

console.log(uname);
console.log(id);
console.log(age);
console.log(salary);

var index = Employee.map(item=>item.id).indexOf(id)
console.log(index);

let history = useNavigate()
const handleUpdate=(e)=>{
  e.preventDefault(); // remove refresh
  console.log(e);
  let emp = Employee[index];

  emp.uname = uname;
  emp.age = age;
  emp.desg = desg;
  emp.salary = salary;
  
  console.log(emp);
  history('/')
}

  return (
    <>
        <h1 className='text-primary text-center mt-5'>Update Employee Management</h1>
        <p className='text-center'>Employee management is the effort to help employees do their best work each day in order to achieve the larger goals of the organization.</p>
       <Row>
        <Col>
        <img alt='img' height={"600px"} width={"600px"} src="https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="/>
        </Col>
        <Col>
        <Form className='border border-3 p-4'>
   
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" value={uname} onChange={(e)=>setUname(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" value={desg} onChange={(e)=>setDesg(e.target.value)}/>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" value={salary} onChange={(e)=>setSalary(e.target.value)} />
      </Form.Group>

      <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
        Update
      </Button>
    </Form>
        </Col>
       </Row>
    </>
  )
}

export default Edit