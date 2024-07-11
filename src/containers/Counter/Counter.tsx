import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import {increase,decrease, check} from "./counterSlice.ts";

const Counter = () => {
    const counterValue = useSelector((state: RootState) => state.counter.value);
    const color = useSelector((state: RootState) => state.counter.color);
    const dispatch = useDispatch();

    return (
        <div className="Counter">
            <h1>{counterValue}</h1>
            <button onClick={() => dispatch(increase(7))}>7</button>
            <button onClick={() => dispatch(increase(8))}>8</button>
            <button onClick={() => dispatch(increase(9))}>9</button>
            <button onClick={() => dispatch(increase(4))}>4</button>
            <button onClick={() => dispatch(increase(5))}>5</button>
            <button onClick={() => dispatch(increase(6))}>6</button>
            <button onClick={() => dispatch(increase(1))}>1</button>
            <button onClick={() => dispatch(increase(2))}>2</button>
            <button onClick={() => dispatch(increase(3))}>3</button>
            <button onClick={() => dispatch(decrease())}>C</button>
            <button onClick={() => dispatch(increase(0))}>0</button>
            <button onClick={() => dispatch(check())}>E</button>
        </div>
    );
};

export default Counter;