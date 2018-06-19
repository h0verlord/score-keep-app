import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import {Tracker} from 'meteor/tracker'
import {Players} from './../imports/api/players'


const renderPlayers = (players) => {
      return players.map((player) => {
        return <p id={player._ID}>{player.name}: {player.score}</p>;
      });
    };

    const handleSubmit= (e)=>{
      let playerName = e.target.playerName.value
      e.preventDefault()
      if (playerName){
            e.target.playerName.value = ''
            Players.insert({
                  name: playerName,
                  score: 0
            })
      }
    }

Meteor.startup(() => {
      Tracker.autorun(()=>{
           let players = Players.find().fetch()
           let title = "Score Keep";
           let name = "Richard";
           let jsx = (
             <div >
               <h1>{title}</h1>
               <p>Hello {name}</p>
               {renderPlayers(players)}
               <form onSubmit={handleSubmit}>
                  <input type="text" name="playerName" placeholder="Player name"/>
                  <button>Add player</button>
               </form>
             </div>
           );
           ReactDOM.render(jsx, document.getElementById("app"));
      })
});
