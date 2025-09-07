import { create } from "zustand";

export type Alert = {
  message: string;
  type: "success" | "error" | "info" | "warning";
};

export type AlertStore = {
  alert?: Alert;
  setAlert: (alert: Alert, duration?: number) => void;
  timeout?: number;
};

const useAlert = create<AlertStore>((set) => ({
  alert: undefined,
  timeout: undefined,
  setAlert: (alert: Alert, duration = 5000) =>
    set((state) => {
      if (state.timeout) window.clearTimeout(state.timeout);
      const timeout = window.setTimeout(
        () => set({ alert: undefined }),
        duration
      );
      return { alert, timeout };
    }),
}));

export default useAlert;
