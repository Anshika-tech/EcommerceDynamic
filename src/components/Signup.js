import React,{useState} from "react";
import {NavLink,useNavigate} from 'react-router-dom';
import PersonIcon from "@material-ui/icons/Person";
import signpic from '../images/Laws-related-to-registration-of-property-transactions-in-India-FB-1200x725-compressed.jpg';
import '../styles/Signup.css';
import Footer from'../components/Footer';
import EmailIcon from '@material-ui/icons/Email';
import PasswordIcon from '@material-ui/icons/NoEncryption';
import PhoneIcon from '@material-ui/icons/Phone';



const Signup = () => {
   const navigate=useNavigate();
    const [user,setUser]=useState({
    firstname:"",lastname:"",email:"",gender:"",phone:"",age:"",password:"",cpassword:""
     })
     let name,value;
     const handleInputs=(e)=>{
       console.log(e);
         name=e.target.name;
         value=e.target.value

         setUser({...user,[name]:value})
      }

      const PostData=async(e)=>{
         e.preventDefault();

         const {firstname,lastname,email,gender,phone,age,password,cpassword}=user;
        const res=await fetch("/register",{
         method:"POST",
         headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify({
           firstname,lastname,email,gender,phone,age,password,cpassword
         })
        });

        const data=await res.json();
        if(res.status===422||!data){
           window.alert("Invalid registration");
           console.log("Invalid registration");

        }
        else if(res.status===401){
          window.alert("password are not same");
        }
      
        else{
        window.alert("registrtion successful");
           console.log("registration success");

           navigate("/login");
       }
      }
  return (
    <>
    <div className="bod2">
      {/* <section className="signup"> */}
        <div className="container mt-5 signupbox" >
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>

              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="firstname">
                    <PersonIcon />
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    autoComplete="off"
                    minLength="3" maxLength="12"
                    value={user.firstname}
                    onChange={handleInputs}
                    placeholder="Your name"

                   
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastname">
                    <PersonIcon />
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    autoComplete="off"
                    value={user.lastname}
                    onChange={handleInputs}
                    placeholder="Your last name"
                   
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <EmailIcon />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Your email"
                   
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gender">
                    <PersonIcon />
                  </label>
                  <input
                    type="text"
                    name="gender"
                    id="gender"
                    autoComplete="off"
                    value={user.gender}
                    onChange={handleInputs}
                    placeholder="Male/Female/other"
                   
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">  <PhoneIcon /></label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Your phone"
                    
                    // /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$\
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="age">
                    <PersonIcon />
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    autoComplete="off"
                    value={user.age}
                    onChange={handleInputs}
                    placeholder="Your age"
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <PasswordIcon />
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Your password"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <PasswordIcon />
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder=" confirm Your password"
                    required
                  />
                </div>

                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" value="register" onClick={PostData}/>

                </div>
              </form>
              </div>
              
              <div className="signup-image">
                <figure>
                   <img src={signpic} alt="registration" width={340} height={400}/>
                </figure>
                <NavLink to="/login" className="signup-image-link">I am already registered</NavLink>

               </div>
          
          </div>
        </div>
      {/* </section> */}
    </div>
      <Footer/>
    </>
  );
};

export default Signup;
