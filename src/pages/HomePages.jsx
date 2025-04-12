import React, { useState } from 'react';
import { Container, Typography, Tabs, Tab, Paper } from '@mui/material';
import TableSection from '../components/TableSection';

export default function HomePage() {
  const [tab, setTab] = useState(0);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>CRES Dashboard</Typography>
      <Tabs value={tab} onChange={(e, val) => setTab(val)}>
        <Tab label="Students" />
        <Tab label="Teachers" />
      </Tabs>

      <Paper className="p-4 mt-4">
        <TableSection type={tab === 0 ? 'student' : 'teacher'} />
      </Paper>
    </Container>
  );
}
