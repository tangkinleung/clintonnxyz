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
  <Layout title="PSA">
    <Container>
      <Title>
        Port of Singapore Authority <Badge variant='solid' colorScheme='green'>2017</Badge>
      </Title>
      <P>
        Port of Singapore Authority (PSA) is the leading port operator in Asia.
      </P>

      <hr/>
      <P>
      My responsibilities as a Data Analyst include:
        <UnorderedList my={4}>
        
          <ListItem>
            Develop training manual and handover guides on 
            how to prepare performance and trend analysis reports
          </ListItem>
          <ListItem>
            Train new employees on analyzing data 
            and trend for shipping lines documentation
          </ListItem>
          <ListItem>
            Develop Excel Macro to increase efficiency of workload
          </ListItem>
        </UnorderedList>
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://www.singaporepsa.com/" target="_blank">
              https://www.singaporepsa.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/psa.jpg" alt="Website" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
