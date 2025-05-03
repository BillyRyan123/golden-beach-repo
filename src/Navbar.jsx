import {Link} from "react-router-dom";

import { useState } from "react";





const Navbar= () => {

 const [isOpen, setIsOpen]= useState(false);


    const navElements=[
         {name: "Home" , path:"/"},
         {name: "Explore Beaches" , path:"/explorebeaches"},
         {name: "About" , path:"/about"},
         {name: "Services" , path:"/services"},
    ];


    return(
        <nav className="m-4 flex  justify-between items-center  px-6 py-4 bg-amber-600 rounded-lg">

       
           <h1 className="text-4xl font-lora text-white bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-500 bg-clip-text text-transparent">GoldenBeach</h1>
           

            <ul className="hidden md:flex justify-center space-x-6 flex-grow">
                {navElements.map((contents, index)=>{
                 return (
                 <li key={index} className="ml-4 text-white font-poppins">
                  <Link to= {contents.path }>{contents.name}</Link >
                  </li>
                 )
                })}
            </ul>


                <button  onClick={()=>setIsOpen(!isOpen)} className="text-3xl text-white md:hidden">{isOpen ? "✖" : "☰"}</button>

            <div className="hidden md:block flex-1 text-right">
            <button className=" border border-white text-white font-poppins px-4 py-2 rounded-md hover:bg-white hover:text-amber-600 transition duration-300">
               Call Us
              </button>
            </div>
          


          {/*Mobile Menu View*/}

                {isOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-amber-600 p-4 rounded-b-lg z-10">
          <ul className="flex flex-col items-start space-y-4">
            {navElements.map((contents, index) => (
              <li key={index} className="text-white font-poppins text-lg">
                <Link to={contents.path} onClick={() => setIsOpen(false)}>{contents.name}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button className="w-full border border-white text-white font-poppins px-4 py-2 rounded-md hover:bg-white hover:text-amber-600 transition duration-300">
              Call Us
            </button>
          </div>
        </div>
      )}

        </nav>
   
    );
} 
export default Navbar;