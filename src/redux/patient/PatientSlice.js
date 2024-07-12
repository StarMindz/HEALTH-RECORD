// redux/patientSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from '../../context/baseUrl';
import axiosInstance from '../../context/axiosInstance';
import axios from 'axios';

export const fetchPatientData = createAsyncThunk('patient/fetchPatientData', async (nin) => {
  const response = await axios.get(`${BASE_URL}/patient/record/nin/${nin}`);
  return response.data;
});

const patientSlice = createSlice({
  name: 'patient',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatientData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPatientData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPatientData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default patientSlice.reducer;
