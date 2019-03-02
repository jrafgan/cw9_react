import axios from "../axios-instance";

import {
    ADD_NEW_DISH, DELETE_DISH, EDIT_DISH, EDIT_EACH_LINE,
    FETCH_DISHES_FAILURE,
    FETCH_DISHES_FINALLY,
    FETCH_DISHES_REQUEST,
    FETCH_DISHES_SUCCESS
} from "./actionTypes";

export const fetchDishesRequest = () => {
    return {type: FETCH_DISHES_REQUEST};
};

export const fetchDishesSuccess = dishes => {
    return {type: FETCH_DISHES_SUCCESS, dishes};
};

export const fetchDishesFailure = error => {
    return {type: FETCH_DISHES_FAILURE, error}
};

export const fetchDishesFinnaly = () => {
    return {type: FETCH_DISHES_FINALLY}
};

export const addNewDish = param => {
    console.log(param.value);
    return {type: ADD_NEW_DISH, param}
};

export const deleteDishInState = id => {
    console.log(id);
    return {type: DELETE_DISH, id}
};

export const editDishInState = id => {
    console.log(id);
    return {type: EDIT_DISH, id}
};

export const editEachLine = target => {
    return {type: EDIT_EACH_LINE, target}
};

export const fetchDishes = () => {
    return (dispatch) => {
        dispatch(fetchDishesRequest());

        axios.get('pizzaDishes.json').then(response => {
            dispatch(fetchDishesSuccess(response.data));
        }, error => {
            dispatch(fetchDishesFailure(error));
        });
    }
};

export const postDishes = (e) => {
    e.preventDefault();
    return (dispatch, getState) => {
        dispatch(fetchDishesRequest());
        const state = getState();
        console.log(state.addNew);
        axios.post('pizzaDishes.json', state.addNew).then(response => {
            dispatch(fetchDishesSuccess(response.data));
        });
    }
};

export const deleteDish = (id) => {
    return (dispatch) => {
        dispatch(deleteDishInState(id));
        dispatch(fetchDishesRequest());

        console.log(id);
        axios.delete('pizzaDishes/' + id + '.json').then(response => {
            dispatch(fetchDishesFinnaly());
        });
    }
};

