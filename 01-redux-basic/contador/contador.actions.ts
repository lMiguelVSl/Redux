import { Action } from "../ngrx-facade/ngrx";


export const incrementarAction: Action = {
    type: "Incrementar"
};

export const decrementarAction: Action = {
    type: "Decrementar"
};

export const multiplicarAction: Action = {
    type: "Multiplicar",
    payload: 2
};

export const dividirAction: Action = {
    type: "Dividir",
    payload: 2
};

export const resetAction: Action = {
    type: "Reset"
};
