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
import thumbunis from '../public/images/works/Unisthree.png'
import thumbsheets from '../public/images/works/sheets.png'
import thumbcarousel from '../public/images/works/carousel.png'
import thumbputatoe from '../public/images/works/putatoe.png'
import thumbgajanan from '../public/images/works/gajanan_ss.png'
import thumbblog from '../public/images/works/blog.png'
import thumbmeta from '../public/images/works/metaverse.png'
import thumbmedhive from '../public/images/works/Medhive.png'
import thumbthread from '../public/images/works/threads_one.png'
import thumbHighradius from '../public/images/works/highradius.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <NextLink
        href="https://drive.google.com/file/d/1-kUes3kdeYdpvX1rTF1K-MMqPx-L6Iq3/view?usp=sharing"
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
      <Section delay={0.1}>
          <WorkGridItem id="Highradius" thumbnail={thumbHighradius} title="Highradius">
          HighRadius provides Autonomous Finance solutions to streamline CFO operations and reduce costs.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="Putatoe" thumbnail={thumbputatoe} title="Putatoe">
            A multi-purpose web app that provides user with different day-to-day
            needs in a single place.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="Gajanan" thumbnail={thumbgajanan} title="Gajanan">
          The new website successfully transitioned Gajanan Driving School to the online world.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="Medhive" thumbnail={thumbmedhive} title="Medhive">
            This is a web-app that lets you know all the information about the
            nearby hospitals.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="Thread" thumbnail={thumbthread} title="Thread">
            This is a full fledge working alternative of Threads app to express
            thoughts.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Small projects.
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="Sheets" thumbnail={thumbsheets} title="Sheets">
            A working clone of Google sheets with options to do arithematic
            operations.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="Blog" thumbnail={thumbblog} title="Blog">
            My minimal blog page where I dump all my psychological
            dysfunctionings.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="Carousel"
            thumbnail={thumbcarousel}
            title="Carousel"
          >
            A simple movie carousel to show case my favorite movies.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="Metaverse" thumbnail={thumbmeta} title="Metaverse">
            A futuristic META landing page with framer animations.
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

        <Section delay={0.5}>
          <WorkGridItem
            id="Clearjuice"
            title="Clear juice cart"
            thumbnail={thumbjuice}
          >
            A rebutinated replica of Clear Juice pvt. An animating page with
            carousel.
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id="Portfolio"
            thumbnail={thumbportfolio}
            title="my portfolio -2"
          >
            A simple static site displaying my capabilities in 2019.
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem id="Discord" thumbnail={thumbunis} title="Unis">
            A multi threaded discord bot with super powers.
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem id="Bankist" thumbnail={thumbBankist} title="Bankist">
            A full-fledge replica of transaction banks with database.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
