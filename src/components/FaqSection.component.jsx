import styled from "styled-components";
import { Layout } from "../styles";
import Toggle from "./Toggle.component";
//Animations
import { AnimateSharedLayout } from "framer-motion";
import { fade } from "../animation";
import UseSkroll from "./UseSkroll.component";

const FaqSection = () => {
  const [element, controls] = UseSkroll();

  return (
    <Faq variants={fade} animate={controls} initial="hidden" ref={element}>
      <h2>
        Any questions <span>FAQ</span>
      </h2>

      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
              eaque!
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
              eaque!
            </p>
          </div>
        </Toggle>

        <Toggle title="Diferrent payment methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
              eaque!
            </p>
          </div>
        </Toggle>

        <Toggle title="What products do you offer">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
              eaque!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(Layout)`
  padding-top: 0;
  flex-direction: column;
  text-align: center;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
