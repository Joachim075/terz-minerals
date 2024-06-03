import { Container, Grid, SimpleGrid, rem } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(300);

export function LeadGrid() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {/* Replace the first Skeleton with an image link */}
        <img src="https://media.istockphoto.com/id/629743180/photo/gold-price-commodities-investment.jpg?s=612x612&w=0&k=20&c=HsBgx5cHCyW5xRZKBhPMbu-3vQwxncQYzbm7p76uKg8=" alt="Image 1" style={{ width: '100%', height: PRIMARY_COL_HEIGHT, borderRadius: '8px' }} />

        {/* Second column */}
        <Grid gutter="md">
          <Grid.Col>
            {/* Replace the Skeleton with an image link */}
            <img src="  https://media.istockphoto.com/id/1488630560/photo/diamond-group-placed-on-black-background-with-soft-focus-3d-rendering.jpg?s=612x612&w=0&k=20&c=W8yD1vfDyCFFyYiKPLnlVBz0bfTGx9H8mUF95CrRxw8=" alt="Image 2" style={{ width: '100%', height: SECONDARY_COL_HEIGHT, borderRadius: '8px' }} />
          </Grid.Col>
          <Grid.Col span={6}>
            {/* Replace the Skeleton with an image link */}
            <img src="  
            https://media.istockphoto.com/id/1820760080/photo/many-shiny-gold-bars-on-black-background.jpg?s=612x612&w=0&k=20&c=1E_fY2Nr1byD6u5GUEAhqrGaowN11uJ8tweMpcyOKs4=
            " alt="Image 3" style={{ width: '100%', height: SECONDARY_COL_HEIGHT, borderRadius: '8px' }} />
          </Grid.Col>
          <Grid.Col span={6}>
            {/* Replace the Skeleton with an image link */}
            <img src="https://media.istockphoto.com/id/1342199962/photo/platinum-bars-1000-grams-pure-platinum-business-investment-and-wealth-concept-wealth-of.jpg?s=612x612&w=0&k=20&c=KqN6k0ukj5MEICJPumdX3i_IyWlOjXAgaHg56Nf41MY=" alt="Image 4" style={{ width: '100%', height: SECONDARY_COL_HEIGHT, borderRadius: '8px' }} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
