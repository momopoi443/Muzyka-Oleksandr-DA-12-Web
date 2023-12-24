

var imageIndex = 0
const images = document.getElementsByClassName("image");

function openPopup(event, index) {
    const popup = document.getElementById('popup')
    const popupImage = document.getElementsByClassName('popup-image')[0]
    popupImage.src = event.target.src
    imageIndex = index
    console.log(imageIndex)
    popup.classList.add('active')
}

function closePopup() {
    const popup = document.getElementById('popup')
    popup.classList.remove('active')
}


function nextImage() {
    const popupImage = document.getElementsByClassName('popup-image')[0]
    if (imageIndex < images.length - 1)
    {
        imageIndex += 1
        popupImage.src = images[imageIndex].src
    }
}

function prevImage() {
    const popupImage = document.getElementsByClassName('popup-image')[0]
    if (imageIndex > 0)
    {
        imageIndex -= 1
        popupImage.src = images[imageIndex].src
    }
}