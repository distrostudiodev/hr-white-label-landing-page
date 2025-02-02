import { create } from "zustand";

interface State_Actions {
  navTrigger: boolean;
  setNavTrigger: (newState: any) => void;
}

const useNavs = create<State_Actions>((set) => {
  return {
    navTrigger: true,
    setNavTrigger: (newState: any) => set({ navTrigger: newState }),
  };
});

export default useNavs;
