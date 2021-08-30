import { useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import InfoComponent from "./InfoComponent";

const MyMapComponent = withScriptjs(withGoogleMap((props) => { 
const [id, setId] = useState(0);    
const data = props?.data;
const onMarkerClick = (id) =>()=>{setId(id)}
const markers = data&&data?.map(property=>{
    return (<Marker id ={property.id} position={{ lat: property.latitude, lng: property.longitude }} 
    onClick={onMarkerClick(property.id)}>
    </Marker>)
})
    return(
  <GoogleMap
  defaultZoom={8}
  //default property in toronto
  defaultCenter={{ lat: 43.641382, lng: -79.431819 }}
>
  {props.isMarkerShown && <Marker position={{ lat: 43.641382, lng: -79.431819 }} />}
  {markers}
  {<InfoComponent id={id} />}
</GoogleMap>
    )
}
));


export default MyMapComponent;

