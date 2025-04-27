// src/contexts/UserContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToast } from "../components/landing/ToastContext"; // Adjust the import path as necessary


export type User = {
  id: string;
  name: string;
  email: string;
  profession: string;
};

type UserContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, profession: string) => Promise<void>;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await axios.get("https://creercraftbackend-mongouri.up.railway.app/api/auth/session", {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch (err: any) {
        if (axios.isAxiosError(err)) {
          if (err.response) {
            // Server responded with a status outside the 2xx range
            console.error("Session check failed:", err.response.status, err.response.data);
            if (err.response.status === 401) {
              console.warn("No active session.");
            } else {
              console.error("Unexpected error:", err.response.statusText);
            }
          } else if (err.request) {
            // Request was made but no response received
            console.error("No response from server:", err.request);
          } else {
            // Something else went wrong
            console.error("Axios error:", err.message);
          }
        } else {
          // Non-Axios error
          console.error("Unknown error:", err);
        }
  
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
  
    checkSession();
  }, []);
  


 
  const login = async (email: string, password: string) => {
    
    try {
      const res = await axios.post(
        'https://creercraftbackend-mongouri.up.railway.app/api/auth/login',
        { email, password },
        { withCredentials: true }
      );
      console.log(res);
      setUser(res.data.user);
      navigate('/', { replace: true });
      showToast("success", "Logged in successfully!");
    } catch (err) {
      showToast("danger", "Invalid email or password.");
    }
  };

  const signup = async (name: string, email: string, password: string, profession: string) => {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/signup',
        { name, email, password, profession },
        { withCredentials: true }
      );
      setUser(res.data.user); // assuming backend returns user
      navigate('/profile/', { replace: true });
      showToast("success", "Signed up successfully!");
    } catch (error) {
      showToast("danger", "Signup failed. Please try again.");
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://localhost:3000/api/auth/logout', {}, { withCredentials: true });
      setUser(null);
      navigate('/login', { replace: true });
      showToast("success", "Logged out successfully!");
    } catch (error) {
      showToast("danger", "Logout failed. Please try again.");
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, login, signup, logout }}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
