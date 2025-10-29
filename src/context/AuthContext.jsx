import React, { createContext, useContext, useReducer } from 'react';

// Create Auth Context
const AuthContext = createContext();

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
};

// Auth reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Login function (mock implementation)
  const login = async (email, password) => {
    dispatch({ type: 'LOGIN_START' });
    
    // Simulate API call
    try {
      // In a real app, you would call your backend API here
      // This is a mock implementation
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // For demo purposes, accept any email/password combination
      dispatch({ 
        type: 'LOGIN_SUCCESS', 
        payload: { 
          email: email,
          name: email.split('@')[0], // Extract name from email
        } 
      });
      
      return { success: true };
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
      return { success: false, error: error.message };
    }
  };

  // Register function (mock implementation)
  const register = async (name, email, password) => {
    dispatch({ type: 'LOGIN_START' });
    
    // Simulate API call
    try {
      // In a real app, you would call your backend API here
      // This is a mock implementation
      await new Promise(resolve => setTimeout(resolve, 500));
      
      dispatch({ 
        type: 'REGISTER_SUCCESS', 
        payload: { 
          email: email,
          name: name,
        } 
      });
      
      return { success: true };
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
      return { success: false, error: error.message };
    }
  };

  // Logout function
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const value = {
    ...state,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};