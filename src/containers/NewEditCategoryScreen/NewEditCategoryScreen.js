import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import history from '../../history';
import { clearCategoryFields, getCategoryById, insertNewCategory, categoryFieldUpdate, saveCategoryChanges } from '../../store/categories/CategoriesActions';
import './NewEditCategoryScreen.css';
import Button from '../../components/Button/Button';

const NewCategoryScreen = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.categoriesState.category);
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(getCategoryById(id));
        }

        return () => {
            dispatch(clearCategoryFields());
        };
    }, []);

    const getSubmitButton = (id) => {
        return id ?
            <Button label="Salvar" action={() => dispatch(saveCategoryChanges({ ...category, Email: "silvio_junior96@hotmail.com" }))} /> :
            <Button label="Cadastrar" action={() => [dispatch(insertNewCategory(category)), dispatch(clearCategoryFields())]} />;
    };

    return (
        <div className="app">
            <div className="form">
                {id ? <h2>Editar categoria</h2> : <h2>Adicionar categoria</h2>}
                <input className="input" name="Descricao" placeholder="Descricao" value={category.Descricao} onChange={(e) => dispatch(categoryFieldUpdate(e))} />
                <input className="input" name="Nome" placeholder="Nome" value={category.Nome} onChange={(e) => dispatch(categoryFieldUpdate(e))} />
                <input className="input" type="number" name="Ordem" placeholder="Ordem" value={category.Ordem} onChange={(e) => dispatch(categoryFieldUpdate(e))} />
                <input className="input" disabled={true} name="Email" placeholder="Email" value={category.Email} onChange={(e) => dispatch(categoryFieldUpdate(e))} />
                <div className="form-buttons">
                    {getSubmitButton(id)}

                    <Button label="Voltar" action={() => history.push("/")} />
                </div>
            </div>
        </div>
    );
};

export default NewCategoryScreen;