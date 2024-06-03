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
    <Layout title="Gajanan">
      <Container>
        <Title>
          Gajanan <Badge>2024-</Badge>
        </Title>
        <P>
        I had the opportunity to collaborate with Gajanan Driving School to design and develop their new website, enhancing their digital presence and accessibility. This project involved creating a user-friendly, responsive site that allows prospective students to easily learn about the school's offerings and get in touch for more information.
        </P>
        <P>
        The new website successfully transitioned Gajanan Driving School to the online world, expanding their reach and improving customer engagement. The project showcases my ability to create tailored web solutions that meet specific client needs and enhance user experience.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.gajanandriving.com/">
            https://www.gajanandriving.com/
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
              React,NextJs,Framer,NodeJS,Formspree,vercel,git
            </span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Site snaps</Center>
        </Heading>
  
        <WorkImage src="/images/works/gajanan2.png" alt="news" />
        <WorkImage src="/images/works/gajanan1.png" alt="mobile" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  