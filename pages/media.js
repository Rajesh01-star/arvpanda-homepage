import { Container, Box, Heading, Text, Code, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Media = () => {
  const router = useRouter()
  const { file } = router.query
  const [targetFile, setTargetFile] = useState(null)

  useEffect(() => {
    if (router.isReady) {
      // Default to Suzie if no file provided
      // public/images/Suzie is accessed as /images/Suzie
      const f = file ? file : 'images/Suzie'
      setTargetFile(f)
    }
  }, [router.isReady, file])

  if (!targetFile) {
    return (
      <Layout title="Media">
        <Container>
          <Text>Loading...</Text>
        </Container>
      </Layout>
    )
  }

  const lower = targetFile.toLowerCase()
  // Check if likely a video. 'Suzie' file has no extension but is known to be MP4.
  const isVideo = lower.includes('suzie') ||
    lower.endsWith('.mp4') ||
    lower.endsWith('.webm') ||
    lower.endsWith('.mov')

  return (
    <Layout title={`Media - ${targetFile}`}>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Media Viewer
        </Heading>

        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={2}
          mb={6}
          bg="whiteAlpha.200"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {isVideo ? (
            <video
              controls
              autoPlay
              loop
              muted
              src={`/${targetFile}`}
              style={{ maxWidth: '100%', maxHeight: '600px', borderRadius: '8px' }}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`/${targetFile}`}
              alt={targetFile}
              style={{ maxWidth: '100%', maxHeight: '600px', objectFit: 'contain', borderRadius: '8px' }}
            />
          )}
        </Box>

        <Divider my={6} />

        <Box>
          <Text mb={2}>Currently viewing: <Code>{targetFile}</Code></Text>
          <Text fontSize="sm" color="whiteAlpha.600">
            You can view other files from the public directory by adding
            <Code>?file=filename</Code> to the URL.
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Media
