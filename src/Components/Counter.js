import React, { useState } from "react";
import "../Components/Counterstyles.css";
import { Button, Card } from "@mui/material";
import CounterCard from "./CounterCard";
export default function Counter(props) {
  const [lifeOne, setLifeOne] = useState(40);
  const [commanderDamageOne, setCommanderDamageOne] = useState(0);
  const [commanderDamageTwo, setCommanderDamageTwo] = useState(0);
  const [lifeTwo, setLifeTwo] = useState(40);
  return (
    <>
      <CounterCard
        id="upsideDown"
        setLife={setLifeOne}
        life={lifeOne}
        commanderDamage={commanderDamageOne}
        setCommanderDamage={setCommanderDamageOne}
        player={1}
        style={{ rotate: "180deg" }}
      />
      <Button
        color="error"
        variant="contained"
        onClick={() => {
          setLifeOne(40);
          setLifeTwo(40);
          setCommanderDamageOne(0);
          setCommanderDamageTwo(0);
        }}
      >
        Reset
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          setLifeOne(30);
          setLifeTwo(30);
        }}
      >
        2-Player
      </Button>
      <CounterCard
        setLife={setLifeTwo}
        life={lifeTwo}
        commanderDamage={commanderDamageTwo}
        setCommanderDamage={setCommanderDamageTwo}
        player={2}
      />
    </>
  );
}
