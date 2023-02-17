import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Screen.css";

function MainScreen({ children, title }) {
  return (
    <div className="mainback" style={{marginTop: '2rem'}}>
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading unbounded">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MainScreen;
