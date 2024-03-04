import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          GeoData Management System
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        GeoData Management System is a React JS-based web application responsible
        for storing, including maps, satellite imagery, and related data. This repository
        contains code and documentation related to the development and management
        of this system
      </Text>
    </>
  );
}
