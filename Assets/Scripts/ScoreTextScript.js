#pragma strict
private var scoreScript:ScoreScript;

function Start () {
	scoreScript = GameObject.Find("Scripts").GetComponent("ScoreScript");
}

function Update () {
	guiText.text = "Score : " + scoreScript.GetScore();
}