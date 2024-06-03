import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem } from '@mantine/core';
import { IconHammer,IconDiamond,IconUserCircle, IconLock } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './FeaturesTitle.module.css';

const features = [
  {
    icon: IconDiamond,
    title: 'Exquisite Jewelry',
    description: 'Explore our stunning collection of fine jewelry crafted with the finest precious metals and rare gemstones.',
  },
  {
    icon: IconHammer,
    title: 'Expert Craftsmanship',
    description: 'Each piece in our collection is meticulously crafted by skilled artisans, ensuring exceptional quality and beauty.',
  },
  {
    icon: IconUserCircle,
    title: 'Personalized Service',
    description:
      'Receive personalized assistance from our knowledgeable staff to find the perfect piece that matches your style and preferences.',
  },
  {
    icon: IconLock,
    title: 'Secure Transactions',
    description:
      'Shop with confidence knowing that your transactions are safe and secure, with encrypted payment methods and data protection measures.',
  },
];

export function FeaturesTitle() {
  const items = features.map((feature) => (
    <div  key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: '#000', to: '#000'}} // Gold gradient
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ThemeIcon>
      <Text style={{textAlign:'left'}} fz="lg" mt="sm" fw={500} c="#333"> {/* Dark text color */}
        {feature.title}
      </Text>
      <Text style={{textAlign:'left'}} c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div style={{margin:'4px'}} className={classes.wrapper}>
      <Grid gutter={80}>


      <Grid.Col span={{ base: 12, md: 7 }}>
          <Link to="/providers">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
          </Link>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }} >
          <Title style={{color:'gold'}} className={classes.title} order={2} c="#333"> {/* Dark title color */}
          Luxury Precious Metals & Gemstones. {/* Updated title */}
          </Title>
          <Text style={{textAlign:'left'}} c="dimmed" >
          Welcome to your premier destination for exquisite precious metals and rare gemstones. Discover a world of luxury and elegance as you explore our stunning collection of gold, silver, red mercury, and diamonds.

<br/>Elevate Your Style: Whether you're seeking timeless elegance or modern sophistication, our curated selection of precious metals and gemstones offers something for every taste and occasion.

Unrivaled Quality: We pride ourselves on offering only the highest quality gold, silver, red mercury, and diamonds. Each piece in our collection is meticulously crafted to perfection, ensuring lasting beauty and value.

Expert Guidance: Our team of experienced professionals is here to assist you every step of the way. From selecting the perfect piece to answering your questions about precious metals and gemstones, we're dedicated to providing unparalleled customer service.

Secure Transactions: Shop with confidence knowing that your transactions are safe and secure.      </Text>

        </Grid.Col>



      </Grid>
    </div>
  );
}
