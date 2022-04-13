import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Clear Juice">
    <Container>
      <Title>
        Clear Juice <Badge>2022-</Badge>
      </Title>
      <P>
        A replica of Clear Juice cart made with the help of JS animation
        libraries and predefined CSS library.
      </P>
      <p>A simple animation project.</p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://subtle-figolla-10a796.netlify.app/">
            https://subtle-figolla-10a796.netlify.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web 3.0</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, Scss, Javascript, Parallax-js, Skeleton-UI</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Site snpas</Center>
      </Heading>

      {/* <Box>
        <iframe
          src="https://player.vimeo.com/video/146373709"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </Box> */}

      <WorkImage src="/images/works/fruitjuice.png" alt="fruit" />
      <WorkImage src="/images/works/fruitjuiceone.png" alt="fruit" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
