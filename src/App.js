import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import footStepsEffect from "./assets/audio/footsteps3min.wav";
import doorEffect from "./assets/audio/door.wav";
import Cakes from "./container/cakes/Cakes";
import Pastries from "./container/pastries/Pastries";
//styles sheets must be imported in certain order. Place css files based on what needs to be loaded first.
import "./LayoutStyles/mobile/Nav.css";
import "./LayoutStyles/mobile/Door.css";
import "./LayoutStyles/mobile/App.css";
function App() {
  const [openDoor, setOpenDoor] = useState(false);
  const door = new Audio(doorEffect);
  const footsteps = new Audio(footStepsEffect);

  const toggleDoor = () => {
    openDoor ? setOpenDoor(false) : setOpenDoor(true);
    playSounds();
  };

  const playSounds = () => {
    door.play();
    setTimeout(() => {
      footsteps.play();
    }, 2000);
  };

  return (
    <div className={openDoor ? "App " : "App"}>
      <div
        className={openDoor ? "main_wrapper expand_building" : "main_wrapper"}
      >
        <div className="door_wrapper">
          <div className={openDoor ? "back_door expand" : "back_door"}>
            <div className="nav-shelf">
              <Router>
                <div className="nav_wrapper">
                  <Nav className="navs">
                    <Nav.Item className="nav">
                      <Nav.Link className="a" as={Link} to="/pastries">
                        Pastries
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav">
                      <Nav.Link className="a" as={Link} to="/cakes">
                        Cakes
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Switch>
                    <Route path="/pastries">
                      <Pastries />
                    </Route>
                    <Route path="/cakes">
                      <Cakes />
                    </Route>
                  </Switch>
                </div>
              </Router>
            </div>

            <div
              className={openDoor ? "left_door open_left_door" : "left_door"}
            >
              <button
                onClick={toggleDoor}
                className="button left_door_knob"
              ></button>
            </div>
            <div
              className={openDoor ? "right_door open_right_door" : "right_door"}
            >
              <button
                onClick={toggleDoor}
                className="button right_door_knob"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
