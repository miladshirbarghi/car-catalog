import { styled } from '@mui/material'
import { Link } from 'react-router'

export const DetailPage = styled('main')`
  max-width: 1360px;
  margin: auto;
  padding: 28px clamp(18px, 5vw, 64px) 80px;
`

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  color: #49645a;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  &:hover {
    color: #183e32;
  }
  &:focus-visible {
    outline: 3px solid #29509d;
    outline-offset: 3px;
  }
`

export const Detail = styled('article')`
  margin-top: 20px;
`

export const DetailHero = styled('div')`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  overflow: hidden;
  border: 1px solid #e4e8e0;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 50px #1b332d0c;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const DetailImage = styled('div')`
  position: relative;
  min-height: 390px;
  background: #e8eeea;
  & img {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    object-fit: cover;
  }
  & > div {
    height: 100%;
    min-height: 390px;
    display: grid;
    place-items: center;
    color: #60766b;
  }
  & > span {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 9px 15px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.94);
    color: #284c3e;
    font-size: 12px;
    font-weight: 700;
  }
  @media (max-width: 800px) {
    min-height: 0;
    aspect-ratio: 4 / 3;
    & > div {
      min-height: 0;
    }
  }
`

export const DetailSummary = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(24px, 4vw, 52px);
  & h1 {
    margin: 0;
    text-align: right;
    color: #19352d;
    font: 700 clamp(32px, 3.4vw, 48px)/1.2 sans-serif;
    letter-spacing: -0.04em;
    overflow-wrap: anywhere;
  }
  & > p {
    margin: 12px 0 0;
    color: #77877d;
    font-size: 13px;
    line-height: 2;
  }
`

export const DetailEyebrow = styled('div')`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 22px;
  color: #987044;
  font-size: 12px;
  font-weight: 700;
  &::before {
    content: '';
    width: 24px;
    height: 2px;
    background: #c59a67;
  }
`

export const PricePanel = styled('div')`
  margin-top: 32px;
  padding: 22px;
  border-radius: 15px;
  background: #f1f5ef;
  border: 1px solid #e4ebe2;
  & span {
    display: block;
    color: #6d8073;
    font-size: 12px;
  }
  & strong {
    display: block;
    margin-top: 10px;
    color: #193c33;
    font-size: clamp(23px, 2.2vw, 30px);
    line-height: 1.5;
  }
  & small {
    font-size: 12px;
    font-weight: 500;
  }
`

export const DetailSections = styled('div')`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  margin-top: 24px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const DetailSection = styled('section')`
  min-width: 0;
  padding: clamp(24px, 3vw, 36px);
  background: #fff;
  border: 1px solid #e8eae3;
  border-radius: 20px;
  & h2 {
    margin: 0;
    color: #213e33;
    font-size: 19px;
  }
  & > p {
    margin: 16px 0 0;
    color: #65776e;
    font-size: 14px;
    line-height: 2.2;
  }
`

export const SpecsList = styled('dl')`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 22px 0 0;
  & div {
    min-width: 0;
    padding: 18px;
    border-radius: 12px;
    background: #f7f8f5;
  }
  & dt {
    color: #7d8c81;
    font-size: 12px;
  }
  & dd {
    margin: 12px 0 0;
    color: #263f35;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.8;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    & div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }
    & dd {
      margin: 0;
      text-align: left;
    }
  }
`
