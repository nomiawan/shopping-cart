import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    justify-content: end;
    margin-top: 4rem;
    margin-right: 4rem;
    
    .cart-trolley--link {
        position: relative;
        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }
        .cart-total--item {
          position: absolute;
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }
`