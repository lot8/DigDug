

var m = document.querySelector("a-marker");
  
          m.addEventListener("markerFound", (e) => {
            
            
            console.log("found");  
            var v = (document.querySelector("#mivideo").muted = false);
            var v = document.querySelector("#mivideo").play();
          });

          m.addEventListener("markerLost", (e) => {
            console.log("lost");
            var v = document.querySelector("#mivideo").pause();
          });


                    
          