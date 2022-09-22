import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="portfolio">
    <Container>
      <Title>
        Personal portfolio site <Badge>2020-2022</Badge> <Badge>Hobby</Badge>
      </Title>
      <P>
        A personal site that I did on my own free time while using it as an opportunity to learn how scss, ruby and Jekyll works. 
        I also used this as an opportunity to learn how to use GitHub Pages and how to use GitHub Actions to automate the deployment process.
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
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
