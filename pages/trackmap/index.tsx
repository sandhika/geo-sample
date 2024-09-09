/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/order */

import React, { useState, useRef } from 'react';
import GeoMap from '@/components/GeoMap/GeoMap';
import TrackMap from '@/components/TrackMap/TrackMap';
import HistoryMap from '@/components/HistoryMap/HistoryMap';
import { 
  Box,
  Flex, 
  FileButton, 
  Button,
  Group,
  Text
} from '@mantine/core';
import {SearchableSelect} from "@/components/SearchableSelect/SearchableSelect";

function TrackMapPage() {
  const [file, setFile] = useState<File | null>(null);
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };


  return (
    <Box>
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap"
      >
          <Text>Plat : </Text>
          <SearchableSelect />
      </Flex>

      {/*{file && (*/}
      {/*  <Text size="sm" mt="sm">*/}
      {/*    Picked file: {file.name}*/}
      {/*  </Text>*/}
      {/*)}*/}
      <HistoryMap/>
    </Box>
  )
}
export default TrackMapPage;
