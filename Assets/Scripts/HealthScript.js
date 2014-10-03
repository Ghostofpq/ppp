#pragma strict
var HP=1;

function TakeDamage(damage:int){
	HP = HP - damage;
	if(HP<=0){
		Destroy(gameObject);
	}
}

function GetHP(){
	return HP;
}