var mainContainer = document.getElementsByClassName('main-container')[0];
var mainYellow = document.getElementsByClassName('main-yellow')[0];
var mainRed = document.getElementsByClassName('main-red')[0];
var imageContainer = document.getElementsByClassName('image-container')[0];
var portFolio = document.getElementsByClassName('portfolio')[0];
var projectCont = document.getElementsByClassName('project');
function scroller(){
    console.log(document.body.scrollTop);
	if(document.documentElement.scrollTop > 40 || document.body.scrollTop > 40){
	    mainYellow.style.left = "100%";
	    mainRed.style.left = "-50%";
	    imageContainer.style.top = "-350px";
	    portFolio.style.transform = "scale(1,1)";
    }
    else{
	    mainYellow.style.left = "50%";
	    mainRed.style.left = "0";
	    imageContainer.style.top = "100px";
	    portFolio.style.transform = "scale(0,0)";
    }
    if(document.documentElement.scrollTop > 80 || document.body.scrollTop > 80){
    	mainContainer.style.top = "-630px";
    	for(var i = 0; i <= 3; i++){
    		projectCont[i].style.transform = "translate(0,0)";
    	}
    	
    }
    else{
    	document.getElementsByClassName('main-container')[0].style.top = "0";
    	for(var i = 0; i <= 3; i++){
    		projectCont[i].style.transform = "translate(0,400px)";
    	}
    }
    if(document.documentElement.scrollTop > 120 || document.body.scrollTop > 120){
        mainContainer.style.top = "-1260px";
        
    }
    else{
        mainContainer.style.top = "-630";

    }

}
window.onscroll = function(){
	scroller();
}