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
  <Layout title="Mapty">
    <Container>
      <Title>
        Mapty <Badge>2021-</Badge>
      </Title>
      <P>
        A cardio tracking web application that takes your exercise data and
        tells you the calories you have burned and needless to say it also marks
        your exercise spots in order to let you know where you've exercised.
      </P>
      <P>
        It comes in handy when you're an enthusiastic runner like me and runs to
        make your head clear.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://rajesh01-star.github.io/Mapty/">
            https://rajesh01-star.github.io/Mapty/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web 3.0</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, SCSS, Javascript</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Site snaps</Center>
      </Heading>

      <WorkImage src="/images/works/maptyone.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
