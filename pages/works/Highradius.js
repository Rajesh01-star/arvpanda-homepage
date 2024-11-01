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
  <Layout title="Highradius">
    <Container>
      <Title>
        Highradius <Badge>2024-</Badge>
      </Title>
      <P>
        Certainly! Here’s a paragraph format for your experience as a React
        Developer: As a React Developer based in Hyderabad, Telangana, I
        contributed to enhancing various SaaS products by resolving critical UI
        bugs, significantly improving the user experience. My role involved
        closely collaborating with clients to analyze requirements and support
        Agile development, streamlining project workflows and ensuring timely
        delivery.
      </P>
      <P>
        I was also involved in redesigning user interfaces for international
        audiences, adapting layouts to match language preferences and enhance
        accessibility. Additionally, I implemented robust report generation
        mechanisms and created interactive dashboards, providing clients with
        valuable insights and improving overall functionality.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.highradius.com/">
            https://www.highradius.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web 3.0</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React,NextJs,Framer</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Site snaps</Center>
      </Heading>

      <WorkImage src="/images/works/highradius_one.png" alt="one" />
      <WorkImage src="/images/works/highradius_two.png" alt="two" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
