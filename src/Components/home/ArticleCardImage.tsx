import { Paper, Text, Title, Button } from '@mantine/core';
import classes from './ArticleCardImage.module.css';

export function ArticleCardImage() {
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div>
        <Text className={classes.category} size="xs">
          MINERALS
        </Text>
        <Title order={3} className={classes.title} >
         World Treasures.
        </Title>
      </div>
      <Button variant="white" color="dark">
      World Treasures.
      </Button>
    </Paper>
  );
}