// Generated by BUCKLESCRIPT VERSION 4.0.3, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("Cell");

function getStyle(param) {
  var selectedDate = param[2];
  var day = param[1];
  var selected = selectedDate !== undefined ? selectedDate[/* str */3] : "0-0-0";
  var match = selected === day[/* str */3];
  var backgroundColor;
  if (match) {
    backgroundColor = "#ffeb3b";
  } else {
    var match$1 = param[0] === day[/* month */1];
    backgroundColor = match$1 ? "#bbdefb" : "#e0e0e0";
  }
  return {
          backgroundColor: backgroundColor,
          margin: "2px",
          padding: "0.5em"
        };
}

function make(day, select, currentMonth, selectedDate, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return React.createElement("div", {
                          className: "col-sm card cell",
                          style: getStyle(/* tuple */[
                                currentMonth,
                                day,
                                selectedDate
                              ]),
                          onClick: (function () {
                              return Curry._1(select, day);
                            })
                        }, String(day[/* date */2]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.getStyle = getStyle;
exports.make = make;
/* component Not a pure module */