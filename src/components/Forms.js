import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginForm = ({ values, touched, errors, status }) =>{
    const [loginData,setLoginData] = useState([]);
    useEffect(() => {
        status && setLoginData(loginData => [...loginData, status])
      },[status])
    return(
        <div className="loginForm">
            <Form>
                <label>
                    <h2>Username:</h2>
                    <Field type="text" name="username"/>
                </label>
                {touched.username && errors.username && (
                    <p className="error">{errors.username}</p>
                )}
                <label>
                    <h2>Password:</h2>
                    <Field type="password" name="password"/>
                </label>
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
            </Form>
            <button type="submit">Submit!</button>
            <Link to="/register">Create new account.</Link>

            {loginData.map(user => (
                <ul key={user.id}>
                <li>Name: {user.username}</li>
                <li>Password: {user.password}</li>
                </ul>
            ))}

        </div>
    )
}
const loginFormik = withFormik({
    mapPropsToValues({ username, password}) {
      return {
        username: username || "",
        password: password || ""
      };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password:Yup.string().required()
      }),
    handleSubmit(values, {setStatus}) { 
        axios.post('https://reqres.in/api/users/', values) 
              .then(res => { setStatus(res.data); }) 
              .catch(err => console.log(err.response));
        }
  })(LoginForm);

  const RegisterForm = ({ values, touched, errors, status }) =>{
    const [registerData,setRegisterData] = useState([]);
    useEffect(() => {
        status && setRegisterData(registerData => [...registerData, status])
      },[status])
    return(
        <div className="registerForm">
            <Form>
                <label>
                    <h2>Username:</h2>
                    <Field type="text" name="username"/>
                </label>
                {touched.username && errors.username && (
                    <p className="error">{errors.username}</p>
                )}
                <label>
                    <h2>Password:</h2>
                    <Field type="password" name="password"/>
                </label>
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
                <Field component="select" className="food-select" name="diet">
                    <option>Choose a role.</option>
                    <option value="student">Student</option>
                    <option value="helper">Helper</option>
                </Field>
            </Form>
            <button type="submit">Create Account</button>


        </div>
    )
}
const registerFormik = withFormik({
    mapPropsToValues({ username, password,role}) {
      return {
        username: username || "",
        password: password || "",
        role: role || ""
      };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password:Yup.string().required()
      })
  })(RegisterForm);

  const TicketForm = ({ values, touched, errors, status }) =>{
    const [registerData,setRegisterData] = useState([]);
    useEffect(() => {
        status && setRegisterData(registerData => [...registerData, status])
      },[status])
    return(
        <div className="ticketForm">
            <Form>
                
                    <Field type="text" name="title" placeholder="Title"/>
                {touched.username && errors.username && (
                    <p className="error">{errors.username}</p>
                )}
                    <Field type="password" name="password"/>
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
                <Field component="select" className="food-select" name="diet">
                    <option>Choose a role.</option>
                    <option value="student">Student</option>
                    <option value="helper">Helper</option>
                </Field>
            </Form>
            <button type="submit">Create new ticket.</button>


        </div>
    )
}
const ticketFormik = withFormik({
    mapPropsToValues({ username, password,role}) {
      return {
        username: username || "",
        password: password || "",
        role: role || ""
      };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password:Yup.string().required()
      })
  })(RegisterForm);



export {loginFormik,registerFormik,ticketFormik};