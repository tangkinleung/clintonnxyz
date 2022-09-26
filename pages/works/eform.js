import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="e-Form System">
    <Container>
      <Title>
        Construction Site E-Form System <Badge variant='solid' colorScheme='green'>2021</Badge> <Badge variant='solid' colorScheme='green'>Industrial</Badge>
      </Title>
      <P>
      An E-Form System created for Cloud Plus Pte Ltd. 
      The purpose of system is to replace physical paper 
      forms to streamline the workflow in the construction 
      worksites. This increases operational effciency and 
      reduces storage costs and retrieval time.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Documentation</Meta>
          <Link href="https://docdro.id/o0QV96s" target="_blank">
            Check it here!{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/tangkinleung/Construction-Site-E-Form-System" target="_blank">
            Check it here!{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
        <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Huawei Cloud, React</span>
        </ListItem>
      </List>
      </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
