var slider1 = {
    imagesURLs: [],
    currentImageIndex: 0,
    showPrevBtn: document.getElementById('show-prev-btn'),
    showNextBtn: document.getElementById('show-next-btn'),
    slideImage: document.getElementById('slide-image'),

    start: function () {
        var that = this;

        this.showPrevBtn.addEventListener('click', function(e) {
            that.onShowPrevBtnClick(e);
        });
        this.showNextBtn.addEventListener('click', function(e) {
            that.onShowNextBtnClick(e);
        });

        this.imagesURLs.push('https://apollo-olx.cdnvideo.ru/v1/files/t2hyzfkhza7g2-UZ/image;s=1000x700');
        this.imagesURLs.push('https://apollo-olx.cdnvideo.ru/v1/files/nzhbsqv7561o3-UZ/image;s=1000x700');
        this.imagesURLs.push('https://3dnews.ru/assets/external/illustrations/2021/03/29/1036052/00.jpg');
        this.imagesURLs.push('https://3dnews.ru/assets/external/illustrations/2021/03/29/1036052/02.jpg');

        this.slideImage.src = this.imagesURLs[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    },

    onShowPrevBtnClick: function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesURLs[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true
        }
    },

    onShowNextBtnClick: function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesURLs[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        if (this.currentImageIndex === (this.imagesURLs.length - 1)) {
            this.showNextBtn.disabled = true
        }
    },
};