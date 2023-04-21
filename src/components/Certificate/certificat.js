import React, { useEffect, useState } from 'react';

import  { useLocation,useParams } from 'react-router-dom';
import Certificate from './index';
function Certificat() {
  const {certificateNumber}=useParams();
  const location = useLocation();
  const cid = new URLSearchParams(location.search).get("cid");
  const distributorPublicKey = new URLSearchParams(location.search).get("distributorPublicKey");
  const issuerPublicKey = new URLSearchParams(location.search).get("issuerPublicKey");
  return (
    <div>
    
  
     <img src={cid} alt="Certificate" />
     <h4>certificate Id:{certificateNumber}</h4>
     <h4>distributorPublicKey: {distributorPublicKey}</h4>
     <h4>issuerPublicKey: {issuerPublicKey}</h4>
    </div>
  );
};

export default Certificat;
