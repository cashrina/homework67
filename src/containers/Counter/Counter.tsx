import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import {increase,decrease, check} from "./counterSlice.ts";

const Counter = () => {
    const color = useSelector((state: RootState) => state.counter.color);
    const isInputComplete = useSelector((state: RootState) => state.counter.isInputComplete);
    const displayValue = useSelector((state: RootState) => state.counter.displayValue);
    const dispatch = useDispatch();

    return (
        <div className="Counter">
            <h1>{displayValue}</h1>
            <button onClick={() => dispatch(increase(7))} disabled={isInputComplete}>7</button>
            <button onClick={() => dispatch(increase(8))} disabled={isInputComplete}>8</button>
            <button onClick={() => dispatch(increase(9))} disabled={isInputComplete}>9</button>
            <button onClick={() => dispatch(increase(4))} disabled={isInputComplete}>4</button>
            <button onClick={() => dispatch(increase(5))} disabled={isInputComplete}>5</button>
            <button onClick={() => dispatch(increase(6))} disabled={isInputComplete}>6</button>
            <button onClick={() => dispatch(increase(1))} disabled={isInputComplete}>1</button>
            <button onClick={() => dispatch(increase(2))} disabled={isInputComplete}>2</button>
            <button onClick={() => dispatch(increase(3))} disabled={isInputComplete}>3</button>
            <button onClick={() => dispatch(decrease())} disabled={!displayValue}>C</button>
            <button onClick={() => dispatch(increase(0))} disabled={isInputComplete}>0</button>
            <button onClick={() => dispatch(check())} disabled={!isInputComplete}>E</button>
        </div>
    );
};

export default Counter;