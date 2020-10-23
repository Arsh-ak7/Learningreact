import React ,{useRef, useState} from 'react'
import useTFClassify from '../Utils/Hooks/useTFClassify';
function Image({image,index,handleRemove,show}) {
const [isHovering, setIsHovering] = useState(false);
const imageRef = useRef();
const {predict,predictions,setPrediction} = useTFClassify();
    return (
            <div className ="relative" onMouseOver={()=> setIsHovering(true)} 
            onMouseLeave={()=>setIsHovering(false)}>
            { predictions.length>0 && <span className="absolute bg-gray-800 shadow text-white px-2 left-0 ml-5 rounded" onClick={() => setPrediction([])}>
                {
                    predictions.map((prediction) => (
                        <div className ="flex justify-between">
                         <p>{prediction.className}</p>
                         <p>{Math.floor(prediction.probability*100)}%</p>
                         </div>   
                        ))
            }</span>
            }
            <i className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 
            ${isHovering ? "":"hidden"}`} onClick={()=> handleRemove(index)}></i>
            <i className={`fas fa-search absolute left-0 cursor-pointer opacity-25 hover:opacity-100 
            ${isHovering ? "":"hidden"}`} onClick={()=> predict(imageRef.current)}></i>
            <img ref = {imageRef} crossOrigin="anonymous" src = {image} width ="100%" height="auto" onClick={show} />
            </div>   
    )
}


export default Image;