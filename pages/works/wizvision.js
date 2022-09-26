import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="WizVision">
    <Container>
      <Title>
        WizVision <Badge>Present</Badge>
      </Title>
      <P>
        WizVision is an established ICT System provider based in Singapore.
      </P>
      <hr/>
      <P>
      My responsibilities as a Software Engineer include:
        <UnorderedList my={4}>
        
          <ListItem>
            Participate in full project life cycle from requirements 
            gathering to project implementation, maintenance and support
          </ListItem>
          <ListItem>
            Develop secure, scalable and good quality application 
            programs and API within allocated man days
          </ListItem>
          <ListItem>
            Perform data migration, data transformation and scripting
          </ListItem>
          <ListItem>
            Participate in continuous integration activities and 
            automation frameworks for testing and deployment
          </ListItem>
        </UnorderedList>
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.wizvision.com/" target="_blank">
              https://www.wizvision.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/wizvision.png" alt="Website" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
