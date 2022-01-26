var m = document.querySelector("a-marker");
  
          m.addEventListener("markerFound", (e) => {
            
            
            console.log("found");  
            var v = (document.querySelector("#song").muted = false);
            var v = document.querySelector("#song").play();
          });

          m.addEventListener("markerLost", (e) => {
            console.log("lost");
            var v = document.querySelector("#song").pause();
          });
