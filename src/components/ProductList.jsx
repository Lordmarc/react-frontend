import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loadingId, setLoadingId] = useState(null);

  // Fetch products from API on mount
  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then(data => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Increase product price
  const increasePrice = async (id) => {

    try{

      setLoadingId(id);

      const res = await fetch(
        `http://localhost:8000/api/products/${id}/increase`,
        {method: 'PATCH'}
      );

      const updatedProduct = await res.json();

      setProducts(prev => 
        prev.map(p => p.id === updatedProduct.id ? updatedProduct : p)
      );
    }catch(err)
    {
      console.log(err.message)
    }finally{
      setLoadingId(null);
    }
  };

  // Delete product locally
  const deleteProduct = (id) => {
    fetch(`http://localhost:8000/api/products/${id}`, {
      method: 'DELETE',
      headers: {'Content-type': 'application/json'},
    })
    .then(res => res.json())
    .then(data => {
      setProducts(products.filter(p => p.id !== id));

      setSuccess(data.success);
      setTimeout(() => {
        setSuccess(null);
      },1500)
    })
    .catch(err => console.log(err.message));
  };



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    {success && (<p style={{color: 'green'}}>{success}</p>)}

      <h2>Product List</h2>
     
      {products.map(p => (
        <Product
          key={p.id}
          product={p}
          onDelete={deleteProduct}
          onIncreasePrice={increasePrice}
          loadingId={loadingId}
        />
      ))}
    </>
  );
}
