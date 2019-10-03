document.addEventListener('DOMContentLoaded', function(){

    var style = {
        name: "aethera",
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
            if(this.window.pageYOffset >= (section2FromTop + 750)){
                section2.className = section2.className + " pHolderL";
                
            };
        };

        if(!section3.classList.contains("pHolder")){
            if(this.window.pageYOffset >= (section3FromTop + 1100)){
                section3.className = section3.className + " pHolder";
                
            };
        };
    });

    //Code to control the buy modal
    var buyBtn = document.querySelector(".buyBubble");
    var buyAmazon = document.querySelector(".buyBtn");
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

        displayStyle(style);
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
        console.log(ele.target.getAttribute("data-model"))
        if(!(ele.target.getAttribute("data-model") == "undefined")){
            style.model = ele.target.getAttribute("data-model");
        }
        displayStyle(style);
    })

    buyAmazon.addEventListener('click', goToAmazon);    


    //build a string based on the style object that will navigate to the right image folder / file 
    //to be displayed in the right elements
    function displayStyle({name, size, model}){ 
        var linkRoute; 
        model == 'corner' || model == 'frontTilt' ? linkRoute = `./assets/${model}/${name}.jpg` : linkRoute = `./assets/${model}/${size}-${name}.jpg`;
        console.log(linkRoute);

        
        document.querySelector("#topModel").src = `./assets/top/${size}-${name}.jpg`;
        document.querySelector("#sideModel").src = `./assets/sideTilt/${size}-${name}.jpg`;
        document.querySelector("#frontModel").src = `./assets/frontTilt/${name}.jpg`;
        document.querySelector("#slantedModel").src = `./assets/slanted/${size}-${name}.jpg`;
        document.querySelector("#cornerModel").src = `./assets/corner/${name}.jpg`;
        document.querySelector("#packageModel").src = `./assets/package/${size}-${name}.jpg`;
        

        document.querySelector(".preview").src = linkRoute;

    };

    function goToAmazon(){

        switch(style.size){
            case "m330" :
                switch(style.name){
                    case "aethera" :
                        window.open('https://www.amazon.com/Monolith-M-330-Anti-Fray-13x13x0-2-330x330x5mm/dp/B07S46PDSJ/ref=sr_1_25?keywords=monolith+mouse+pads&qid=1569941854&sr=8-25', '_blank');
                        break;
                    case "classic" :
                        window.open('https://www.amazon.com/Monolith-M-330-Anti-Fray-13x13x0-2-330x330x5mm/dp/B07S5PVKT7/ref=sr_1_7?keywords=monolith+mouse+pads&qid=1569941854&sr=8-7', '_blank');
                        break;
                    case "clova" :
                        window.open('https://www.amazon.com/Monolith-M-330-Anti-Fray-13x13x0-2-330x330x5mm/dp/B07RZW94GS/ref=sr_1_14?keywords=monolith+mouse+pads&qid=1569944963&sr=8-14', '_blank');
                        break;
                    case "nightSchool" :
                        window.open('https://www.amazon.com/Monolith-M-330-NIGHTSCHOOL-Anti-Fray-330x330x5mm/dp/B07S33RG38/ref=sr_1_15?keywords=monolith+mouse+pads&qid=1569945033&sr=8-15', '_blank');
                        break;
                    case "redShift" :
                        window.open('https://www.amazon.com/Monolith-M-330-Anti-Fray-13x13x0-2-330x330x5mm/dp/B07S472PFW/ref=sr_1_10?keywords=monolith+mouse+pads&qid=1569941854&sr=8-10', '_blank');
                        break;
                    case "slime" :
                        window.open('https://www.amazon.com/Monolith-M-330-Anti-Fray-13x13x0-2-330x330x5mm/dp/B07S467G8D/ref=sr_1_18?keywords=monolith+mouse+pads&qid=1569944886&sr=8-18', '_blank');
                        break;
                    case "smokeScreen" :
                        window.open('https://www.amazon.com/Monolith-M-330-Smokescreen-Anti-Fray-330x330x5mm/dp/B07S6SQ2BB/ref=sr_1_13?keywords=monolith+mouse+pads&qid=1569941854&sr=8-13', '_blank');
                        break;
                    case "summerSchool" :
                        window.open('https://www.amazon.com/Monolith-M-330-SUMMERSCHOOL-Anti-Fray-330x330x5mm/dp/B07S58M1NP/ref=sr_1_17?keywords=monolith+mouse+pads&qid=1569941854&sr=8-17', '_blank');
                        break;
                    case "wakeUpCall" :
                        window.open('https://www.amazon.com/Monolith-M-330-Anti-Fray-13x13x0-2-330x330x5mm/dp/B07S1YS733/ref=sr_1_11?keywords=monolith+mouse+pads&qid=1569941854&sr=8-11', '_blank');
                        break;
                }
                break;
            case "m508" :
                switch(style.name){
                    case "aethera" :
                        window.open('https://www.amazon.com/Monolith-M-508-Anti-Fray-20x16x0-2-508x406x5mm/dp/B07S3F5M9R/ref=sr_1_16?keywords=monolith+mouse+pads&qid=1569941854&sr=8-16', '_blank');
                        break;
                    case "classic" :
                        window.open('https://www.amazon.com/Monolith-M-508-Anti-Fray-20x16x0-2-508x406x5mm/dp/B07RRRWMBR/ref=sr_1_1?keywords=monolith+mouse+pads&qid=1569941836&sr=8-1', '_blank');
                        break;
                    case "clova" :
                        window.open('https://www.amazon.com/Monolith-M-508-Anti-Fray-20x16x0-2-508x406x5mm/dp/B07S4HLNZF/ref=sr_1_8?keywords=monolith+mouse+pads&qid=1569941854&sr=8-8', '_blank');
                        break;
                    case "nightSchool" :
                        window.open('https://www.amazon.com/Monolith-M-508-NIGHTSCHOOL-Anti-Fray-508x406x5mm/dp/B07S16KHWW/ref=sr_1_9?keywords=monolith+mouse+pads&qid=1569941854&sr=8-9', '_blank');
                        break;
                    case "redShift" :
                        window.open('https://www.amazon.com/Monolith-M-508-Anti-Fray-20x16x0-2-508x406x5mm/dp/B07S3DWGT5/ref=sr_1_24?keywords=monolith+mouse+pads&qid=1569941854&sr=8-24', '_blank');
                        break;
                    case "slime" :
                        window.open('https://www.amazon.com/Monolith-M-508-Anti-Fray-20x16x0-2-508x406x5mm/dp/B07S16XVKG/ref=sr_1_5?keywords=monolith+mouse+pads&qid=1569941854&sr=8-5', '_blank');
                        break;
                    case "smokeScreen" :
                        window.open('https://www.amazon.com/Monolith-M-508-Anti-Fray-20x16x0-2-508x406x5mm/dp/B07S16XVKG/ref=sr_1_5?keywords=monolith+mouse+pads&qid=1569941854&sr=8-5', '_blank');
                        break;
                    case "summerSchool" :
                        window.open('https://www.amazon.com/Monolith-M-508-SUMMERSCHOOL-Anti-Fray-508x406x5mm/dp/B07RZ44S9W/ref=sr_1_19?keywords=monolith+mouse+pads&qid=1569941854&sr=8-19', '_blank');
                        break;
                    case "wakeUpCall" :
                        window.open('https://www.amazon.com/Monolith-M-508-Anti-Fray-20x16x0-2-508x406x5mm/dp/B07S16L4L8/ref=sr_1_12?keywords=monolith+mouse+pads&qid=1569941854&sr=8-12', '_blank');
                        break;
                }
                break;
        };

     // classic m-508      : https://www.amazon.com/Monolith-M-508-Anti-Fray-20x16x0-2-508x406x5mm/dp/B07RRRWMBR/ref=sr_1_1?keywords=monolith+mouse+pads&qid=1569941836&sr=8-1
     // classic m-330      : https://www.amazon.com/Monolith-M-330-Anti-Fray-13x13x0-2-330x330x5mm/dp/B07S5PVKT7/ref=sr_1_7?keywords=monolith+mouse+pads&qid=1569941854&sr=8-7  
     // slime m-508        : https://www.amazon.com/Monolith-M-508-Anti-Fray-20x16x0-2-508x406x5mm/dp/B07S16XVKG/ref=sr_1_5?keywords=monolith+mouse+pads&qid=1569941854&sr=8-5
     // slime m-330        : https://www.amazon.com/Monolith-M-330-Anti-Fray-13x13x0-2-330x330x5mm/dp/B07S467G8D/ref=sr_1_18?keywords=monolith+mouse+pads&qid=1569944886&sr=8-18
     // smokeScreen m-508  : https://www.amazon.com/Monolith-M-508-Anti-Fray-20x16x0-2-508x406x5mm/dp/B07S16XVKG/ref=sr_1_5?keywords=monolith+mouse+pads&qid=1569941854&sr=8-5
     // smokeScreen m-330  : https://www.amazon.com/Monolith-M-330-Smokescreen-Anti-Fray-330x330x5mm/dp/B07S6SQ2BB/ref=sr_1_13?keywords=monolith+mouse+pads&qid=1569941854&sr=8-13
     // clova m-508        : https://www.amazon.com/Monolith-M-508-Anti-Fray-20x16x0-2-508x406x5mm/dp/B07S4HLNZF/ref=sr_1_8?keywords=monolith+mouse+pads&qid=1569941854&sr=8-8
     // clova m-330        : https://www.amazon.com/Monolith-M-330-Anti-Fray-13x13x0-2-330x330x5mm/dp/B07RZW94GS/ref=sr_1_14?keywords=monolith+mouse+pads&qid=1569944963&sr=8-14
     // nightSchool m-508  : https://www.amazon.com/Monolith-M-508-NIGHTSCHOOL-Anti-Fray-508x406x5mm/dp/B07S16KHWW/ref=sr_1_9?keywords=monolith+mouse+pads&qid=1569941854&sr=8-9
     // nightSchool m-330  : https://www.amazon.com/Monolith-M-330-NIGHTSCHOOL-Anti-Fray-330x330x5mm/dp/B07S33RG38/ref=sr_1_15?keywords=monolith+mouse+pads&qid=1569941854&sr=8-15
     // redShift m-330     : https://www.amazon.com/Monolith-M-330-Anti-Fray-13x13x0-2-330x330x5mm/dp/B07S472PFW/ref=sr_1_10?keywords=monolith+mouse+pads&qid=1569941854&sr=8-10
     // redShift m-508     : https://www.amazon.com/Monolith-M-508-Anti-Fray-20x16x0-2-508x406x5mm/dp/B07S3DWGT5/ref=sr_1_24?keywords=monolith+mouse+pads&qid=1569941854&sr=8-24
     // wakeUpCall m-330   : https://www.amazon.com/Monolith-M-330-Anti-Fray-13x13x0-2-330x330x5mm/dp/B07S1YS733/ref=sr_1_11?keywords=monolith+mouse+pads&qid=1569941854&sr=8-11
     // wakeupCall m-508   : https://www.amazon.com/Monolith-M-508-Anti-Fray-20x16x0-2-508x406x5mm/dp/B07S16L4L8/ref=sr_1_12?keywords=monolith+mouse+pads&qid=1569941854&sr=8-12
     // Aethera m-508      : https://www.amazon.com/Monolith-M-508-Anti-Fray-20x16x0-2-508x406x5mm/dp/B07S3F5M9R/ref=sr_1_16?keywords=monolith+mouse+pads&qid=1569941854&sr=8-16
     // Aethera m-330      : https://www.amazon.com/Monolith-M-330-Anti-Fray-13x13x0-2-330x330x5mm/dp/B07S46PDSJ/ref=sr_1_25?keywords=monolith+mouse+pads&qid=1569941854&sr=8-25
     // summerSchool m-330 : https://www.amazon.com/Monolith-M-330-SUMMERSCHOOL-Anti-Fray-330x330x5mm/dp/B07S58M1NP/ref=sr_1_17?keywords=monolith+mouse+pads&qid=1569941854&sr=8-17
     // suumerSchool m-508 : https://www.amazon.com/Monolith-M-508-SUMMERSCHOOL-Anti-Fray-508x406x5mm/dp/B07RZ44S9W/ref=sr_1_19?keywords=monolith+mouse+pads&qid=1569941854&sr=8-19
    }

 }, false);