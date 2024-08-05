import { Badge, NavLink } from '@mantine/core';
import { IconHome2, IconMap, IconChevronRight } from '@tabler/icons-react';
import { useRouter } from 'next/router';


export function Navbar() {
    const router = useRouter();
    return (
        <>
            <NavLink
                href="/"
                label="Dashboard"
                leftSection={<IconHome2 size="1rem" stroke={1.5} />}
              rightSection={
                    <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
                }
                
                variant="filled"
                active={router.pathname === "/" ?true:false} 
            />

            <NavLink
                href="/geomap"
                label="Map Tracking"
                leftSection={<IconMap size="1rem" stroke={1.5} />}
                rightSection={
                    <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
                }
                variant="filled"
                active={router.pathname === "/geomap" ? true : false} 
            />    
        </>
    );
}