
export default function Product({ product, onDelete, onIncreasePrice, loadingId }) {
  return(
    <div>
      <h3>{product.name}</h3>
      <p>Price: P{Number(product.price).toFixed(2)}</p>
      <p>Category: {product.category === 1 ? 'Hot Coffee' : 'Iced Coffee'}</p>
      {product.description && <p>Description: {product.description}</p>}
      <div>
        <button onClick={() => onIncreasePrice(product.id)} disabled={loadingId === product.id}>{loadingId === product.id ? 'Updating...' : 'Add +P10' }</button>
            <button onClick={() => onDelete(product.id)}> Delete </button>

      </div>
  
    </div>
  )
}