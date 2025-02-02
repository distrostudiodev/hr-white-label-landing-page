import { create } from "zustand";

interface State_Actions {
  ctaOpen: boolean;
  ctaOnOpen: () => void;
  ctaOnClose: () => void;
  ctaToggle: () => void;
}

const useCta = create<State_Actions>((set) => ({
  ctaOpen: false,
  ctaOnOpen: () => set({ ctaOpen: true }),
  ctaOnClose: () => set({ ctaOpen: false }),
  ctaToggle: () => set((state) => ({ ctaOpen: !state.ctaOpen })),
}));

export default useCta;
