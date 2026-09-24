import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container-lg border-top align-content-center">
      <div className="row mb-5 mt-5">
        <h3 className="text-center">People</h3>
      </div>
      <div className="row mt-5 ">
        <div className="col-6 text-center ">
          <img
            style={{ borderRadius: "100%", width: "45%" }}
            src="media/images/vinayak.png"
            alt=""
          />
          <h4 className=" fs-5 text-center pt-3  mb-3">Vinayak Rastogi</h4>

          <h6 className="text-muted">
            Developer
          </h6>
        </div>

        <div className="col-5 text-muted mt-3">
          <p className=" lh-lg">
            Vinayak is a Computer Science student and developer who built <b>Finora</b>, a full-stack stock trading platform inspired by the experience of modern investment platforms.

Finora was developed to understand and recreate the core workflow of a real-world brokerage platform—from managing holdings and positions to placing and tracking orders—while gaining hands-on experience with scalable web technologies.

Built using <b>React, Node.js, Express, MongoDB, and Mongoose</b>, <b>Finora</b> reflects his interest in building practical, full-stack applications that solve real-world problems.

Building projects and experimenting with new technologies is his way of turning ideas into working products.</p>
          <p>
            Connect on{" "}
            <Link className="email" to="/">
              Homepage
            </Link>{" "}/{" "}
            <Link className="email" href="#">
              TradingQnA
            </Link>{" "}/{" "}
            <Link className="email" href="#">
              Twitter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
