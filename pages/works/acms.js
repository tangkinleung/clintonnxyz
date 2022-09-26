import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="ACMS">
    <Container>
      <Title>
        Aircon Monitoring System <Badge variant='solid' colorScheme='green'>2022</Badge>
      </Title>
      <P>
        A mesh-based Aircon Monitoring System that monitors the room temperature 
        and humidity of a building, and sends alerts to the user when the 
        temperature or humidity exceeds the set threshold. It can generates a report
        of the temperature and humidity of the building for a given period of time to
        help the user to identify the problem areas.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, MQTT, Flask</span>
        </ListItem>
      </List>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://docs.google.com/document/d/1THjKr8oIAG5uGRwdnKA4AYegXhfyYLA9rIDVJ3AcEbY/edit">
            <Badge mr={2}>Research Paper</Badge>
            Scalable Mesh-based Aircon Monitoring System With Lower Power Energy Consumption Using Zigbee{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
