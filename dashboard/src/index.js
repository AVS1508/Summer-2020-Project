import React from "react";
import ReactDOM from "react-dom";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MyCard from "./components/MyCard/MyCard";
import MyFooter from "./components/MyFooter/MyFooter";
import { CardDeck, Container } from "react-bootstrap";

import styles from "./styles.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className={styles.App}>
      <MyNavbar />
      <Container className={styles.cardContainer}>
        <CardDeck className={styles.cardDeck}>
          <MyCard
            className={styles.card}
            image="placeholder.jpg"
            href="#placeholder"
            title="Account Management"
          >
            Employee management with respect to the designation, promotions, and
            access rights.
          </MyCard>
          <MyCard
            className={styles.card}
            image="placeholder.jpg"
            href="#placeholder"
            title="Sales/Transactions Register"
          >
            Managing routine transactions with customers, along with inventory
            management of products/services.
          </MyCard>
        </CardDeck>
        <CardDeck className={styles.cardDeck}>
          <MyCard
            className={styles.card}
            image="placeholder.jpg"
            href="#placeholder"
            title="Predictive Analytics/Trends"
          >
            Predicting and displaying inferences from past activities to create
            monetary projections along with employee performance statistics.
          </MyCard>
          <MyCard
            className={styles.card}
            image="placeholder.jpg"
            href="#placeholder"
            title="Payroll System & Financial Ledger"
          >
            Handling the salaries and incentives for employees, along with
            non-routine transactions like acquisitions, mergers, etc.
          </MyCard>
        </CardDeck>
      </Container>
      <MyFooter>© Team: Aditya Vikram Singh, Ikshita Yadav</MyFooter>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
