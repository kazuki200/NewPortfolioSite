import { Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Footer: VFC = memo(() => {
  return (
    <Text
      bg="#707070"
      w="100%"
      p={{ base: "15px", md: "30px" }}
      color="#ffffff"
      fontSize="20px"
      textAlign="center"
    >
      @Kazuki`s Portfolio
    </Text>
  );
});
