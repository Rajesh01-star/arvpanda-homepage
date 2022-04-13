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
  <Layout title="Sign Up">
    <Container>
      <Title>
        Newsletter <Badge>2020-</Badge>
      </Title>
      <P>
        This newsletter site was created cause I wanted to collect all my
        friends mail IDs .... Ahh don't get any bad ideas about it. It was just
        because as we all are going deep and deep into the corporate world we'll
        have to deal with communication over mails and whatever the fuck they
        are into now a days.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://newslettersingin-app.herokuapp.com/">
            https://newslettersingin-app.herokuapp.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web 3.0</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, SCSS, Bootstrap, NodeJS, MongoDB, Mongoose</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Site snaps</Center>
      </Heading>

      <WorkImage src="/images/works/Sign up.png" alt="Sign-up" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
