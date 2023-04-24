import React, { useEffect, useState } from 'react';

import  { useLocation,useParams } from 'react-router-dom';
import Certificate from './index';
function Certificat() {
  const {certificateNumber}=useParams();
  const location = useLocation();
  const cid = new URLSearchParams(location.search).get("cid");
  const distributorPublicKey = new URLSearchParams(location.search).get("distributorPublicKey");
  const issuerPublicKey = new URLSearchParams(location.search).get("issuerPublicKey");
  const stellarLab = "https://horizon-futurenet.stellar.org/accounts/?sponsor=GC4MEJJJMNIBIDZSJOZOPVUQQUKR3AARFLPFYKUFXU2D7PHWJP5S4AEI"
  return (
    <div>
    
  
     <img src={cid} alt="Certificate" />
     <h4>certificate Id:{certificateNumber}</h4>
     <h4>distributorPublicKey: {distributorPublicKey}</h4>
     <h4>issuerPublicKey: {issuerPublicKey}</h4>
     <h4>IPFS: <a href={cid}>{cid}</a></h4>
     <h4>  <a href={`https://horizon-futurenet.stellar.org/accounts/?sponsor=${issuerPublicKey}`}> Check on the Laboratory </a> </h4> 
    </div>
  );
};

export default Certificat;
