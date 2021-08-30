import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import MyMapComponent from './MyMapComponent.jsx';

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3001/fetchAll")
      .then((response) => {
        setData(response?.data)
      });
      // clean up function to end the db connection
      //return axios.get("http://localhost:3001/unmount")
  },[]);
  return (
    <div className="App">
         <MyMapComponent isMarkerShown
          data={data}
           googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUUy9_neKm3T-ddP6JWS9gLOm8ig91pnI&v=3.exp&libraries=geometry,drawing,places"
           loadingElement={<div style={{ height: `100%` }} />}
           containerElement= {<div style={{ height: `400px` }} />}
           mapElement= {<div style={{ height: `100%` }} />}
         />
    </div>
  );
}

export default App;
