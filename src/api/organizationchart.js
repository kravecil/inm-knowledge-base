import api from '@/api'

const PREFIX = 'organizationchart'

export const getDivisions = async () => {
  try {
    const response = await api.get(`/${PREFIX}/divisions`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getPersons = async () => {
  try {
    const response =  await api.get(`/${PREFIX}/persons`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getPersonsByDivision = async (divisionUUID) => {
  try {
    const response =  await api.get(`/${PREFIX}/divisionsinfo/${divisionUUID}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}