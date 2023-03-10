
import React, {useState} from 'react';
import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import styled from 'styled-components'
import {sliderItems} from "../../data";
import drinks from '../../images/Напитки.svg'

const Container = styled.div`
  width: 80%;
  height: 400px;
  margin: 20px auto;
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

`

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '5px'};
  right: ${props => props.direction === 'right' && '5px'};
  opacity: .5;
  margin: auto;
  cursor: pointer;
  z-index: 2;
`
const Wrapper = styled.div`
  height: 100px;
  display: flex;
  transition: all 1.5s ease-in-out;
  transform: translateX(${props=>props.slideIndex * -110}vw);
  position: relative;
  border-radius: 10px;
`

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 400px;
  padding-left: 100px;
  border-radius: 10px;
   background: linear-gradient(96.31deg, #EC783F 9.21%, #DF672C 86.21%);
  /* background-color: #${props => props.bg}; */
`

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  border-radius: 10px;

`
const Image = styled.img`
  height: 348px;
  margin: auto;
  padding-top: 25px;
  border-radius: 10px;
`

const InfoContainer = styled.div`
  flex: 1;

`
const Title = styled.h1`
  font-size: 28px;
  width: 354px;
  color: #fff;

  display: flex;
`
const Desc = styled.p`
  margin: 50px 0;
  font-size: 15px;
  letter-spacing: 3px;
  color: #fff;
  width: 311px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  background: none;
  border-radius:10px;
  background: #FFFFFF;
  font-weight: 600;
  padding: 10px 15px;
`


const Slider = () => {

	const [slideIndex, setSlideIndex] = useState()
    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }

    }
  return (
	<Container >
        <Arrow direction={'left'} onClick={() => handleClick('left')}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {
                sliderItems.map(item => (
                    <Slide bg={item.bg}>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>К напиткам!</Button>
                        </InfoContainer>
                        <ImgContainer>
                            <Image src={drinks}/>
                        </ImgContainer>
                      
                    </Slide>
                ))
            }

        </Wrapper>
        <Arrow direction={'right'} onClick={() => handleClick('right')}>
            <ArrowRightOutlined/>
        </Arrow>

    </Container>
  )
}

export default Slider