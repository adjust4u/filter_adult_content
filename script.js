let interval = null;

function getImages(){
  const images = document.querySelectorAll("img");
  return images
}

function blurImage() {
  const images = getImages()
  images.forEach((image) => {
    image.style.filter = "blur(20px)";
  });
};

function unBlurImage(){
  clearInterval(interval);
  const images = getImages();
  images.forEach((image) => {
    image.style.filter = "blur(0px)"
  });
};


// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "contentFunction") {
    myContentFunction();
  }
  switch (message.action) {
    case 'visible':
      unBlurImage();
      break;
    case 'unvisible':
      interval = setInterval(blurImage,1000);
      break;
    default:
      break;
  }
});
