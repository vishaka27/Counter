export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

// action creators can be written either as a function or as a const. It simply returns action object.

export function increment() {
    return { type: INCREMENT };
}

export const decrement = () => ({ type: DECREMENT });

export const reset = () => ({ type: RESET });
