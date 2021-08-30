import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const InfoComponent = (props) =>{
const [propertyData, setPropertyData] = useState('');
    useEffect(()=>{
        axios.get("http://localhost:3001/fetchAllById",{params:{id:props.id}})
      .then((response) => {
       console.log(response);
       setPropertyData(response?.data[0]);
      });
    },[props.id]);
    const details = {
        property: "Property :",
        city: "City :",
        monthly_rate: "Rent :",
        lease_term_months: "Lease Duration :"
    }
    const propertyDetails = propertyData && Object.keys(details).map((detail)=>{
       return (<li key ={details[detail]}>
            {details[detail]} {propertyData[detail]}
        </li>)
    })
    
    return (
        <div className="modal">
            {propertyData ? (<ul className="grid_list">
               {propertyDetails}
            </ul>) : null}
         
         
         
         

        </div>
       );

}

export default InfoComponent;