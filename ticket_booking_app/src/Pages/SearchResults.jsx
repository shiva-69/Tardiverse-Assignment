import React from "react";
import { Box, Flex, Img, Spinner } from "@chakra-ui/react";
import { useSelector , useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddFlight } from "../Redux/SelectedFlight/Action";


export const SearchResults = () => {
    const [data, setData] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    React.useEffect(() => {
        fetch("http://localhost:8080/flights")
            .then((res) => res.json())
            .then((res) => {
                setData(res)
                setLoading(false);

            })
            .catch((err) => console.log(err));
    }, []);

    const handleNavigation = (e) => {
        const selectedFlight = {
            price : `${document.getElementById("price").innerText}`,
            id : e.target.id
        }
        dispatch(AddFlight(selectedFlight));
        navigate("/checkout")
    }   
    const {query} = useSelector(state => state.query)
    let departYear = query.depart.split("-")[0]
    let departMonth = query.depart.split("-")[1]
    let departDay = query.depart.split("-")[2];
    let totalDiff = Math.floor(Math.abs((2022 - departYear) * 1000)) + Math.floor(Math.abs((8 - departMonth) * 80)) + Math.floor(Math.abs((12- departDay) * 21));
    const basePrice = 9000;
    return <div>{   
        isLoading ? <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            mt="200px"
            ml="50%"
        /> : data.map((item) => <Flex ml="15%" mr="15%" mb="2%" p="1%" border="2px solid black" align="center" justify="space-between" cursor="pointer" onClick = {handleNavigation} id={item.id}>
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
                <Box align="center" fontWeight="500" fontSize="120%" >₹ <span id ="price">{Math.floor(basePrice + totalDiff + (Math.random() * 18))}</span></Box>
            </Flex>
        </Flex>)
    }</div>
}