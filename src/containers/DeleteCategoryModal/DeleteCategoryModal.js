import React from 'react';
import Modal from '../../components/Modal/Modal';

const DeleteCategoryModal = ({ confirmAction, cancelAction }) => {
    return (
        <Modal
            close={cancelAction}
            containerModal={{
                size: "medium",
                title: "Confirma a exclusão do objeto?",
                cancelAction: cancelAction,
                confirmAction: confirmAction
            }}
        />
    );
};

export default DeleteCategoryModal;