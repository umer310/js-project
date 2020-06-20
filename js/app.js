var priceController = (function(){

     


})();

var UIControllor =(function(){

    return{
        getinput:function(){
            return{
                plus:document.querySelector('.plus-btn').value = 1,
              nigative :document.querySelector('.plus-btn').value,
             qty : document.querySelector('.qty-input').value
            }
            
        }
    }

})();



//Global PP Controlller
var controller = (function(priceCtrl, UICtrl){
    var buttons = document.getElementsByClassName('plus-item');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", function(){ 
            console.log("Hello"); 
        })
    }

    

})(priceController, UIControllor);