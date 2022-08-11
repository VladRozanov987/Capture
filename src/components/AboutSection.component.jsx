import home1 from "../img/home1.png";
//Styled components
import styled from "styled-components";
import { Layout, Description, Hide, Image } from "../styles";

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true</h2>
          </Hide>
          <p>
            Contact us for any photography or videography ideas that you have.
            We have professionals with amazing skills.
          </p>
          <button>Contact Us</button>
        </div>
      </Description>
      <Image>
        <img src={home1} alt="" />
      </Image>
    </Layout>
  );
};

export default AboutSection;
