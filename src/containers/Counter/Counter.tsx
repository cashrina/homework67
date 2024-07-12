import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import {increase,decrease, check} from "./counterSlice.ts";

const Counter = () => {
    const color = useSelector((state: RootState) => state.counter.color);
    const isInputComplete = useSelector((state: RootState) => state.counter.isInputComplete);
    const displayValue = useSelector((state: RootState) => state.counter.displayValue);
    const dispatch = useDispatch();

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-4 border rounded p-4 shadow">
                    <h1 className={`text-center ${color}`}>{displayValue}</h1>
                    <div className="d-grid gap-2 mt-4">
                        <div className="row ms-4">
                            <div className="col">
                                <button className="btn btn-light" onClick={() => dispatch(increase(7))}
                                        disabled={isInputComplete}>7
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-light" onClick={() => dispatch(increase(8))}
                                        disabled={isInputComplete}>8
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-light" onClick={() => dispatch(increase(9))}
                                        disabled={isInputComplete}>9
                                </button>
                            </div>
                        </div>
                        <div className="row ms-4">
                            <div className="col">
                                <button className="btn btn-light" onClick={() => dispatch(increase(4))}
                                        disabled={isInputComplete}>4
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-light" onClick={() => dispatch(increase(5))}
                                        disabled={isInputComplete}>5
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-light" onClick={() => dispatch(increase(6))}
                                        disabled={isInputComplete}>6
                                </button>
                            </div>
                        </div>
                        <div className="row ms-4">
                            <div className="col">
                                <button className="btn btn-light" onClick={() => dispatch(increase(1))}
                                        disabled={isInputComplete}>1
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-light" onClick={() => dispatch(increase(2))}
                                        disabled={isInputComplete}>2
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-light" onClick={() => dispatch(increase(3))}
                                        disabled={isInputComplete}>3
                                </button>
                            </div>
                        </div>
                        <div className="row ms-4">
                            <div className="col">
                                <button className="btn btn-danger" onClick={() => dispatch(decrease())}
                                        disabled={!displayValue}>C
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-light" onClick={() => dispatch(increase(0))}
                                        disabled={isInputComplete}>0
                                </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-success" onClick={() => dispatch(check())}
                                        disabled={!isInputComplete}>E
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;