import React, { useEffect, useState } from "react";
import axios from '../../utils/customAxios'

const ShowPO = ({orderId}) => {
  const [PoNumber, setPoNumber] = useState();
const [userName, setUserName] = useState();

  useEffect(() => {
    function makeGetRequest() {
      axios.get(`api/oms/pvt/orders/${orderId}`).then(
          (response) => {
              var result = response.data;
      const getPO = result?.customData?.customApps[0]?.fields?.poNumber;
      setPoNumber(getPO);
        const userData = result?.clientProfileData?.firstName
      setUserName(userData)
          },
          (error) => {
              console.log(error);
          }
      );
  }
  makeGetRequest();
  }, []);
  return (
    <React.Fragment>
    <div style={{padding:"0px 30px",position:"relative",bottom:"40px"}}>
      <div style={{display:"flex",justifyContent:"end"}}>
      {PoNumber ? (
        <p style={{ color: "green",fontWeight:"bold",margin:"0px" }}>
          Purchase Order No: <span style={{ color: "#486fab" }}>{PoNumber}</span>
        </p>
      ) : null}
      </div>
      <div style={{display:"flex",justifyContent:"end"}}>
    <p style={{ color: "green",fontWeight:"bold",margin:"3px" }}>Ordered By : <span style={{ color: "#486fab" }}>{userName}</span></p>
    </div>
    </div>
    </React.Fragment>
  );
};

export default ShowPO;
