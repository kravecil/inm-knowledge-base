import { createPinia } from "pinia";

const pinia = createPinia()

export const usePluginPinia = (app) => app.use(pinia)