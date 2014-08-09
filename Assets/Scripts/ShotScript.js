#pragma strict

var isEnemyShot = false;

function Start () {
	// Kills the pew object in 3 seconds after loading it
	Destroy (gameObject, 3); 
}

function Update () {
	transform.Translate(rigidbody2D.velocity * Time.deltaTime * 2);
	var animator:Animator = GetComponent("Animator");
	animator.SetFloat("TimeLived" , (animator.GetFloat("TimeLived")+Time.deltaTime));
}