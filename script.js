//your JS code here. If required.
const levelElement = document.getElementById("level");
let level = 0;
 while(true){
	 if(levelElement.tagName === "HTML"){
		 break;
	 }
	 levelElement = levelElement.parentNode;
	 level++;
 }

alert(`The level of the element is: ${level}`);