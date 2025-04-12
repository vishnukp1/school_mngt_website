import React, { useState } from 'react';
import {
  TextField,
  Button,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import {
  addStudent,
  deleteStudent,
  addTeacher,
  deleteTeacher,
} from '../redux/slice';

export default function TableSection({ type }) {
  const dispatch = useDispatch();
  const data = useSelector(state =>
    type === 'student' ? state.data.students : state.data.teachers
  );

  const [name, setName] = useState('');
  const [search, setSearch] = useState('');

  const handleAdd = () => {
    if (!name) return;
    const item = { id: Date.now(), name };
    type === 'student' ? dispatch(addStudent(item)) : dispatch(addTeacher(item));
    setName('');
  };

  const handleDelete = (id) => {
    type === 'student' ? dispatch(deleteStudent(id)) : dispatch(deleteTeacher(id));
  };

  const filtered = data.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
        <TextField
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          margin="normal"
          size="small" 
          sx={{ width: 200 }} 
        />
      </div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
        <TextField
          label={`Add ${type}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="small" 
          sx={{ width: 180 }} 
        />
        <Button
          variant="contained"
          onClick={handleAdd}
          size="small"
        >
          Add
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell sx={{ width: '50px', padding: '8px' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filtered.map((d) => (
            <TableRow key={d.id}>
              <TableCell>{d.name}</TableCell>
              <TableCell sx={{ width: '50px', padding: '8px' }}>
                <IconButton onClick={() => handleDelete(d.id)} size="small">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
