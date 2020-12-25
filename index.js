// for(let a = 0; a <= document.querySelectorAll("button.drum").length - 1; a++) {
//     document.querySelectorAll("button.drum")[a].addEventListener("click", function handleClick() {
//         makeSound(this.innerHTML);
//         buttonAnimation(this.innerHTML);
//    });
// }
let left = 0;

document.addEventListener("keydown", function(event) {
    moveCar(event.key);
});

function moveCar(key) {
    switch (key) {
        case "h":
            
            left = 140;
            document.querySelector("img.car1").setAttribute("style", "left: " + left + "px;");
            document.querySelector("span.letter1").innerHTML="";

            document.addEventListener("keydown", function(event1) {
                idk(event1.key);
            });

            function idk(key) {
                switch (key) {
                    case "i":
                        
                        left = 280;
                        document.querySelector("img.car1").setAttribute("style", "left: " + left + "px;");
                        document.querySelector("span.letter2").innerHTML="";
                        
                        document.addEventListener("keydown", function(event2) {
                            idkk(event2.key);
                        });
            
                        function idkk(key) {
                            switch (key) {
                                case "i":
                                    left = 420;
                                    document.querySelector("span.letter3").innerHTML="";
                                    document.addEventListener("keydown", function(event3) {
                                        idkkk(event3.key);
                                    });
                        
                                    function idkkk(key) {
                                        switch (key) {
                                            case "a":
                                                left = 560;
                                                document.querySelector("span.letter4").innerHTML="";
                                               
                                                document.querySelector("img.car1").setAttribute("style", "left: " + left + "px;");

                                                document.addEventListener("keydown", function(event4) {
                                                    idkkkk(event4.key);
                                                });
                                    
                                                function idkkkk(key) {
                                                    switch (key) {
                                                        case "m":
                                                            left = 700;
                                                            document.querySelector("span.letter5").innerHTML="";
                                                            
                                                            document.querySelector("img.car1").setAttribute("style", "left: " + left + "px;");

                                                            document.addEventListener("keydown", function(event5) {
                                                                idkkkKk(event5.key);
                                                            });
                                                
                                                            function idkkkKk(key) {
                                                                switch (key) {
                                                                    case "t":
                                                                        left = 840;
                                                                        document.querySelector("span.letter6").innerHTML="";
                                                                       
                                                                        document.querySelector("img.car1").setAttribute("style", "left: " + left + "px;");

                                                                        document.addEventListener("keydown", function(event6) {
                                                                            idkkkkkk(event6.key);
                                                                        });
                                                            
                                                                        function idkkkkkk(key) {
                                                                            switch (key) {
                                                                                case "h":
                                                                                    left = 980;
                                                                                    document.querySelector("span.letter7").innerHTML="";
                                                                                    document.addEventListener("keydown", function(event7) {
                                                                                        idkkkkkkk(event7.key);
                                                                                    });
                                                                        
                                                                                    function idkkkkkkk(key) {
                                                                                        switch (key) {
                                                                                            case "e":
                                                                                                left = 1120;
                                                                                                document.querySelector("span.letter8").innerHTML="";
                                                                                               
                                                                                                document.querySelector("img.car1").setAttribute("style", "left: " + left + "px;");

                                                                                                document.addEventListener("keydown", function(event8) {
                                                                                                    idkkkkkkkk(event8.key);
                                                                                                });
                                                                                    
                                                                                                function idkkkkkkkk(key) {
                                                                                                    switch (key) {
                                                                                                        case "o":
                                                                                                            left = 1260;
                                                                                                            document.querySelector("span.letter9").innerHTML="";
                                                                                                            
                                                                                                            document.querySelector("img.car1").setAttribute("style", "left: " + left + "px;");

                                                                                                            document.addEventListener("keydown", function(event9) {
                                                                                                                idkkkkkkkkk(event9.key);
                                                                                                            });
                                                                                                
                                                                                                            function idkkkkkkkkk(key) {
                                                                                                                switch (key) {
                                                                                                                    case "p":   
                                                                                                                    left = 1400;                                                                                                 
                                                                                                                        document.querySelector("span.letter10").innerHTML="";
                                                                                                                     
                                                                                                                        document.querySelector("img.car1").setAttribute("style", "left: " + left + "px;");
                                                                                                                }
                                                                                                            }
                                                                                                    }
                                                                                                }
                                                                                        }
                                                                                    }
                                                                            }
                                                                        }
                                                                        break;
                                                                        
                                                                        default:
                                                                            break;
                                                                }
                                                            }
                                                            break;
                                                            
                                                            default:
                                                                break;
                                                    }
                                                }
                                                break;
                                                
                                                default:
                                                    break;
                                        }
                                    }
                                    break;
                                    
                                    default:
                                        break;
                            }
                        }
                        break;

                        default:
                            break;
                }
            }
            // case "a":
            // alert("hey")
            break;
        default:
            break;
    }
}

setTimeout(function() {
    document.querySelector("img.car2").setAttribute("style", "left: 140px;");

    setTimeout(function() {
        document.querySelector("img.car2").setAttribute("style", "left: 280px;");
        setTimeout(function() {
            document.querySelector("img.car2").setAttribute("style", "left: 420px;");
            setTimeout(function() {
                document.querySelector("img.car2").setAttribute("style", "left: 560px;");
                setTimeout(function() {
                    document.querySelector("img.car2").setAttribute("style", "left: 700px;");
                    setTimeout(function() {
                        document.querySelector("img.car2").setAttribute("style", "left: 840px;");
                        setTimeout(function() {
                            document.querySelector("img.car2").setAttribute("style", "left: 980px;");
                            setTimeout(function() {
                                document.querySelector("img.car2").setAttribute("style", "left: 1120px;");
                                setTimeout(function() {
                                    document.querySelector("img.car2").setAttribute("style", "left: 1260px;");
                                    setTimeout(function() {
                                        document.querySelector("img.car2").setAttribute("style", "left: 1400px;");
                                        if(left === 1400) {
                                            document.querySelector(".game").style.display="none";
                                            document.querySelector(".won").style.display="block";
                                        } else if(left < 1400){
                                            // let playSound = ("feef-volume-enhanced-headphone-users-beware.mp3");
                                            // playSound.play();
                                            document.querySelector(".game").style.display="none";
                                            document.querySelector(".lose").style.display="block";
                                        }
                                    }, 350);
                                }, 350);
                            }, 350);
                        }, 350);
                    }, 350);
                }, 350);
            }, 350);
        }, 350);
    }, 350);
}, 350);