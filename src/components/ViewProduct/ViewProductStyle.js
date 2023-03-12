import styled from "styled-components";

export const Wrapper = styled.section`
  .container {
    padding: 6rem 0;
    .view-product-listing {
      margin-bottom: 3rem;
    }
  }
  .grid-two-columns {
    grid-template-columns: repeat(2, 1fr);
  }

  .product_images {
    display: flex;
    align-items: center;
    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
    .grid-two-columns {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 90rem;
    }
  }
`;