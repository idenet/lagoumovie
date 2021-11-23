import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import { MdMovie } from 'react-icons/md'
import { baseURL } from './../axiosConfig'

export default function Movie({ data, title }) {
  return (
    <Box maxW="1200px" mx="auto" mt="20px">
      <HStack fontSize="24px">
        <MdMovie></MdMovie>
        <Heading as="h3" fontSize="24px">
          {title}
        </Heading>
      </HStack>
      <HStack mt="20px">
        {data.map((movie) => (
          <Box w={290} key={movie.id}>
            <Image src={movie.url} alt="" />
            <Text mt="10px">{movie.title}</Text>
          </Box>
        ))}
      </HStack>
    </Box>
  )
}

export function loadMovie() {
  return axios.get('/api/movie', {
    baseURL: baseURL,
  })
}
