import api from '@/api'

export const getDivisions = async () => {
  try {
    const response = await api.get(`/divisions`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getPersonsByDivision = async (divisionUUID) => {
  try {
    const response =  await api.get(`/persons/${divisionUUID}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}