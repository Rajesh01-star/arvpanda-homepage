import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Center,
  Link,
  Image
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbcube from '../public/images/contents/cube.png'
import thumbalien from '../public/images/contents/alien.png'
import thumbcinematic from '../public/images/contents/cinematic.png'
import thumbst from '../public/images/contents/St.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My 3D Efforts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="A space cyborg mystery triangle."
            thumbnail={thumbcube}
            href="https://player.vimeo.com/video/660953465"
          />
          <GridItem
            title="An alien portal into the other world."
            thumbnail={thumbalien}
            href="https://giphy.com/embed/ZCXOnCqbVSpIRMsjWj"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="A cinematic intro."
            thumbnail={thumbcinematic}
            href="https://player.vimeo.com/video/698958684"
          />
          <GridItem
            title="A replica of Stranger Things intro."
            thumbnail={thumbst}
            href="https://player.vimeo.com/video/698956458"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <Box>
          <iframe
            src="https://player.vimeo.com/video/660956777"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
          />
        </Box>
      </Section>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Vimeo link</Center>
      </Heading>

      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://vimeo.com/user135005062"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/contents/Vimeo.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
