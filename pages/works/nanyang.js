import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Nanyang Tech">
    <Container>
      <Title>
        Nanyang Tech Pte Ltd <Badge variant='solid' colorScheme='green'>2018</Badge>
      </Title>
      <P>
        Nanyang Tech Pte Ltd is a Singapore-based company that provide IT Services 
        and professional solutions managed by their in-house experienced technical team.
      </P>
      <hr/>
      <P>
        My responsibilities as an IT Engineer include:
          <UnorderedList my={4}>
            <ListItem>
              Manage a team of five as the team leader
            </ListItem>
            <ListItem>
              Setup, installation and deployment of computers and servers
            </ListItem>
            <ListItem>
              Perform troubleshooting and maintenance of computers and servers
            </ListItem>
            <ListItem>
              Serves as contact point for clients and vendors
            </ListItem>
          </UnorderedList>
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.nanyangtechnology.com/" target="_blank">
              https://www.nanyangtechnology.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/nanyang.jpg" alt="Website" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
