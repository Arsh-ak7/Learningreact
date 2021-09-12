import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

export default function Map({ eventData, center, zoom }) {
	const [locationInfo, setLocationInfo] = useState(null);
	const [selectEvent, setSelectEvent] = useState(8);
	// useEffect(() => {
	// 	const markers = eventData.map((ev) => {
	// 		if (ev.categories[0].id === 8) {
	// 			return (
	// 				<LocationMarker
	// 					lat={ev.geometries[0].coordinates[1]}
	// 					lng={ev.geometries[0].coordinates[0]}
	// 					onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
	// 				/>
	// 			);
	// 		}
	// 		return null;
	// 	});
	// }, [selectEvent]);
	return (
		<div className='map'>
			<select
				className='dropDown-events'
				onChange={(e) => setSelectEvent(parseInt(e.target.value))}>
				<option value='8'>Wildfires</option>
				<option value='10'>Tropical Storm</option>
			</select>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "AIzaSyAH6jhqD-czoyCIA4auChsbfAUHJTh_JUQ",
				}}
				defaultCenter={center}
				defaultZoom={zoom}>
				{/* {markers} */}
				{eventData.map((ev) => {
					if (ev.categories[0].id === selectEvent) {
						return (
							<LocationMarker
								lat={ev.geometries[0].coordinates[1]}
								lng={ev.geometries[0].coordinates[0]}
								onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
							/>
						);
					}
					return null;
				})}
			</GoogleMapReact>
			{locationInfo && <LocationInfoBox info={locationInfo} />}
		</div>
	);
}

Map.defaultProps = {
	center: {
		lat: 42.3265,
		lng: -122.8756,
	},
	zoom: 6,
};

// TMxRIehdFGweFx85O3iPbCijtncEiJoTkbU3vP6I;
