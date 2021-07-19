window.onload = function (){
    let calcu = document.getElementsByTagName("li");
	let screen = document.querySelectorAll(' p')[0];
	let clear =   document.getElementsByClassName('clear')[0];
	
	for(let i=0;i< calcu.length;i+=1){
		  if( calcu[i].innerHTML === '='){
            calcu[i].addEventListener("click", calculate(i));
		  }else{
            calcu[i].addEventListener("click", addtocurrentvalue(i));
		  }
	}
	

	
	
	function addtocurrentvalue (i){
		return function(){
			if ( calcu[i].innerHTML === "÷") {
               screen.innerHTML  +=  "/ " ;
      }else if( calcu [i].innerHTML === "x"){
			      screen.innerHTML += "*";
		   } else{
			   screen.innerHTML  +=  calcu [i].innerHTML;
		   }
	  };
   }
 


   clear.onclick = function () {
    screen.innerHTML = '';
  }; 

 function calculate(i) {
    return function () {
        screen.innerHTML = eval(screen.innerHTML);
    };
  }
};