// Generated by BUCKLESCRIPT VERSION 4.0.3, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("Cells");

function cellEle() {
  return React.createElement("div", {
              className: "col-sm card"
            }, "day");
}

var cellEleRow = Caml_array.caml_make_vect(7, cellEle(""));

var cells = Caml_array.caml_make_vect(5, "");

function make() {
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
                          className: "container"
                        }, React.createElement("div", {
                              className: "row"
                            }, cellEleRow), React.createElement("div", {
                              className: "row"
                            }, cellEleRow), React.createElement("div", {
                              className: "row"
                            }, cellEleRow), React.createElement("div", {
                              className: "row"
                            }, cellEleRow));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.cellEle = cellEle;
exports.cellEleRow = cellEleRow;
exports.cells = cells;
exports.make = make;
/* component Not a pure module */
