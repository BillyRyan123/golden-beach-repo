import {useState} from "react";
import { useEffect } from "react";
import CardsDisplay from "./CardsDisplay";
import deck_seashore from "./Images/deck_seashore.jpg";
import sunset2 from "./Images/sunset2.jpeg";
import beachh  from "./Images/beachh.jpg";
import sunset3 from "./Images/sunset3.jpeg"
const Home = () =>{

      useEffect(()=>{
        document.title="GoldenTide | Home";
      },[]);

        const description = " Craving the perfect beach escape? Discover hidden gems, golden sunsets, and the most peaceful shorelines—all in one place. With GoldenTide, your next beach day is just a click away. Start exploring now "; 
        
        const cardContents=[
           {
             description:'Atlas beach',
             image:beachh,
           },
           {
            description:'Poko beach',
             image: sunset2,
           },
           {
            description:'Zombie beach',
             image:sunset3,
           }
        ];


       const[inputValue, setInputValue]= useState("");

        
       const handleInputChange = (event) => {
            setInputValue(event.target.value);
       }


        
    return(

        <main className="">

            <div className="relative w-11/12 aspect-[16/9] m-auto rounded-lg overflow-hidden group">
              <img
                src={deck_seashore}
                alt="Sunset beach view"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <h1 className="text-3xl md:text-5xl font-bold font-lora">Your next beach escape begins here</h1>
                <p className="mt-4 max-w-xl text-lg md:text-xl font-lora">
                  Explore serene beaches, golden horizons, and the calm of the sea.
                </p>
              </div>
            </div>


            <p className="text-lg font-lora text-black p-4 m-8 px-4 text-center">
                {description}
            </p>
                

                
            <div className="flex flex-wrap">
             {cardContents.map((content, index)=>{
               return  <div key={index} className=" transition-transform transform hover:scale-105 flex-1 p-4 box-border h-auto w-16 min-w-[200px] m-2">
                        <CardsDisplay description={content.description} image={content.image}/>
                </div>;
             })}
            </div>



               <div className="flex flex-col items-center">
               {inputValue}
                <input type="text" onChange={handleInputChange} className="mt-1 m-4 p-2 w-1/3 border border-amber-600 bg-amber-50 text-gray-800 rounded-md shadow-sm focus:border-amber-700 focus:ring-amber-700 focus:outline-none"/>
            <button   className="bg-amber-700 w-1/6 text-white font-lora py-2 px-4 rounded-xl mt-1">
             Sign up
            </button>

               </div>

        </main>
       
    );
}
export default Home;