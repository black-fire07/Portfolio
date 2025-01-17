import { Navbar } from "reactstrap";
import { headerItem } from "./constant";
import styled from "styled-components";
import resumePdf from "../../Assets/pdf/ResumeFS.pdf";

interface NavItemProps extends React.HTMLAttributes<HTMLAnchorElement> {}

const NavItemWrapper = styled.div`
  display: flex;
  margin-left: auto;
  /* Extra small devices (phones, less than 576px) */
  @media (max-width: 575.98px) {
    /* Your styles for phones */
    :not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) and (max-width: 767.98px) {
    /* Your styles for landscape phones */
    :not(:last-child) {
      margin-right: 2rem;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    :not(:last-child) {
      margin-right: 3.5rem;
    }
  }
`;

const NavItem = styled.a<NavItemProps>`
  color: #fff;
  cursor: pointer;
`;

function TopNav() {
  return (
    <Navbar color="dark" className="py-3 pe-3">
      <NavItemWrapper>
        {headerItem.map((item) =>
          item?.id === "resume" ? (
            <a
              key={item?.title}
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              Resume
            </a>
          ) : (
            <NavItem href={`#${item?.id}`} target="_self" key={item?.title}>
              {item?.title}
            </NavItem>
          )
        )}
      </NavItemWrapper>
    </Navbar>
  );
}

export default TopNav;
