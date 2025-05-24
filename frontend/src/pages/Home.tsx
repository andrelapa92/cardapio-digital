import { Container, Typography, Button } from '@mui/material';

function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Cardápio Digital 🍽️
      </Typography>
      <Button variant="contained" color="primary">
        Ver Cardápio
      </Button>
    </Container>
  );
}

export default Home;
