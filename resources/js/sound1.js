var m = document.querySelector("a-marker");
  
          m.addEventListener("markerFound", (e) => {
            
            
            console.log("found");  
            var v = (document.querySelector("#intro").muted = false);
            var v = document.querySelector("#intro").play();
          });

          m.addEventListener("markerLost", (e) => {
            console.log("lost");
            var v = document.querySelector("#intro").pause();
          });
