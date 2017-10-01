import React from "react";
import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";
import Input from "../../components/Form/Input";
import Title from "../../components/Title/title";

<Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>New York Times Article Scrubber</h1>

            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="topic (required)"
              />
              <Input
                value={this.state.start_year}
                onChange={this.handleInputChange}
                name="start_year"
                placeholder="start_year (required)"
              />
              <Input
                value={this.state.end_year}
                onChange={this.handleInputChange}
                name="end_year"
                placeholder="end_year (required)"
              />
              <FormBtn
                disabled={!(this.state.start_year && this.state.end_year && this.state.topic)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => {
                  return (
                    <ListItem key={article._id}>
                      <a href={"/articles/" + article._id}>
                        <strong>
                          {article.headline.main} from {article.pub_date} {article.web_url}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>

export default form;
