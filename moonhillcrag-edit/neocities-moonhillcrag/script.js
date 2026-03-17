//Volume Button

var vidon = true;

const dj = document.getElementById("music");
      
const rock = document.getElementById("rocker");

rock.onclick = function () {
if (vidon === true) {
        document.getElementById("volume").src="assets/OFF.png";
        dj.pause();
        vidon = false;
    } else {
        document.getElementById("volume").src="assets/ON.png";
        dj.play();
        vidon = true;
    }
};

//Turn off music when tab isn't active

document.addEventListener("visibilitychange", () => {
   if (document.hidden) {
      
      // tab is changed
      dj.pause();
   
   } else {
      
      // tab is active
      if (vidon === true)
      dj.play();
      
   }
});

//Post Comment Button (Unused)

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    console.log({ value });
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);

  
//Last.fm Integration

async function getPlaying() {
   const url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=MoonHillCrag&api_key=b5366feafed067f237daa6fd5995542a&format=json';
   
   const response = await fetch(url);
   
   const data = await response.json();
   
   console.log(data);
   
   var current = document.getElementById("current");
   var art = document.getElementById("albumArt");

   const track = data.recenttracks.track[0];
   const track1 = data.recenttracks.track[1];
   const track2 = data.recenttracks.track[2];
   const track3 = data.recenttracks.track[3];
   const albumImage = track.image?.find(img => img.size === "extralarge")?.['#text'] || '';

    current.innerHTML = `
    <div>
      ${albumImage ? `<img src="${albumImage}" alt="Album Art" style="width:120px;height:auto;">` : ''}
      <p style="font-size: 25px">${track.artist['#text']} - ${track.name}</p>

      <p>Recent Tracks:</p>
      <p>${track1.artist['#text']} - ${track1.name}</p>
      <p>${track2.artist['#text']} - ${track2.name}</p>
      <p>${track3.artist['#text']} - ${track3.name}</p>
      </div>
  `;
}
