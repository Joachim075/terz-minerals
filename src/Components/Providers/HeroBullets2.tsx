import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroBullets2.module.css';

export function HeroBullets2() {
  return (
    <div style={{background:'black', margin:'0'}} className={`${classes.root} ${classes.heroContainer}`}>
      <div className={classes.textGrid}>
        <Container size="lg">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                {' '}
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: '#FFD700', to: '#FFA500' }} // Gold gradient
                >
                  Mineral Exporters, Suppliers, Wholesalers and Distributors
                </Text>{' '}
              </Title>

              <Text style={{textAlign:'left'}} className={classes.description} mt={30} fw={700}>
                Embark on an adventure to unearth rare treasures and precious metals. <br />
                Connecting Global Markets with Premium Minerals.<br />
                Facilitating Seamless Transactions: Buying and Selling Minerals.<br />
                Globalizing Mineral Commerce: Your Gateway to Borderless Trade.
              </Text>

              <Button
                variant="gradient"
                style={{ background: '#FFD700', color: '#000' }} // Gold color
                size="xl"
                className={classes.control}
                mt={40}
              >
                Explore Now
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <div className={`${classes.imageGrid} ${classes.heroContainer}`} style={{ backgroundImage: `url('https://media.istockphoto.com/id/544487916/photo/big-gold-nugget.jpg?s=612x612&w=0&k=20&c=UALXnaC-aiLFZU6nfLWsc0TvNYjZyh9PhKf6M14OQF4=')` }}></div>
    </div>
  );
}
