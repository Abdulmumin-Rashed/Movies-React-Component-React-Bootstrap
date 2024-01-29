import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart as regularFaHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as soldFaHeart } from "@fortawesome/free-solid-svg-icons";

library.add(soldFaHeart, regularFaHeart);
const Like = (props) => {
  let classes = soldFaHeart;
  if (!props.liked) classes = regularFaHeart;

  return (
    <>
      <FontAwesomeIcon
        style={{ cursor: "pointer" }}
        icon={classes}
        onClick={props.onClick}
      />
    </>
  );
};

export default Like;
