import { useEffect } from "react";
import beachh from "./Images/beachh.jpg";
import sunset2 from "./Images/sunset2.jpeg";
import sunset3 from "./Images/sunset3.jpeg";
import hawaii_beach from "./Images/hawaii_beach.jpg";
import wooden_bridge from "./Images/wooden_bridge.jpg";
import BeachProperties from "./BeachProperties";
const ExploreBeaches =()=>{
      
        useEffect(()=>{
          document.title="GoldenTide | ExploreBeaches";
        },[])

      const beachDetails =[
        { image:beachh,
          name:"Atlas beach" ,
           details:"A breathtaking coastal escape known for its golden sands, crystal-clear waters, and stunning sunsets. Perfect for relaxation, water sports, and scenic strolls along the shore. " , 
          },

        { image:sunset2,
          name:"Poko beach" ,
           details:"A serene paradise with a breathtaking sunset vibe, where golden skies meet gentle waves, creating the perfect spot for relaxation and reflection" ,
            },
    
        {image: sunset3,
          name:"Zombie beach" , 
          details:"A mysterious and eerie shoreline with a hauntingly beautiful atmosphere, where misty waves and rugged sands create a thrill for adventure seekers." ,
           },

        { image:hawaii_beach,
          name:"Zulu beach" , 
          details:"A mystical beach where the night breeze and moonlit waves create a peaceful, enchanting atmosphere for quiet walks." , },

        { image:wooden_bridge,
          name:"Canopy beach" ,
           details:"A rustic coastal escape known for its weathered wooden boardwalks, driftwood-strewn shores, and cozy beach huts. Ideal for a quiet, scenic getaway with a warm and charming atmosphere.  " , },

      ]



    return(
      <div className="p-6">
        <h2 className="text-center font-lora text-2xl text-gray-800 mb-6">
          Explore Our Beaches
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beachDetails.map((beach, index)=>{
           return <div key={index} className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
            <BeachProperties details={beach.details} image={beach.image} name={beach.name}/>
          </div>;   
    })}
       </div>
      </div>
    );
}
export default ExploreBeaches;