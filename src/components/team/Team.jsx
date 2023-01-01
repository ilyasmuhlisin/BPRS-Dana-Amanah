import React from "react";
import TeamCard from "./TeamCard";
import "./team.css";
import "../about/about.css";

const Team = () => {
  return (
    <>
      <section className="team padding">
        <div className="team-img">
          <img src="./images/struktur.jpg" alt="" />
        </div>
        <div className="team-title">
          <h1>
            Pengurus BPRS Dana Amanah <br /> Surakarta
          </h1>
        </div>
        <div className="container gridT">
          <TeamCard />
        </div>
      </section>
    </>
  );
};

export default Team;
