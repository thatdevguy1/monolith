document.addEventListener('DOMContentLoaded', function(){

    var style = {
        name: "athera",
        size: "m330",
        model: "top"
    };

    /* slide in animation gets values for the distance of the elements from the top of the page
        and keeps track on scroll how far we go down the page to trigger the animations for the text to
        slide in */

    var section1 = document.querySelector("#styleTextWrap");
    var section2 = document.querySelector("#stitchTextWrap");
    var section3 = document.querySelector("#gripTextWrap");

    var section1FromTop = section1.offsetTop;
    var section2FromTop = section2.offsetTop;
    var section3FromTop = section3.offsetTop;

    window.addEventListener('scroll', function(){
        if(!section1.classList.contains("pHolder")){
            if(this.window.pageYOffset >= (section1FromTop + 200)){
                section1.className = section1.className + " pHolder";
               
            };
        };

        if(!section2.classList.contains("pHolderL")){
            if(this.window.pageYOffset >= (section2FromTop + 450)){
                section2.className = section2.className + " pHolderL";
                
            };
        };

        if(!section3.classList.contains("pHolder")){
            if(this.window.pageYOffset >= (section3FromTop + 700)){
                section3.className = section3.className + " pHolder";
                
            };
        };
    });

    //Code to control the buy modal
    var buyBtn = document.querySelector(".buyBubble");
    var modal = document.querySelector(".modal");
    var mpStyle = document.querySelector(".styleContainer");
    var previewModel = document.querySelector(".previewSelectContainer");
    var sizeSelect = document.querySelector(".sizeSelect");

    buyBtn.addEventListener('click', function(){
        if(!modal.classList.contains("modalActive")){
            modal.className = modal.className + " modalActive";
            buyBtn.className = buyBtn.className + " buyBubbleActive";
            buyBtn.innerHTML = 'X'

        } else {
            modal.className = "modal";
            buyBtn.className = "buyBubble";
            setTimeout(function(){
                buyBtn.innerHTML = "Buy Now"
            }, 200);
        }

        displayStyle();
    });   
     
    sizeSelect.addEventListener("change", function(ele){
        style.size = ele.target.value;
        displayStyle(style);
    })

    mpStyle.addEventListener('click', function(ele){
        style.name = ele.target.getAttribute("data-style");
        displayStyle(style);
    });

    previewModel.addEventListener('click', function(ele){
        style.model = ele.target.getAttribute("data-model");
        displayStyle(style);
    })


    //build a string based on the style object that will navigate to the right image folder / file 
    //to be displayed in the right elements
    function displayStyle({name = style.name, size = style.size, model = style.model}){ 
        var linkRoute = `./assets/${model}/${size}-${name}.jpg`;
        console.log(linkRoute);

        
        document.querySelector("#topModel").src = `./assets/top/${size}-${name}.jpg`;
        document.querySelector("#sideModel").src = `./assets/sideTilt/${size}-${name}.jpg`;
        document.querySelector("#frontModel").src = `./assets/frontTilt/${size}-${name}.jpg`;
        document.querySelector("#slantedModel").src = `./assets/slanted/${size}-${name}.jpg`;
        document.querySelector("#cornerModel").src = `./assets/corner/${size}-${name}.jpg`;
        document.querySelector("#packageModel").src = `./assets/package/${size}-${name}.jpg`;
        

        document.querySelector(".preview").src = linkRoute;

        style = {
            name: name,
            size: size,
            model: model
        };

    };
 }, false);