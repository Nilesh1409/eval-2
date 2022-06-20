import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ProductItem = () => {
  const [data,setData] = useState("")

  useEffect(() => {
    fetch("http://localhost:8080/products",)
      .then((res) => res.json())
      .then((res) => setData(res));
    
  },[])

  return <div>
    {
      data?.map((product) =>{
        return <div>
          <p>Name : {product.name}</p>
          <p>Description : {description.name}</p>
        </div>
      })
    }
  

  </div>;
};

export default ProductItem;
