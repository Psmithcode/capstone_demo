import { Button, Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <>
      <Card>
        <h2>Magic the Gathering</h2>
        <Link to="/mtg">
          <Button variant="contained">Commander</Button>
        </Link>
      </Card>
    </>
  );
}
