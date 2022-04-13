import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  Box
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Bankist">
    <Container>
      <Title>
        Bankist <Badge>2021</Badge>
      </Title>
      <P>
        A lowkey Bank application replica that does everything like a real bank,
        Ahhh unless you try to use the balance you have in this bank outside ..
      </P>
      <P>
        😅😅 I didn't create this app using Shakalaka boom boom pencil, you see.
      </P>
      <P>
        Sorry at this time the site on the Heroku is crashing a lot, So the link
        only takes you to the Frontend part of the application.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://rajesh01-star.github.io/Bankist-frontend/">
            https://rajesh01-star.github.io/Bankist-frontend/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web 3.0</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, SCSS, Javascript, NodeJS, MongoDB, Mongoose</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Site snpas</Center>
      </Heading>

      <Box>
        <iframe
          src="https://player.vimeo.com/video/698711715"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </Box>

      <WorkImage src="/images/works/Bankistone.png" alt="Bankist" />
      <WorkImage src="/images/works/Bankisttwo.png" alt="Bankist" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
