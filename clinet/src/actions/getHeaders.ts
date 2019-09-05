export const getHeaders = () => {
  const token = localStorage.getItem('user');
  
  return {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }  
};