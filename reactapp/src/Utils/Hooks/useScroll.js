import React , {useState,useEffect} from 'react'

export default function useScroll() {
    const[ scollPosition , setscrollPosition ] = useState(null);

    function handleScroll(){
        setscrollPosition(window.scrollY);
    }
    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return ()=> document.removeEventListener('scroll', handleScroll);
    }, [])
    return scollPosition;
}
