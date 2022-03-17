import { useState } from 'react';

const useModal = (initialValue, action) => {
    const [isOpen, setIsOpen] = useState(initialValue ? initialValue : false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        if (action) action('/reports');
        setIsOpen(false);
    };

    return [isOpen, openModal, closeModal];
}

export default useModal;