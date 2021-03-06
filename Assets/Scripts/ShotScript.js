﻿#pragma strict

var isEnemyShot:boolean = false;
var velocity:Vector2 = Vector2(0,0);
var speedFactor:float = 3.0;
var collisionsActivated:boolean = false;

function Start () {
	// Kills the pew object in 3 seconds after loading it
	Destroy (gameObject, 3); 
}

function Update () {
	// Move
	transform.Translate(velocity * Time.deltaTime * speedFactor);
	// For animator 
	if(!collisionsActivated){		
		var animator:Animator = GetComponent("Animator");
		animator.SetFloat("TimeLived" , (animator.GetFloat("TimeLived")+Time.deltaTime));
		collisionsActivated = 1 > animator.GetFloat("TimeLived");
	}
}

function OnCollisionEnter2D(collision:Collision2D){
	var healthScript:HealthScript;
	var scoreScript:ScoreScript = GameObject.Find("Scripts").GetComponent("ScoreScript");
	// No Friendly Fire
	if(collision.gameObject.tag=="enemy" && !isEnemyShot){
		healthScript = collision.gameObject.GetComponent("HealthScript");
		healthScript.TakeDamage(1);
		scoreScript.Add(1);
	}else if(collision.gameObject.tag=="friendly" && isEnemyShot){
		healthScript = collision.gameObject.GetComponent("HealthScript");
		healthScript.TakeDamage(1);
	}
	
	if(collisionsActivated){
		Destroy(gameObject); 
	}
}

function OnBecameInvisible(){
	Destroy(gameObject);
}