import axios from 'axios';


const API_BASE_URL = 'http://localhost:8082/api';



const AuthService = {
  async login(username, password) {
    try {
      const response = await axios.post(`${API_BASE_URL}/users/login`, { // Corrected with backticks
        username,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          "Accept": "*/*"
        },
        withCredentials: true
      });

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
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      formData.append('name', name);
      formData.append('phoneNumber', phoneNumber);
      formData.append('role', role);

      const response = await axios.post(
        `${API_BASE_URL}/users`, // Corrected with backticks
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
        if (error.response.status === 400 && error.response.data.message === 'Username already taken') {
          alert('Username already taken. Please choose a different username.');
        } else {
          console.error('Server responded with an error:', error.response.data);
        }
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
      throw error;
    }
  },

  async updateUser(username, password, phoneNumber, role, name) {
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      formData.append('phoneNumber', phoneNumber);
      formData.append('role', role);
      formData.append('name', name);
  
      const response = await axios.put(
        `${API_BASE_URL}/users/${username}`, // Ensure this is the correct endpoint
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
  
  async UpdatePassword(username, password) {
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
     
  
      const response = await axios.put(
        `${API_BASE_URL}/users/${username}`, // Ensure this is the correct endpoint
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
  

  async bookings(style, packageType, totalPrice, date, time, status,username) {
    try {
      const formData = new FormData();
      formData.append('date', date);
      formData.append('time', time);
      formData.append('price', totalPrice);
      formData.append('status', status);
      formData.append('packageType', packageType);
      formData.append('style', style);
      formData.append('username', username);

      const response = await axios.post(
        `${API_BASE_URL}/bookings`, // Corrected with backticks
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            "Accept": "*/*"
          },
        }
      );

      if (response.status === 200) {
        localStorage.setItem('bookingId', response.data.id);
        return true; // Return true if booking is successful
      } else {
        return false; // Return false if booking is not successful
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