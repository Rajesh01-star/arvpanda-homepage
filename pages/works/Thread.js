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
  <Layout title="Threads">
    <Container>
      <Title>
        Threads <Badge>2023-</Badge>
      </Title>
      <P>
        With a sleek and intuitive user interface, our social network empowers
        users to post, comment, and engage with rich multimedia content. Stay up
        to date with the latest trends, news, and updates from your favorite
        users and topics.
      </P>
      <P>
        Feel free to adapt and customize this description to match your
        website's unique features and style.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://threads-tau-five.vercel.app/">
            https://threads-tau-five.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web 3.0</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Typescript,React,NextJs,Zod,Clerk,NodeJS,mongodb,mongoose,vercel,git
          </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Site snaps</Center>
      </Heading>

      <WorkImage src="/images/works/threads_one.png" alt="home" />
      <WorkImage src="/images/works/threads_two.png" alt="profile" />
      <WorkImage src="/images/works/threads_three.png" alt="mobile" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
