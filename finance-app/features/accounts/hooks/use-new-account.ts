import {create} from "zustand";

//hook for opening and closing on ui not specific to accounts

type NewAccountState = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useNewAccount = create<NewAccountState>((set) => ({
    isOpen:false,
    onOpen: () =>set({isOpen:true}),
    onClose: () => set({isOpen: false}),
}))