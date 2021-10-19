function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	// frameRate(10)
}

function draw() {
	// background(255)
	strokeWeight(2)
	let x = random(width),
			y = random(height)
	if ( random() < 0.5){
		fill(0)
		rect(x,y,200,50,20)
		textSize(30)
		fill(255)
		text( random(["HELLO","TAIWAN","CREATIVE","CODING"]) ,x+20,y+40)
	}else{
		//指定文字大小
		textSize(30)
		
		//白底黑字
		let myText = random(["CLAB","TAIWAN","當代文化實驗場"])
	  let w = textWidth(myText)
		//對話框
		fill(255)
		rect(x,y,w+50,50,20)
		
		fill(0)
		//文字
		text(myText,x+20,y+40)
	}
	
	// strokeWeight(10)
	// line(0,0,500,500)
	// textSize(50)
	// text(mouseX+" , " + mouseY,mouseX,mouseY)
	// ellipse(mouseX, mouseY, 20, 20);
}