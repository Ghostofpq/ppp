#pragma strict

var teta:float = 0; 
var tetaSpeed:float = 0.01;
var frontalSpeed:float = 0.5;
var speedFactor:float = 1;
var amplitude:float = 0.5;
var hp = 1;

function Start () {

}

function Update () {
	teta = teta + tetaSpeed; 
	var velocity = Vector2(-frontalSpeed, amplitude * Mathf.Cos(teta));
	
	
	transform.Translate(velocity * Time.deltaTime * speedFactor);
	if(transform.position.x < -6.5 || transform.position.x > 6.5){
		Destroy (gameObject); 
	}
	if(transform.position.y < -2.5){
		transform.position.y = -2.5; 
	}
	if(transform.position.y > 2.5){
		transform.position.y = 2.5; 
	}
	
	var weapon:WeaponScript = GetComponent("WeaponScript");
	weapon.deltaPos = Vector2(-0.3, -0.15);
	weapon.FireWeapon();
}