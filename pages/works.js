import { Container, Heading, SimpleGrid, Divider, Badge } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/works/portfolio_eyecatch.png'
import thumbHRMobile from '../public/images/works/hrmobile_eyecatch.png'
import thumbEForm from '../public/images/works/eform_eyecatch.png'
import thumbCargogo from '../public/images/works/cargogo_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <Badge>Hobby</Badge>
          <WorkGridItem 
            id="portfolio" 
            title="Personal portfolio" 
            thumbnail={thumbPortfolio}
          >
            A portfolio site built in Jekyll and Ruby, hosted on GitHub Pages.
          </WorkGridItem>
        </Section>

        <Section>
        <Badge>Academic</Badge>
          <WorkGridItem
            id="hrmobile"
            title="HR Resource mobile app"
            thumbnail={thumbHRMobile}
          >
            A HR app for Android, built in Kotlin. 
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <Badge>Industrial</Badge>
          <WorkGridItem
            id="eform"
            title="Construction Site E-Forms"
            thumbnail={thumbEForm}
          >
            An E-Form System for construction sites, built in React Native.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <Badge>Academic</Badge>
          <WorkGridItem id="cargogo" 
          thumbnail={thumbCargogo} 
          title="CarGoGo">
            A web-based application for buying and selling cars, built in HTML and Python.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
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
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
