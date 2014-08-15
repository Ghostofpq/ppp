#pragma strict

var isEnemyShot:boolean = false;
var velocity:Vector2 = Vector2(0,0);
var speedFactor:float = 3.0;

function Start () {
	// Kills the pew object in 3 seconds after loading it
	Destroy (gameObject, 3); 
}

function Update () {
	transform.Translate(velocity * Time.deltaTime * speedFactor);
	var animator:Animator = GetComponent("Animator");
	animator.SetFloat("TimeLived" , (animator.GetFloat("TimeLived")+Time.deltaTime));
}