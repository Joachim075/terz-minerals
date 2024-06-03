import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title style={{textAlign:'left'}} className={classes.title}>
              
            "Embrace Opulence: <br/>Indulge in Our Exquisite Collection"
            </Title>

            <Text style={{textAlign:'left'}} className={classes.description} mt={30}>
            Embark on a Journey of Discovery:
             Explore Our Exclusive Collection, Anytime, Anywhere</Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}