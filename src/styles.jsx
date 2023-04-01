import styled from "styled-components";
import { motion } from "framer-motion";

export const Layout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
  color: white;
  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  .pinkSpan {
    color: #ff70ec;
  }
  @media screen and (max-width: 780px) {
    padding: 0;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
