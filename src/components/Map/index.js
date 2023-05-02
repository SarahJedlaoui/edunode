import React, { Component, useState, useEffect, PureComponent } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import comPoint from "./data/data.json";
import icon from "./icon_stellar.png"
import mapboxgl from 'mapbox-gl'; 

import PropTypes from 'prop-types'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -70.9,
      lat: 42.35,
      zoom: 9
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  }
  render() {
    return (
      <div>
        <div ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}




// export default function App() {
//   const [file, setFile] = useState(null);
//   const [viewport, setViewport] = useState({
//     latitude: 48.215052869953944,
//     longitude: 16.35773919725817,
//     width: "100vw",
//     height: "100vh",
//     zoom: 1
//   });
//   const [selectedCom, setSelectedPark] = useState(null);

//   useEffect(() => {
//     const listener = e => {
//       if (e.key === "Escape") {
//         setSelectedPark(null);
//       }
//     };
//     window.addEventListener("keydown", listener);

//     return () => {
//       window.removeEventListener("keydown", listener);
//     };
//   }, []);

  

//   return (
//     <div>
//       <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken={"pk.eyJ1Ijoib2x2aXMiLCJhIjoiY2thejY0cTRoMDZqeDJ3bnN0MmxmdnpieiJ9.yNlnPlRrlxs87f8jhAx6rw"}
//         mapStyle="mapbox://styles/mapbox/streets-v11"
//         onViewportChange={viewport => {
//           setViewport(viewport);
//         }}
//       >
//         {comPoint.features.map(park => (
//           <Marker
//             key={park.properties.PARK_ID}
//             latitude={park.geometry.coordinates[1]}
//             longitude={park.geometry.coordinates[0]}
//           >
//             <button
//               className="marker-btn"
//               onClick={e => {
//                 e.preventDefault();
//                 setSelectedPark(park);
//               }}
//             >
//               <img style={{
//      width: 15,
//      height: 20}} src={icon} alt="stellar community" />
//             </button>
//           </Marker>
//         ))}

//         {selectedCom ? (
//           <Popup
//             latitude={selectedCom.geometry.coordinates[1]}
//             longitude={selectedCom.geometry.coordinates[0]}
//             onClose={() => {
//               setSelectedPark(null);
//             }}
//           >
//             <div>
//               <h2>{selectedCom.properties.NAME}</h2>
//               <p>{selectedCom.properties.DESCRIPTIO}</p>
//               <a target="_blank"  rel="noopener noreferrer" href={selectedCom.properties.KEYBASE}>{selectedCom.properties.KEYBASE}</a>
//               <a target="_blank"  rel="noopener noreferrer" href={selectedCom.properties.TWTTER}>{selectedCom.properties.TWTTER}</a>

              
//             </div>
//           </Popup>
//         ) : null}
//       </ReactMapGL>
//     </div>
//   );
// }