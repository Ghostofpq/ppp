#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
	var buttonWidth = Screen.width/6; 
	var buttonHeight = Screen.height/10;
	
	var buttonRectStart:Rect = Rect((Screen.width-buttonWidth)/2,6*buttonHeight, buttonWidth, buttonHeight);
	
	if(GUI.Button(buttonRectStart,"Start")){
		Application.LoadLevel("level1");
	}
	
	var buttonRectQuit:Rect = Rect((Screen.width-buttonWidth)/2,8*buttonHeight, buttonWidth, buttonHeight);
	
	if(GUI.Button(buttonRectQuit,"Quit")){
		Application.Quit();
	}
}