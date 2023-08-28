// Created by Runtime Terror 

// Created by Sergei Isáichenko

const singlePlay = selectedId => {
    
     // make sure all music are paused first
    document.querySelectorAll("audio")
      .forEach(aud => aud.pause());
    // play the chosen one
     document.getElementById(selectedId).play();
};