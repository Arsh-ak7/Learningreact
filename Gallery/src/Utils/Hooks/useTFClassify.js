import React, { useState } from 'react'
import "@tensorflow/tfjs"
import * as mobilenet from "@tensorflow-models/mobilenet"


export default function useTFClassify() {
    const [isLoading, setisLoading] = useState(false);
    const [predictions, setPrediction] = useState({});
    function predict(img){
        setisLoading(true);
        mobilenet.load().then(model => {
            // Classify the image.
            model.classify(img).then(predictions => {
              setPrediction(predictions);
              setisLoading(false)
            });
          }); 
    }
    return {predict,predictions,setPrediction,isLoading};
}
