import React, { useState } from "react";
import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import {FaArrowLeft} from "react-icons/fa";
// import images from "../../components/images";
import {useForm} from "react-hook-form";
import {ThreeDots }from "react-loader-spinner";
// import api from "../../components/middleware/baseUrl";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [isLoading, setIsLoading] =  useState(false);
    const {register, handleSubmit, formState:{errors},} = useForm();
    const baseUrl =" local"

    const LoginHandler = (data) =>{
      console.log(data);
      sessionStorage.clear();
      setIsLoading(true);

      axios.post(`${baseUrl}/student/login`,data)
        .then(res => {
          console.log(res.data);
          if(!res.data.length){
            toast.error("invalid username and password!",{position:toast.POSITION.TOP_RIGHT});
            return;
          }

          const {username} = res.data[0];
          sessionStorage.setItem("User",username);
          // sessionStorage.setItem("regNo",reg_no);
          if(username.length){
            toast.success("Redirecting...",{position:toast.POSITION.TOP_RIGHT});
            // window.location.href="/user/dashboard";
          }
          
        }).catch(err =>{
          toast.error("ooops! Network Error.",{position:toast.POSITION.TOP_RIGHT});
          console.log(err);
         
        }); 
        
        setIsLoading(false);
        
    }

 
    return(
    <Wrap>
        
      <form onSubmit={handleSubmit(LoginHandler)}>
        <div className="form-group">
          <label>Reg No:</label>
          <input className="form-control" type="text" name="userName"
            {...register('userName',{required:true})}
          />
          {errors.regNo && <p className="text-danger">Enter Reg.</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input className="form-control" type="password" name="password"
            {...register('password',{required:true})}
          />
          {errors.password && <p className="text-danger">Enter password.</p>}
          
        </div>
        {isLoading ===true? 
        <ThreeDots className="text-center" type="ThreeDots" color="#0077b6" /> :
          <>
            <button className="btn btn-block btn-primary">Login</button>
            <ToastContainer/>
          </>
        }
      </form>
    </Wrap>
  )
}
export default Login;

const Wrap = styled.div `
  .head-tag{
    display:flex;
    justify-content: space-between;
    align-items: center;
    background:#17418D;
    color:#fff;
    padding:5px 20%;
    font-size:24px;

    @media screen and (max-width:500px){
      padding:5px 10px;
      font-size:20px;
    }
    img{
      width:6%;
      @media screen and (max-width:500px){
        width:13%;
      }
    }
    p{
      font-weight:700;
      text-transform:uppercase;
      @media screen and (max-width:500px){
        font-weight:600;
        margin-top:18px;
      }
    }
    a{
      font-size: 24px;
      color:#fff;
    }
    a:hover{
      color:gold;
    }
  }
  form{
    width:25rem;
    margin: 5% auto;
    padding:15px;
    border-radius:11px;
    box-shadow: 0 0 14px #ccc;

    @media screen and (max-width:500px){
      width:90%;
    }

    p{
      font-size:18px;

      span{
        cursor:pointer;
        font-weight:bold;
        color:#0077b6;
      }
    }
  }

  
`;