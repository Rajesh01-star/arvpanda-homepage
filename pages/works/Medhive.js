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
    <Layout title="Medhive">
      <Container>
        <Title>
          Medhive <Badge>2023-</Badge>
        </Title>
        <P>
        Medhive is a revolutionary web application that redefines healthcare accessibility. Utilizing Next.js, Tailwind CSS, and Framer Motion in the frontend, and Node.js, Express, MongoDB, and Mongoose in the backend, Medhive provides a user-friendly interface to access critical hospital information. Users can explore hospital details, book appointments, and reserve beds, streamlining healthcare decisions. With secure MongoDB Cloud integration and Vercel hosting, data integrity and performance are ensured. 
        </P>
        <P>
        Medhive's innovation-driven approach enhances healthcare interaction, offering advanced technology while prioritizing user needs. By centralizing healthcare data, it simplifies informed decision-making, promising a healthier society empowered by knowledge. In a growing demand for efficient healthcare services, Medhive stands as a transformative solution, seamlessly merging technology and healthcare accessibility.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://medhive.vercel.app/?vercelToolbarCode=ha2WhgVavkBfEEU">
            https://medhive-n6sidm9rp-rajesh01-star.vercel.app/
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
              React,NextJs,Framer,NodeJS,mongodb,mongoose,vercel,git
            </span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Site snaps</Center>
        </Heading>
  
        <WorkImage src="/images/works/Medhivenews.png" alt="news" />
        <WorkImage src="/images/works/Medhivemobile.png" alt="mobile" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  