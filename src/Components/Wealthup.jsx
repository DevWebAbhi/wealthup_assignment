import React from 'react'
import '../Styles/Wealthup.css'
import im1 from '../Assets/1 (1) 1.png'
import im2 from '../Assets/2 (1) 1.png'
import im3 from '../Assets/im3.png'
import { Box,Button,Heading,Image,Text } from '@chakra-ui/react'
const Wealthup = () => {
  return (
   <Box width={'100%'} minHeight={'100vh'} paddingTop={'4.7rem'} background={'linear-gradient(122deg, #0A5783 25.03%, #18A19A 78.64%)'}>
    <Box marginRight={'3.881rem'} marginLeft={'5.681rem'}>
      <Box marginLeft={'6.3rem'} marginRight={'7.5rem'}>
      <Heading textAlign={'center'} fontFamily={'Poppins'} color={'#FFF'} fontWeight={'600'} flexShrink={'0'} fontSize={'4.275rem'}>
      Check your financial health
        </Heading>
        <Box marginBottom={'1.938rem'} marginLeft={'12.375rem'} marginRight={'14.175rem'} color={'#FFF'} fontSize={'1.6rem'} fontFamily={'Poppins'} textAlign={'center'}>
        Use WeathoMeter to get a free report
        card for your finances- within minutes! 
        </Box>
        <Box width={'min-content'} margin={'auto'} >
        <Button display={'block'} backgroundColor={'rgba(251, 115, 6, 1)'} borderRadius={'32px'} padding={'9px 38px 8px 42px'} margin={'auto'} width={'14.906rem'} fontFamily={'Poppins'} color={'#FFF'} fontWeight={'600'}  >Get Started</Button>
        </Box>
      </Box>
    </Box>
    <Box display={'flex'}  width={'max-content'} margin={'auto'}>
      <Box paddingRight={'2.4rem'} paddingTop={'109px'}>
        <Box display={'flex'} paddingBottom={'24px'}><Image src={im1}/> <Text color={'#FFF'} fontSize={'1.5rem'} fontFamily={'Poppins'}>Expected Retirement Age</Text></Box>
        <Box width={'18.5rem'} borderTop={'1px solid rgba(255, 255, 255, 1)'} marginLeft={'2.7rem'} ></Box>
        <Box display={'flex'} paddingTop={'21px'} paddingBottom={'25px'}><Image src={im1}/> <Text color={'#FFF'} fontSize={'1.5rem'} fontFamily={'Poppins'}>Identify Mistakes</Text></Box>
        <Box width={'18.5rem'} borderTop={'1px solid rgba(255, 255, 255, 1)'} marginLeft={'2.7rem'} ></Box>
      </Box>
      <Box><Image  src={im2}/></Box>
      <Box marginLeft={'-130px'} paddingTop={'109px'}>
        <Box display={'flex'} paddingBottom={'24px'}><Image src={im1}/> <Text color={'#FFF'} fontSize={'1.5rem'} fontFamily={'Poppins'}>Personalised Road Map</Text></Box>
        <Box width={'18.5rem'} borderTop={'1px solid rgba(255, 255, 255, 1)'} marginLeft={'2.9rem'} ></Box>
        <Box display={'flex'} paddingTop={'21px'} paddingBottom={'25px'}><Image src={im1}/> <Text color={'#FFF'} fontSize={'1.5rem'} fontFamily={'Poppins'}>Tips To Improve</Text></Box>
        <Box width={'18.5rem'} borderTop={'1px solid rgba(255, 255, 255, 1)'} marginLeft={'2.9rem'} ></Box>
      </Box>
    </Box>
    <Box marginTop={'-15rem'} marginBottom={'-20rem'}>
    <svg xmlns="http://www.w3.org/2000/svg" marginBottom={'-4rem'}  width="100%" height="790" viewBox="0 0 1502 790" fill="none">
    <path d="M1007 172C689 62 449 124 295 282C178.954 401.06 51.4328 419.449 -7 413.383V790H1509V0C1275.4 187.2 1077 192.667 1007 172Z" fill="#0A5783"/>
         
    </svg>
    <Box marginLeft={'18rem'} marginRight={'18rem'} marginTop={'-33rem'} >
      <Heading fontFamily={'Poppins'} fontSize={'3rem'} textAlign={'center'} color={'#FFF'} fontWeight={'700'}>How it works</Heading>
            <Image src={im3} display={'block'} margin={'auto'} marginTop={'-5rem'}/>
            <Box maxW={'56rem'} margin={'auto'} marginTop={'-10rem'}  color={'#FFF'} display={'flex'} justifyContent={'space-between'}>
              <Box width={'9.625rem'} textAlign={'center'} fontFamily={'Poppins'} fontSize={'1.5rem'}>Answer few questions</Box>
              <Box width={'11.625rem'} marginLeft={'0rem'} textAlign={'center'} fontFamily={'Poppins'} fontSize={'1.5rem'}>Register using phone and OTP</Box>
              <Box width={'14.625rem'} marginRight={'-3rem'} textAlign={'center'} fontFamily={'Poppins'} fontSize={'1.5rem'}> Get report and personal roadmap</Box>
            </Box>
          </Box>
    </Box>
   </Box>
  )
}

export default Wealthup
