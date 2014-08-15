#pragma strict

var shootCooldown:float;
var shotPrefab:Transform; 
var shootingRate:float = 0.5;
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

function FireWeapon(){
	if (CanAttack()){
    	shootCooldown = shootingRate;
    	// Création d'un objet copie du prefab
      	var shotInstance : Transform = Instantiate(shotPrefab, transform.position + deltaPos, Quaternion.identity);
  		
      	var shotscript:ShotScript = shotInstance.gameObject.GetComponent("ShotScript");
      	if(shotscript.isEnemyShot){
  			shotscript.velocity = Vector2(-speed * Mathf.Cos(teta), speed * Mathf.Sin(teta));
  		} else {
  			shotscript.velocity = Vector2(speed * Mathf.Cos(teta), speed * Mathf.Sin(teta));
  		}
      	return true; 	 	
    }
    return false; 	
}

function SetShootingRate(shootingRate:float){
	this.shootingRate = shootingRate;
}