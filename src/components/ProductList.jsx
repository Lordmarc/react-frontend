import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Product from "./Product";
import ProductForm from "./ProductForm";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loadingId, setLoadingId] = useState(null);

  // Fetch products from API on mount
  useEffect(() => {
    const getData = async () => {
      try{
        const res = await fetch("http://localhost:8000/api/products")

        const data = await res.json();
      
        setProducts(data.products);
        setCategories(data.categories);
        setLoading(false);
        
      }catch(err){
        console.log(err.message);
        setLoading(false);
      }
 
     
    };
    getData();
  }, []);
  // Increase product price
  const increasePrice = async (id) => {

    const previousProducts = products;

    setProducts(prev => prev.map(p => p.id === id ? {...p, price: p.price + 10} : p ))
``
    try{

      setLoadingId(id);

      const res = await fetch(
        `http://localhost:8000/api/products/${id}/increase`,
        {method: 'PATCH'}
      );

      const updatedProduct = await res.json();
      console.log(updatedProduct)
      setProducts(prev => 
        prev.map(p => p.id === id ? updatedProduct.data : p)
      );
      setSuccess(updatedProduct.success);

      setTimeout(() => {
        setSuccess(null);
      }, 1000)
    }catch(err)
    {
      console.log(err.message)
      setProducts(previousProducts);
    }finally{
      setLoadingId(null);
    }
  };

  const deleteProduct = async (id) => {
    
    try{
       const res = await fetch(`http://localhost:8000/api/products/${id}`,
      {method: 'DELETE'}
    );

      const data = await res.json();

    if(!res.ok) throw new Error('Delete failed');


    setProducts(prev => prev.filter(p => p.id !== id));
    setSuccess(data.success);

    setTimeout(() => {
      setSuccess(null)
    }, 1000)
    }catch(err)
    {
      console.log(err.message);
    }
   
  };

  const addNewProduct = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
  }
  



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    {success && (<p style={{color: 'green'}}>{success}</p>)}
      <ProductForm categories={categories} onAdd={addNewProduct}/>
      <h2 className="text-2xl">Product List</h2>
     
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
