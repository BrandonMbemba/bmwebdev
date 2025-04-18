import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa"; // Icone de fermeture

const Modal = ({ isOpen, toggleModal, children }) => {
    // Utilisation de useEffect pour ajouter/retirer la classe "no-scroll" au body
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        // Nettoyage lorsque le composant est démonté ou la modale fermée
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">    
            <div className="modal-content">
                <div className="modal-header">
                    <FaTimes className="close-icon" onClick={toggleModal} />
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;