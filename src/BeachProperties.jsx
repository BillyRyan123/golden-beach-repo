const BeachProperties =(props)=>{
  return (
    <div className="flex flex-col items-center">
        <img src={props.image} alt={props.name} className="w-80 h-52 object-cover rounded-lg mb-4 " />
         <h6 className="mt-2 font-lora text-center">{props.name}</h6>
         <p  className="mt-2 font-lora text-center">{props.details}</p>

    </div>
  );
}
export default BeachProperties;