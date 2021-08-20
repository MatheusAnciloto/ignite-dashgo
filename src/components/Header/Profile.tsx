import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus Anciloto</Text>
          <Text color="gray.300" fontSize="small">ancilotom@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Matheus Anciloto" src="https://github.com/MatheusAnciloto.png" />
    </Flex>
  );
}