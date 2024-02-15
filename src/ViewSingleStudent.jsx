import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ViewSingleStudent = () => {

    //at time we are storing the of the single student
    let[student,setStudent]=useState("")


    let navigate=useNavigate()

    let { id } =useParams();
    console.log(id);

//handing the promise
    let getApi =async()=>{
        let {data} = await axios.get("http://localhost:5000/student/" +id);
        console.log(data);
        setStudent(data)
    };

    console.log(student);

    useEffect(()=>{
        try{
            getApi()
        }catch (e){
            console.log(e);
        }
    },[])

    let goback =()=>{
        navigate(-1)
    }

    let gotohomepage =()=>{
        navigate("/")
    }

  return (<>
   <h1 className='head1'>Individual student's Information</h1>
    <section className='singlescontainer'>
        <h3>SI NO :{student.id}</h3>
        <h3>Student Name : {student.stuname}</h3>
        <h3>Student Email : {student.stuemail}</h3>
        <div>
            <button onClick={goback}>Go back</button>
            <button onClick={gotohomepage}>GO to Home Page</button>
        </div>
    </section>
    </>);
}

export default ViewSingleStudent