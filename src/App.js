import React, { useEffect, useState } from 'react';
import {ClimbingBoxLoader} from "react-spinners";
import { Footer, Blog, Features, WhatGPT3, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';


function App(){ 
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },6000)
  },[])
  
  

    if(loading){
      return(
        <div className='Loader'>
                  <ClimbingBoxLoader

        color={"orange"} 
        loading={loading} 
        size={100} />
        </div>

      );    
    }//end of if
    else{  
    return(<>
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatGPT3 />
    <Features />
    <CTA />{/*click to acttion*/}
    <Blog />
    <Footer /> 
    </>
);//end of return
    }//end of else
  


}//end of function App

export default App;
