//consider as a home page
import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const AddStudent = () => {

    let[student,setStudent]= useState({
        stuname:"",
        stuemail:""
    })

    let navigate = useNavigate()

    let {stuname,stuemail} = student

    let handleinput =(event)=>{
        //console.log(event);
        let {name,value} = event.target
        setStudent({...student,[name]:value})
    }

    let handleSubmit =(event)=>{
        event.preventDefault()
        console.log(student);
        try{
            if(stuname==="" && stuemail ===""){
                alert("Both field is empty please fill the content...")
            } else if (stuname==="") {
                alert("Please fill the name field")
            } else if (stuemail==="") {
                alert("Please fill the email field")
            }
            else {
            let payload = {
                stuname,
                stuemail,
            };
            axios.post("http://localhost:5000/student",payload);
            navigate("/viewall");
            toast.success('Successfully Added!')
        }
        } catch (e) {
            console.log(e);
        } finally {
            setStudent({
                stuname:"",
                stuemail:""
            })
        }
    }

  return (
    <>
    <Navbar/>
    <h2 className='head4'>WELCOME TO HOME PAGE</h2>
    <section className='studenttn'>
    <form onSubmit={handleSubmit}>
        <legend className='bur'>ADD STUDENT</legend>
        <div className='din'>
            <input type='text' 
            placeholder='Enter students name📛' 
            value={stuname} name='stuname' onChange={handleinput}/>
        </div>
        <div className='wen'>
            <input type='email'placeholder='Enter the email✉️' 
            value={stuemail} name='stuemail' onChange={handleinput}/>
        </div>
        <div>
            <button className='ooo'>ADD STUDENT</button>
        </div>
    </form>
    </section>
    </>
  )
}

export default AddStudent