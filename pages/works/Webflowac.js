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
  <Layout title="Birthday">
    <Container>
      <Title>
        Webflow - birthday <Badge>2019-</Badge>
      </Title>
      <P>
        So it was my first year doing the online B.tech course in KIIT
        university and I suddenly was a part of the most chillax group of my
        section {'beside Chinmay😇😈 & Anji😈😇'}, and
      </P>
      <P>
        it was Anuskha's 🌚🌚 birthday(the most chillax person of the most
        chillax group) and the idea was to make her a wishing site that she can
        keep as a memory.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://birthday-anuska-307.webflow.io/">
            https://birthday-anuska-307.webflow.io/
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

      <WorkImage src="/images/works/Anuskhaone.png" alt="Birthday" />
      <WorkImage src="/images/works/Anuskhatwo.png" alt="Birthday" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
