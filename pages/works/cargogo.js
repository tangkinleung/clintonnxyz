import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="cargogo">
    <Container>
      <Title>
        CarGoGo (Go Vroom) <Badge>2021</Badge> <Badge>Academic</Badge>
      </Title>
      <P>
        CarGoGo is an academic project that aims to develop database 
        administration skills required for designing, creating, running
        and developing a relational database application and its associated
        application software suites. My team and I developed a car trading
        platform to put our skills and concepts into practical use.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/tangkinleung/CarGoGo" target="_blank">
            Check it here! <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, macOS, Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, HTML, Bootstrap 5, MongoDB, MySQL</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
