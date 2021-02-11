import React, { useState } from "react";
import "./App.css";
import footStepsEffect from "./assets/audio/footsteps3min.wav";
import doorEffect from "./assets/audio/door.wav";

function App() {
  const [openDoor, setOpenDoor] = useState(false);
  const door = new Audio(doorEffect);
  const footsteps = new Audio(footStepsEffect);

  const toggleDoor = () => {
    openDoor ? setOpenDoor(false) : setOpenDoor(true);
    playSound();
  };

  const playSound = () => {
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
            <div className="shelf_wrapper">
              <div className="shelfs">
                <div className="shelf1">
                  {/* add a navigation bar that breaks down products by category */}
                </div>
                <div className="shelf2">
                  {/* products of category selected */}
                </div>
                <div className="shelf3">
                  {/* products of category selected */}
                </div>
                <div className="shelf4">
                  {/* products of category selected */}
                </div>
                <div className="shelf5">
                  {/* products of category selected */}
                </div>
                <div className="shopping_bag_wrapper">
                  <div className="shopping_bag"></div>
                </div>
              </div>
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
