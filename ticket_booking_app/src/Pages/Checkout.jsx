import React from "react";
import { useSelector } from "react-redux";
import { Box, Img, Heading, Flex, UnorderedList, ListItem, Button, Spinner, useToast} from "@chakra-ui/react";


export const Checkout = () => {
    const [isLoading, setLoading] = React.useState(true);
    const [isSubmitted, setSubmitted] = React.useState(false);
    const { flight } = useSelector(store => store.flight);
    const { from, to } = useSelector(store => store.query.query);
    const {authStatus} = useSelector(state => state.auth);
    const { id, price } = flight;
    const [img, setImg] = React.useState("");
    const [login, setLogin] = React.useState(false)
    
    const toast = useToast()
    React.useEffect(() => {
        fetch(`https://jsonserverlive.herokuapp.com/flights/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setImg(res.logo)
                setLoading(false)
            });
    }, [])
    const handleClick = () => {
        let status = authStatus ? setSubmitted(true) : setLogin(true);
    }
    return <Box ml="15%" mr="15%" mt="2%">
        {isLoading ? <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            mt="200px"
            ml="50%"
        /> : <> <Heading align="center">Your flight Details</Heading>
            <Flex align="center" justify="space-between" ml="30px" mr="30px" mt="4%">
                <Box width="60px"><Img src={img} /></Box>
                <Box> From : {from}</Box>
                <Box>To : {to}</Box>
                <Box>Price : ₹ {price}</Box>
            </Flex>
            <Box>
                <UnorderedList pl="10%" mt="4%">
                    <ListItem>Food Included</ListItem>
                    <ListItem>Full Fare Refund in Covid+ cases, No questions Asked</ListItem>
                    <ListItem>Prices are for limited time, book fast</ListItem>
                </UnorderedList>
            </Box>
            <Flex justify="center" mt="8%"><Button onClick={handleClick}> Book Now</Button></Flex></>}
        {
            isSubmitted ? toast({
                title: 'Booking Done !',
                description: "Your Ticket is booked.",
                position: 'top',
                status: 'success',
                duration: 4000,
                isClosable: true,
            }) : <></>
        }
        {
            login ? toast({
                title: 'Login First!',
                description: "Your need to login or signup to continue",
                position: 'top',
                status: 'success',
                duration: 4000,
                isClosable: true,
            }) : <></>
        }
    </Box>

}