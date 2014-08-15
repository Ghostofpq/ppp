#pragma strict
var HP=1;

function Start () {

}

function Update () {
	
}

function TakeDamage(damage:int){
	HP = HP - damage;
	if(HP<=0){
		Destroy(gameObject);
	}
}