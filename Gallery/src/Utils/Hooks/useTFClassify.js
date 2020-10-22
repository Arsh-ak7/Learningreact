import React, { useState } from 'react'
import "@tensorflow/tfjs"
import * as mobilenet from "@tensorflow-models/mobilenet"


export default function useTFClassify() {
    const [isLoading, setisLoading] = useState(false);
    const [predictions, setpredictions] = useState({});
    function predict(img){
        setisLoading(true);
        mobilenet.load().then(model => {
            // Classify the image.
            model.classify(img).then(predictions => {
              setpredictions(predictions);
              setisLoading(false)
            });
          }); 
    }
    return {predict,predictions,setpredictions,isLoading};
}
