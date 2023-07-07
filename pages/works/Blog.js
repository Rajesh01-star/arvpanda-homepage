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
  <Layout title="Blog">
    <Container>
      <Title>
        Blog <Badge>2021-</Badge>
      </Title>
      <P>
        So this was one of my first project when I started learning NodeJS and
        trust me when I say that deploying a full-stack application is far more
        complicated than developing it. And I guess it turned out well for me in
        this project as I got my googling skills checked.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://blog-minimal.vercel.app/blog">
          https://blog-minimal.vercel.app/blog
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
            HTML, SCSS, Javascript, NodeJS, MongoDB, Mongoose
          </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Site snaps</Center>
      </Heading>

      <WorkImage src="/images/works/blogMentalHealth.png" alt="health" />
      <WorkImage src="/images/works/blogMemories.png" alt="memories" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
