import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import {Tracker} from 'meteor/tracker'
import {Players} from './../imports/api/players'
import TitleBar from './../imports/ui/TitleBar'
import AddPlayer from './../imports/ui/AddPlayer'
import Player from './../imports/ui/Player'


const renderPlayers = (players) => {
      return players.map((player) => {
            return <Player key={player._id}/>
      
            //   return (<p key={player._id}>
      //       {player.name}: {player.score} points.
      //       <button onClick={() => { Players.update(player._id, { $inc: {score: 1}})}}>+1</button>
      //       <button onClick={() => { Players.update(player._id, { $inc: {score: -1}})}}>-1</button>
      //       <button onClick={()=> Players.remove(player._id)}>X</button>
      // </p>)
      })
    }

Meteor.startup(() => {
      Tracker.autorun(()=>{
           let players = Players.find().fetch()
           let title = "Score Keep"
           let subTitle = ''
           let jsx = (
             <div >
               <TitleBar title={title} subTitle = 'Created by Me'/>
               {renderPlayers(players)}
               <AddPlayer />
             </div>
           );
           ReactDOM.render(jsx, document.getElementById("app"));
      })
});
