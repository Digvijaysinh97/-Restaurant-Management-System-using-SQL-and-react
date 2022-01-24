import React from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Reveal, Tween } from "react-gsap";
gsap.registerPlugin(TextPlugin);

function TextG(props) {
  return (
    <div>
      <Tween to={props.txt} duration={props.dur}>
        {props.children}
      </Tween>
    </div>
  );
}

export default TextG;
