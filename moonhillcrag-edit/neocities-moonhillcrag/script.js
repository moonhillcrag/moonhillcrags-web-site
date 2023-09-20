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
  