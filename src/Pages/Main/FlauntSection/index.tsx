import { Container, Row, Col } from "reactstrap";
import {
  CardInner,
  FlauntCard,
  IconWrapper,
  SectionHeading,
  SectionIntro,
  SectionWrapper,
  Separator,
} from "./styles";
import { flauntCards } from "./constants";

export default function FlauntSection() {
  return (
    <SectionWrapper id="preface">
      <Container>
        <SectionHeading>Preface</SectionHeading>
        <Separator />
        <Row className="g-5 justify-content-center mt-2">
          <Col md="7" className="mt-md-5 mt-2">
            <Row className="g-5">
              {flauntCards.map((item, index) => (
                <Col key={index} md="6">
                  <FlauntCard color={item?.color} bgColor={item?.bgColor}>
                    <IconWrapper>{item?.icon}</IconWrapper>
                    <div>
                      <h1>{item?.number}</h1>
                      <h4>{item?.title}</h4>
                    </div>
                    <CardInner
                      opacity="14%"
                      width="6rem"
                      height="6rem"
                      top="-13%"
                      right="-17%"
                    />
                    <CardInner
                      opacity="12%"
                      width="4rem"
                      height="4rem"
                      top="-2%"
                      right="-13%"
                    />
                  </FlauntCard>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md="4" className="d-flex justify-content-between flex-column">
            <SectionIntro>
              Greetings! I am a{" "}
              <span className="text-primary">24-year-old web developer</span>{" "}
              Residing in the vibrant city of Gurgaon, India. As a Computer
              Science Engineer, I am privileged to be a part of the dynamic team
              at Lenskart, where my passion for building robust full-stack web
              applications and delivering seamless user experiences comes to
              life.
            </SectionIntro>
            <SectionIntro className="mb-0">
              Beyond the digital realm, I also embrace the role of a{" "}
              <span className="text-primary">
                CrossFit athlete and an adventurous traveler
              </span>
              , seeking new horizons and experiences.
            </SectionIntro>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
}
