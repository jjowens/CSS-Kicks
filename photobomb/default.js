window.addEventListener('DOMContentLoaded', (event) => {
    
    let photobombURL = "assets/porky-pig-cropped.png";

    let imgObjs = document.getElementsByTagName("img");

    let photobombImg = document.createElement("img");
    photobombImg.src = photobombURL;
    
    let photoCounter = 1;

    for (let index = 0; index < imgObjs.length; index++) {
        const imgObj = imgObjs[index];

        console.log("Img Obj");
        console.log({imgObj});

        let photobombDiv = document.createElement("div");

        let hardcodedSized = true;
        let hardcodedPosition = true;

        let width = (hardcodedSized ? "200px" : imgObj.naturalWidth + "px");
        let height = (hardcodedSized ? "200px" : imgObj.naturalWidth + "px");
        let top =  (hardcodedPosition ? "0px" : imgObj.style.top  + "px");
        let left =  (hardcodedPosition ? "0px" : imgObj.style.left + "px");

        photobombDiv.style.width = width;
        photobombDiv.style.height = height;
        photobombDiv.style.top = top;
        photobombDiv.style.left = left;

        photobombDiv.style.zIndex = "99";
        photobombDiv.style.position = "relative";
        //photobombDiv.style.background = "url('" + photobombURL + "') no-repeat left bottom";
        photobombDiv.style.backgroundColor = "green";
        photobombImg.alt = "Image " + photoCounter;
        photobombImg.title = "Image " + photoCounter;
        photobombDiv.append(photobombImg);
        

        //imgObj.parentElement.appendChild(photobombDiv);
        //photobombDiv.append(photobombImg);

        let parentNode = imgObj.parentElement;
        parentNode.append(photobombDiv);
        //parentNode.insertBefore(photobombDiv, imgObj);
        //photobombDiv.appendChild(photobombImg);

        photoCounter += 1;
    }

});