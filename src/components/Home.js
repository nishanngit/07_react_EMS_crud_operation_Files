import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaUserPlus, FaUserEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';


function Home() {
const history = useNavigate();

  const handleDelete=(id)=>{
    alert('Deleted')
   // console.log(Employee.map(item=>item.id).indexOf(id))
    let index = Employee.map(item=>item.id).indexOf(id);
    Employee.splice(index,1);
    console.log(Employee);
    history('/');
  }

  const handleEdit=(id,uname,age,desg,salary)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("uname",uname);
    localStorage.setItem("age",age);
    localStorage.setItem("desg",desg);
    localStorage.setItem("salary",JSON.stringify(salary));
  }
  
  return (
    <div>
        <h1 className='text-primary text-center mt-5'>Employee Management</h1>
        <p className='text-center'>Employee management is the effort to help employees do their best work each day in order to achieve the larger goals of the organization.</p>
       
       <Link to={'/add'}>
        <button className='btn btn-success'>Add <FaUserPlus/></button>
        </Link>

        <h3 className='text-center mt-3'>List of Employees</h3>
         <Table className='mt-1' striped bordered hover>
      <thead>
        <tr>
           <th>User Name</th>
          <th>Age  </th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            Employee && Employee.length > 0 ?
            Employee.map((item)=>(
                <tr>
                    <td>{item.uname}</td>
                    <td>{item.age}</td>
                    <td>{item.desg}</td>
                    <td>{item.salary}</td>
                    <td>
                      <Link to='/edit'>
                      <Button onClick={()=>handleEdit(item.id,item.uname,item.age,item.desg,item.salary)} className='me-2'><FaUserEdit/></Button>
                      </Link>
                     
                     <Button onClick={()=>handleDelete(item.id)} className='btn-danger'><FaRegTrashAlt/></Button>
                     
                     </td>
                </tr>
            )):'Error'
        }
      </tbody>
    </Table>
    </div>
  )
}

export default Home