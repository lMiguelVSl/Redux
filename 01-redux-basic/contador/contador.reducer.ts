import { Action } from "../ngrx-facade/ngrx";


export function reducer(state = 10, action : Action) {
    switch ( action.type ) {

        case 'Incrementar' :
        return state += 1;

        case 'Decrementar' :
        return state -= 1;

        case 'Multiplicar' :
        return state * action.payload;

        case 'Dividir' :
        return state / action.payload;

        case 'Reset' :
        return state = 0;

        default:
            return state;
    }
}
