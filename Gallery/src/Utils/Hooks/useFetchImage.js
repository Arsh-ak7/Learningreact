import Axios from "axios"
import {useEffect, useState} from 'react'

const api = process.env.REACT_APP_UNSPLASH_API;
const key = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(page, searchTerm) {
    const [images, setImages] = useState([])
    const [errors, setErrors] = useState([])
    const [isLoading, setisLoading] = useState(false);

    function fetchSearch(){
        Axios.get(`${api}/search/photos?client_id=${key}&page=${page}&query=${searchTerm}`).then((res) => {
            if(page>1)
            setImages([...images, ...res.data.results]);
            else
            setImages([...res.data.results]);
            setisLoading(false);
            }).catch((e) => {
                setErrors(e.response.data.errors);
                setisLoading(false);
            })    
    }

    function fetchRandom(){
        Axios.get(`${api}/photos?client_id=${key}&page=${page}`).then((res) => {
            setImages([...images , ...res.data]);
            setisLoading(false);
            }).catch((e) => {
                setErrors(e.response.data.errors);
                setisLoading(false);
            })
    }
    useEffect(() => {
    setisLoading(true);
        if(searchTerm!=null)
        fetchSearch();
        else
        fetchRandom();
    },[page]);

    useEffect(() => {
        if(searchTerm===null) fetchRandom();
        fetchSearch();
    }, [searchTerm])

    return [images,setImages,errors,isLoading];
}
