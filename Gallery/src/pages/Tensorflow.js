import React, { useRef } from "react";
import "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import useTFClassify from "../Utils/Hooks/useTFClassify";

export default function Tensorflow() {
	const imageRef = useRef();
	const { predict, predictions, isLoading } = useTFClassify();
	return (
		<div className='flex justify-center'>
			<div className='w-1/3 text-center'>
				<h1>Tensorflow</h1>
				<img
					crossOrigin='anonymous'
					src='https://images.unsplash.com/photo-1603123853880-a92fafb7809f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3NTI0MH0'
					width='400'
					ref={imageRef}
					style={{ display: "initial" }}
				/>
				<div className='my-4 justify-center'>
					{predictions.length > 0 &&
						predictions.map((prediction) => (
							<div className='flex justify-between'>
								<p>{prediction.className}</p>
								<p>{Math.floor(prediction.probability * 100)}%</p>
							</div>
						))}
					<button
						className=' my-2 p-2 bg-blue-500 text-white'
						onClick={() => predict(imageRef.current)}>
						{isLoading ? "Predicting" : "Predict"}
					</button>
				</div>
			</div>
		</div>
	);
}
