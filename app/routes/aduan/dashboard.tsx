import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Button } from '@mui/material';
import { Link } from 'react-router'; // Import Link from react-router

const Dashboard = () => {
  // Sample data for the list of aduan
  const aduanList = [
    {
      id: 1,
      title: 'Aduan 1',
      description: 'Masalah jalan berlubang di kawasan perumahan.',
      date: '2023-05-01',
    },
    {
      id: 2,
      title: 'Aduan 2',
      description: 'Lampu jalan tidak berfungsi di taman permainan.',
      date: '2023-05-05',
    },
    {
      id: 3,
      title: 'Aduan 3',
      description: 'Sampah tidak dikutip selama seminggu.',
      date: '2023-05-10',
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Link to="/aduan/borang-aduan" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginBottom: '20px' }}
        >
          Pergi ke Borang Aduan
        </Button>
      </Link>
      <Grid container direction="column" spacing={3} sx={{ width: '100%', maxWidth: '600px' }}>
        {aduanList.map((aduan) => (
          <Grid item xs={12} key={aduan.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {aduan.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {aduan.description}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Tarikh: {aduan.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;