/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/order */

import React, { useState, useRef } from 'react';
import GeoMap from '@/components/GeoMap/GeoMap';
import { 
  Box,
  Flex, 
  FileButton, 
  Button,
  Group,
  Text
} from '@mantine/core';

function GeoMapPage() {
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
        <FileButton resetRef={resetRef} onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Upload GeoData Json</Button>}
        </FileButton>
        <Button disabled={!file} color="red" onClick={clearFile}>
          Reset
        </Button>

        <Button color="green" >
          Download Sample Route GeoJson
        </Button>

      </Flex>

      {file && (
        <Text size="sm" align="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
      <GeoMap/>
    </Box>
  )
}
export default GeoMapPage
