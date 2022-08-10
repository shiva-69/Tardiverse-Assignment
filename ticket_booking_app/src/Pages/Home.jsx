import React from "react";
import "../Styles/Home.css"
import {
  Box,
  Input,
  Button,
  Select,
  Flex
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { query } from "../Redux/Query/Action";


export const Home = () => {
    const dispatch = useDispatch();
    const [data, setData] = React.useState({});
    const handleChange = (e) => {
        setData({
            ...data, 
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = () => {
        dispatch(query(data));
    }
  return (
    <Box ml="15%" mr="15%" border="2px solid black" pl ="3%">
      <Select
        placeholder="From"
        width="15rem"  
        isRequired={true}     
        onChange={handleChange} 
        name = "from"
      >
        <option>United Arab Emirates</option>
        <option>Nigeria</option>
      </Select>
      <Select
        placeholder="To"
        width="15rem"     
        isRequired={true}  
        onChange={handleChange} 
        name = "to"
      >
        <option>United Arab Emirates</option>
        <option>Nigeria</option>
      </Select>
      <Input
        type="date"
        width="15rem"
        mb="20px"
        placeholder="Enter departure Date"
        id="depart"
        name="depart"
        isRequired={true}
        onChange={handleChange}
      />
      <Input
        type="date"
        width="15rem"
        mb="20px"
        placeholder="Enter arrival Date"
        id="arrival"
        name="arrival"
        onChange={handleChange}
      />


      <Flex justify="center">
        <Button width="10rem" onClick={handleSubmit}>
            Find Flights
         </Button>
      </Flex>
    </Box>
  );
};
