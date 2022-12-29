const root = document.querySelector<HTMLElement>(":root");
const date = new Date();
const hours = (date.getHours() % 12) * 60; // the hour in minutes for a 12 hour clock
const minutes = date.getMinutes();
const seconds = date.getSeconds();
root?.style.setProperty("--hours", (hours + minutes) * 0.5 + "deg");
root?.style.setProperty("--minutes", (minutes * 60 + seconds) * 0.1 + "deg");
root?.style.setProperty("--seconds", seconds * 6 + "deg");

import "./style.scss";
