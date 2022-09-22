import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="hrmobile">
    <Container>
      <Title>
        HR Resource Mobile Application <Badge>2022</Badge> <Badge>Academic</Badge>
      </Title>
      <P>
        As an academic project, the HR resource mobile application is fully functional. 
        The application is built in Kotlin and uses Firebase as a backend. 
        It has an inbuilt image analysis, Machine Learning kit with real-time authentication &amp; database.
        Android JetPack CameraX, Google ML Kit and Google Firebase Service is used.
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/tangkinleung/HR-Mobile-App" target="_blank">
            Check it here!{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        
        <ListItem>
          <Meta>Stack</Meta>
          <span>Kotlin, Firebase</span>
        </ListItem>
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe 
          src="https://www.youtube.com/embed/8uv7DSOY_Yg" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
