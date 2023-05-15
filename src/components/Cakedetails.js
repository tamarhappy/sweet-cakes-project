import React from 'react'
import { useParams } from 'react-router-dom';

const Cakedetails = () => {
    const params = useParams()

    console.log(params);
  return (
    <div>
        <h1>Cake Details Page</h1>
        <p>{params.id}</p>
    </div>
  );
};

export default Cakedetails;