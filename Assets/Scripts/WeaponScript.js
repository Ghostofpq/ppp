#pragma strict

var shootingRate:float = 0.5;
var shootCooldown:float;
var shotPrefab:Rigidbody2D; 
var deltaPos:Vector2 = Vector2(0,0);
var teta:float = 0; 
var speed:float = 1;

function Start () {
	shootCooldown = 0;
}

function Update () {
	if (shootCooldown > 0){
      shootCooldown -= Time.deltaTime;
    }
}

function CanAttack(){
	return (shootCooldown <= 0);
}

function FireWeapon(isEnemy:boolean){
	if (CanAttack()){
    	shootCooldown = shootingRate;
    	// Création d'un objet copie du prefab
      	var shotInstance : Rigidbody2D = Instantiate(shotPrefab, transform.position + deltaPos, Quaternion.identity);
  		shotInstance.rigidbody2D.velocity = Vector2(speed * Mathf.Cos(teta), speed * Mathf.Sin(teta));
      	var shotscript:ShotScript = shotInstance.gameObject.GetComponent("ShotScript");
      	shotscript.isEnemyShot = isEnemy;
      	return true; 	 	
    }
    return false; 	
}

function SetShootingRate(shootingRate:float){
	this.shootingRate = shootingRate;
}