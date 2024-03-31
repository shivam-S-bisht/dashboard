import { create } from 'zustand'

type TAppState = {
    appState: string;
    setAppState: (id: string) => void;
}

const useAppStore = create<TAppState>()((set) => ({
    appState: '',
    setAppState: (id) => set((state) => ({ appState: id })),
}))

export { useAppStore };