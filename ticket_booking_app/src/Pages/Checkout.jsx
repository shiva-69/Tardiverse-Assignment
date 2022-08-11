import React from "react";
import { useSelector } from "react-redux";
import {Box, Img, Heading, Flex, UnorderedList, ListItem, Button, Spinner} from "@chakra-ui/react";


export const Checkout = () => {
    const {flight} = useSelector(store => store.flight);
    const {from, to} = useSelector(store => store.query.query);
    const {id, price} = flight;
    const [img, setImg] = React.useState("");
    const [isLoading, setLoading] = React.useState(true);
    React.useEffect(() => {
        fetch(`http://localhost:8080/flights/${id}`)
        .then((res) => res.json())
        .then((res) => {
            setImg(res.logo)
            setLoading(false)
        });
    }, [])
    return <Box ml="15%" mr="15%" mt="2%">
       {  isLoading ? <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            mt="200px"
            ml="50%"
        /> : <> <Heading align="center">Your flight Details</Heading>
        <Flex align="center" justify= "space-between" ml= "30px" mr="30px" mt="4%">
        <Box width="60px"><Img src = {img}/></Box>
        <Box> From : {from}</Box>
        <Box>To : {to}</Box>
        <Box>Price : ₹ {price}</Box>
        </Flex>
        <Box>
        <UnorderedList pl = "10%" mt="4%">
            <ListItem>Food Included</ListItem>
            <ListItem>Full Fare Refund in Covid+ cases, No questions Asked</ListItem>
            <ListItem>Prices are for limited time, book fast</ListItem>
        </UnorderedList>
        </Box>
        <Flex justify="center" mt="8%"><Button> Book Now</Button></Flex></>}
    </Box>
}