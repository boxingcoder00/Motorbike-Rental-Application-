import { Button, Image, Text, Stack } from "@chakra-ui/react"

const Bike = ({ bike }) => {
    return(
        <Box boxsize='lg' mx={2}>
            <Image src={bike} mb={10} />
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod dui sit amet urna rutrum euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna mauris, euismod nec ipsum at, ullamcorper hendrerit ipsum. Suspendisse a elit pharetra, vestibulum lorem quis, dignissim neque. Praesent ultrices quam et consequat mollis. Etiam rhoncus non urna vitae auctor. Sed a aliquam ex.
            </Text>
            <Stack spacing={0} direction={'row'} align={'center'} justify={'center'} mt={5}>
            <Button
            m={2}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'teal.500'}
            _hover={{
                bg: 'teal.300',
              }}>
              Check Out
            </Button>
            <Button
            m={2}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'teal.500'}
            _hover={{
                bg: 'teal.300',
             }}>
              Check In
            </Button>
            </Stack>
        </Box>
    )
}

export default Bike