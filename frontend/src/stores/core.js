import { getDivisions, getPersonsByDivision } from '@/api/organizationchart';
import { defineStore } from "pinia";
import { ref } from "vue";

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

  const fetchPersonsByDivision = async (uuid) => {
    try {
      const persons = await getPersonsByDivision(uuid)
      return persons
    } catch (error) {
      console.error('Не удалось получить список сотрудников подразделения!', error)
    }
  }

  return {
    drawer,
    organizationStructure,
    fetchOrganizationStructure,
    fetchPersonsByDivision,
  }
})