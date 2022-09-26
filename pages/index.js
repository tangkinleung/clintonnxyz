import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Full-Stack Developer based in Singapore🚀
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Frankie Tang
          </Heading>
          <p>Digital Craftsman ( Developer | Engineer | Analyst )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/avatar.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Frankie / Kin Leung
        </Heading>
        <Paragraph>
          I'm a full-time developer based in Singapore with a passion for building 
          digital services/stuff I want. I am currently employed in WizVision as
          a Sofware Engineer, focusing on software development using Java and Angular
          as my stack. When not online, I develop Telegram bots and other side projects.
          On rest days, you will mostly find me in Bugis NLB or Funan Mall. I also actively
          maintain {' '}
          <NextLink href="https://github.com/tangkinleung?tab=repositories&q=&type=public&language=&sort=" passHref scroll={false}>
            <Link target="_blank" rel="noopener no referrer">many industrial, academic and side hobby projects.</Link>
          </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Hong Kong
        </BioSection>
        <BioSection>
          <BioYear>2006</BioYear>
          Moved to Singapore and started my education in Singapore
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the Diploma in Information Technology at Nanyang Polytechnic
        </BioSection>
        <BioSection>
          <BioYear>Now</BioYear>
          Pursuing a Bachelor of Science with Honours in Computing Science degree offered 
          by Singapore Institute of Technology &amp; University of Glasgow while being 
          employed as a software engineer at WizVision
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Swimming, Cooking, Playing Guitar, Music, Programming
        </Paragraph>
      </Section>

      <Section delay={0.3}>

        <Heading as="h3" variant="section-title">
          On the web
        </Heading>

        <List>
          <ListItem>
            <Link href="https://github.com/tangkinleung" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @tangkinleung
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://twitter.com/fralalaland" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @fralalaland
              </Button>
            </Link>
          </ListItem>
          
          <ListItem>
            <Link href="https://instagram.com/fralalaland" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @fralalaland
              </Button>
            </Link>
          </ListItem>
        
          <ListItem>
            <Link href="https://www.linkedin.com/in/tang-kinleung/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                My LinkedIn
              </Button>
            </Link>
          </ListItem>
          
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
