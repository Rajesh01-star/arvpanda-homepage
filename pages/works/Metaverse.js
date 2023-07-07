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
          Metaverse <Badge>2022-</Badge>
        </Title>
        <P>
        A futuristic landing page for the Meta.
        </P>
        <P>
          I came across Framer animation library in 2021 and made it a part of my tech stack and this was my best effort.          
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://metaverse-kappa-mocha.vercel.app/">
            https://metaverse-kappa-mocha.vercel.app/ 
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
  
        <WorkImage src="/images/works/metaverseSam.png" alt="meta" />
        <WorkImage src="/images/works/metaverseWorld.png" alt="meta" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  