import React from "react";
import "../Styles/Home.css"
import {
  Box,
  Input,
  Button,
  Select,
  Flex,
  Img
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { query } from "../Redux/Query/Action";
import {useNavigate} from "react-router-dom";


export const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = React.useState({});
    const handleChange = (e) => {
        setData({
            ...data, 
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = () => {
        dispatch(query(data));
        navigate("/results")
    }
  return (
    <Box ml="15%" mr="15%" mt="2%" border="2px solid black" pl ="3%" pt ="10%">
      <Select
        placeholder="From"
        width="15rem"  
        isRequired={true}     
        onChange={handleChange} 
        name = "from"
      >
        <option>Mumbai</option>
        <option>Chennai</option>
        <option>Lucknow</option>
        <option>Bengaluru</option>
        <option>Kolkata</option>
        <option>Pune</option>
        <option>Delhi</option>
        <option>Noida</option>
        <option>Goa</option>
        <option>Patna</option>
        <option>Telangana</option>
      </Select>
      <Select
        placeholder="To"
        width="15rem"     
        isRequired={true}  
        onChange={handleChange} 
        name = "to"
      >
        <option>Mumbai</option>
        <option>Chennai</option>
        <option>Lucknow</option>
        <option>Bengaluru</option>
        <option>Kolkata</option>
        <option>Pune</option>
        <option>Delhi</option>
        <option>Noida</option>
        <option>Goa</option>
        <option>Patna</option>
        <option>Telangana</option>
      </Select>
      <Input
        type="date"
        width="15rem"
        mb="20px"
        placeholder="Enter departure Date"
        id="depart"
        name="depart"
        min="2022-08-11"
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
        min="2022-08-11"
        onChange={handleChange}
      />


      <Flex justify="center">
        <Button width="10rem" onClick={handleSubmit}>
            Find Flights
         </Button>
      </Flex>
      <Flex justify="center" mt="2%"><Img src="https://mmt.servedbyadbutler.com/getad.img/;libID=3438794" pr="6%"/></Flex>
    </Box>
  );
};
