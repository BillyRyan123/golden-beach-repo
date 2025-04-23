import {Link} from "react-router-dom";
const Navbar= () => {
    const navElements=[
         {name: "Home" , path:"/"},
         {name: "Explore Beaches" , path:"/explorebeaches"},
         {name: "About" , path:"/about"},
         {name: "Services" , path:"/services"},
    ];


    return(
        <nav className="m-4 flex  justify-between items-center  px-6 py-4 bg-amber-600 rounded-lg">

           <div className="flex-1 text-left">
           <h1 className="text-4xl font-lora text-white bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-500 bg-clip-text text-transparent">GoldenBeach</h1>
           </div>

            <ul className="flex flex-1 justify-center space-x-6">
                {navElements.map((contents, index)=>{
                 return (
                 <li key={index} className="ml-4 text-white font-poppins"><Link to= {contents.path }>{contents.name}</Link ></li>
                 )
                })}
            </ul>

            <div className="flex-1 text-right">
            <button className="border border-white text-white font-poppins px-4 py-2 rounded-md hover:bg-white hover:text-amber-600 transition duration-300">
               Call Us
              </button>
            </div>

        </nav>
   
    );
} 
export default Navbar;