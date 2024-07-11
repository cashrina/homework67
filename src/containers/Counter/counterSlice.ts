import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    value: string;
    color: string;
    isInputComplete: boolean;
}

const initialState: CounterState = {
    value: '',
    color: '',
    isInputComplete: false,
}

const correctPassword = '1337';

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state, action: PayloadAction<number>) => {
            if (state.value.length < 4) {
                state.value += action.payload;
                if (state.value.length === 4) {
                    state.isInputComplete = true;
                }
            }
        },
        decrease: (state) => {
            state.value = state.value.slice(0, -1);
        },

        check: (state) => {
            if(state.value === correctPassword) {
                state.color = 'green'
                return alert('correct');
            } else {
                state.color = 'red'
                return alert('wrong');
            }
        }
    },
});

export const counterReducer = counterSlice.reducer;

export const
    { increase,
        decrease,
        check
    } = counterSlice.actions;

console.log(increase);