AFRAME.registerComponent('registerevents', {
		init: function () {

			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
					console.log('markerFound', markerId);

if(markerId=='1')
				{
					console.log('you found the sound');

				var sceneEl = document.querySelector('a-scene');

					sceneEl.querySelector('#thesound').components.sound.playSound();
				}

if(markerId=='2')
				{
					console.log('you found the sound');
var videoEl = document.querySelector('#vclip');
				var sceneEl = document.querySelector('a-scene');

					videoEl.play();
				}



			});



			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('markerLost', markerId);

if(markerId=='1')
				{

				var sceneEl = document.querySelector('a-scene');

	if(sceneEl.querySelector('#thesound').components.sound.isPlaying==true){
		sceneEl.querySelector('#thesound').components.sound.stopSound();
				console.log("Stop the sound");}}




if(markerId!='2')
				{
					console.log('you found the sound');
var videoEl = document.querySelector('#vclip');
				var sceneEl = document.querySelector('a-scene');

					videoEl.pause();
				}






			});
		},
	});
