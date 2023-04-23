import './ItemListContainer.css';

const ItemListContainer = (props) => {
  return (
      <h2 className='greeting'>Colocamos un saludo: {props.greeting} </h2>
  )
}

export default ItemListContainer
