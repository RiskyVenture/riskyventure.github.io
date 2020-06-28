function newVid() {
    var vidEmbeds = ['https://www.youtube.com/embed/NZXp1tcvAhs?controls=0;autoplay=1',
      'https://www.youtube.com/embed/izTaPcZZAXs?controls=0;autoplay=1',
      'https://www.youtube.com/embed/i2YJF4Yhp1I?rel=0;controls=0;autoplay=1'
    ];
  
    document.getElementById('iframemain').src = vidEmbeds[Math.random() * vidEmbeds.length| 0];
  }
  
// see for explanation of | 0]   https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array