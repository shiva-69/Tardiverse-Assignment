import React from "react";

import { Box, Flex, Img, Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";
export const SearchResults = () => {
    const [data, setData] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    React.useEffect(() => {
        fetch("http://localhost:8080/flights")
            .then((res) => res.json())
            .then((res) => {
                setData(res)
                setLoading(false);

            })
            .catch((err) => console.log(err));
    }, []);

    const handleClick = (e) => {
        console.log(e.target.id)
    }
    const {query} = useSelector(state => state.query)
    console.log(query)

    return <div>{   
        isLoading ? <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            mt="200px"
            ml="50%"
        /> : data.map((item) => <Flex ml="15%" mr="15%" mb="2%" p="1%" border="2px solid black" align="center" justify="space-between" cursor="pointer" onClick={handleClick} id={item.id}>
            <Box w="60px"><Img src={item.logo} /></Box>

            <Flex direction="column" w="100px">
                <Box>From</Box>
                <Box fontWeight="500" fontSize="120%">{query.from}</Box>
            </Flex>

            <Box w="100px"><Img src="https://img.icons8.com/officel/30/000000/arrow.png" /></Box>

            <Flex direction="column" w="100px">
                <Box>To</Box>
                <Box fontWeight="500" fontSize="120%">{query.to}</Box>
            </Flex>

            <Flex direction="column" w="100px">
                <Box align="center">Price</Box>
                <Box align="center" fontWeight="500" fontSize="120%"> ₹ 3432</Box>
            </Flex>
        </Flex>)
    }</div>
}