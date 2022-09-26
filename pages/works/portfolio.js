import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Center,
  Image
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Portfolio Site">
    <Container>
      <Title>
        Personal Site (Version 1) <Badge variant='solid' colorScheme='green'>2020-2022</Badge> <Badge variant='solid' colorScheme='green'>Hobby</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/portfolio-ss.png" alt="icon" />
      </Center>
      <P>
        A personal site that I did on my own free time while using it as an opportunity to learn how scss, ruby and Jekyll works. 
        I also used this as an opportunity to learn how to use GitHub Pages and how to use GitHub Actions to automate the deployment process.
        Dark Mode is also supported for this site based on users' system preference!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/tangkinleung/tangkinleung.github.io" target="_blank">
            Check it on GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Jekyll, Bulma and React Native</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/portfolio-ss1.png" alt="tgbot" />
        <WorkImage src="/images/works/portfolio-ss2.png" alt="tgbot" />
        <WorkImage src="/images/works/portfolio-ss3.png" alt="tgbot" />
        <WorkImage src="/images/works/portfolio-ss4.png" alt="tgbot" />
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
