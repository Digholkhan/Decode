import React from "react";
import logo from  '../../assets/logo.png'
import Container from "../Container";
import Flex from "../Flex";
import List from "../List";
import ListItem from "../ListItem";
import Button from "../Button";


const Navbar = () => {
  return (
  <div className=''>
    <Container>
       <Flex className='items-center'>
          <div className='w-1/5'>
          <img src={logo} alt="" />
          </div>
          <Flex className='justify-end w-3/5 items-center'>  
            <div>
            <List className='flex gap-x-14 text-lg font-medium text-primary '>
              <ListItem ItemName='Home' className='text-black duration-300'/>
              <ListItem ItemName='Services' className='hover:text-black duration-300'/>
              <ListItem ItemName='case'  className='hover:text-black duration-300 flex items-center gap-x-1.5'></ListItem>
              <ListItem ItemName='DaCode Specialists' className='hover:text-black duration-300'/>
              <ListItem ItemName='Blog' className='hover:text-black duration-300'/>
            </List>
            </div>
          </Flex>
          <div className='w-1/5 flex justify-end '>
          <Button className='px-7 py-3 text-lg font-medium bg-[#7BC0E3] text-white rounded-full ' BtnName='Request a quote' />
          </div> 
       </Flex>
    </Container>
  </div>
      
  );
};

export default Navbar;
