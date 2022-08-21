let imagesToBeUploaded = [];

function addImagesToPreview(event) {
  // Prevenir de executar a função se não tiver arquivos
  if (!event.target.files) {
    return;
  }

  imagesToBeUploaded = Array.from(event.target.files);

  imagesToBePreviewed = imagesToBeUploaded.map((image) => {
    return URL.createObjectURL(image);
  });

  updateImagesPreview(imagesToBePreviewed);
}

function updateImagesPreview(newImagesToBePreviewed) {
  const imagesPreview = document.getElementById("imagesPreview");

  if (!event.target.files) {
    imagesPreview.innerHTML = "";
    return;
  }

  let imagesElementsArray = newImagesToBePreviewed.map((e) => {
    return `
            <img src="${e}" alt="">
        `;
  }).join('');

  imagesPreview.innerHTML = imagesElementsArray.toString();

  // newImagesToBePreviewed.map(
  //   (image) => {
  //     /* if(image.endsWith('.mp4') || image.endsWith('.avi')) {
  //     // Retorna string com vídeo....
  //       return `
  //       <video autoplay id="video" controls>
  //         <source src="${image}" id="source" type="video/mp4, video/avi">
  //       </video>` 
      

  //     } else { */
  //       return `
  //           <img src="${image}" alt="">
  //       `;
  //     /* } */
  //   }
  // );
}

