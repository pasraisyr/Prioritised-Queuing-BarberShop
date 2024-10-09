import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082/api';



const AuthService = {
    async login(username, password) {

      try {
        const response = await axios.post(`${API_BASE_URL}/users/login`, {
          username,
          password,
            
        },
        {
              headers: {
              'Content-Type': 'application/json',
              "Accept": "*/*"
            
            },
            withCredentials: true
          }
        );
  
        if (response.status === 200) {

          localStorage.setItem('username', response.data.username);
          localStorage.setItem('role', response.data.role);
          return true;
        }
      } catch (error) {
        console.error('Login failed:', error);
        return false;
      }
    },

    async register(username, password, phoneNumber, role, name) {
    //  const username = await localStorage.getItem('username');
  
      try {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('name', name);
        formData.append('phoneNumber', phoneNumber);
        formData.append('role', role);
  
        const response = await axios.post(
          `${API_BASE_URL}/users`,
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
              "Accept": "*/*"
            },
          }
        );
  
        if (response.status === 200) {
          return response.data;
        }
      } catch (error) {
        if (error.response) {
          console.error('Server responded with an error:', error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up the request:', error.message);
        }
        throw error;
      }
    },

    async bookings(date, time,packageType, style) {
      //  const username = await localStorage.getItem('username');
    
        try {
          const formData = new FormData();
          formData.append('date', date);
          formData.append('time', time);
          formData.append('packageType', packageType);
          formData.append('style', style);
    
          const response = await axios.post(
            `${API_BASE_URL}/bookings`,
            formData,
            {
              headers: {
                'Content-Type': 'application/json',
                "Accept": "*/*"
              },
            }
          );
    
          if (response.status === 200) {
            return response.data;
          }
        } catch (error) {
          if (error.response) {
            console.error('Server responded with an error:', error.response.data);
          } else if (error.request) {
            console.error('No response received:', error.request);
          } else {
            console.error('Error setting up the request:', error.message);
          }
          throw error;
        }
      },
  


  
};

export default AuthService;
