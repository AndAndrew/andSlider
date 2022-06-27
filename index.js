var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-image');

showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

var imagesURLs = [];
imagesURLs.push('https://apollo-olx.cdnvideo.ru/v1/files/t2hyzfkhza7g2-UZ/image;s=1000x700');
imagesURLs.push('https://apollo-olx.cdnvideo.ru/v1/files/nzhbsqv7561o3-UZ/image;s=1000x700');
imagesURLs.push('https://3dnews.ru/assets/external/illustrations/2021/03/29/1036052/00.jpg');
imagesURLs.push('https://3dnews.ru/assets/external/illustrations/2021/03/29/1036052/02.jpg');

var currentImageIndex = 0;
slideImage.src = imagesURLs[currentImageIndex];
showPrevBtn.disabled = true;

function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imagesURLs[currentImageIndex];
    showNextBtn.disabled = false;

    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true
    }
}

function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imagesURLs[currentImageIndex];
    showPrevBtn.disabled = false;

    if (currentImageIndex === (imagesURLs.length - 1)) {
        showNextBtn.disabled = true
    }
}