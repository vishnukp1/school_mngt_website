import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  teachers: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(s => s.id !== action.payload);
    },
    addTeacher: (state, action) => {
      state.teachers.push(action.payload);
    },
    deleteTeacher: (state, action) => {
      state.teachers = state.teachers.filter(t => t.id !== action.payload);
    },
  },
});

export const {
  addStudent,
  deleteStudent,
  addTeacher,
  deleteTeacher,
} = dataSlice.actions;

export default dataSlice.reducer;
