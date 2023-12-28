import { d_increment, d_decrement } from "../redux/dynamicCounter/action";
import { useDispatch, useSelector } from "react-redux";

function DynamicCounter() {
  const count = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(d_increment(value));
  };
  const decrementHandler = (value) => {
    dispatch(d_decrement(value));
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => incrementHandler(5)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => decrementHandler(10)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
export default DynamicCounter;
