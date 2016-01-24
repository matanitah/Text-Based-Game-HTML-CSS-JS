
function init() {
  if (document.getElementById) {
    // Start capturing keys.
    document.onkeyup = keyCaps;
    // Begin the blinking of the cursor.
    setTimeout("cursor()", 500);
    // Send the "intro" command to start the game.
    sendMessage("intro");
  } else {
    window.alert("This game requires a browser that supports GetElementById.");
  }
}

function resetVars() {
  isPlaying = 0;
  descrip = '';
  locale = '';
  money = 0;
  exitNorth = '';
  exitSouth = '';
  exitEast = '';
  exitWest = '';
}
/***************************************************
 * Capture all keys pressed.                       *
 ***************************************************/
function keyCaps(e) {
  var code = '';
  if (window.event) { // Internet Explorer
    code = window.event.keyCode;
  } else { // Firefox
    code = e.keyCode;
  }
  var chr = getKey(code);
  document.getElementById("debug").innerHTML = code;
  if (chr.length > 0) {
    if (chr == '<BACKSPACE>') {
      // Backspace = delete the last character
      var chars = document.getElementById("input").innerHTML.split("");
      chars[(chars.length - 1)] = "";
      document.getElementById("input").innerHTML = chars.join("");
    } else if (chr == '<RETURN>') {
      // Submit this message.
      sendMessage(document.getElementById("input").innerHTML);
      document.getElementById("input").innerHTML = "";
    } else {
      document.getElementById("input").innerHTML += chr;
    }
  }
}
/***************************************************
 * Make the cursor continuously blink.             *
 ***************************************************/
function cursor() {
  var html = document.getElementById("cursor").innerHTML;
  if (html == "") {
    html = "_";
  } else {
    html = "";
  }
  document.getElementById("cursor").innerHTML = html;
  setTimeout("cursor()", 500);
}
/***************************************************
 * Send a command into the game.                   *
 ***************************************************/
function sendMessage(msg) {
  // Ignore blank messages.
  if (msg.length == 0) {
    return;
  }
  function getKey(code) {
    var map = new Array();
    map[48] = '0';
    map[49] = '1';
    map[50] = '2';
    map[51] = '3';
    map[52] = '4';
    map[53] = '5';
    map[54] = '6';
    map[55] = '7';
    map[56] = '8';
    map[57] = '9';
    map[81] = 'q';
    map[87] = 'w';
    map[69] = 'e';
    map[82] = 'r';
    map[84] = 't';
    map[89] = 'y';
    map[85] = 'u';
    map[73] = 'i';
    map[79] = 'o';
    map[80] = 'p';
    map[65] = 'a';
    map[83] = 's';
    map[68] = 'd';
    map[70] = 'f';
    map[71] = 'g';
    map[72] = 'h';
    map[74] = 'j';
    map[75] = 'k';
    map[76] = 'l';
    map[90] = 'z';
    map[88] = 'x';
    map[67] = 'c';
    map[86] = 'v';
    map[66] = 'b';
    map[78] = 'n';
    map[77] = 'm';
    map[219] = '[';
    map[221] = ']';
    map[186] = ';';
    map[222] = "'";
    map[188] = ',';
    map[190] = '.';
    // special characters
    map[32] = ' '; // space
    map[8] = '<BACKSPACE>';
    map[13] = '<RETURN>';
    var result = '';
    try {
      result = map[code];
    } catch (e) {
      result = '';
    }
    return result;
  }
