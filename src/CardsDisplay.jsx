const CardsDisplay =(props)=>{
return (
    <div>
        <img src={props.image} alt={props.description} className="w-full h-40  object-cover rounded-md mb-4 " />
        <p className="mt-2 font-lora text-center">{props.description}</p>
       
        
    </div>
);
}

export default CardsDisplay;