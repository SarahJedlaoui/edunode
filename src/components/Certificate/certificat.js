import React, { useEffect, useState } from 'react';

import  { useLocation,useParams } from 'react-router-dom';
import Certificate from './index';
function Certificat() {
  const {certificateNumber}=useParams();
  const location = useLocation();
  const cid = new URLSearchParams(location.search).get("cid");
  return (
    <div>
     
     <img src={cid} alt="Certificate" />
    </div>
  );
};

export default Certificat;
