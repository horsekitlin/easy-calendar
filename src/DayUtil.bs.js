// Generated by BUCKLESCRIPT VERSION 4.0.3, PLEASE EDIT WITH CARE
'use strict';


function floatStr(str) {
  return String(str | 0);
}

function getDayStr(year, month, date) {
  return String(year) + ("-" + (String(month) + ("-" + String(date))));
}

function dayInfo(someDay) {
  var year = someDay.getUTCFullYear() | 0;
  var month = someDay.getMonth() + 1.0 | 0;
  var date = someDay.getDate() | 0;
  var dayStr = getDayStr(year, month, date);
  return /* record */[
          /* year */year,
          /* month */month,
          /* date */date,
          /* str */dayStr
        ];
}

exports.floatStr = floatStr;
exports.getDayStr = getDayStr;
exports.dayInfo = dayInfo;
/* No side effect */
