import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { 
    AppShell, 
    Burger, 
    Avatar, 
    Flex, 
    Space,
    Title, 
    Text,
    Image
} from '@mantine/core';
import { Navbar } from '../Navbar/Navbar';
import {useMobile} from '@/hooks/useMobile';
interface rootProps {
    children:any
}

const RootLayout = ({ children }: rootProps) => {
    const [opened, { toggle }] = useDisclosure();
    const isMobile = useMobile();
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
            <AppShell.Header style={{
                                 backgroundColor:"rgba(243, 243, 244, 0.6)",
                             }}>

                <Flex
                    mih={50}
                    gap="md"
                    justify="flex-start"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />

                    {!isMobile?<Space w="xs" />:<></>}
                    <Avatar radius="xl">
                        <Image

                            src="https://www.sinarwijayagroup.com/img/logo.png"
                          />
                    </Avatar>


                    <Title order={4}>
                        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
                            Sinar Wijaya Group Sample
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
