import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { FaUserEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoInformationCircleSharp } from "react-icons/io5";
import toast from 'react-hot-toast';


const ViewAll = () => {

  let [student,setStudent] = useState([])

// use async and await
  let getApi = async ()=>{
    let {data} = await axios.get("http://localhost:5000/student");
   // console.log(data);
   setStudent(data)

  }

  //console.log(student);
  //equivelent to componentDidMount()

  useEffect(() =>{
    try{
      getApi();
    }catch (e){
      console.log(e);
    }
  },[])

  let deletestudent=(id)=>{
    console.log(id);
    axios.delete("http://localhost:5000/student/" + id);
    toast.success("Successfully deleted")
    window.location.assign("/viewall")
  }

  return (
    <>
    <Navbar/>
    <h3 className='head2'>INFORMATION OF ALL THE STUDENTS</h3>
    <table className='tablecontainer'>
      <thead>
        <tr>
          <th>NO</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th colSpan={3}>OPTION</th>
        </tr>
      </thead>
      <tbody>
        {student.map((x) =>{
          //console.log(x);
          return(
            <tr>
              <td>{x.id}</td>
              <td>{x.stuname}</td>
              <td>{x.stuemail}</td>
              <td>
                <NavLink to={`/edit/${x.id}`}>
                <button className='btn editbtn'>
                  EDIT <FaUserEdit />
                </button>
                </NavLink>
                </td>
              <td>
                <button className='btn deletebtn' onClick={()=>deletestudent(x.id)}>
                  DELETE <FaDeleteLeft />
                  </button>
                </td>
              <td>
                <NavLink to={`/viewsingle/${x.id}`}>
              <button className='btn viewbtn'>
                MORE INFORMATION <IoInformationCircleSharp />
              </button>
                </NavLink>
                </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  )
}

export default ViewAll