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
  <Layout title="Forkify">
    <Container>
      <Title>
        Forkify <Badge>2022-</Badge>
      </Title>
      <P>
        A recipe fetching application with 10000+ recipes to choose from and
        make your time inside kitchen worthwhile.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://forkify-atharv.netlify.app/">
            https://forkify-atharv.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Wen 3.0</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, SCSS, Javascript</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Site snaps</Center>
      </Heading>

      <WorkImage src="/images/works/forkifyone.png" alt="forkify" />
      <WorkImage src="/images/works/forkifytwo.png" alt="forkify" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
