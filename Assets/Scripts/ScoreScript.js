#pragma strict
var score = 0;
var activateScoreBoard = false;

function Add (point:int) {
	score += point;
	activateScoreBoard = false;
}


function OnGUI(){
	if(activateScoreBoard){
		var buttonWidth = Screen.width/6; 
		var buttonHeight = Screen.height/10;
	
		var buttonRect:Rect = Rect((Screen.width-buttonWidth)/2,6*buttonHeight, buttonWidth, buttonHeight);
		
		if(GUI.Button(buttonRect,score.ToString())){
			Application.LoadLevel("menu");
		}
	}
}