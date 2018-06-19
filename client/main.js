import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";

const players = [
  {
    _ID: "1",
    name: "John",
    score: "99"
  },
  {
    _ID: "2",
    name: "Petra",
    score: "-2"
  },
  {
    _ID: "3",
    name: "Mary",
    score: "48"
  }
];

const renderPlayers = (playersList) => {
  return players.map((player) => {
    return <p id={player._ID}>{player.name}: {player.score}</p>;
  });
};

Meteor.startup(() => {
  let title = "Score Keep";
  let name = "Richard";
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name}</p>
      {renderPlayers()}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById("app"));
});
