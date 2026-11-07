import { layoutBreakpoints } from '@styles/breakpoints'
import { catalogColors } from '@styles/pallete'
import { rowBetween } from '@styles/sharedStyles'
import { ButtonBase, TextField, styled } from '@mui/material'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import heroImage from '@assets/images/1.png'

export const CatalogContainer = styled('main')`
  max-width: 1536px;
  margin: auto;
  padding: 0 clamp(18px, 5vw, 72px) 24px;
`

export const CatalogHeaderRoot = styled('header')`
  ${rowBetween};
  height: 96px;
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.mobile)} {
    height: 72px;
  }
`

export const Brand = styled('a')`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${catalogColors.brandInk};
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.2;
  & svg {
    color: ${catalogColors.brandMark};
  }
  & small {
    display: block;
    font: 600 8px/1.6 sans-serif;
    letter-spacing: 0.19em;
  }
  &:focus-visible {
    outline: 3px solid ${catalogColors.focus};
    outline-offset: 3px;
  }
`

export const HeaderNote = styled('span')`
  color: ${catalogColors.headerNote};
  font-size: 12px;
  border-inline-start: 1px solid ${catalogColors.headerBorder};
  padding-inline-start: 18px;
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.mobile)} {
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
  color: ${catalogColors.surface};
  background:
    linear-gradient(
      90deg,
      ${catalogColors.heroOverlayLight} 0%,
      ${catalogColors.heroOverlayMedium} 43%,
      ${catalogColors.heroOverlayDark} 100%
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
    color: ${catalogColors.heroAccent};
    font-style: normal;
    font-weight: 400;
  }
  & > div:first-of-type {
    position: relative;
    max-width: 620px;
  }
  & > div:first-of-type > p:first-of-type {
    color: ${catalogColors.heroLabel};
  }
  & a {
    display: inline-flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    padding: 14px 20px;
    border-radius: 10px;
    background: ${catalogColors.heroButton};
    color: ${catalogColors.heroButtonText};
    text-decoration: none;
    font-size: 13px;
    font-weight: 700;
  }
  & a:hover {
    background: ${catalogColors.heroButtonHover};
  }
  & a:focus-visible {
    outline: 3px solid ${catalogColors.surface};
    outline-offset: 4px;
  }
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.mobile)} {
    min-height: 420px;
    padding: 32px 24px;
    border-radius: 18px;
    /* @noflip */
    background-position: 40% center;
  }
`

export const SectionLabel = styled('p')`
  display: flex;
  align-items: center;
  gap: 9px;
  color: ${catalogColors.accentLabel};
  font-size: 12px;
  font-weight: 700;
  margin: 0 0 20px;
  & span {
    width: 24px;
    height: 2px;
    background: ${catalogColors.accentLine};
  }
`

export const CatalogDescription = styled('p')`
  color: ${catalogColors.heroDescription};
  font-size: 14px;
  line-height: 2;
  margin: 20px 0 0;
`

export const IntroSide = styled('div')`
  text-align: start;
  color: ${catalogColors.heroSideText};
  direction: ltr;
  padding-bottom: 8px;
  & > span {
    font: 600 10px sans-serif;
    letter-spacing: 0.18em;
  }
  & strong {
    display: block;
    color: ${catalogColors.surface};
    font: 300 clamp(22px, 2.7vw, 38px)/1.4 sans-serif;
    margin: 8px 0;
  }
  & i {
    font-style: normal;
    color: ${catalogColors.heroAccent};
  }
  & p {
    direction: rtl;
    font-size: 12px;
    line-height: 1.9;
  }
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.mobile)} {
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
    color: ${catalogColors.countText};
    font-size: 12px;
    font-weight: 400;
    margin-inline-start: 10px;
  }
`

export const Controls = styled('div')`
  display: flex;
  align-items: start;
  gap: 12px;
  padding: 20px;
  background: ${catalogColors.surface};
  border: 1px solid ${catalogColors.controlsBorder};
  border-radius: 16px;
  box-shadow: 0 12px 40px ${catalogColors.shadowControls};
  & .MuiOutlinedInput-root {
    background: ${catalogColors.fieldBackground};
    border-radius: 10px;
  }
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.mobile)} {
    padding: 14px;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-items: stretch;
    & .MuiOutlinedInput-root {
      min-height: 48px;
      font-size: 16px;
    }
  }
`

export const PriceControls = styled('div')`
  display: flex;
  flex: 3 1 0;
  min-width: 0;
  gap: 12px;
  & > .MuiFormControl-root {
    flex: 1 1 0;
    min-width: 0;
  }
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.mobile)} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    & > .MuiFormControl-root:last-child {
      grid-column: 1 / -1;
    }
  }
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.narrow)} {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const SearchRoot = styled(TextField)`
  flex: 1.3 1 0;
  min-width: 0;
  & .MuiInputAdornment-root {
    color: ${catalogColors.searchIcon};
  }
`

export const FilterButton = styled(ButtonBase)`
  min-height: 40px;
  border: 1px solid ${catalogColors.fieldBorder};
  background: ${catalogColors.surface};
  border-radius: 10px;
  color: ${catalogColors.filterText};
  padding: 0 14px;
  cursor: pointer;
  font-size: 12px;
  white-space: nowrap;
  & > svg {
    margin-inline-end: 6px;
  }
  & b {
    margin-inline-start: 4px;
  }
  &[aria-pressed='true'] {
    background: ${catalogColors.accentDark};
    color: ${catalogColors.surface};
    border-color: ${catalogColors.accentDark};
  }
  &:focus-visible {
    outline: 3px solid ${catalogColors.focus};
    outline-offset: 3px;
  }
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.mobile)} {
    min-height: 48px;
    justify-content: center;
  }
`

export const CarGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  align-items: stretch;
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.catalog)} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.mobile)} {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`

export const CardRoot = styled(motion.article)`
  min-width: 0;
  overflow: hidden;
  background: ${catalogColors.surface};
  border: 1px solid ${catalogColors.cardBorder};
  border-radius: 16px;
  box-shadow: 0 10px 30px ${catalogColors.shadowCard};
  transition:
    box-shadow 0.3s,
    border-color 0.3s,
    transform 0.3s;
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    &:hover {
      transform: translateY(-4px) !important;
      border-color: ${catalogColors.cardHoverBorder};
      box-shadow: 0 16px 35px ${catalogColors.shadowCardHover};
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
  background: ${catalogColors.imageBackground};
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
  color: ${catalogColors.fallbackText};
  font-size: 13px;
`

export const CardYear = styled('span')`
  position: absolute;
  top: 16px;
  height: 38px;
  border-radius: 8px;
  background: ${catalogColors.surfaceOverlay};
  box-shadow: 0 2px 10px ${catalogColors.shadowBadge};
  inset-inline-start: 16px;
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
  background: ${catalogColors.surfaceOverlay};
  box-shadow: 0 2px 10px ${catalogColors.shadowBadge};
  inset-inline-end: 16px;
  width: 40px;
  border: 0;
  color: ${catalogColors.iconText};
  display: grid;
  place-items: center;
  cursor: pointer;
  & > span {
    display: flex;
  }
  &[aria-pressed='true'] {
    color: ${catalogColors.favoriteActive};
  }
  &:active {
    transform: scale(0.97);
  }
  &:focus-visible {
    outline: 3px solid ${catalogColors.focus};
    outline-offset: 3px;
  }
`

export const CardBody = styled('div')`
  padding: 24px;
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.mobile)} {
    padding: 20px;
  }
`

export const CardIdentity = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: start;
  min-height: 65px;
  & h2 {
    text-align: end;
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
  color: ${catalogColors.eyebrowText};
  font-size: 11px;
  margin: 0 0 8px;
`

export const CardNumber = styled('span')`
  color: ${catalogColors.cardNumber};
  font: 400 12px sans-serif;
`

export const CardSpecs = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 16px 0;
  border-top: 1px solid ${catalogColors.cardDivider};
  border-bottom: 1px solid ${catalogColors.cardDivider};
  & div {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  & span {
    color: ${catalogColors.cardLabel};
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
    color: ${catalogColors.cardLabel};
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
  border: 1px solid ${catalogColors.linkBorder};
  border-radius: 9px;
  background: ${catalogColors.linkBackground};
  color: ${catalogColors.linkText};
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
    outline: 3px solid ${catalogColors.focus};
    outline-offset: 3px;
  }
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    &:hover {
      background: ${catalogColors.accentDark};
      border-color: ${catalogColors.accentDark};
      color: ${catalogColors.surface};
    }
  }
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    &:hover svg {
      translate: -3px 0;
    }
  }
`

export const EmptyState = styled('div')`
  text-align: center;
  padding: 70px 20px;
  border: 1px dashed ${catalogColors.emptyBorder};
  border-radius: 16px;
  background: ${catalogColors.surface};
  color: ${catalogColors.mutedText};
  & strong {
    color: ${catalogColors.inkBlue};
  }
`

export const CatalogEnd = styled('footer')`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${catalogColors.divider};
  margin-top: 80px;
  padding: 28px 0;
  color: ${catalogColors.footerText};
  font-size: 12px;
  & span {
    color: ${catalogColors.inkBlue};
    font-weight: 700;
  }
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.mobile)} {
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
    outline: 3px solid ${catalogColors.focus};
    outline-offset: 3px;
  }
  color: ${catalogColors.backLink};
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
  background: ${catalogColors.surface};
  border: 1px solid ${catalogColors.cardBorder};
  border-radius: 24px;
  box-shadow: 0 18px 50px ${catalogColors.shadowCard};
  & img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 18px 45px ${catalogColors.shadowImage};
  }
  & h1 {
    text-align: end;
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
    border-bottom: 1px solid ${catalogColors.divider};
  }
  & dt {
    color: ${catalogColors.mutedText};
  }
  & dd {
    margin: 0;
    font-weight: 700;
  }
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.mobile)} {
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
    color: ${catalogColors.mutedText};
    line-height: 2;
  }
`
