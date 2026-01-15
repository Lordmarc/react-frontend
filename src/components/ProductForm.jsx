import { useEffect, useState } from "react";

export default function ProductForm({ onAdd, categories }) {

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    category_id: "",
    name: "",
    price: "",
    stock: "",
  });


  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null)
    try{
    const res = await fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json",
        "Accept": "application/json"
       },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock)
      }),
    });

    if(!res.ok)
    {
      const errorData = await res.json();

      console.log(errorData.errors);
      setErrors(errorData.errors || {});
      throw new Error('Failed to save product.');
    }

    const newProduct = await res.json();

    onAdd(newProduct.data);


    setForm({ category_id: "", name: "", price: "", stock: "" });

    }catch(err)
    {
      console.log(err.message)
 
    }finally{
      setLoading(false)
    }
   
  };

  return (
    <>
   
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Product Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange}/>
        {errors.name && <span>{errors.name[0]}</span>}
      </div>

      <div>
        <label htmlFor="price">Product Price:</label>
        <input type="text" name="price" value={form.price} onChange={handleChange}/>
          {errors.price && <span>{errors.price[0]}</span>}
      </div>

      <div>
        <label htmlFor="category_id">Product Category:</label>
        <select name="category_id" value={form.category_id} onChange={handleChange}>
          <option value="" disabled>Select Category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
          {errors.category_id && <span>Category Required</span>}
      </div>

      <div>
        <label htmlFor="stock">Product Stock:</label>
        <input type="text" name="stock" value={form.stock} onChange={handleChange}/>
          {errors.stock && <span>{errors.stock[0]}</span>}
      </div>
    
        <button disabled={loading}>{loading ? "Saving..." : 'Add Product'}</button>
    </form>
  </>
  )
}
