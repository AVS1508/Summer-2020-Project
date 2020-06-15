import React from "react";
import { Card } from "react-bootstrap";

import styles from "./MyCard.module.css";

export default (props) => {
  return (
    <Card className={styles.card} border="light" bg="dark" text="white">
      <Card.Img variant="top" src={require("../../assets/" + props.image)} />
      <Card.Body>
        <Card.Title className={styles.title}>
          <a className={styles.cardLink} href={props.href}>
            {props.title}
          </a>
        </Card.Title>
        <Card.Text> {props.children} </Card.Text>
      </Card.Body>
    </Card>
  );
};
