<<<<<<< HEAD
var audioContext = new AudioContext();
var oscillator = audioContext.createOscillator();
oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
oscillator.type = "sine";

// // var AudioContext = window.AudioContext || window.webkitAudioContext;
// // var context = new AudioContext();
//
// // var oscillator = new context.createOscillator();
// // var gain = new context.createGain();
// const trackArray = [];
// const table = [(C0, 44), (D0, 45), (E0, 46), (F0, 47), (G0, 48), (A0, 49), (B0, 50), (C1, 51)]
//
//
// MIDI.loadPlugin(onsuccess);
// MIDI.loadPlugin({
//     instrument: "acoustic_grand_piano",
//     onsuccess: function() { }
// });
//
// function Track(instrument) {
//     this.onPlay = 'false';
//     this.instrument = instrument;
//     trackArray.push(this);
// }
//
// const playButton = document.getElementById("play");
// playButton.onclick = function () {
//     if(trackArray.length == 0) {
//         var track1 = new Track("acoustic_grand_piano");
//         track1.onPlay = 'true';
//     }
//     track.onPlay = "true";
//     playTrack();
// }
=======

// function audioContextCheck() {
//     if (typeof AudioContext !== "undefined") {
//       return new AudioContext();
//     } else if (typeof webkitAudioContext !== "undefined") {
//       return new webkitAudioContext();
//     } else if (typeof mozAudioContext !== "undefined") {
//       return new mozAudioContext();
//     } else {
//       throw new Error('AudioContext not supported');
//     }
//   }
  
var context = new AudioContext();

var oscillator = context.createOscillator();



var gain = context.createGain();

console.log(oscillator);
oscillator.frequency.setValueAtTime(440, context.currentTime);
oscillator.type = 'sine';
oscillator.connect(context.destination);
oscillator.start();
oscillator.detune.setValueAtTime(200, context.currentTime + 1);
oscillator.detune.setValueAtTime(400, context.currentTime + 2);
oscillator.detune.setValueAtTime(500, context.currentTime + 3);
oscillator.detune.setValueAtTime(700, context.currentTime + 4);
oscillator.detune.setValueAtTime(900, context.currentTime + 5);
oscillator.detune.setValueAtTime(1100, context.currentTime + 6);
oscillator.detune.setValueAtTime(1200, context.currentTime + 7);

oscillator.stop(context.currentTime + 8);


// console.log(gain);


// oscillator.connect(gain);
// gain.connect(context.destination);
>>>>>>> 21a96f1551f7d46e08cd018b2673750e823af390
