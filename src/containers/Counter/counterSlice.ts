import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    value: string;
    color: string;
}

const initialState: CounterState = {
    value: '',
    color: ''
}

const correctPassword = '1337';

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state,action: PayloadAction<number>) => {
            state.value += action.payload;
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

        check
    } = counterSlice.actions;

console.log(increase);