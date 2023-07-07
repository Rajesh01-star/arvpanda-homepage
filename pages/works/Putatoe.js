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
    <Layout title="Putatoe">
      <Container>
        <Title>
          Putatoe <Badge>2023-</Badge>
        </Title>
        <P>
        Imagine a world where you no longer need to visit multiple websites for your various needs. Picture a single platform that offers everything you require, from buying clothes and groceries to booking travel tickets and finding an interior designer. At our company, we have created a unique website that brings together all your daily necessities and luxurious desires in one convenient place. Say goodbye to wasting time and effort on countless sites – with our platform, you'll find everything you need effortlessly. We have designed this website with your convenience in mind, making it your ultimate destination for all your requirements and desires.
        </P>
        <P>
          As this was my first web development internship I certainly learned a lot about react,github and web development in general.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://putatoetest.web.app">
            https://putatoetest.web.app
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
              React,Framer,NodeJS,mongodb,mongoose,firebase
            </span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Site snaps</Center>
        </Heading>
  
        <WorkImage src="/images/works/putatoeNews.png" alt="news" />
        <WorkImage src="/images/works/putatoeService.png" alt="service" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  