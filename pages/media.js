import { Container, Box, Heading, Text, Code, Divider, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Layout from '../components/layouts/article'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Media = () => {
  const router = useRouter()
  const { file } = router.query
  const [targetFile, setTargetFile] = useState(null)
  const [showPopup, setShowPopup] = useState(false) // State for popup visibility

  useEffect(() => {
    if (router.isReady) {
      // Default to string-magic.mp4 if no file provided
      const f = file ? file : 'string-magic.mp4'
      setTargetFile(f)
    }
  }, [router.isReady, file])

  const handleVideoEnded = () => {
    // Only show popup for the main video
    if (targetFile === 'string-magic.mp4') {
      setShowPopup(true)
    }
  }


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
      <Container position="relative"> {/* Added position relative for absolute positioning of popup if needed */}
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
              // loop removed
              muted={false} // Unmuted initially if desired, or keep muted for autoplay policy
              src={targetFile === 'images/Suzie' ? '/images/Suzie' : `/${targetFile}`}
              style={{ maxWidth: '100%', maxHeight: '600px', borderRadius: '8px' }}
              onEnded={handleVideoEnded}
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

        {/* Creative Valentine's Popup */}
        {showPopup && (
          <Box
            position="fixed"
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            bg="blackAlpha.300"
            backdropFilter="blur(5px)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            zIndex="2000"
            onClick={() => setShowPopup(false)} // Close on background click
          >
            <Box
              as={motion.div}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              bg="#f8f5e1" // Parchment color
              p={8}
              borderRadius="xl"
              textAlign="center"
              boxShadow="2xl"
              maxW="450px"
              w="90%"
              border="2px solid #740001" // Gryffindor red
              onClick={(e) => e.stopPropagation()}
              position="relative"
              fontFamily="'Cinzel', serif"
            >
              <Box mb={6} borderRadius="full" overflow="hidden" boxShadow="lg" display="inline-block" bg="white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGVic2FtZHFpNzl5OHJrbWRyNnMzb3o4MWRsZjF3ODFxaGNpenlwdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/KH8uaAOjf0PRz4NmpB/giphy.gif" alt="Dobby" style={{ maxHeight: '200px', display: 'block' }} />
              </Box>

              <Heading as="h2" size="lg" mb={4} color="#740001" fontFamily="serif">
                Will you be my valentine?
              </Heading>

              <Text fontSize="md" fontStyle="italic" color="gray.600" mb={6}>
                &quot;Master has given Dobby a Valentine!&quot;
              </Text>

              <Box display="flex" justifyContent="center" gap={4} mt={4}>
                <Button
                  bg="#740001"
                  color="#eeba30" // Gryffindor gold
                  size="lg"
                  px={8}
                  _hover={{ bg: "#ae0001", transform: 'scale(1.05)' }}
                  onClick={() => setShowPopup(false)} // Just close, no alert
                  fontFamily="serif"
                >
                  Always
                </Button>
                <Button
                  variant="ghost"
                  color="#740001"
                  size="lg"
                  px={8}
                  fontFamily="serif"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </Layout>
  )
}

export default Media
