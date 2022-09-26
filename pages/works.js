import { Container, Heading, SimpleGrid, Divider, Badge } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/works/portfolio_eyecatch.png'
import thumbHRMobile from '../public/images/works/hrmobile_eyecatch.png'
import thumbEForm from '../public/images/works/eform_eyecatch.png'
import thumbCargogo from '../public/images/works/cargogo_eyecatch.png'
import thumbWiz from '../public/images/works/wizvision_eyecatch.png'
import thumbNanyang from '../public/images/works/nanyang_eyecatch.png'
import thumbPSA from '../public/images/works/psa_eyecatch.png'
import thumbACMS from '../public/images/works/acms_eyecatch.png'
import thumbTGBot from '../public/images/works/tgbot_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <Badge variant='solid' colorScheme='green'>Hobby</Badge>
          <WorkGridItem 
            id="portfolio" 
            title="Personal portfolio" 
            thumbnail={thumbPortfolio}
          >
            A personal portfolio site, built in Jekyll &amp; Ruby.
          </WorkGridItem>
        </Section>

        <Section>
          <Badge variant='solid' colorScheme='green'>Hobby</Badge>
          <WorkGridItem id="tgbot" thumbnail={thumbTGBot} title="Telegram Bot">
            Telegram bot that help users decide what &amp; where to eat, built in Python.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <Badge variant='solid' colorScheme='green'>Industrial</Badge>
          <WorkGridItem
            id="eform"
            title="Construction Site E-Forms"
            thumbnail={thumbEForm}
          >
            An E-Form System for construction sites, built in React Native.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <Badge variant='solid' colorScheme='green'>Academic</Badge>
          <WorkGridItem
            id="hrmobile"
            title="HR Resource mobile app"
            thumbnail={thumbHRMobile}
          >
            A HR mobile app for Android, built in Kotlin. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Experiences
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <Badge variant='solid' colorScheme='green'>Present</Badge>
          <WorkGridItem id="wizvision" thumbnail={thumbWiz} title="WizVision">
            Software Engineer ( Internship )
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <Badge variant='solid' colorScheme='green'>2018</Badge>
          <WorkGridItem
            id="nanyang" thumbnail={thumbNanyang} title="Nanyang Tech"
          >
            IT Engineer ( Contract )
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <Badge variant='solid' colorScheme='green'>2017</Badge>
          <WorkGridItem id="psa" thumbnail={thumbPSA} title="PSA">
            Data Analyst ( Internship )
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <Badge variant='solid' colorScheme='green'>Academic</Badge>
          <WorkGridItem id="acms" thumbnail={thumbACMS} title="Aircon Monitoring System">
            Mesh-based system for monitoring aircon temperature and humidity.
            Built in Python, RPi4 &amp; MQTT.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <Badge variant='solid' colorScheme='green'>Academic</Badge>
          <WorkGridItem id="cargogo" 
          thumbnail={thumbCargogo} 
          title="CarGoGo">
            A web-based vehicle-trading application, built in HTML &amp; Python.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
