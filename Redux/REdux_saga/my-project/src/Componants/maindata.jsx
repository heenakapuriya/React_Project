import { addToCart } from '../Redux/Action'
import { removeToCart } from '../Redux/Action';
import { emptyCart } from '../Redux/Action';
import { useDispatch } from 'react-redux';
import Header from './Header';
import { useSelector } from 'react-redux';
import { productList } from "../Redux/Product/ProductAction"

function Main() {

  const data = useSelector(state => state)
  console.log("Main Component", data);
  const dispatch = useDispatch();
 
  }
  return (
    <div className="App">
      <Header />
      <button onClick={() => dispatch(addToCart(product))} className=' h-8 w-20  border-2 ms-2'>addToCart</button>
      <button onClick={() => dispatch(removeToCart(product))} className=' h-8 w-28  border-2 ms-2'>removeToCart</button>
      <button onClick={() => dispatch(emptyCart(product))} className=' h-8 w-28  border-2 ms-2'>emptyToCart</button>
      <button onClick={() => dispatch(productList(product))} className=' h-8 w-32  border-2 ms-2'>Get Product List</button>
    </div>
  );
}

export default Main;