import { layoutBreakpoints } from '@styles/breakpoints'
import { catalogColors } from '@styles/pallete'
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
  color: ${catalogColors.backLinkMuted};
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  &:hover {
    color: ${catalogColors.linkHover};
  }
  &:focus-visible {
    outline: 3px solid ${catalogColors.focus};
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
  border: 1px solid ${catalogColors.detailBorder};
  border-radius: 24px;
  background: ${catalogColors.surface};
  box-shadow: 0 18px 50px ${catalogColors.shadowHero};
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.detail)} {
    grid-template-columns: 1fr;
  }
`

export const DetailImage = styled('div')`
  position: relative;
  min-height: 390px;
  background: ${catalogColors.detailImageBackground};
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
    color: ${catalogColors.imagePlaceholderText};
  }
  & > span {
    position: absolute;
    top: 20px;
    inset-inline-start: 20px;
    padding: 9px 15px;
    border-radius: 8px;
    background: ${catalogColors.surfaceOverlay};
    color: ${catalogColors.badgeText};
    font-size: 12px;
    font-weight: 700;
  }
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.detail)} {
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
    text-align: end;
    color: ${catalogColors.detailTitle};
    font: 700 clamp(32px, 3.4vw, 48px)/1.2 sans-serif;
    letter-spacing: -0.04em;
    overflow-wrap: anywhere;
  }
  & > p {
    margin: 12px 0 0;
    color: ${catalogColors.detailSubtitle};
    font-size: 13px;
    line-height: 2;
  }
`

export const DetailEyebrow = styled('div')`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 22px;
  color: ${catalogColors.accentLabel};
  font-size: 12px;
  font-weight: 700;
  &::before {
    content: '';
    width: 24px;
    height: 2px;
    background: ${catalogColors.accentLine};
  }
`

export const PricePanel = styled('div')`
  margin-top: 32px;
  padding: 22px;
  border-radius: 15px;
  background: ${catalogColors.priceBackground};
  border: 1px solid ${catalogColors.priceBorder};
  & span {
    display: block;
    color: ${catalogColors.priceLabel};
    font-size: 12px;
  }
  & strong {
    display: block;
    margin-top: 10px;
    color: ${catalogColors.accentDark};
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
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.detail)} {
    grid-template-columns: 1fr;
  }
`

export const DetailSection = styled('section')`
  min-width: 0;
  padding: clamp(24px, 3vw, 36px);
  background: ${catalogColors.surface};
  border: 1px solid ${catalogColors.cardBorder};
  border-radius: 20px;
  & h2 {
    margin: 0;
    color: ${catalogColors.sectionTitle};
    font-size: 19px;
  }
  & > p {
    margin: 16px 0 0;
    color: ${catalogColors.descriptionText};
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
    background: ${catalogColors.specBackground};
  }
  & dt {
    color: ${catalogColors.specLabel};
    font-size: 12px;
  }
  & dd {
    margin: 12px 0 0;
    color: ${catalogColors.specText};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.8;
  }
  ${({ theme }) => theme.breakpoints.down(layoutBreakpoints.compact)} {
    grid-template-columns: 1fr;
    & div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }
    & dd {
      margin: 0;
      text-align: end;
    }
  }
`
