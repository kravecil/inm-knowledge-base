import { defineStore } from "pinia";
import { ref } from "vue";
import { getDivisions } from '@/api/organizationchart'

export const useCoreStore = defineStore('core', () => {
  const drawer = ref(false)

  const organizationStructure = ref([])
  const fetchOrganizationStructure = async () => {
    try {
      const divisions = await getDivisions()
      return divisions
    } catch (error) {
      console.error('Не удалось сформировать данные по организационной структуре предприятия!', error)
    }
  }

  return {
    drawer,
    organizationStructure,
    fetchOrganizationStructure,
  }
})