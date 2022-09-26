import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Telegram Bot">
    <Container>
      <Title>
        Frankie the Gentle Butler <Badge variant='solid' colorScheme='green'>2022</Badge> <Badge variant='solid' colorScheme='green'>Hobby</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/frankiebutler.jpeg" alt="icon" />
      </Center>
      <P>
        A side hobby project involving creating a telegram bot to 
        help me decide what to eat near my workplace. It also 
        recommends my personal favorite songs to other users.
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>Decides what to eat near WizVision Pte Ltd</ListItem>
        <ListItem>Decides where to eat near WizVision Pte Ltd</ListItem>
        <ListItem>Recommend songs in playlist.</ListItem>
        <ListItem>Decides what to eat from a list of food choices.</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, macOS, Linux, iOS, Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
        <ListItem>
          <Meta>TG Bot</Meta>
          <Link href="https://t.me/frankiebutler_bot">
            Click here to try!
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/tangkinleung/FrankieTheGentleButler" target="_blank">
            Check it here! <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshot</Center>
      </Heading>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/pythonbot-ss1.jpeg" alt="tgbot" />
        <WorkImage src="/images/works/pythonbot-ss2.jpeg" alt="tgbot" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
