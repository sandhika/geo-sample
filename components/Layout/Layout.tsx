import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { 
    AppShell, 
    Burger, 
    Avatar, 
    Flex, 
    Space,
    Title, 
    Text } from '@mantine/core';
import { Navbar } from '../Navbar/Navbar';

const RootLayout = ({ children }) => {
    const [opened, { toggle }] = useDisclosure();
    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <Flex
                    mih={50}
                    gap="md"
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Space w="xs" />
                    <Avatar color="cyan" radius="xl">GS</Avatar>
                    <Title order={4}>
                        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
                            GeoData Management System
                        </Text>
                    </Title>
                </Flex>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <Navbar />
            </AppShell.Navbar>

            <AppShell.Main>
                <>
                   {children}
                </>
            </AppShell.Main>
        </AppShell>

    );
};

export default RootLayout;