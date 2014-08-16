#pragma strict

var maxSpeed = 1;
var posToGo:Vector2 = Vector2(0,0);
var target:Vector2 = Vector2(0,0);
var velocity:Vector2 = Vector2(0,0);
var shooter:int;
var teta:float = 0;
var hasCurrentTouchLeft:boolean;
var hasCurrentTouchRight:boolean;
var currentTouchLeft:int;
var currentTouchRight:int;
var end:boolean;
function Start () {	
	shooter=0;
	hasCurrentTouchLeft=false;
	hasCurrentTouchRight=false;
	end=false;
}

function ResolveTouch(){
	if (Input.touchCount > 0) {
		ResolveTouchLeft();
		ResolveTouchRight();
	}		
}

function ResolveTouchLeft(){
	hasCurrentTouchLeft=false;
	for (var i = Input.touchCount-1; i >= 0; i--) {
		if (Input.GetTouch(i).phase != TouchPhase.Ended) {
			if(Input.GetTouch(i).position.x < 400){					
				posToGo = Camera.main.ScreenToWorldPoint(Input.GetTouch(i).position);
				hasCurrentTouchLeft=true;
				break;
			}
		}
	}
}

function ResolveTouchRight(){
	hasCurrentTouchRight=false;
	for (var i = Input.touchCount-1; i >= 0; i--) {
		if (Input.GetTouch(i).phase != TouchPhase.Ended) {
			if(Input.GetTouch(i).position.x >1000){
				target = Camera.main.ScreenToWorldPoint(Input.GetTouch(i).position);
				hasCurrentTouchRight=true;
				break;
			}
		}
	}			
}

function Update () {
	var weapon:WeaponScript = GetComponent("WeaponScript");
	ResolveTouch();	
	
	if(! hasCurrentTouchRight){
		target = transform.position + Vector2(1,0);
	} 
	var dir:Vector3 = target - transform.position;
	teta = Mathf.Atan2(dir.y,dir.x);	
	transform.rotation = Quaternion.AngleAxis(teta * Mathf.Rad2Deg, Vector3.forward);
	var deltaX = Mathf.Cos(teta+(Mathf.PI/8)) * 0.6;
	var deltaX2 = Mathf.Cos(teta+(Mathf.PI/8)) * 0.7;
	var deltaY = Mathf.Sin(teta+(Mathf.PI/8)) * 0.6;
	var deltaY2 = Mathf.Sin(teta-(Mathf.PI/8)) * 0.7;
	weapon.teta=teta;
	if(shooter==0){		
		weapon.deltaPos = Vector2(deltaX, deltaY);
	}else if(shooter==1){
		weapon.deltaPos = Vector2(deltaX2, deltaY2);
	} 
	if(weapon.FireWeapon()){
		if(shooter==0){shooter=1;}
		else if(shooter==1){shooter=0;}
	}  
				
	// Max/Min it to not be too high or too low. 
	if(posToGo.y < -2.5){
		posToGo.y = -2.5;
	}else if(posToGo.y > 2.5){
		posToGo.y = 2.5;
	}						
	posToGo.x = -3;
    
    var delta = posToGo - transform.position;
    
    var animator:Animator = GetComponent("Animator"); 
   
     // Calculate velocity
    velocity.x = delta.x;
    if (delta.y < 0) {
    	velocity.y = Mathf.Max(-maxSpeed, delta.y);
    	
    	if (delta.y > -0.1) {
    		animator.SetInteger("Direction" , 1);
    	} else {
    		animator.SetInteger("Direction" , 2);
    	}
    } else {
    	velocity.y = Mathf.Min(maxSpeed, delta.y);
    	
    	if (delta.y < 0.1) {
    		animator.SetInteger("Direction" , 1);
    	} else {
    		animator.SetInteger("Direction" , 0);
    	}
    }   	
//    Debug.Log("Pos to go : "+posToGo+" from "+transform.position+"Velocity : " +velocity);
   	transform.Translate(Time.deltaTime * 10 * velocity);
}

function OnDestroy(){
	var scoreScript:ScoreScript = GameObject.Find("Scripts").GetComponent("ScoreScript");
	scoreScript.activateScoreBoard=true;
}



