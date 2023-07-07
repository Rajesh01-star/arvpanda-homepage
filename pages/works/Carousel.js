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
    <Layout title="Carousel">
      <Container>
        <Title>
          Carousel <Badge>2021-</Badge>
        </Title>
        <P>
        A showcase carousel to display my movie taste,with a ticker animation.
        </P>
        <P>
          This was also one of my assignments when I was searching for internships.        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://movie-carousal.vercel.app/">
            https://movie-carousal.vercel.app/ 
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
              React,tailwind
            </span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Site snap</Center>
        </Heading>
  
        <WorkImage src="/images/works/carousel.png" alt="carousel" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  