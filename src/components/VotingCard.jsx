import React, { useState } from "react";
import { Button } from "react-bootstrap";
import imageBiyori from "../assets/images/girl2.png";
import imageAnya from "../assets/images/girl1.png";
import songNyanpasu from "../assets/nyanpasu.mp3";
import songAnya from "../assets/anya.mp3";
import axios from "axios";

function VotingCard(props) {
  const [vote, setVote] = useState(0);
  const [disabled, setDisabled] = useState(false);

  var audio, imageSrc, hoverClass;
  if (props.song === "nya") {
    audio = new Audio(songNyanpasu);
    imageSrc = imageBiyori;
    hoverClass = "hover-image";
  } else {
    audio = new Audio(songAnya);
    imageSrc = imageAnya;
    hoverClass = "hover-image-anya";
  }

  const start = () => {
    audio.play();
    setVote(vote + 1);
    setDisabled(true);
    props.song === "nya" ? submitVoteForRenge() : submitVoteForAnya();
  };

  const submitVoteForRenge = () => {
    axios
      .post("https://644265a533997d3ef90f1832.mockapi.io/vote", {
        voteRenge: vote + 1,
        voteAnya: 0,
      })
      .then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  };
  const submitVoteForAnya = () => {
    axios
      .post("https://644265a533997d3ef90f1832.mockapi.io/vote", {
        voteAnya: vote + 1,
        voteRenge: 0,
      })
      .then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  return (
    <div id="contents">
      <div id="head">
        <h1>{props.title}</h1>
      </div>
      <div id="count">{vote}</div>
      <Button disabled={disabled} className="hover-title" onClick={start}>
        {props.buttonName} Voice
      </Button>
      <div className={hoverClass}>
        <img src={imageSrc} alt="Renge Miyauchi"></img>
      </div>
      <div></div>
    </div>
  );
}
export default VotingCard;
