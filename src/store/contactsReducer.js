import {
    DELETE_DISH, EDIT_DISH, EDIT_EACH_LINE,
    FETCH_DISHES_FAILURE,
    FETCH_DISHES_FINALLY,
    FETCH_DISHES_REQUEST,
    FETCH_DISHES_SUCCESS
} from "./actionTypes";

const initialState = {
    loading: false,
    contactList: null,
    itemToEdit: null,
};

const contactsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_DISHES_REQUEST:
            return {...state, loading: true};

        case FETCH_DISHES_SUCCESS:
            let dishes = action.dishes;
            let dishes2 = Object.keys(dishes).map(id=>({
                    ...dishes[id],
                    id
                }));
            return {...state, loading: false, contactList: dishes2};

        case FETCH_DISHES_FAILURE:
            return {...state, loading: false, error: action.error};

        case FETCH_DISHES_FINALLY:
            return {...state, loading: false};


        case DELETE_DISH:
            let copy = state.contactList;
            const ndx = copy.findIndex(item=>item.id===action.id);
            copy.splice(ndx, 1);
            return {...state, loading: false, contactList: copy};

        case EDIT_DISH:
            const ndx2 = state.contactList.findIndex(item=>item.id===action.id);
            const item = state.contactList[ndx2];
            return {...state, itemToEdit: item};


        default:
            return state;
    }
};

export default contactsReducer;