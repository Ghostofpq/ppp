#pragma strict
private var shipHealthScript:HealthScript; 
function Start () {
	shipHealthScript = GameObject.Find("Ship").GetComponent("HealthScript");
}

function Update () {
	guiText.text = "HP : " + shipHealthScript.GetHP();
}