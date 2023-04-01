//Import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Styled component
import styled from "styled-components";
import { Layout, Description, Image } from "../styles";
import { fade } from "../animation";
import UseSkroll from "./UseSkroll.component";

const ServicesSection = () => {
  const [element, controls] = UseSkroll();

  return (
    <Services variants={fade} animate={controls} initial="hidden" ref={element}>
      <Description>
        <h2>
          Hight <span className="pinkSpan">quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>3 to 5 days</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>The best team</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Diaphragm</h3>
            </div>
            <p>Best equipment</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Low prices</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
};

const Services = styled(Layout)`
  padding: 0 5rem;
  h2 {
    padding-bottom: 4rem;
  }
  p {
    padding: 2rem 0 4rem 0;
  }
  @media screen and (max-width: 780px) {
    padding: 0 5rem;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const Card = styled.div`
  flex-basis: 5rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
