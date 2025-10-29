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
  <Layout title="Highradius">
    <Container>
      <Title>
        Highradius <Badge>2024-</Badge>
      </Title>
      <P>
        As a Financial Technology Advisor based in Hyderabad, Telangana, I
        provided strategic guidance on implementing AI-driven financial
        automation solutions across various SaaS products. My responsibilities
        included analyzing client requirements, optimizing product workflows,
        and ensuring seamless adoption of fintech tools to improve operational
        efficiency.
      </P>
      <P>
        I collaborated closely with business and engineering teams to enhance
        user experiences through data-driven insights and technology alignment.
        Additionally, I contributed to redesigning client dashboards and
        reporting systems to better visualize financial performance, streamline
        reconciliation, and improve decision-making for enterprise clients.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.highradius.com/">
            https://www.highradius.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Financial Automation SaaS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack / Tools</Meta>
          <span>HighRadius AI Cloud, Treasury Management, Data Analytics</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Work Highlights</Center>
      </Heading>

      <WorkImage src="/images/works/highradius_one.png" alt="highradius_one" />
      <WorkImage src="/images/works/highradius_two.png" alt="highradius_two" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
