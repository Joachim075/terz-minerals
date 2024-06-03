import { Table, Progress, Anchor, Text, Group } from '@mantine/core';
import classes from './TableReviews.module.css';

const data = [
  {
    title: 'Gold',
    units: 'Gram',
    pricePerGram: 65, // Example price per gram in dollars
    weight: 100, // Example weight in grams
    reviews: { positive: 92, negative: 8 },
  },
  {
    title: 'Diamond',
    units: 'Carat',
    pricePerGram: 4500, // Example price per gram in dollars
    weight: 2, // Example weight in carats
    reviews: { positive: 85, negative: 15 },
  },
  {
    title: 'Red Mercury',
    units: 'Gram',
    pricePerGram: 4500, // Example price per gram in dollars
    weight: 50, // Example weight in grams
    reviews: { positive: 88, negative: 12 },
  },
  {
    title: 'Silver',
    units: 'Kilogram',
    pricePerGram: 0.95, // Example price per gram in dollars
    weight: 500, // Example weight in kilograms
    reviews: { positive: 95, negative: 5 },
  },
];

export function TableReviews() {
  const rows = data.map((row) => {
    const totalReviews = row.reviews.negative + row.reviews.positive;
    const positiveReviews = (row.reviews.positive / totalReviews) * 100;
    const negativeReviews = (row.reviews.negative / totalReviews) * 100;
    const totalPrice = row.pricePerGram;

    return (
      <Table.Tr key={row.title}>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.title}
          </Anchor>
        </Table.Td>
        <Table.Td>{row.units}</Table.Td>
        <Table.Td>${Intl.NumberFormat().format(totalPrice)}</Table.Td>
        <Table.Td>
          <Group justify="space-between">
            <Text fz="xs" c="teal" fw={700}>
              {positiveReviews.toFixed(0)}%
            </Text>
            <Text fz="xs" c="red" fw={700}>
              {negativeReviews.toFixed(0)}%
            </Text>
          </Group>
          <Progress.Root>
            <Progress.Section
              className={classes.progressSection}
              value={positiveReviews}
              color="teal"
            />

            <Progress.Section
              className={classes.progressSection}
              value={negativeReviews}
              color="red"
            />
          </Progress.Root>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Mineral</Table.Th>
            <Table.Th>Units</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Reviews Distribution</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
