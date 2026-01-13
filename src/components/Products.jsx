import { useState, useEffect } from "react"


function Products() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Count changed:", count)
  // }, [count]);
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching products...")

    setTimeout(() => {
      const fakeProducts = [
        { id: 1, name: "Latte", price: 120},
        { id: 2, name: "Cappuccino", price: 140 },
        { id: 3, name: "Americano", price: 100 },
      ]

      setProducts(fakeProducts);
      console.log(fakeProducts);
      setLoading(false);
    }, 1500)
  }, [])

  const removeLastProduct = () => {
    const updated = products.slice(0, -1)
    setProducts(updated)
  }
  
  return (
    <div>
      <h2>Products</h2>
      {/* <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Add
      </button> */}
      <button onClick={removeLastProduct}>
        Remove last item
      </button>
      {loading && <p>Loading products...</p>}
      {!loading && products.map(product => (
        <div key={product.id}>
          {product.name} - ₱{product.price}
          <button onClick={()=> {
            const updated = products.map(item => 
              item.id === product.id ? {...item, price: item.price + 10} : item
            )
            console.log("Before updated products:", products)
            setProducts(updated);
            console.log("Updated products:", updated)
          }}>+P10</button>
          <button onClick={() => {
            const updated = products.filter(p => 
              p.id !== product.id
            )
            setProducts(updated)
          }}> Delete </button>
        </div>
      ))}
    </div>
  )
}

export default Products