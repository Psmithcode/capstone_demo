import React from "react";
import { Button, Card } from "@mui/material";
import { useState } from "react";

export default function CounterCard(props) {
  //   const [setLife, life] = props;
  return (
    <Card
      sx={{
        width: "350px",
        height: "400px",
        backgroundColor: "grey",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        fontSize: "30px",
      }}
    >
      {props.life}
      <div>
        <Button
          variant="contained"
          value="increment"
          onClick={() => {
            props.setLife(props.life + 1);
          }}
        >
          +
        </Button>
        <Button
          variant="contained"
          value="decrement"
          onClick={() => {
            props.setLife(props.life - 1);
          }}
        >
          -
        </Button>
      </div>
      <div>
        <h2 style={{ fontSize: "17px" }}>Commander Damage</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            color="error"
            variant="contained"
            onClick={() => {
              props.setCommanderDamage(props.commanderDamage - 1);
              props.setLife(props.life + 1);
            }}
          >
            -
          </Button>
          <p style={{ fontSize: "15px" }}>{props.commanderDamage}</p>
          <Button
            variant="contained"
            onClick={() => {
              props.setCommanderDamage(props.commanderDamage + 1);
              props.setLife(props.life - 1);
            }}
          >
            +
          </Button>
        </div>
      </div>
    </Card>
  );
}
