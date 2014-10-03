#pragma strict
var NeedsAFollowerThreshold:float;

function Start () {
}

function Update () {
	transform.Translate(Vector2(-1,0) * Time.deltaTime);
}

function NeedsAFollower(){
	if(transform.position.x < NeedsAFollowerThreshold ){
		return true;
	}
	return false;
}

function OnBecameInvisible(){
	Destroy(gameObject);
}