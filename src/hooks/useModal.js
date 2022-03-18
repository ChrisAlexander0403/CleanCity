import { useState } from 'react';

const useModal = (initialValue, action, destination) => {
    const [isOpen, setIsOpen] = useState(initialValue ? initialValue : false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        if (action) action(destination);
        setIsOpen(false);
    };

    return [isOpen, openModal, closeModal];
}

export default useModal;