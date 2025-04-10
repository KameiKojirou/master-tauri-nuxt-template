import { defineStore } from 'pinia'

export const useMyThemeStore = defineStore('myThemeStore', () => {
  // Create a reactive reference to the cookie value. This value will
  // default to 'light' if there is no cookie.
  const theme = useCookie('theme', { default: () => 'light' })

  // The setTheme action updates the cookie (and the reactive reference)
  const setTheme = (newTheme: string) => {
    theme.value = newTheme
  }

  return { theme, setTheme }
})
