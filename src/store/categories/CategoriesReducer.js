import * as types from './ActionTypes';

const initialCategory = {
    Descricao: "",
    Nome: "",
    Ordem: "",
    Email: "silvio_junior96@hotmail.com"
};

const initialState = {
    categoriesByEmail: [],
    category: initialCategory,
    deleteModalStatus: false,
    selectedCategory: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.CATEGORIES_FETCHED:
            return {
                ...state,
                categoriesByEmail: action.payload
            };
        case types.CATEGORY_FETCHED:
            return {
                ...state,
                category: action.payload
            };
        case types.CLEAR_CATEGORY_FIELDS:
            return {
                ...state,
                category: initialCategory
            };
        case types.NEW_CATEGORY_FIELD_UPDATE:
            return {
                ...state,
                category: {
                    ...state.category,
                    [action.event.field]: action.event.value
                }
            };
        case types.SET_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            };
        case types.HANDLE_DELETE_MODAL_STATUS:
            return {
                ...state,
                deleteModalStatus: !state.deleteModalStatus
            };
        case types.CLEAR_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: {}
            };

        default:
            return state;
    }
};