import { ButtonBase, styled } from '@mui/material'
import { motion } from 'motion/react'
import { Link } from 'react-router'

export const CatalogContainer = styled('main')`
  max-width: 1600px;
  margin: auto;
  padding: 0 clamp(20px, 5vw, 80px);
`

export const CatalogHeaderRoot = styled('header')`
  height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dedfdd;
  @media (max-width: 650px) {
    height: 72px;
  }
`

export const Brand = styled('a')`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #1f2f49;
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.2;
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
  color: #777f87;
  font-size: 12px;
  @media (max-width: 650px) {
    display: none;
  }
`

export const Intro = styled('section')`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: clamp(58px, 8vw, 116px) 0 clamp(62px, 8vw, 110px);
  & h1 {
    font-size: clamp(32px, 4.4vw, 62px);
    line-height: 1.55;
    letter-spacing: -0.04em;
    margin: 0;
    font-weight: 800;
  }
  & h1 em {
    color: #85909a;
    font-style: normal;
    font-weight: 400;
  }
  @media (max-width: 650px) {
    padding: 58px 0 68px;
  }
`

export const SectionLabel = styled('p')`
  display: flex;
  align-items: center;
  gap: 9px;
  color: #6d7a89;
  font-size: 12px;
  font-weight: 600;
  margin: 0 0 20px;
  & span {
    width: 24px;
    height: 1px;
    background: #bd8f59;
  }
`

export const CatalogDescription = styled('p')`
  color: #6c7883;
  font-size: 14px;
  line-height: 2;
  margin: 20px 0 0;
`

export const IntroSide = styled('div')`
  text-align: left;
  color: #8a949c;
  direction: ltr;
  padding-bottom: 8px;
  & > span {
    font: 600 10px sans-serif;
    letter-spacing: 0.18em;
  }
  & strong {
    display: block;
    color: #26374e;
    font: 300 42px/1.4 sans-serif;
    margin: 8px 0;
  }
  & i {
    font-style: normal;
    color: #c2c8cb;
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
  border-top: 1px solid #dcdedc;
  padding-top: 38px;
`

export const CollectionHeading = styled('div')`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
  & p {
    margin-bottom: 8px;
  }
  & h2 {
    margin: 0;
    font-size: 24px;
  }
  & h2 small {
    color: #8b949a;
    font-size: 12px;
    font-weight: 400;
    margin-right: 10px;
  }
  @media (max-width: 650px) {
    align-items: stretch;
    flex-direction: column;
  }
`

export const Controls = styled('div')`
  display: flex;
  gap: 10px;
  @media (max-width: 650px) {
    width: 100%;
  }
`

export const SearchRoot = styled('div')`
  height: 46px;
  border: 1px solid #dedfdd;
  background: #fff;
  border-radius: 8px;
  color: #566574;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 14px;
  & input {
    border: 0;
    outline: 0;
    width: 150px;
    min-width: 0;
    background: transparent;
    font-size: 12px;
    color: #1f2f49;
  }
  &:focus-within {
    outline: 2px solid #29509d;
    outline-offset: 2px;
  }
  @media (max-width: 650px) {
    flex: 1;
    min-width: 0;
  }
  @media (max-width: 650px) {
    & input {
      width: 100%;
    }
  }
`

export const FilterButton = styled(ButtonBase)`
  height: 46px;
  border: 1px solid #dedfdd;
  background: #fff;
  border-radius: 8px;
  color: #566574;
  padding: 0 14px;
  cursor: pointer;
  font-size: 12px;
  white-space: nowrap;
  & > svg {
    margin-left: 5px;
  }
  & b {
    margin-right: 4px;
  }
  &[aria-pressed='true'] {
    background: #1f2f49;
    color: white;
    border-color: #1f2f49;
  }
  &:active {
    transform: scale(0.97);
  }
  &:focus-visible {
    outline: 3px solid #29509d;
    outline-offset: 3px;
  }
`

export const CarGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
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
  border: 1px solid #e7e9e8;
  border-radius: 14px;
  box-shadow: 0 6px 24px #1f2f4908;
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
  background: #fff;
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
  background: #fff;
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
  padding: 23px;
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
  color: #929ba2;
  font-size: 11px;
  margin: 0 0 6px;
`

export const CardNumber = styled('span')`
  color: #c4cbd0;
  font: 400 12px sans-serif;
`

export const CardSpecs = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 19px 0;
  border-bottom: 1px solid #edf0ef;
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
  border: 1px solid #dbe0e3;
  border-radius: 7px;
  color: #263d55;
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
      background: #1f2f49;
      border-color: #1f2f49;
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
  padding: 40px 24px;
`

export const BackLink = styled(Link)`
  &:focus-visible {
    outline: 3px solid #29509d;
    outline-offset: 3px;
  }
  color: #29509d;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`

export const Detail = styled('article')`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: center;
  margin-top: 45px;
  & img {
    width: 100%;
    height: auto;
    border-radius: 14px;
  }
  & h1 {
    text-align: right;
    font-family: sans-serif;
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
