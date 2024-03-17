import { useState } from 'react'


export const useAccountCreate = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)


  const create  = async (email, password,confirmPassword,name,role,isAdminCreation) => {
    setIsLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setIsLoading(false)
      setError('Passwords do not match')
      return; 
    }

    const response = await fetch('http://localhost:4000/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password ,name,role,isAdminCreation})
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {

      // update loading state
      setIsLoading(false)

      
    }
  }

  return { create, isLoading, error }
}