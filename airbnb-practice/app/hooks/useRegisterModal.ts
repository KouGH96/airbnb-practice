import { create } from "zustand";

interface RegisterModalStore {
    isOpen: boolean;
    onOpen: () => void
    onClose: () => void;
}

const useRegisterModal = create<RegisterModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;

//this code imports create form zustand library, used to create a store.
//set updates the store, and the object passed to it is the new state of the store.

//summary: defines a zustand store for the register modal, and exports it.