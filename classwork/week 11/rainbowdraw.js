var color = 0;
//important to create this variable outside the function 

document.onmousemove = function(event){
	// var x = event["x"];
	// var y = event["y"];
	// these two are the same things 
	// this only works with strings(objects)
	var x = event.x;
	var y = event.y;
	// console.log( x, y);
	var div = document.createElement("div");
	div.style.left = x + "px";
	div.style.top = y + "px";
	div.style.backgroundColor = "hsl(" + color + ",100%,50%)";
	document.body.appendChild(div);

	color = color + 1;
}
