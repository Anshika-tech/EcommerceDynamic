import React,{useEffect,useState} from 'react'
import '../App.css'
import Footer from '../components/Footer'

const Home = () => {

  const[userName,setUserName]=useState('');
  const[show,setShow]=useState(false);
  
  const userHomePage=async()=>{
    try{
        const res=await fetch('/getdata',{
          method:"GET",
          headers:{
              "Content-Type":"application/json"
          },
        });

        const data=await res.json();
        console.log(data);
        setUserName(data.firstname);
        setShow(true)

    }catch(err){
     console.log(err);
    
    }
  }

  useEffect(()=>{
    userHomePage();
  },[]);

  return (
    <>
       <div className='head1'>
          <div className='mid1'>
            <h1 className='det pt-5'>Welcome</h1>
            <h1 className='det'>{userName}</h1>
            <h2 className='det'>{show?'happy to see u back':"we are mern developer"}</h2>
          </div>

       </div>
       <Footer/>
    </>
  )
}

export default Home