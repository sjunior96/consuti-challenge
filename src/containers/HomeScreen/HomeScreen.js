import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Table from '../../components/Table/Table';
import history from '../../history';
import { clearSelectedCategory, deleteCategoryById, getCategoriesByEmail, handleDeleteModalStatus, setSelectedCategory } from '../../store/categories/CategoriesActions';
import DeleteCategoryModal from '../DeleteCategoryModal/DeleteCategoryModal';
import './HomeScreen.css';

const HomeScreen = () => {
    const dispatch = useDispatch();

    //Selectors from Store
    const categoriesByEmail = useSelector((state) => state.categoriesState.categoriesByEmail);
    const deleteModalStatus = useSelector((state) => state.categoriesState.deleteModalStatus);
    const selectedCategory = useSelector((state) => state.categoriesState.selectedCategory);

    const registersQuantity = 5;
    const totalPages = Math.trunc(categoriesByEmail.length / 5);
    const [actualPage, setActualPage] = useState(0);

    const tableNextPage = () => {
        setActualPage(actualPage + 1);
    };

    const tablePreviousPage = () => {
        setActualPage(actualPage - 1);
    };

    useEffect(() => {
        dispatch(getCategoriesByEmail());
    }, []);

    const showDeleteAlert = () => {
        return (
            <DeleteCategoryModal
                confirmAction={() => dispatch(deleteCategoryById(selectedCategory))}
                cancelAction={() => [dispatch(handleDeleteModalStatus()), dispatch(clearSelectedCategory())]}
            />
        );

    };

    const listActions = (val) => {
        return (
            <>
                <Button
                    label="Editar"
                    color="primary"
                    action={() => history.push(`/editCategory/${val.itens.ID}`)}
                />
                <Button
                    label="Excluir"
                    color="danger"
                    action={() => [dispatch(handleDeleteModalStatus()), dispatch(setSelectedCategory(val.itens.ID))]}
                />

            </>
        );
    };

    const tableLabels = [
        { text: "Nome", field: "Nome" },
        { text: "Descricao", field: "Descricao" },
        { text: "Ordem", field: "Ordem" },
        { text: "Opções", field: "actions" },
    ];

    return (
        <div className='app'>
            <div className="app-content">
                <h1>Categorias por Email</h1>

                <Table
                    itens={actualPage > 0 ? categoriesByEmail.slice((registersQuantity * actualPage), registersQuantity + 1) : categoriesByEmail.slice((registersQuantity * actualPage), registersQuantity)}
                    labels={tableLabels}
                    listActions={(val) => listActions(val)}
                />


            </div>

            <div className="button">
                <Button
                    disabled={actualPage < 1}
                    label="Anterior"
                    action={() => tablePreviousPage()}
                />
                <Button
                    disabled={actualPage === totalPages}
                    label="Próxima"
                    action={() => tableNextPage()}
                />

                <Button
                    label="Cadastrar"
                    action={() => history.push("/addNewCategory")}
                />
            </div>

            {deleteModalStatus && showDeleteAlert()}
        </div>
    );
};

export default HomeScreen;