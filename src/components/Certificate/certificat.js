import React, { useEffect, useState } from 'react';

const Certificat = ({ match }) => {
  const certificateNumber = match.params.certificateNumber;
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetch(`/certificates/${certificateNumber}`)
      .then(response => response.blob())
      .then(data => setImageData(data));
  }, [certificateNumber]);

  return (
    <div>
      {imageData && <img src={URL.createObjectURL(imageData)} alt={`Certificate ${certificateNumber}`} />}
    </div>
  );
};

export default Certificat;
