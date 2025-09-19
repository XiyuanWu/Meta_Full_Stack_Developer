import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderRadius="10px"
      boxShadow="4px 4px 6px rgba(0, 0, 0, 0.1)"
      overflow="hidden"
      alignItems="flex-start"
      bg="white"
      color="black"
    >
      <Image
        src={imageSrc}
        alt={title}
        width="100%"
        height="200px"
        objectFit="cover"
      />
      <VStack alignItems="flex-start" padding={4} spacing={2}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
        <HStack spacing={2} cursor="pointer">
          <Text fontWeight="bold" color="blue.600">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </VStack>
  );
};


export default Card;
