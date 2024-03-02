import { useAuthContext } from './useAuthContext'

export const useLogout=()=>{
    const { dispatch } = useAuthContext()

    const logout=()=>{
        //reove user from local storage
        localStorage.removeItem('user')
        localStorage.removeItem('email')

        // dispatch logout
        dispatch({type:'LOGOUT'})

    }

    return {logout}
}