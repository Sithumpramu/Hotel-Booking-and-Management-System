import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const InitialRedirect = () => {
    const navigation = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      if ( user.email.includes('admin')) {
        navigation('/AdminDashbord');
      } else if ( user.email.includes('staff')) {
        navigation('/StaffDashbord');
      } else if ( user.email.includes('manager')) {
        navigation('/ManagerDashbord');
      } else {
        navigation('/Dashboard');
      }
    } else {
      navigation('/Dashboard');
    }
  }, []);

  return null; 
};

export default InitialRedirect;
