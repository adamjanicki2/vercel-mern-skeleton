import { create } from "zustand";

export type Alert = {
  message: string;
  type: "success" | "error" | "info" | "warning";
};

export type AlertStore = {
  alert?: Alert;
  visible: boolean;
  setAlert: (alert: Alert, duration?: number) => void;
  hideAlert: () => void;
  timeout?: number;
};

const useAlert = create<AlertStore>((set) => ({
  alert: undefined,
  visible: false,
  timeout: undefined,
  setAlert: (alert: Alert, duration = 5000) =>
    set((state) => {
      if (state.timeout) window.clearTimeout(state.timeout);
      const timeout = window.setTimeout(
        () => set({ visible: false }),
        duration
      );
      return { alert, visible: true, timeout };
    }),
  hideAlert: () =>
    set((state) => {
      if (state.timeout) window.clearTimeout(state.timeout);
      return { visible: false, timeout: undefined };
    }),
}));

export default useAlert;
