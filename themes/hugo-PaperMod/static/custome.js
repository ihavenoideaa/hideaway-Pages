/* gallery */
document.addEventListener('DOMContentLoaded', () => {
let galleryPhotos = document.querySelectorAll('.gallery-photos') || ''
if(galleryPhotos){
  imgStatus.watch('.gallery-photo img', function(imgs) {
    if(imgs.isDone()){
      for(var i=0;i < galleryPhotos.length;i++){
        waterfall(galleryPhotos[i]);
        let pagePhoto = galleryPhotos[i].querySelectorAll('.gallery-photo');
        for(var j=0;j < pagePhoto.length;j++){pagePhoto[j].className += " visible"};
      }
    }
  });
  window.addEventListener('resize', function () {
    for(var i=0;i < galleryPhotos.length;i++){
      waterfall(galleryPhotos[i]);
    }
  });
}
});
/* gallery end */

/* 全局灯箱 */
window.ViewImage && ViewImage.init('.post-content img:not(.avatar,.tk-avatar-img)');
