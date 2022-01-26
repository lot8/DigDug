

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


                    
          document.getElementById("btnPlay").addEventListener("click", (e) => {
            var v = (document.querySelector("#mivideo").muted = false);
            var v = document.querySelector("#mivideo").play();
          });
        
          document.getElementById("btnStop").addEventListener("click", (e) => {
            var v = (document.querySelector("#mivideo").muted = true);
            var v = document.querySelector("#mivideo").pause();
          });
        
          const variable = document.getElementById("btnNext");
        
          var videos = ["1.mp4", "2.mp4", "3.mp4"];
          let i = 0;
          function cambiarVideo() {
            if (i === 0) {
              return videos[i];
              i++;
            } else if (i === 1) {
              return videos[i];
              i++;
            } else if (i === 2) {
              return videos[i];
              i = 0;
            }
          }

          var vl = document.querySelector("#mivideo");

          if (variable) {
            variable.addEventListener("click", (e) => {
              
              console.log(vl.classList.value);
              console.log(vl.src);

              let st = vl.classList.value;

              if (parseInt(st) >= 3) {
                vl.classList.remove(st);
                st = "0";
              }

              let tmp = parseInt(st) + 1 + "";

              if (parseInt(tmp) > 3) {
                vl.src = "3.mp4";
              } else {
                vl.src = tmp + ".mp4";
              }

              //vl.src = tmp + ".mp4"
              vl.classList.remove(st);
              let stN = parseInt(st) + 1;
              vl.classList.add(stN);
            });
          }
        