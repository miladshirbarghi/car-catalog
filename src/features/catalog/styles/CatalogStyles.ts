import { Box, styled } from '@mui/material'

export const CatalogStyles = styled(Box)`
  .catalog {
    max-width: 1600px;
    margin: auto;
    padding: 0 clamp(20px, 5vw, 80px);
  }
  .catalog__header {
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dedfdd;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #1f2f49;
    text-decoration: none;
    font-size: 18px;
    font-weight: 800;
    line-height: 1.2;
  }
  .brand small {
    display: block;
    font: 600 8px/1.6 sans-serif;
    letter-spacing: 0.19em;
  }
  .catalog__header-note {
    color: #777f87;
    font-size: 12px;
  }
  .catalog__intro {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: clamp(58px, 8vw, 116px) 0 clamp(62px, 8vw, 110px);
  }
  .section-label {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #6d7a89;
    font-size: 12px;
    font-weight: 600;
    margin: 0 0 20px;
  }
  .section-label span {
    width: 24px;
    height: 1px;
    background: #bd8f59;
  }
  .catalog__intro h1 {
    font-size: clamp(32px, 4.4vw, 62px);
    line-height: 1.55;
    letter-spacing: -0.04em;
    margin: 0;
    font-weight: 800;
  }
  .catalog__intro h1 em {
    color: #85909a;
    font-style: normal;
    font-weight: 400;
  }
  .catalog__description {
    color: #6c7883;
    font-size: 14px;
    line-height: 2;
    margin: 20px 0 0;
  }
  .catalog__intro-side {
    text-align: left;
    color: #8a949c;
    direction: ltr;
    padding-bottom: 8px;
  }
  .catalog__intro-side > span {
    font: 600 10px sans-serif;
    letter-spacing: 0.18em;
  }
  .catalog__intro-side strong {
    display: block;
    color: #26374e;
    font: 300 42px/1.4 sans-serif;
    margin: 8px 0;
  }
  .catalog__intro-side i {
    font-style: normal;
    color: #c2c8cb;
  }
  .catalog__intro-side p {
    direction: rtl;
    font-size: 12px;
    line-height: 1.9;
  }
  .catalog__collection {
    border-top: 1px solid #dcdedc;
    padding-top: 38px;
  }
  .collection-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 28px;
  }
  .collection-heading .section-label {
    margin-bottom: 8px;
  }
  .collection-heading h2 {
    margin: 0;
    font-size: 24px;
  }
  .collection-heading h2 small {
    color: #8b949a;
    font-size: 12px;
    font-weight: 400;
    margin-right: 10px;
  }
  .catalog__controls {
    display: flex;
    gap: 10px;
  }
  .search,
  .filter {
    height: 46px;
    border: 1px solid #dedfdd;
    background: #fff;
    border-radius: 8px;
    color: #566574;
  }
  .search {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 14px;
  }
  .search input {
    border: 0;
    outline: 0;
    width: 150px;
    min-width: 0;
    background: transparent;
    font-size: 12px;
    color: #1f2f49;
  }
  .search:focus-within {
    outline: 2px solid #29509d;
    outline-offset: 2px;
  }
  .filter {
    padding: 0 14px;
    cursor: pointer;
    font-size: 12px;
    white-space: nowrap;
  }
  .filter > svg {
    margin-left: 5px;
  }
  .filter b {
    margin-right: 4px;
  }
  .filter--active {
    background: #1f2f49;
    color: white;
    border-color: #1f2f49;
  }
  .car-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    align-items: stretch;
  }
  .car-card {
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
  }
  .car-card__image-wrap {
    position: relative;
    overflow: hidden;
    aspect-ratio: 4 / 3;
    background: #e8ebea;
  }
  .car-card__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
  .car-card__fallback {
    height: 100%;
    display: grid;
    place-items: center;
    color: #687783;
    font-size: 13px;
  }
  .car-card__year,
  .favorite {
    position: absolute;
    top: 16px;
    height: 38px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 10px #1f2f4914;
  }
  .car-card__year {
    right: 16px;
    display: grid;
    place-items: center;
    padding: 0 13px;
    font-size: 12px;
    font-weight: 700;
  }
  .favorite {
    left: 16px;
    width: 40px;
    border: 0;
    color: #34465a;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  .favorite--active {
    color: #b45e53;
  }
  .car-card__body {
    padding: 23px;
  }
  .car-card__identity {
    display: flex;
    justify-content: space-between;
    align-items: start;
    min-height: 65px;
  }
  .eyebrow {
    color: #929ba2;
    font-size: 11px;
    margin: 0 0 6px;
  }
  .car-card__identity h2 {
    text-align: right;
    margin: 0;
    font: 700 21px/1.35 sans-serif;
    letter-spacing: -0.035em;
    overflow-wrap: anywhere;
  }
  .car-card__identity h2 span {
    font-weight: 400;
  }
  .car-card__number {
    color: #c4cbd0;
    font: 400 12px sans-serif;
  }
  .car-card__specs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding: 19px 0;
    border-bottom: 1px solid #edf0ef;
  }
  .car-card__specs div,
  .car-card__price {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .car-card__specs span,
  .car-card__price > span {
    color: #929ba2;
    font-size: 11px;
  }
  .car-card__specs strong {
    font-size: 12px;
    font-weight: 600;
  }
  .car-card__specs small,
  .car-card__price small {
    font-size: 10px;
    font-weight: 400;
  }
  .car-card__footer {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    justify-content: space-between;
    gap: 16px;
    padding-top: 20px;
  }
  .car-card__price strong {
    font-size: 17px;
    white-space: nowrap;
  }
  .details-link {
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
  }
  .details-link__arrow {
    font: 18px sans-serif;
    transition: transform 0.2s;
  }
  .details-link:active,
  .filter:active,
  .favorite:active {
    transform: scale(0.97);
  }
  :where(a, button):focus-visible {
    outline: 3px solid #29509d;
    outline-offset: 3px;
  }
  .empty-state {
    text-align: center;
    padding: 70px 20px;
    color: #6c7883;
  }
  .empty-state strong {
    color: #1f2f49;
  }
  .catalog__end {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #dedfdd;
    margin-top: 80px;
    padding: 28px 0;
    color: #8b949a;
    font-size: 12px;
  }
  .catalog__end span {
    color: #1f2f49;
    font-weight: 700;
  }
  .detail-page {
    max-width: 1200px;
    margin: auto;
    padding: 40px 24px;
  }
  .back-link {
    color: #29509d;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .detail {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 48px;
    align-items: center;
    margin-top: 45px;
  }
  .detail img {
    width: 100%;
    height: auto;
    border-radius: 14px;
  }
  .detail h1 {
    text-align: right;
    font-family: sans-serif;
  }
  .detail dl div {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 0;
    border-bottom: 1px solid #dedfdd;
  }
  .detail dt {
    color: #6c7883;
  }
  .detail dd {
    margin: 0;
    font-weight: 700;
  }
  .detail__description h2 {
    margin: 24px 0 8px;
    font-size: 16px;
  }
  .detail__description p {
    margin: 0;
    color: #6c7883;
    line-height: 2;
  }
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    .car-card:hover {
      transform: translateY(-4px) !important;
      border-color: #d6dcdf;
      box-shadow: 0 16px 35px #1f2f4917;
    }
    .car-card:hover .car-card__image {
      transform: scale(1.035);
    }
    .details-link:hover {
      background: #1f2f49;
      border-color: #1f2f49;
      color: white;
    }
    .details-link:hover .details-link__arrow {
      transform: translateX(-3px);
    }
  }
  @media (max-width: 1000px) {
    .car-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 650px) {
    .catalog__header {
      height: 72px;
    }
    .catalog__header-note,
    .catalog__intro-side {
      display: none;
    }
    .catalog__intro {
      padding: 58px 0 68px;
    }
    .collection-heading {
      align-items: stretch;
      flex-direction: column;
    }
    .catalog__controls {
      width: 100%;
    }
    .search {
      flex: 1;
      min-width: 0;
    }
    .search input {
      width: 100%;
    }
    .car-grid {
      grid-template-columns: 1fr;
      gap: 18px;
    }
    .car-card__body {
      padding: 20px;
    }
    .detail {
      grid-template-columns: 1fr;
      gap: 28px;
    }
    .catalog__end {
      gap: 12px;
    }
  }
`
