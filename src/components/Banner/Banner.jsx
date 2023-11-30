import React from 'react'
import Container from '../Container'
import Button from '../Button'

const Banner = () => {
  return (
    <div>
        <div className='bg-bannerImg bg-no-repeat bg-cove bg-right'>
            <Container>
                <div className='bg-primary h-1 w-28 absolute top-[330px]'></div>
                <div className='w-[680px] pt-[200px] pb-[320px]'>
                    <h1 className='text-[#292525] text-[58px] w-[600px]'>We help you create
                    your <span className='text-primary'>website</span></h1>
                    <p className='text-xl opacity-[0.7] pt-8'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. At donec egestas cras in libero pellentesque. Donec amet phasellus</p>
                    <div className='pt-[52px]'>
                        <Button className='py-[20px] px-10 bg-primary text-xl text-white font-bold rounded-full' BtnName='Get Started'/>
                        <Button className='ml-[14px] py-[20px] px-10 bg-white text-primary text-xl font-bold rounded-full border-2 ' BtnName='contact Us'/>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Banner