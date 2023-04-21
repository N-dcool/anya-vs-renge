import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import imageBiyori from "../assets/images/girl2.png";
import imageAnya from "../assets/images/girl1.png";
import songNyanpasu from "../assets/nyanpasu.mp3";
import songAnya from "../assets/anya.mp3";
import axios from "axios";

function VotingCard(props) {
  const [results, setResults] = useState([]);
  const [voteAnya, setVoteAnya] = useState("x");
  const [voteRenge, setVoteRenge] = useState("x");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    axios.get("https://644265a533997d3ef90f1832.mockapi.io/vote").then(
      (response) => {
        //console.log(response.data);

        setResults(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const totalVotesAnya = results
    .map((item) => item.voteAnya)
    .reduce((prev, curr) => prev + curr, 0);

  const totalVotesRange = results
    .map((item) => item.voteRenge)
    .reduce((prev, curr) => prev + curr, 0);

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

  const start = (ev) => {
    audio.play();
    setDisabled(true);
    props.song === "nya" ? submitVoteForRenge() : submitVoteForAnya();
  };

  const submitVoteForRenge = () => {
    axios
      .post("https://644265a533997d3ef90f1832.mockapi.io/vote", {
        voteRenge: 1,
        voteAnya: 0,
      })
      .then(
        (res) => {
          //console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );

    setVoteRenge(totalVotesRange + 1);
  };
  const submitVoteForAnya = () => {
    axios
      .post("https://644265a533997d3ef90f1832.mockapi.io/vote", {
        voteAnya: 1,
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
    setVoteAnya(totalVotesAnya + 1);
  };

  return (
    <div id="contents">
      <div id="head">
        <h1>{props.title}</h1>
      </div>
      <div id="count">
        {props.title === "Vote for “waku waku!” (translated as “How exciting!”)"
          ? voteAnya
          : voteRenge}
      </div>
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
