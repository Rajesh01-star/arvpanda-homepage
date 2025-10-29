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
  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="American Tiger LLC">
      <Container>
        <Title>
          American Tiger LLC <Badge>2024-</Badge>
        </Title>
        <P>
          As a Software Developer at American Tiger LLC, I have been actively involved in 
          building and scaling the company’s SaaS platform with a focus on AI integration, 
          performance optimization, and product accessibility. My role combines 
          end-to-end development with strategic enhancements to improve platform usability 
          and long-term scalability.
        </P>
        <P>
          I collaborated with cross-functional teams to design, develop, and deploy 
          AI-powered features that enriched the user experience and operational efficiency. 
          Additionally, I contributed to SEO-driven improvements and enforced best practices 
          in version control and deployment across multiple environments.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://ravid.cloud/">
              https://ravid.cloud/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>SaaS / AI-Powered Solutions</span>
          </ListItem>
          <ListItem>
            <Meta>Stack / Tools</Meta>
            <span>Next.js, React, Node.js, AI/ML APIs, Git</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Key Contributions</Center>
        </Heading>
  
        <List ml={4} my={4} spacing={2}>
          <ListItem>
            • Integrated AI-powered features into the platform to enhance functionality and user experience.
          </ListItem>
          <ListItem>
            • Developed and scaled the SaaS version of the product, improving accessibility and expanding the user base.
          </ListItem>
          <ListItem>
            • Designed and optimized AI models tailored for real-world applications.
          </ListItem>
          <ListItem>
            • Improved platform visibility and reach through SEO-focused enhancements and performance tuning.
          </ListItem>
          <ListItem>
            • Streamlined workflows by managing multiple environments and enforcing Git best practices.
          </ListItem>
        </List>

  
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  