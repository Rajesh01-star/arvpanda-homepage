import {
  Container,
  Badge,
  Link,
  List,
  Box,
  Image,
  SimpleGrid,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Unis - bot">
    <Container>
      <Title>
        Unis discord bot <Badge>2020-</Badge>
      </Title>
      <P>
        So I was doing my course on NodeJs ie. backend developing and one of my
        friends asked me if I can make something that does not include HTML,CSS
        & Javascript!! And it was legit cause I had nothing to show other than
        websites. And at that time I was newly introduced to Discord '(for exams
        and stuffs)',so, why not make a bot in discord.
      </P>
      <P>
        And that was the Origin story of Unis- a multi threaded discord bot that
        can handle all your entertainment stuffs when asked '($about)'
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Discord</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJs, Discord.js</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Bot invite</Center>
      </Heading>

      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://discord.com/api/oauth2/authorize?client_id=825626627978297344&permissions=309237901504&scope=bot"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/discord.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Site snpas</Center>
      </Heading>

      <WorkImage src="/images/works/Unisthree.png" alt="Unis" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/Unis.png" alt="" />
        <WorkImage src="/images/works/Unisone.png" alt="menkiki" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/Unistwo.png" alt="menkiki" />
        <WorkImage src="/images/works/Unisfour.png" alt="menkiki" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
