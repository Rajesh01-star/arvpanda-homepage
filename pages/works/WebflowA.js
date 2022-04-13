import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Webflow -1">
    <Container>
      <Title>
        Webflow - Persona <Badge>2022-</Badge>
      </Title>
      <P>
        So I was challenged to make a site that will describe the person and
        their interests. As I worked around it, my thoughts went ahead of my
        coding capabilities then so I use the Webflow components to build up the
        site.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://aradhanaxaf.webflow.io/">
            https://aradhanaxaf.webflow.io/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web 3.0</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Webflow components</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Site snaps</Center>
      </Heading>

      <WorkImage src="/images/works/Aradhana.png" alt="freeDBTagger" />
      <WorkImage src="/images/works/Aradhanaone.png" alt="freeDBTagger" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
