// store/zustand.ts
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AuthState {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
  isHydrated: boolean;
  setIsHydrate: (value: boolean) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      isHydrated: false,
      setIsAuth: (value: boolean) => {
        set({ isAuth: value });
      },
      setIsHydrate: (value: boolean) => set({ isHydrated: value }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
