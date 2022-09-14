import * as Actions from "./contador/contador.actions";
import { Action } from "./ngrx-facade/ngrx";


function reducer(state = 10, action : Action) {
    switch ( action.type ) {

        case 'Incrementar' :
        return state += 1;

        case 'Decrementar' :
        return state -= 1;

        case 'Multiplicar' :
        return state * action.payload;

        case 'Dividir' :
        return state / action.payload;

        default:
            return state;
    }
}

console.log( reducer(20, Actions.incrementarAction));
console.log( reducer(20, Actions.decrementarAction));
console.log( reducer(20, Actions.multiplicarAction));
console.log( reducer(20, Actions.dividirAction));