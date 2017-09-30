import React, { Component } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Welcome to puppyPals</h1>
            </Jumbotron>
            <form>
            	<FormBtn>
                Submit Here
              	</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default login;
