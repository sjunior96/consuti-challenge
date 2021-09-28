import React from 'react';
import _ from 'lodash';
import * as types from './ActionTypes';
import { toast } from "react-toastify";
import axios from 'axios';

const myEmail = "silvio_junior96@hotmail.com";

//Actions
export const fetchCategories = (categories) => ({
    type: types.CATEGORIES_FETCHED,
    payload: categories
});

export const fetchCategory = (category) => ({
    type: types.CATEGORY_FETCHED,
    payload: category
});

export const categoryFieldUpdate = (event) => ({
    type: types.NEW_CATEGORY_FIELD_UPDATE,
    event: { field: event.target.name, value: event.target.value }
});

export const clearCategoryFields = () => ({
    type: types.CLEAR_CATEGORY_FIELDS
});

export const setSelectedCategory = (category) => ({
    type: types.SET_SELECTED_CATEGORY,
    payload: category
});

export const handleDeleteModalStatus = () => ({
    type: types.HANDLE_DELETE_MODAL_STATUS
});

export const clearSelectedCategory = () => ({
    type: types.CLEAR_SELECTED_CATEGORY
});

//Regras de negócio aqui por enquanto
export const getCategoriesByEmail = () => {
    return (dispatch) => {
        axios.get(`/ObterCategoriasPorEmail/${myEmail}`)
            .then((response) => {
                dispatch(fetchCategories(_.get(response, 'data.ObterCategoriasPorEmailResult')));
            })
            .catch((error) => {
                toast.error("Erro ao listar categorias");
            });
    };
};

export const getCategoryById = (categoryId) => {
    return (dispatch) => {
        axios.get(`/ObterCategoriaPorCodigo/${categoryId}`)
            .then((response) => {
                dispatch(fetchCategory(_.get(response, 'data.ObterPorCodigoResult')));
            })
            .catch((error) => {
                toast.error("Erro ao carregar dados da categoria!");
            });
    };
};

export const insertNewCategory = (category) => {
    return (dispatch) => {
        axios.post("/CadastrarCategoria", category)
            .then((response) => {
                dispatch(getCategoriesByEmail());
                toast.success("Categoria cadastrada com sucesso!");
            })
            .catch((error) => {
                toast.error("Erro ao cadastrar categoria");
            });
    };
};

export const saveCategoryChanges = (category) => {
    return (dispatch) => {
        axios.put(`/AtualizarCategoria`, category)
            .then((response) => {
                dispatch(getCategoriesByEmail());
                toast.success("Categoria editada com sucesso!");
            })
            .catch((error) => {
                toast.error("Erro ao editar categoria");
            });
    };
};

export const deleteCategoryById = (categoryId) => {
    return (dispatch) => {
        axios.delete(`/ExcluirCategoria/${categoryId}`)
            .then((response) => {
                toast.success("Categoria deletada com sucesso!");
                dispatch(getCategoriesByEmail());
            })
            .catch((error) => {
                toast.error("Erro ao deletar categoria!");
            });
        dispatch(handleDeleteModalStatus());
    };
};