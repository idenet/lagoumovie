import { Box, Container, Button, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { FaSignInAlt, FaSearch } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'

const logo = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
`

const SignInAndJoin = styled.div`
  height: 52px;
  line-height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  padding: 0 6px;
  float: left;
  color: #fff;
  & > button {
    padding: 0 10px;
    font-size: 12px;
  }
  & > button:nth-of-type(1):after {
    content: '';
    width: 1px;
    height: 10px;
    background: #fff;
    position: absolute;
    right: 0;
    top: 16px;
  }
`

const Search = styled.a`
  float: right;
  height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  color: #fff;
  font-size: 20px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`

export default function Header() {
  return (
    <Box h="52px" bgColor="#202020" borderBottom="1px solid #393939">
      <Container h="52px" maxW="1200px" pos="relative">
        <SignInAndJoin>
          <Button colorScheme="transparent" leftIcon={<FaSignInAlt />}>
            注册
          </Button>
          <Button colorScheme="transparent" leftIcon={<BsFillPersonFill />}>
            登录
          </Button>
        </SignInAndJoin>
        <Image src="/images/logo.png" alt="" css={logo} />
        <Search>
          <FaSearch />
        </Search>
      </Container>
    </Box>
  )
}
