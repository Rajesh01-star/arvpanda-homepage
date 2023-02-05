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
        Blog <Badge>2020-</Badge>
      </Title>
      <P>
        So this was one of my first project when I started learning NodeJS and
        trust me when I say ki deploying a full-stack application is far more
        complicated than developing it. And I guess it turned out well for me in
        this project as I got my googling skills checked.
      </P>
      <P>
        {' '}
        As it was the  app replica off the original blog site of mine its
        Open for everyone.just type '/compose' in the url-bar and start writing.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://blog-database01.herokuapp.com/">
            https://blog-database01.herokuapp.com/
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
            HTML, SCSS, Bootstrap, Javascript, NodeJS, MongoDB, Mongoose
          </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Site snaps</Center>
      </Heading>

      <WorkImage src="/images/works/blog database.png" alt="blog" />
      <WorkImage src="/images/works/Blogone.png" alt="Blog" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
