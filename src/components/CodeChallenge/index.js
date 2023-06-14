import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";

function CodeChallenge() {
  const [challengeQuestion, setChallengeQuestion] = useState(null);
  const [participantAnswer, setParticipantAnswer] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // fetch challenge questions from the API and update state
    const fetchQuestions = async () => {
      const res = await fetch("/api/challenge");
      const questions = await res.json();
      setChallengeQuestion(questions[0]); // set first question as the current challenge question
    };
    fetchQuestions();
  }, []);

  const handleAnswerChange = (e) => {
    setParticipantAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // submit participant answer to the API
    const res = await fetch("/api/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answer: participantAnswer }),
    });
    // fetch updated leaderboard from the API and update state
    const leaderboard = await res.json();
    setLeaderboard(leaderboard);
  };

  return (
    <>
      <NavBar />
      {challengeQuestion ? (
        <div className="challenge-container">
          <h2>{challengeQuestion.question}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={participantAnswer}
              onChange={handleAnswerChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="loading">Loading challenge question...</div>
      )}
      {leaderboard.length > 0 ? (
        <div className="leaderboard-container">
          <h2>Leaderboard</h2>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Correct Answers</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((participant, index) => (
                <tr key={participant.username}>
                  <td>{index + 1}</td>
                  <td>{participant.username}</td>
                  <td>{participant.correctAnswers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      
    </>
  );
}
export default CodeChallenge;
