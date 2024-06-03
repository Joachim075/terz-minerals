import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';

const mockdata = [
  {
    title: '"Discover the brilliance of diamonds - natures most dazzling gemstone. Explore our exquisite collection of diamonds each a testament to timeless beauty and enduring elegance."',
    image:
      'https://media.istockphoto.com/id/1578990284/photo/scattering-of-diamonds-of-various-cuts-on-a-white-background-exhibition-of-precious-stones-3d.webp?b=1&s=170667a&w=0&k=20&c=o5f_us2U2HrKX5PPxjf-Rd_jHw5CYJ6_u9OA-mCrMfE=',
    date: 'Diamonds',
  },
  {
    title: '"Indulge in the luxury of gold - the ultimate symbol of wealth, prestige, and beauty. Explore our stunning array of gold jewelry and accessories, crafted to perfection for those who appreciate the finer things in life."',
    image:
      'https://media.istockphoto.com/id/172434694/photo/gold-ingots.webp?s=170667a&w=0&k=20&c=6YC4gxrNF6VjC6y5gu-a5OfP9i2oPLkmokvLGK1od1o=',
    date: 'Gold',
  },
  {
    title: '"Embrace the allure of silver - a precious metal steeped in history and versatility. From sleek modern designs to classic elegance, our silver collection offers something for every style."',
    image:
      'https://media.istockphoto.com/id/1403979478/photo/stack-of-shiny-silver-bars-ingots-and-coins.jpg?s=612x612&w=0&k=20&c=XsIA7Cb2BaVhgdMHaaEiJIaTOLTNwnh6JafDHH1atag=',
    date: 'Silver ',
  },
  {
    title: '"Uncover the mystique of red mercury - a rare and enigmatic substance that captivates with its mysterious allure. Dive into our exclusive selection and experience the magic of this elusive element."',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHrY4n8-JmjVgkG_v6aUvYjTux9p2Q9Yyaw&usqp=CAU',
    date: 'Red Mercury',
  },
];

export function ArticlesCardsGrid() {
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text c="dimmed" size="xl" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}