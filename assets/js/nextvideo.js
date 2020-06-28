

var current_video=0;

function newVid() {
    var vidEmbeds = ['https://www.youtube.com/embed/NZXp1tcvAhs?controls=0;autoplay=1;playsinline=1',
      'https://www.youtube.com/embed/izTaPcZZAXs?controls=0;autoplay=1;playsinline=1',
      'https://www.youtube.com/embed/i2YJF4Yhp1I?rel=0;controls=0;autoplay=1;playsinline=1'
    ];
    var next_video = Math.random() * vidEmbeds.length|0;

    while (current_video == next_video ) {
        next_video = Math.random() * vidEmbeds.length| 0;
    }

    current_video = next_video;

    document.getElementById('iframemain').src = vidEmbeds[current_video];
  }
  


// see for explanation of | 0]   https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array