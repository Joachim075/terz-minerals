import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import classes from './FeaturesGrid.module.css';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Extreme performance',
    description:
      'Discover the pinnacle of luxury with our meticulously crafted gold pieces. Each item is expertly designed and crafted to showcase the timeless beauty and elegance of this precious metal.',
  },
  {
    icon: IconUser,
    title: 'Privacy focused',
    description:
      'Indulge in the breathtaking brilliance of our diamond collection. Each diamond is hand-selected for its exceptional quality and dazzling sparkle, ensuring that every piece radiates sophistication and glamour.',
  },
  {
    icon: IconCookie,
    title: 'No third parties',
    description:
      'Embrace the classic allure of silver with our stunning collection of silver jewelry. From sleek and modern designs to intricate detailing, our silver pieces exude timeless elegance and sophistication.',
  },
  {
    icon: IconLock,
    title: 'Secure by default',
    description:
      'Shop with confidence knowing that your transactions are safe and secure. We prioritize the security of your personal and financial information, ensuring a seamless and worry-free shopping experience.',
  },
  {
    icon: IconMessage2,
    title: '24/7 Support',
    description:
      'Receive personalized assistance from our team of knowledgeable experts. Whether you\'re seeking advice on selecting the perfect piece or need assistance with a purchase, our friendly and experienced staff are here to help.',
  },
];


interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text style={{textAlign:'left'}} mt="sm" mb={7}>
        {title}
      </Text>
      <Text style={{textAlign:'left'}} size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>                          </Title>

  
      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}