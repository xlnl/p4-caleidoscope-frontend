import { 
    Image, 
    Box, 
    Tabs, 
    TabList, 
    Tab, 
    TabPanels, 
    TabPanel,
    Flex
} from "@chakra-ui/core"

import Login from "./Forms/Login"
import SignUp from "./Forms/SignUp"

const Join = () => {
    return (
        <Flex direction='column' align='center' justify='center' p={1}>
            <Box align='center'  w="500px" p={4} boxShadow="sm" rounded="lg">
                <Image src="./security.png" w="100px" mx="auto" my={4}/>
                <Tabs variant="enclosed-colored" m={4} isFitted>
                    <TabList>
                        <Tab>SIGN UP</Tab>
                        <Tab>LOG IN</Tab>
                    </TabList>     
                    <TabPanels p={3}>
                        <TabPanel>
                            <SignUp/>
                        </TabPanel>
                        <TabPanel>
                            <Login/>
                        </TabPanel>
                    </TabPanels>       
                </Tabs>
            </Box>
        </Flex>
    )
}

export default Join
