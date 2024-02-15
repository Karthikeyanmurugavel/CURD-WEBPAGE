import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const UpdateStudent = () => {

    let[student,setStudent]= useState({
        stuname:"",
        stuemail:""
    })

    let navigate = useNavigate()

    let {stuname,stuemail} = student;

    let {id} = useParams()

    let getApi= async()=>{
       let {data} = await axios.get("http://localhost:5000/student/"+id)
    
       console.log(data);
       setStudent(data)
    }

    useEffect(()=>{
        try{
            getApi()
        }catch(e){
            console.log(e);
        }
    },[])

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
            axios.put("http://localhost:5000/student/"+id,payload);
            navigate("/viewall");
            toast.success('Successfully Updated!')
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
    <h2 className='nnn'>EDIT STUDENT INFORMATION </h2>
    <section className='vvv'>
    <form onSubmit={handleSubmit}>
        <legend className='uuu'>EDIT STUDENT DETAIL</legend>
        <div className='jjj'>
            <input type='text' 
            placeholder='Enter students name📛' 
            value={stuname} name='stuname' onChange={handleinput}/>
        </div>
        <div className='kkk'>
            <input type='email'placeholder='Enter the email✉️' 
            value={stuemail} name='stuemail' onChange={handleinput}/>
        </div>
        <div>
            <button className='iii'>UPDATE INFORMATION</button>
        </div>
    </form>
    </section>
    </>
  )
}

export default UpdateStudent