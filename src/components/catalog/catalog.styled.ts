import { ButtonBase, styled } from '@mui/material'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import heroImage from '@assets/images/1.png'

export const CatalogContainer = styled('main')`
  max-width: 1536px;
  margin: auto;
  padding: 0 clamp(18px, 5vw, 72px) 24px;
`

export const CatalogHeaderRoot = styled('header')`
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 650px) {
    height: 72px;
  }
`

export const Brand = styled('a')`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #172c30;
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.2;
  & svg {
    color: #b18151;
  }
  & small {
    display: block;
    font: 600 8px/1.6 sans-serif;
    letter-spacing: 0.19em;
  }
  &:focus-visible {
    outline: 3px solid #29509d;
    outline-offset: 3px;
  }
`

export const HeaderNote = styled('span')`
  color: #68776d;
  font-size: 12px;
  border-right: 1px solid #d5dbd2;
  padding-right: 18px;
  @media (max-width: 650px) {
    display: none;
  }
`

export const Intro = styled('section')`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  min-height: 480px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: clamp(32px, 5vw, 70px);
  border-radius: 22px;
  color: #fff;
  background:
    linear-gradient(
      90deg,
      rgba(12, 28, 25, 0.38) 0%,
      rgba(12, 28, 25, 0.55) 43%,
      rgba(12, 28, 25, 0.96) 100%
    ),
    url(${heroImage}) center 55% / cover;
  & h1 {
    font-size: clamp(34px, 4.4vw, 62px);
    line-height: 1.55;
    letter-spacing: -0.04em;
    margin: 0;
    font-weight: 800;
  }
  & h1 em {
    color: #d9bb93;
    font-style: normal;
    font-weight: 400;
  }
  & > div:first-of-type {
    position: relative;
    max-width: 620px;
  }
  & > div:first-of-type > p:first-of-type {
    color: #e9c99c;
  }
  & a {
    display: inline-flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    padding: 14px 20px;
    border-radius: 10px;
    background: #e2c69e;
    color: #19352c;
    text-decoration: none;
    font-size: 13px;
    font-weight: 700;
  }
  & a:hover {
    background: #f0dbbd;
  }
  & a:focus-visible {
    outline: 3px solid white;
    outline-offset: 4px;
  }
  @media (max-width: 650px) {
    min-height: 420px;
    padding: 32px 24px;
    border-radius: 18px;
    background-position: 40% center;
  }
`

export const SectionLabel = styled('p')`
  display: flex;
  align-items: center;
  gap: 9px;
  color: #987044;
  font-size: 12px;
  font-weight: 700;
  margin: 0 0 20px;
  & span {
    width: 24px;
    height: 2px;
    background: #c59a67;
  }
`

export const CatalogDescription = styled('p')`
  color: #e0e7e4;
  font-size: 14px;
  line-height: 2;
  margin: 20px 0 0;
`

export const IntroSide = styled('div')`
  text-align: left;
  color: #d6dfdb;
  direction: ltr;
  padding-bottom: 8px;
  & > span {
    font: 600 10px sans-serif;
    letter-spacing: 0.18em;
  }
  & strong {
    display: block;
    color: #fff;
    font: 300 clamp(22px, 2.7vw, 38px)/1.4 sans-serif;
    margin: 8px 0;
  }
  & i {
    font-style: normal;
    color: #d9bb93;
  }
  & p {
    direction: rtl;
    font-size: 12px;
    line-height: 1.9;
  }
  @media (max-width: 650px) {
    display: none;
  }
`

export const Collection = styled('section')`
  padding-top: clamp(52px, 6vw, 88px);
  scroll-margin-top: 24px;
`

export const CollectionHeading = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 26px;
  margin-bottom: 28px;
  & p {
    margin-bottom: 8px;
  }
  & h2 {
    margin: 0;
    font-size: clamp(24px, 2.3vw, 32px);
  }
  & h2 small {
    color: #778783;
    font-size: 12px;
    font-weight: 400;
    margin-right: 10px;
  }
`

export const Controls = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: 12px;
  padding: 20px;
  background: #fff;
  border: 1px solid #e7e9e1;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(36, 50, 36, 0.05);
  @media (max-width: 650px) {
    padding: 14px;
  }
`

export const PriceControls = styled('div')`
  display: flex;
  flex: 2 1 480px;
  flex-wrap: wrap;
  gap: 12px;
  & > .MuiFormControl-root {
    flex: 1 1 130px;
    min-width: 0;
  }
  & .MuiOutlinedInput-root {
    background: #f8faf8;
    border-radius: 10px;
  }
`

export const SearchRoot = styled('div')`
  height: 46px;
  flex: 1 1 190px;
  border: 1px solid #e3e9e4;
  background: #f8faf8;
  border-radius: 10px;
  color: #71837c;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  & .MuiInputBase-root {
    flex: 1;
    min-width: 0;
  }
  & input {
    border: 0;
    outline: 0;
    width: 100%;
    min-width: 0;
    background: transparent;
    font-size: 12px;
    color: #19332f;
  }
  &:focus-within {
    outline: 2px solid #29509d;
    outline-offset: 2px;
  }
`

export const FilterButton = styled(ButtonBase)`
  min-height: 46px;
  border: 1px solid #e3e9e4;
  background: #fff;
  border-radius: 10px;
  color: #405c53;
  padding: 0 14px;
  cursor: pointer;
  font-size: 12px;
  white-space: nowrap;
  & > svg {
    margin-left: 6px;
  }
  & b {
    margin-right: 4px;
  }
  &[aria-pressed='true'] {
    background: #193c33;
    color: white;
    border-color: #193c33;
  }
  &:focus-visible {
    outline: 3px solid #29509d;
    outline-offset: 3px;
  }
`

export const CarGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  align-items: stretch;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`

export const CardRoot = styled(motion.article)`
  min-width: 0;
  overflow: hidden;
  background: #fff;
  border: 1px solid #e8eae3;
  border-radius: 16px;
  box-shadow: 0 10px 30px #1b332d0a;
  transition:
    box-shadow 0.3s,
    border-color 0.3s,
    transform 0.3s;
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    &:hover {
      transform: translateY(-4px) !important;
      border-color: #d6dcdf;
      box-shadow: 0 16px 35px #1f2f4917;
    }
  }
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    &:hover img {
      transform: scale(1.035);
    }
  }
`

export const CardImageWrap = styled('div')`
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: #e8ebea;
`

export const CardImage = styled('img')`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
`

export const CardFallback = styled('div')`
  height: 100%;
  display: grid;
  place-items: center;
  color: #687783;
  font-size: 13px;
`

export const CardYear = styled('span')`
  position: absolute;
  top: 16px;
  height: 38px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 2px 10px #1f2f4914;
  right: 16px;
  display: grid;
  place-items: center;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 700;
`

export const FavoriteButton = styled(ButtonBase)`
  position: absolute;
  top: 16px;
  height: 38px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 2px 10px #1f2f4914;
  left: 16px;
  width: 40px;
  border: 0;
  color: #34465a;
  display: grid;
  place-items: center;
  cursor: pointer;
  &[aria-pressed='true'] {
    color: #b45e53;
  }
  &:active {
    transform: scale(0.97);
  }
  &:focus-visible {
    outline: 3px solid #29509d;
    outline-offset: 3px;
  }
`

export const CardBody = styled('div')`
  padding: 24px;
  @media (max-width: 650px) {
    padding: 20px;
  }
`

export const CardIdentity = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: start;
  min-height: 65px;
  & h2 {
    text-align: right;
    margin: 0;
    font: 700 21px/1.35 sans-serif;
    letter-spacing: -0.035em;
    overflow-wrap: anywhere;
  }
  & h2 span {
    font-weight: 400;
  }
`

export const Eyebrow = styled('p')`
  color: #8c9a8e;
  font-size: 11px;
  margin: 0 0 8px;
`

export const CardNumber = styled('span')`
  color: #c4cbd0;
  font: 400 12px sans-serif;
`

export const CardSpecs = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 16px 0;
  border-top: 1px solid #edf0ed;
  border-bottom: 1px solid #edf0ed;
  & div {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  & span {
    color: #929ba2;
    font-size: 11px;
  }
  & strong {
    font-size: 12px;
    font-weight: 600;
  }
  & small {
    font-size: 10px;
    font-weight: 400;
  }
`

export const CardPrice = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 7px;
  & > span {
    color: #929ba2;
    font-size: 11px;
  }
  & small {
    font-size: 10px;
    font-weight: 400;
  }
  & strong {
    font-size: 17px;
    white-space: nowrap;
  }
`

export const CardFooter = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  padding-top: 20px;
`

export const DetailsLink = styled(Link)`
  & svg {
    font: 18px sans-serif;
    transition: transform 0.2s;
  }
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 42px;
  padding: 0 13px;
  border: 1px solid #dbe6dc;
  border-radius: 9px;
  background: #eff4ef;
  color: #214e3d;
  text-decoration: none;
  font-size: 11px;
  font-weight: 700;
  transition:
    background 0.2s,
    color 0.2s,
    border-color 0.2s;
  &:active {
    transform: scale(0.97);
  }
  &:focus-visible {
    outline: 3px solid #29509d;
    outline-offset: 3px;
  }
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    &:hover {
      background: #193c33;
      border-color: #193c33;
      color: white;
    }
  }
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    &:hover svg {
      transform: translateX(-3px);
    }
  }
`

export const EmptyState = styled('div')`
  text-align: center;
  padding: 70px 20px;
  border: 1px dashed #d8ded5;
  border-radius: 16px;
  background: #fff;
  color: #6c7883;
  & strong {
    color: #1f2f49;
  }
`

export const CatalogEnd = styled('footer')`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dedfdd;
  margin-top: 80px;
  padding: 28px 0;
  color: #8b949a;
  font-size: 12px;
  & span {
    color: #1f2f49;
    font-weight: 700;
  }
  @media (max-width: 650px) {
    gap: 12px;
  }
`

export const DetailPage = styled('main')`
  max-width: 1200px;
  margin: auto;
  padding: 40px 24px 80px;
`

export const BackLink = styled(Link)`
  &:focus-visible {
    outline: 3px solid #29509d;
    outline-offset: 3px;
  }
  color: #315848;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`

export const Detail = styled('article')`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: clamp(28px, 5vw, 64px);
  align-items: center;
  margin-top: 36px;
  padding: clamp(20px, 3vw, 36px);
  background: #fff;
  border: 1px solid #e8eae3;
  border-radius: 24px;
  box-shadow: 0 18px 50px #1b332d0a;
  & img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 18px 45px #1b332d18;
  }
  & h1 {
    text-align: right;
    font-family: sans-serif;
    font-size: clamp(28px, 3vw, 42px);
    margin: 0 0 24px;
  }
  & dl {
    margin: 0;
  }
  & dl div {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 0;
    border-bottom: 1px solid #dedfdd;
  }
  & dt {
    color: #6c7883;
  }
  & dd {
    margin: 0;
    font-weight: 700;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`

export const DetailDescription = styled('section')`
  & h2 {
    margin: 24px 0 8px;
    font-size: 16px;
  }
  & p {
    margin: 0;
    color: #6c7883;
    line-height: 2;
  }
`
