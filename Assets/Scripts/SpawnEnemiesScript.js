#pragma strict
var enemyPrefab:Transform;
var spawnRate:float = 2;
var spawnCooldown:float;

function Start () {
	spawnCooldown = 0;
}

function Update () {
	if (spawnCooldown > 0){
      	spawnCooldown -= Time.deltaTime;
    } 
    Spawn();
}

function CanSpawn(){
	return (spawnCooldown <= 0);
}

function Spawn() {
	if (CanSpawn()){
    	spawnCooldown = spawnRate;
    	
    	var enemyPosition = Vector2(4, (Random.value - 0.5)*4);
    	
    	var enemyInstance : Transform = Instantiate(enemyPrefab, enemyPosition, Quaternion.identity);
    }
}
