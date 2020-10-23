import React , {useState}from 'react'
import Image from './Image';
import useFetchImage from '../Utils/Hooks/useFetchImage.js';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component"
import useDebounce from '../Utils/Hooks/useDebounce';
import { AnimateSharedLayout } from 'framer-motion';
import {AnimatePresence, motion} from "framer-motion"

export default function Images() {
    
    const [page, setpage] = useState(1)
    const [searchTerm, setsearchTerm] = useState(null)
    const [images, setImages, errors,isLoading] = useFetchImage(page,searchTerm)
    function handleRemove(index){
        setImages(images.filter((image,i)=> i !== index));
    }
    
    
    const [showPreview, setshowPreview] = useState(false)  

    const debounce = useDebounce();    

    function handleChange(e){
        const text = e.target.value;
        setpage(1);
        debounce(()=> setsearchTerm(text),1000)
    }    
    return (
        <section>
            {
                (errors.length > 0 ? (
                    <div>
                        Unable to load
                    </div>
                ) : null) 
            }
            <div className="my-5">
                <input type = "text" onChange={handleChange} className="w-full border shadow" placeholder="Search Photos here"></input>
            </div>
            <AnimateSharedLayout type="switch">
        <InfiniteScroll dataLength = {images.length} 
            next = {()=> setpage(page+1)} 
            hasMore ={true}
            className="flex flex-wrap">
            {
            images.map((img,index) =>( 
            <motion.div layoutId={img.urls.regular} className="p-2 w-1/3 flex justify-center block" key={index} initial={{opacity:0}} animate ={{opacity:1 , visibility: "visible"}}>
            <Image 
            image = {img.urls.regular} 
            index={index} handleRemove ={handleRemove} 
            show={()=>setshowPreview(img.urls.regular)}/>
            </motion.div>
            ))}
            </InfiniteScroll>
            <AnimatePresence>
                {
                    showPreview && 
                    <motion.section layoutId={showPreview} exit={{opacity:0}} transition={{duration : 0.25}} className ="fixed flex h-full w-full justify-center items-center top-0 left-0 z-40" onClick={()=> setshowPreview(false)}>
                        <div className="bg-white">
                        <img src = {showPreview} width ="300" height="auto"/>
                        </div>
                    </motion.section>
                }
                </AnimatePresence>
            </AnimateSharedLayout>
            {isLoading && <Loading />}
        </section>
    )
}


