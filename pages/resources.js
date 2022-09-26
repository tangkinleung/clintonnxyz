import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/contents/youtube-how-to-portfolio.jpg'
import thumbHowToAngular from '../public/images/contents/youtube-how-to-angular.jpg'
import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbBootstrap5 from '../public/images/contents/blog-bootstrap5.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumbDalle from '../public/images/contents/youtube-dalle.jpg'
const Resources = () => (
  <Layout title="Resources">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Useful resources I found
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to build a portfolio website"
            thumbnail={thumbPortfolio}
            href="https://www.youtube.com/watch?v=13X-xXjiv_I"
          />
          <GridItem
            title="How to build a responsive website with Angular 12"
            thumbnail={thumbHowToAngular}
            href="https://www.youtube.com/watch?v=YehZI9Hbtn8"
          />
          <GridItem
            title="My Fish workflow"
            thumbnail={thumbFishWorkflow}
            href="https://www.youtube.com/watch?v=KKxhf50FIPI"
          />
          <GridItem
            title="Bootstrap 5 Blog"
            thumbnail={thumbBootstrap5}
            href="https://blog.getbootstrap.com/2021/05/05/bootstrap-5/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="When AI Creates STUNNING &amp; BEAUTIFUL Images (Dall-e 2)"
            thumbnail={thumbDalle}
            href="https://www.youtube.com/watch?v=fuDbpn8aZr8"
          />
          <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={thumbHowToPriceYourself}
            href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
          />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Resources
export { getServerSideProps } from '../components/chakra'
