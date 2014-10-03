#pragma strict
var backgroundDecorator1Prefab:Transform;
var groundDecorator1Prefab:Transform;
var groundDecorator2Prefab:Transform;
var currentDecoratorInstance:Transform;
var currentGroundDecoratorInstance:Transform;

function Start(){
	var decoratorPosition = Vector3(0,-0.6,11);
	currentDecoratorInstance = Instantiate(backgroundDecorator1Prefab, decoratorPosition, Quaternion.identity);
	
	var groundPosition = Vector3(0,-3.5,10);
	currentGroundDecoratorInstance= Instantiate(groundDecorator1Prefab, groundPosition, Quaternion.identity);
}

function Update(){
	var currentBackgroundDecoratorScript:BackgroundDecoratorScript = currentDecoratorInstance.GetComponent("BackgroundDecoratorScript");
	if(currentBackgroundDecoratorScript.NeedsAFollower()){
		GenerateAFollower();
	}
	var currentGroundDecoratorScript:BackgroundDecoratorScript = currentGroundDecoratorInstance.GetComponent("BackgroundDecoratorScript");
	if(currentGroundDecoratorScript.NeedsAFollower()){
		GenerateAGroundFollower();
	}
}

function GenerateAFollower(){
	var decoratorPosition = GetPositionToSpawnDecorator1();
	currentDecoratorInstance = Instantiate(backgroundDecorator1Prefab, decoratorPosition, Quaternion.identity);
}
function GenerateAGroundFollower(){
	
	var groundPosition = GetPositionToSpawnGroundDecorator1();
	currentGroundDecoratorInstance= Instantiate(groundDecorator1Prefab, groundPosition, Quaternion.identity);
}

function GetPositionToSpawnDecorator1(){
	return Vector3(13,-0.6,11);
}
function GetPositionToSpawnGroundDecorator1(){
	return Vector3(12.6,-3.5,10);
}
function GetPositionToSpawnGroundDecorator2(){
	return Vector3(12.8,-2.9,10);
}
