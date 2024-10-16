export default function getColor(value, opacity) {
  // color algorithm i totally not stole from stack overflow, be honest you would too
  var hue = (value * 120).toString(10); // no idea what this does lmao ;)
  return ["hsla(", hue, ",100%,20%, ", opacity, ")"].join(""); // changed the values here though so i'd call it original
}
