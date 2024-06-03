import { Card, Text } from '@mantine/core';

export function ContactIcons() {
  return (
    <Card shadow="sm" padding="lg" radius="md">
      <Text align="center" size="lg" weight={700} style={{ marginBottom: 10 }}>
        Contact Us
      </Text>
      <Text align="center" size="sm" style={{ marginBottom: 5 }}>
        Email: info@company.com
      </Text>
      <Text align="center" size="sm" style={{ marginBottom: 5 }}>
        Phone: +1 (123) 456-7890
      </Text>
      <Text align="center" size="sm" style={{ marginBottom: 5 }}>
        Address: 123 Main St, City, Country
      </Text>
    </Card>
  );
}
