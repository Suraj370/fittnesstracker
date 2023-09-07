import { Box, Flex } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
const Header: React.FC = () => {
  return (
    <Box className="header">
      <Image src="/logo.png" width={100} height={100} alt="logo" />
    </Box>
  );
};

export default Header;
