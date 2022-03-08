const videoElement = document.getElementById("video");
const button = document.getElementById("button");
const btnContainer = document.getElementById("button-container");

// prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("error message:", error);
  }
}

button.addEventListener("click", async () => {
  //disable button after clicking
  button.disabled = true;
  //start picture in picture
  await videoElement.requestPictureInPicture();
  //Reset Button
  button.disabled = false;
});

// on load
selectMediaStream();
