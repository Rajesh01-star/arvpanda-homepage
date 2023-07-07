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
    <Layout title="Sheets">
      <Container>
        <Title>
          Sheets <Badge>2023-</Badge>
        </Title>
        <P>
        A simple google sheets clone with options to perform arithematic operations and upload and download excel,csv files.
        </P>
        <P>
          This was one of my assignments when I was searching for internships.
          The company name is "Silver Seed".Unfortunately my project did not made the list I guess.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://silver-sheets.vercel.app ">
            https://silver-sheets.vercel.app 
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
              React,Typescript,tailwind,recoil
            </span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Site snaps</Center>
        </Heading>
  
        <WorkImage src="/images/works/sheetContent.png" alt="content" />
        <WorkImage src="/images/works/sheetsUpload.png" alt="upload" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  