import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbrecipe from '../public/images/works/recipe app.png'
import thumbmapty from '../public/images/works/Mapty app.png'
import thumbjuice from '../public/images/works/fruitjuice.png'
import thumbportfolio from '../public/images/works/portfolio 2.png'
import thumbBankist from '../public/images/works/Bankist.png'
import thumbblog from '../public/images/works/blog database.png'
import thumbsignup from '../public/images/works/Sign up.png'
import thumbaradhana from '../public/images/works/Aradhana.png'
import thumbanuskha from '../public/images/works/Anuskha.png'
import thumbunis from '../public/images/works/Unisthree.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <NextLink
        href="https://www.canva.com/design/DAEmzHG-PhU/L_fWiXKZayxxvdyT3_w2gw/view"
        scroll={false}
      >
        <Button
          rightIcon={<ChevronRightIcon />}
          colorScheme="teal"
          style={{
            marginBottom: '50px'
          }}
        >
          My resume
        </Button>
      </NextLink>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="Forkify" title="Forkify" thumbnail={thumbrecipe}>
            A recipe fetching app with 10000+ recipes to cook from and to make
            life a little easier to deal with.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="Mapty" title="Mapty" thumbnail={thumbmapty}>
            A map tracking application to track your cardio workout's intensity.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="Clearjuice"
            title="Clear juice cart"
            thumbnail={thumbjuice}
          >
            A rebutinated replica of Clear Juice pvt. An animating page with
            carousel.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="Portfolio"
            thumbnail={thumbportfolio}
            title="my portfolio -2"
          >
            A simple static site displaying my capabilities in 2019.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Database sites.
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="Bankist" thumbnail={thumbBankist} title="Bankist">
            A full-fledge replica of transaction banks with database.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="Blog" thumbnail={thumbblog} title="Blog">
            A blogging site of mine for documenting my thoughts {'<'} fantasies.
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
          <WorkGridItem id="Signup" thumbnail={thumbsignup} title="Sign Up">
            A simple news letter website to store all the mail ids of my
            friends.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="WebflowA"
            thumbnail={thumbaradhana}
            title="Webflow site -1"
          >
            A portfolio site made with Webflow components ie a Sass application
            alternative of WordPress.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="Webflowac"
            thumbnail={thumbanuskha}
            title="Webflow site -2"
          >
            A birthday wishing surprise holder also made with Webflow
            components.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="Discord" thumbnail={thumbunis} title="Unis">
            A multi threaded discord bot with super powers.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
