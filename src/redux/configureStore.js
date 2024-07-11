import { configureStore } from '@reduxjs/toolkit';
import patientReducer from './patient/PatientSlice'

const store = configureStore({
  reducer: {
    patient: patientReducer,
  },
});

export default store;
