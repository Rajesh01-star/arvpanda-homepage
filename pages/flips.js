import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Flips = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Flips & Tricks
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Box>
            <iframe
              src="https://giphy.com/embed/s8jL87dfDgEP3nuAYD"
              width="100%"
              height="150"
              frameBorder="0"
              allowFullScreen
            />
          </Box>
          <Box>
            <iframe
              src="https://giphy.com/embed/bUmdHfl1WJadx7C9j5"
              width="100%"
              height="150"
              frameBorder="0"
              allowFullScreen
            />
          </Box>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Box>
            <iframe
              src="https://giphy.com/embed/BcQOtYaVUmIAd6mCFP"
              width="100%"
              height="150"
              frameBorder="0"
              allowFullScreen
            />
          </Box>
          <Box>
            <iframe
              src="https://giphy.com/embed/hxqRt4Tnx16WY3nK2S"
              width="100%"
              height="150"
              frameBorder="0"
              allowFullScreen
            />
          </Box>
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Box>
            <iframe
              src="https://giphy.com/embed/RQa4Skh3ls1lIrLZT5"
              width="100%"
              height="150"
              frameBorder="0"
              allowFullScreen
            />
          </Box>
          <Box>
            <iframe
              src="https://giphy.com/embed/ziyAuscF8AlNMpOC4u"
              width="100%"
              height="150"
              frameBorder="0"
              allowFullScreen
            />
          </Box>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Flips
export { getServerSideProps } from '../components/chakra'
