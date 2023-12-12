import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6574b8afb2fbb8f6509c95d5.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

 export const deleteContact = createAsyncThunk(
   'contacts/deleteContact',
   async (contactId, thunkAPI) => {
     try {
       const response = await axios.delete(
         `/contacts/${contactId?.id || contactId}`
       );
       return response.data;
     } catch (e) {
       return thunkAPI.rejectWithValue(e.message);
     }
   }
 );

