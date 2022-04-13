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
  <Layout title="Portfolio 2.0">
    <Container>
      <Title>
        Portfolio 2.0 (阿塔夫) <Badge>2020</Badge>
      </Title>
      <P>
        This was my second portfolio website,and damn this was such a milestone
        for me and it still is a big deal for me.All it required was some plain
        old website building tools and some writing creativity and a mentor.
      </P>
      <P>
        So, you can check my previous site and tell me how much I've improved.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://rajesh01-star.github.io/my-siteXD/">
            https://rajesh01-star.github.io/my-siteXD/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web 3.0</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, SCSS, GIPHY- Be animated, CSS Gradient</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Site snpas</Center>
      </Heading>

      <WorkImage src="/images/works/portfolio 2.png" alt="portfolio" />
      <WorkImage src="/images/works/portfolioone.png" alt="portfolio" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
