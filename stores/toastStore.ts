import { defineStore } from 'pinia'
import type { ToastModel } from "../models/toastModel"
import { v7 as uuidv7 } from 'uuid' // Corrected import for UUID

export const useMyToastStore = defineStore('myToastStore', {
  state: () => ({
    messages: [] as Array<{ id: string; message: string; type: string }>
  }),

  actions: {
    add(toast: ToastModel, duration = 3000) { // Default duration: 3s
      const id = uuidv7(); // Generate a unique ID

      this.messages.push({
        id,
        message: toast.message || '',
        type: toast.type || ''
      });

      // Set a timer to remove the toast after `duration` ms
      setTimeout(() => {
        this.remove(id);
      }, duration);
    },

    remove(id: string) {
      this.messages = this.messages.filter(toast => toast.id !== id);
    }
  }
});