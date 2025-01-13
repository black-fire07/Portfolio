import { Container, Row, Col } from "reactstrap";
import BannerImage from "../../../Assets/images/logoImg.png";
import { DescText, SocialIcon, SocialWrapper } from "./styles";
import { socialObj } from "./constants";

export default function TopBanner() {
  return (
    <Container>
      <Row className="py-md-5 py-3">
        <Col
          sm="12"
          md=""
          className="d-flex justify-content-center flex-column"
        >
          <div>
            <h1 className="fw-md-bold textSize-md-4 textSize-3 mb-0">
              Hy! I'm
            </h1>
            <h1 className="fw-md-bold textSize-md-4 textSize-3">
              <span className="text-primary">Dipesh Rawat</span>
            </h1>
          </div>
          <DescText className="marg-bottom-1 marg-bottom-sm-0.5">
            A passionate Full-Stack Web Developer with over 4 years of expertise
            in crafting scalable, responsive, and high-performing web
            applications. Your search for a one-stop solution to all your UI and
            development needs ends here! Let’s collaborate to bring your vision
            to life—quality and excellence guaranteed.
          </DescText>
          <SocialWrapper>
            {socialObj.map((item, index) => (
              <SocialIcon
                href={item?.link}
                target="_blank"
                color={item?.color}
                key={index}
                className="textSize-2"
              >
                {item?.icon}
              </SocialIcon>
            ))}
          </SocialWrapper>
        </Col>
        <Col className="d-none d-md-block">
          <img
            src={BannerImage}
            className="img-fluid"
            alt="Banner"
            style={{ height: "35rem" }}
          />
        </Col>
      </Row>
    </Container>
  );
}
