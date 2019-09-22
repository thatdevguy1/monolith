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

    function displayStyle({name = style.name, size = style.size, model = style.model}){ 
        var linkRoute = `./assets/${model}/${size}-${name}.jpg`;
        console.log(linkRoute);

        //if(name != style.name || size != style.size){
            document.querySelector("#topModel").src = `./assets/top/${size}-${name}.jpg`;
            document.querySelector("#sideModel").src = `./assets/sideTilt/${size}-${name}.jpg`;
            document.querySelector("#frontModel").src = `./assets/frontTilt/${size}-${name}.jpg`;
            document.querySelector("#slantedModel").src = `./assets/slanted${size}-${name}.jpg`;
            document.querySelector("#cornerModel").src = `./assets/corner/${size}-${name}.jpg`;
            document.querySelector("#packageModel").src = `./assets/package/${size}-${name}.jpg`;
       // }

        document.querySelector(".preview").src = linkRoute;

        style = {
            name: name,
            size: size,
            model: model
        };

    };

//     function displayStyle(){
//         switch(true){
//             case style.size == "330" :
//                 switch(true){
//                     case style.name == "athera" :
//                     document.querySelector("#topModel").src = "./monolithImg/TOP/M330 AETHERA - TOP.jpg";
//                     document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M330 AETHERA - SIDE TILT.jpg";
//                     document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 AETHERA FRONT TILT.jpg";
//                     document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M330 AETHERA - SLANTED.jpg";
//                     document.querySelector("#cornerModel").src = "./monolithImg/MISC/AETHERA - CLOSE UP.jpg";
//                     document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 AETHERA - PKG.jpg";
//                     switch(true){
//                             case style.model == "top" :
//                             document.querySelector(".preview").src="./monolithImg/TOP/M330 AETHERA - TOP.jpg";
//                             break;
                            
//                             case style.model == "side" :
//                             document.querySelector(".preview").src="./monolithImg/SIDE TILT/M330 AETHERA - SIDE TILT.jpg";
//                             break;
                            
//                             case style.model == "front" :
//                             document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 AETHERA FRONT TILT.jpg";
//                             break;
                            
//                             case style.model == "slanted" :
//                             document.querySelector(".preview").src="./monolithImg/SLANTED/M330 AETHERA - SLANTED.jpg";
//                             break;
                            
//                             case style.model == "corner" :
//                             document.querySelector(".preview").src="./monolithImg/MISC/AETHERA - CLOSE UP.jpg";
//                             break;
                            
//                             case style.model == "package" :
//                             document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 AETHERA - PKG.jpg";
//                             break;
//                         }
//                         break;
                
//                     case (style.name == "classic"):
//                         document.querySelector("#topModel").src = "./monolithImg/TOP/M330 CLASSIC - TOP.jpg";
//                         document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M330 CLASSIC - SIDE TILT.jpg";
//                         document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 CLASSIC FRONT TILT.jpg";
//                         document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M330 CLASSIC - SLANTED.jpg";
//                         document.querySelector("#cornerModel").src = "./monolithImg/MISC/CLASSIC - CLOSE UP.jpg";
//                         document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 CLASSIC - PKG.jpg";
                        
//                         switch(true){
//                             case style.model == "top" :
//                             document.querySelector(".preview").src="./monolithImg/TOP/M330 CLASSIC - TOP.jpg";
//                             break;
                            
//                             case style.model == "side" :
//                             document.querySelector(".preview").src="./monolithImg/SIDE TILT/M330 CLASSIC - SIDE TILT.jpg";
//                             break;
                            
//                             case style.model == "front" :
//                             document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 CLASSIC FRONT TILT.jpg";
//                             break;
                            
//                             case style.model == "slanted" :
//                             document.querySelector(".preview").src="./monolithImg/SLANTED/M330 CLASSIC - SLANTED.jpg";
//                             break;
                            
//                             case style.model == "corner" :
//                             document.querySelector(".preview").src="./monolithImg/MISC/CLASSIC - CLOSE UP.jpg";
//                             break;
                            
//                             case style.model == "package" :
//                             document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 CLASSIC - PKG.jpg";
//                             break;
//                         }
//                         break;
                    
//                     case style.name == "clova" :
//                         document.querySelector("#topModel").src = "./monolithImg/TOP/M330 CLOVA - TOP.jpg";
//                         document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M330 CLOVA - SIDE TILT.jpg";
//                         document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 CLOVA FRONT TILT.jpg";
//                         document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M330 CLOVA - SLANTED.jpg";
//                         document.querySelector("#cornerModel").src = "./monolithImg/MISC/CLOVA - CLOSE UP.jpg";
//                         document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 CLOVA - PKG.jpg";
                        
//                         switch(true){
//                             case style.model == "top" :
//                             document.querySelector(".preview").src="./monolithImg/TOP/M330 CLOVA - TOP.jpg";
//                             break;
                            
//                             case style.model == "side" :
//                             document.querySelector(".preview").src="./monolithImg/SIDE TILT/M330 CLOVA - SIDE TILT.jpg";
//                             break;
                            
//                             case style.model == "front" :
//                             document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 CLOVA FRONT TILT.jpg";
//                             break;
                            
//                             case style.model == "slanted" :
//                             document.querySelector(".preview").src="./monolithImg/SLANTED/M330 CLOVA - SLANTED.jpg";
//                             break;
                            
//                             case style.model == "corner" :
//                             document.querySelector(".preview").src="./monolithImg/MISC/CLOVA - CLOSE UP.jpg";
//                             break;
                            
//                             case style.model == "package" :
//                             document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 CLOVA - PKG.jpg";
//                             break;
//                         }
//                         break;
                
//                     case (style.name == "nightSchool"):
//                         document.querySelector("#topModel").src = "./monolithImg/TOP/M330 NIGHTSCHOOL - TOP.jpg";
//                         document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M330 NIGHTSCHOOL - SIDE TILT.jpg";
//                         document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 NIGHTSCHOOL FRONT TILT.jpg";
//                         document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M330 NIGHTSCHOOL - SLANTED.jpg";
//                         document.querySelector("#cornerModel").src = "./monolithImg/MISC/NIGHTSCHOOL - CLOSE UP.jpg";
//                         document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 NIGHTSCHOOL - PKG.jpg";
                        
//                         switch(true){
//                             case style.model == "top" :
//                             document.querySelector(".preview").src="./monolithImg/TOP/M330 NIGHTSCHOOL - TOP.jpg";
//                             break;
                            
//                             case style.model == "side" :
//                             document.querySelector(".preview").src="./monolithImg/SIDE TILT/M330 NIGHTSCHOOL - SIDE TILT.jpg";
//                             break;
                            
//                             case style.model == "front" :
//                             document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 NIGHTSCHOOL FRONT TILT.jpg";
//                             break;
                            
//                             case style.model == "slanted" :
//                             document.querySelector(".preview").src="./monolithImg/SLANTED/M330 NIGHTSCHOOL - SLANTED.jpg";
//                             break;
                            
//                             case style.model == "corner" :
//                             document.querySelector(".preview").src="./monolithImg/MISC/NIGHTSCHOOL - CLOSE UP.jpg";
//                             break;
                            
//                             case style.model == "package" :
//                             document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 NIGHTSCHOOL - PKG.jpg";
//                             break;
//                         }
//                         break;
//                     case style.name == "redShift" :
//                         document.querySelector("#topModel").src = "./monolithImg/TOP/M330 REDSHIFT - TOP.jpg";
//                         document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M330 REDSHIFT - SIDE TILT.jpg";
//                         document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 REDSHIFT FRONT TILT.jpg";
//                         document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M330 REDSHIFT - SLANTED.jpg";
//                         document.querySelector("#cornerModel").src = "./monolithImg/MISC/REDSHIFT - CLOSE UP.jpg";
//                         document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 REDSHIFT - PKG.jpg";
                        
//                         switch(true){
//                             case style.model == "top" :
//                             document.querySelector(".preview").src="./monolithImg/TOP/M330 REDSHIFT - TOP.jpg";
//                             break;
                            
//                             case style.model == "side" :
//                             document.querySelector(".preview").src="./monolithImg/SIDE TILT/M330 REDSHIFT - SIDE TILT.jpg";
//                             break;
                            
//                             case style.model == "front" :
//                             document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 REDSHIFT FRONT TILT.jpg";
//                             break;
                            
//                             case style.model == "slanted" :
//                             document.querySelector(".preview").src="./monolithImg/SLANTED/M330 REDSHIFT - SLANTED.jpg";
//                             break;
                            
//                             case style.model == "corner" :
//                             document.querySelector(".preview").src="./monolithImg/MISC/REDSHIFT - CLOSE UP.jpg";
//                             break;
                            
//                             case style.model == "package" :
//                             document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 REDSHIFT - PKG.jpg";
//                             break;
//                         }
//                         break;
                
//                     case (style.name == "slime"):
//                         document.querySelector("#topModel").src = "./monolithImg/TOP/M330 SLIME - TOP.jpg";
//                         document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M330 SLIME - SIDE TILT.jpg";
//                         document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 SLIME FRONT TILT.jpg";
//                         document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M330 SLIME - SLANTED.jpg";
//                         document.querySelector("#cornerModel").src = "./monolithImg/MISC/SLIME - CLOSE UP.jpg";
//                         document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 SLIME - PKG.jpg";
                        
//                         switch(true){
//                             case style.model == "top" :
//                             document.querySelector(".preview").src="./monolithImg/TOP/M330 SLIME - TOP.jpg";
//                             break;
                            
//                             case style.model == "side" :
//                             document.querySelector(".preview").src="./monolithImg/SIDE TILT/M330 SLIME - SIDE TILT.jpg";
//                             break;
                            
//                             case style.model == "front" :
//                             document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 SLIME FRONT TILT.jpg";
//                             break;
                            
//                             case style.model == "slanted" :
//                             document.querySelector(".preview").src="./monolithImg/SLANTED/M330 SLIME - SLANTED.jpg";
//                             break;
                            
//                             case style.model == "corner" :
//                             document.querySelector(".preview").src="./monolithImg/MISC/SLIME - CLOSE UP.jpg";
//                             break;
                            
//                             case style.model == "package" :
//                             document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 SLIME - PKG.jpg";
//                             break;
//                         }
//                         break;
//                     case style.name == "smokeScreen" :
//                         document.querySelector("#topModel").src = "./monolithImg/TOP/M330 SMOKESCREEN - TOP.jpg";
//                         document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M330 SMOKESCREEN - SIDE TILT.jpg";
//                         document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 SMOKESCREEN FRONT TILT.jpg";
//                         document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M330 SMOKESCREEN - SLANTED.jpg";
//                         document.querySelector("#cornerModel").src = "./monolithImg/MISC/SMOKESCREEN - CLOSE UP.jpg";
//                         document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 SMOKESCREEN - PKG.jpg";
                        
//                         switch(true){
//                             case style.model == "top" :
//                             document.querySelector(".preview").src="./monolithImg/TOP/M330 SMOKESCREEN - TOP.jpg";
//                             break;
                            
//                             case style.model == "side" :
//                             document.querySelector(".preview").src="./monolithImg/SIDE TILT/M330 SMOKESCREEN - SIDE TILT.jpg";
//                             break;
                            
//                             case style.model == "front" :
//                             document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 SMOKESCREEN FRONT TILT.jpg";
//                             break;
                            
//                             case style.model == "slanted" :
//                             document.querySelector(".preview").src="./monolithImg/SLANTED/M330 SMOKESCREEN - SLANTED.jpg";
//                             break;
                            
//                             case style.model == "corner" :
//                             document.querySelector(".preview").src="./monolithImg/MISC/SMOKESCREEN - CLOSE UP.jpg";
//                             break;
                            
//                             case style.model == "package" :
//                             document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 SMOKESCREEN - PKG.jpg";
//                             break;
//                         }
//                         break;
                
//                     case (style.name == "summerSchool"):
//                         document.querySelector("#topModel").src = "./monolithImg/TOP/M330 SUMMERSCHOOL - TOP.jpg";
//                         document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M330 SUMMERSCHOOL - SIDE TILT.jpg";
//                         document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 SUMMERSCHOOL FRONT TILT.jpg";
//                         document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M330 SUMMERSCHOOL - SLANTED.jpg";
//                         document.querySelector("#cornerModel").src = "./monolithImg/MISC/SUMMERSCHOOL - CLOSE UP.jpg";
//                         document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 SUMMERSCHOOL - PKG.jpg";
                        
//                         switch(true){
//                             case style.model == "top" :
//                             document.querySelector(".preview").src="./monolithImg/TOP/M330 SUMMERSCHOOL - TOP.jpg";
//                             break;
                            
//                             case style.model == "side" :
//                             document.querySelector(".preview").src="./monolithImg/SIDE TILT/M330 SUMMERSCHOOL - SIDE TILT.jpg";
//                             break;
                            
//                             case style.model == "front" :
//                             document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 SUMMERSCHOOL FRONT TILT.jpg";
//                             break;
                            
//                             case style.model == "slanted" :
//                             document.querySelector(".preview").src="./monolithImg/SLANTED/M330 SUMMERSCHOOL - SLANTED.jpg";
//                             break;
                            
//                             case style.model == "corner" :
//                             document.querySelector(".preview").src="./monolithImg/MISC/SUMMERSCHOOL - CLOSE UP.jpg";
//                             break;
                            
//                             case style.model == "package" :
//                             document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 SUMMERSCHOOL - PKG.jpg";
//                             break;
//                         }
//                         break;
//                     case (style.name == "wakeUpCall"):
//                         document.querySelector("#topModel").src = "./monolithImg/TOP/M330 WAKE UP CALL - TOP.jpg";
//                         document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M330 WAKE UP CALL - SIDE TILT.jpg";
//                         document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 WAKE UP CALL FRONT TILT.jpg";
//                         document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M330 WAKE UP CALL - SLANTED.jpg";
//                         document.querySelector("#cornerModel").src = "./monolithImg/MISC/WAKE UP CALL - CLOSE UP.jpg";
//                         document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 WAKE UP CALL - PKG.jpg";
                        
//                         switch(true){
//                             case style.model == "top" :
//                             document.querySelector(".preview").src="./monolithImg/TOP/M330 WAKE UP CALL - TOP.jpg";
//                             break;
                            
//                             case style.model == "side" :
//                             document.querySelector(".preview").src="./monolithImg/SIDE TILT/M330 WAKE UP CALL - SIDE TILT.jpg";
//                             break;
                            
//                             case style.model == "front" :
//                             document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 WAKE UP CALL FRONT TILT.jpg";
//                             break;
                            
//                             case style.model == "slanted" :
//                             document.querySelector(".preview").src="./monolithImg/SLANTED/M330 WAKE UP CALL - SLANTED.jpg";
//                             break;
                            
//                             case style.model == "corner" :
//                             document.querySelector(".preview").src="./monolithImg/MISC/WAKE UP CALL - CLOSE UP.jpg";
//                             break;
                            
//                             case style.model == "package" :
//                             document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 WAKE UP CALL - PKG.jpg";
//                             break;
//                         }
//                         break;
                
//                 }
//                 break;

//             case style.size == "508" :
//                 switch(true){
//                 case style.name == "athera" :
//                 document.querySelector("#topModel").src = "./monolithImg/TOP/M508 AETHERA - TOP.jpg";
//                 document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M508 AETHERA - SIDE TILT.jpg";
//                 document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 AETHERA FRONT TILT.jpg";
//                 document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M508 AETHERA - SLANTED.jpg";
//                 document.querySelector("#cornerModel").src = "./monolithImg/MISC/AETHERA - CLOSE UP.jpg";
//                 document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 AETHERA - PKG.jpg";
//                 switch(true){
//                         case style.model == "top" :
//                         document.querySelector(".preview").src="./monolithImg/TOP/M508 AETHERA - TOP.jpg";
//                         break;
                        
//                         case style.model == "side" :
//                         document.querySelector(".preview").src="./monolithImg/SIDE TILT/M508 AETHERA - SIDE TILT.jpg";
//                         break;
                        
//                         case style.model == "front" :
//                         document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 AETHERA FRONT TILT.jpg";
//                         break;
                        
//                         case style.model == "slanted" :
//                         document.querySelector(".preview").src="./monolithImg/SLANTED/M508 AETHERA - SLANTED.jpg";
//                         break;
                        
//                         case style.model == "corner" :
//                         document.querySelector(".preview").src="./monolithImg/MISC/AETHERA - CLOSE UP.jpg";
//                         break;
                        
//                         case style.model == "package" :
//                         document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 AETHERA - PKG.jpg";
//                         break;
//                     }
//                     break;
            
//                 case (style.name == "classic"):
//                     document.querySelector("#topModel").src = "./monolithImg/TOP/M508 CLASSIC - TOP.jpg";
//                     document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M508 CLASSIC - SIDE TILT.jpg";
//                     document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 CLASSIC FRONT TILT.jpg";
//                     document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M508 CLASSIC - SLANTED.jpg";
//                     document.querySelector("#cornerModel").src = "./monolithImg/MISC/CLASSIC - CLOSE UP.jpg";
//                     document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 CLASSIC - PKG.jpg";
                    
//                     switch(true){
//                         case style.model == "top" :
//                         document.querySelector(".preview").src="./monolithImg/TOP/M508 CLASSIC - TOP.jpg";
//                         break;
                        
//                         case style.model == "side" :
//                         document.querySelector(".preview").src="./monolithImg/SIDE TILT/M508 CLASSIC - SIDE TILT.jpg";
//                         break;
                        
//                         case style.model == "front" :
//                         document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 CLASSIC FRONT TILT.jpg";
//                         break;
                        
//                         case style.model == "slanted" :
//                         document.querySelector(".preview").src="./monolithImg/SLANTED/M508 CLASSIC - SLANTED.jpg";
//                         break;
                        
//                         case style.model == "corner" :
//                         document.querySelector(".preview").src="./monolithImg/MISC/CLASSIC - CLOSE UP.jpg";
//                         break;
                        
//                         case style.model == "package" :
//                         document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 CLASSIC - PKG.jpg";
//                         break;
//                     }
//                     break;
                
//                 case style.name == "clova" :
//                     document.querySelector("#topModel").src = "./monolithImg/TOP/M508 CLOVA - TOP.jpg";
//                     document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M508 CLOVA - SIDE TILT.jpg";
//                     document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 CLOVA FRONT TILT.jpg";
//                     document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M508 CLOVA - SLANTED.jpg";
//                     document.querySelector("#cornerModel").src = "./monolithImg/MISC/CLOVA - CLOSE UP.jpg";
//                     document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 CLOVA - PKG.jpg";
                    
//                     switch(true){
//                         case style.model == "top" :
//                         document.querySelector(".preview").src="./monolithImg/TOP/M508 CLOVA - TOP.jpg";
//                         break;
                        
//                         case style.model == "side" :
//                         document.querySelector(".preview").src="./monolithImg/SIDE TILT/M508 CLOVA - SIDE TILT.jpg";
//                         break;
                        
//                         case style.model == "front" :
//                         document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 CLOVA FRONT TILT.jpg";
//                         break;
                        
//                         case style.model == "slanted" :
//                         document.querySelector(".preview").src="./monolithImg/SLANTED/M508 CLOVA - SLANTED.jpg";
//                         break;
                        
//                         case style.model == "corner" :
//                         document.querySelector(".preview").src="./monolithImg/MISC/CLOVA - CLOSE UP.jpg";
//                         break;
                        
//                         case style.model == "package" :
//                         document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 CLOVA - PKG.jpg";
//                         break;
//                     }
//                     break;
            
//                 case (style.name == "nightSchool"):
//                     document.querySelector("#topModel").src = "./monolithImg/TOP/M508 NIGHTSCHOOL - TOP.jpg";
//                     document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M508 NIGHTSCHOOL - SIDE TILT.jpg";
//                     document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 NIGHTSCHOOL FRONT TILT.jpg";
//                     document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M508 NIGHTSCHOOL - SLANTED.jpg";
//                     document.querySelector("#cornerModel").src = "./monolithImg/MISC/NIGHTSCHOOL - CLOSE UP.jpg";
//                     document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 NIGHTSCHOOL - PKG.jpg";
                    
//                     switch(true){
//                         case style.model == "top" :
//                         document.querySelector(".preview").src="./monolithImg/TOP/M508 NIGHTSCHOOL - TOP.jpg";
//                         break;
                        
//                         case style.model == "side" :
//                         document.querySelector(".preview").src="./monolithImg/SIDE TILT/M508 NIGHTSCHOOL - SIDE TILT.jpg";
//                         break;
                        
//                         case style.model == "front" :
//                         document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 NIGHTSCHOOL FRONT TILT.jpg";
//                         break;
                        
//                         case style.model == "slanted" :
//                         document.querySelector(".preview").src="./monolithImg/SLANTED/M508 NIGHTSCHOOL - SLANTED.jpg";
//                         break;
                        
//                         case style.model == "corner" :
//                         document.querySelector(".preview").src="./monolithImg/MISC/NIGHTSCHOOL - CLOSE UP.jpg";
//                         break;
                        
//                         case style.model == "package" :
//                         document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 NIGHTSCHOOL - PKG.jpg";
//                         break;
//                     }
//                     break;
//                 case style.name == "redShift" :
//                     document.querySelector("#topModel").src = "./monolithImg/TOP/M508 REDSHIFT - TOP.jpg";
//                     document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M508 REDSHIFT - SIDE TILT.jpg";
//                     document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 REDSHIFT FRONT TILT.jpg";
//                     document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M508 REDSHIFT - SLANTED.jpg";
//                     document.querySelector("#cornerModel").src = "./monolithImg/MISC/REDSHIFT - CLOSE UP.jpg";
//                     document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 REDSHIFT - PKG.jpg";
                    
//                     switch(true){
//                         case style.model == "top" :
//                         document.querySelector(".preview").src="./monolithImg/TOP/M508 REDSHIFT - TOP.jpg";
//                         break;
                        
//                         case style.model == "side" :
//                         document.querySelector(".preview").src="./monolithImg/SIDE TILT/M508 REDSHIFT - SIDE TILT.jpg";
//                         break;
                        
//                         case style.model == "front" :
//                         document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 REDSHIFT FRONT TILT.jpg";
//                         break;
                        
//                         case style.model == "slanted" :
//                         document.querySelector(".preview").src="./monolithImg/SLANTED/M508 REDSHIFT - SLANTED.jpg";
//                         break;
                        
//                         case style.model == "corner" :
//                         document.querySelector(".preview").src="./monolithImg/MISC/REDSHIFT - CLOSE UP.jpg";
//                         break;
                        
//                         case style.model == "package" :
//                         document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 REDSHIFT - PKG.jpg";
//                         break;
//                     }
//                     break;
            
//                 case (style.name == "slime"):
//                     document.querySelector("#topModel").src = "./monolithImg/TOP/M508 SLIME - TOP.jpg";
//                     document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M508 SLIME - SIDE TILT.jpg";
//                     document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 SLIME FRONT TILT.jpg";
//                     document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M508 SLIME - SLANTED.jpg";
//                     document.querySelector("#cornerModel").src = "./monolithImg/MISC/SLIME - CLOSE UP.jpg";
//                     document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 SLIME - PKG.jpg";
                    
//                     switch(true){
//                         case style.model == "top" :
//                         document.querySelector(".preview").src="./monolithImg/TOP/M508 SLIME - TOP.jpg";
//                         break;
                        
//                         case style.model == "side" :
//                         document.querySelector(".preview").src="./monolithImg/SIDE TILT/M508 SLIME - SIDE TILT.jpg";
//                         break;
                        
//                         case style.model == "front" :
//                         document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 SLIME FRONT TILT.jpg";
//                         break;
                        
//                         case style.model == "slanted" :
//                         document.querySelector(".preview").src="./monolithImg/SLANTED/M508 SLIME - SLANTED.jpg";
//                         break;
                        
//                         case style.model == "corner" :
//                         document.querySelector(".preview").src="./monolithImg/MISC/SLIME - CLOSE UP.jpg";
//                         break;
                        
//                         case style.model == "package" :
//                         document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 SLIME - PKG.jpg";
//                         break;
//                     }
//                     break;
//                 case style.name == "smokeScreen" :
//                     document.querySelector("#topModel").src = "./monolithImg/TOP/M508 SMOKESCREEN - TOP.jpg";
//                     document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M508 SMOKESCREEN - SIDE TILT.jpg";
//                     document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 SMOKESCREEN FRONT TILT.jpg";
//                     document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M508 SMOKESCREEN - SLANTED.jpg";
//                     document.querySelector("#cornerModel").src = "./monolithImg/MISC/SMOKESCREEN - CLOSE UP.jpg";
//                     document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 SMOKESCREEN - PKG.jpg";
                    
//                     switch(true){
//                         case style.model == "top" :
//                         document.querySelector(".preview").src="./monolithImg/TOP/M508 SMOKESCREEN - TOP.jpg";
//                         break;
                        
//                         case style.model == "side" :
//                         document.querySelector(".preview").src="./monolithImg/SIDE TILT/M508 SMOKESCREEN - SIDE TILT.jpg";
//                         break;
                        
//                         case style.model == "front" :
//                         document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 SMOKESCREEN FRONT TILT.jpg";
//                         break;
                        
//                         case style.model == "slanted" :
//                         document.querySelector(".preview").src="./monolithImg/SLANTED/M508 SMOKESCREEN - SLANTED.jpg";
//                         break;
                        
//                         case style.model == "corner" :
//                         document.querySelector(".preview").src="./monolithImg/MISC/SMOKESCREEN - CLOSE UP.jpg";
//                         break;
                        
//                         case style.model == "package" :
//                         document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 SMOKESCREEN - PKG.jpg";
//                         break;
//                     }
//                     break;
            
//                 case (style.name == "summerSchool"):
//                     document.querySelector("#topModel").src = "./monolithImg/TOP/M508 SUMMERSCHOOL - TOP.jpg";
//                     document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M508 SUMMERSCHOOL - SIDE TILT.jpg";
//                     document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 SUMMERSCHOOL FRONT TILT.jpg";
//                     document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M508 SUMMERSCHOOL - SLANTED.jpg";
//                     document.querySelector("#cornerModel").src = "./monolithImg/MISC/SUMMERSCHOOL - CLOSE UP.jpg";
//                     document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 SUMMERSCHOOL - PKG.jpg";
                    
//                     switch(true){
//                         case style.model == "top" :
//                         document.querySelector(".preview").src="./monolithImg/TOP/M508 SUMMERSCHOOL - TOP.jpg";
//                         break;
                        
//                         case style.model == "side" :
//                         document.querySelector(".preview").src="./monolithImg/SIDE TILT/M508 SUMMERSCHOOL - SIDE TILT.jpg";
//                         break;
                        
//                         case style.model == "front" :
//                         document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 SUMMERSCHOOL FRONT TILT.jpg";
//                         break;
                        
//                         case style.model == "slanted" :
//                         document.querySelector(".preview").src="./monolithImg/SLANTED/M508 SUMMERSCHOOL - SLANTED.jpg";
//                         break;
                        
//                         case style.model == "corner" :
//                         document.querySelector(".preview").src="./monolithImg/MISC/SUMMERSCHOOL - CLOSE UP.jpg";
//                         break;
                        
//                         case style.model == "package" :
//                         document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 SUMMERSCHOOL - PKG.jpg";
//                         break;
//                     }
//                     break;
//                 case (style.name == "wakeUpCall"):
//                     document.querySelector("#topModel").src = "./monolithImg/TOP/M508 WAKE UP CALL - TOP.jpg";
//                     document.querySelector("#sideModel").src = "./monolithImg/SIDE TILT/M508 WAKE UP CALL - SIDE TILT.jpg";
//                     document.querySelector("#frontModel").src = "./monolithImg/FRONT TILT - NO MOUSE/M330 WAKE UP CALL FRONT TILT.jpg";
//                     document.querySelector("#slantedModel").src = "./monolithImg/SLANTED/M508 WAKE UP CALL - SLANTED.jpg";
//                     document.querySelector("#cornerModel").src = "./monolithImg/MISC/WAKE UP CALL - CLOSE UP.jpg";
//                     document.querySelector("#packageModel").src = "./monolithImg/PACKAGE/M330 WAKE UP CALL - PKG.jpg";
                    
//                     switch(true){
//                         case style.model == "top" :
//                         document.querySelector(".preview").src="./monolithImg/TOP/M508 WAKE UP CALL - TOP.jpg";
//                         break;
                        
//                         case style.model == "side" :
//                         document.querySelector(".preview").src="./monolithImg/SIDE TILT/M508 WAKE UP CALL - SIDE TILT.jpg";
//                         break;
                        
//                         case style.model == "front" :
//                         document.querySelector(".preview").src="./monolithImg/FRONT TILT - NO MOUSE/M330 WAKE UP CALL FRONT TILT.jpg";
//                         break;
                        
//                         case style.model == "slanted" :
//                         document.querySelector(".preview").src="./monolithImg/SLANTED/M508 WAKE UP CALL - SLANTED.jpg";
//                         break;
                        
//                         case style.model == "corner" :
//                         document.querySelector(".preview").src="./monolithImg/MISC/WAKE UP CALL - CLOSE UP.jpg";
//                         break;
                        
//                         case style.model == "package" :
//                         document.querySelector(".preview").src="./monolithImg/PACKAGE/M330 WAKE UP CALL - PKG.jpg";
//                         break;
//                     }
//                     break;
            
//                 }
//                 break;
//         };     
//     };
 }, false);