export type ToastModel = {
    id?: string | null,
    message: string | null,
    type: "info" | "error" | "success" | "warning"
  }