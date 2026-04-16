gdjs.Player_32settings_32gunCode = {};
gdjs.Player_32settings_32gunCode.localVariables = [];
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects1_1final = [];

gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects1_1final = [];

gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects1_1final = [];

gdjs.Player_32settings_32gunCode.GDPlayerObjects1= [];
gdjs.Player_32settings_32gunCode.GDPlayerObjects2= [];
gdjs.Player_32settings_32gunCode.GDPlayerObjects3= [];
gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1= [];
gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects2= [];
gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects3= [];
gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1= [];
gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects2= [];
gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects3= [];
gdjs.Player_32settings_32gunCode.GDbulletObjects1= [];
gdjs.Player_32settings_32gunCode.GDbulletObjects2= [];
gdjs.Player_32settings_32gunCode.GDbulletObjects3= [];
gdjs.Player_32settings_32gunCode.GDbullet_9595collisionObjects1= [];
gdjs.Player_32settings_32gunCode.GDbullet_9595collisionObjects2= [];
gdjs.Player_32settings_32gunCode.GDbullet_9595collisionObjects3= [];
gdjs.Player_32settings_32gunCode.GDinteract_9595buttonObjects1= [];
gdjs.Player_32settings_32gunCode.GDinteract_9595buttonObjects2= [];
gdjs.Player_32settings_32gunCode.GDinteract_9595buttonObjects3= [];
gdjs.Player_32settings_32gunCode.GDdoge_9595followObjects1= [];
gdjs.Player_32settings_32gunCode.GDdoge_9595followObjects2= [];
gdjs.Player_32settings_32gunCode.GDdoge_9595followObjects3= [];
gdjs.Player_32settings_32gunCode.GDblack_9595stripeObjects1= [];
gdjs.Player_32settings_32gunCode.GDblack_9595stripeObjects2= [];
gdjs.Player_32settings_32gunCode.GDblack_9595stripeObjects3= [];
gdjs.Player_32settings_32gunCode.GDinteract_9595boxObjects1= [];
gdjs.Player_32settings_32gunCode.GDinteract_9595boxObjects2= [];
gdjs.Player_32settings_32gunCode.GDinteract_9595boxObjects3= [];
gdjs.Player_32settings_32gunCode.GDdialogueboxObjects1= [];
gdjs.Player_32settings_32gunCode.GDdialogueboxObjects2= [];
gdjs.Player_32settings_32gunCode.GDdialogueboxObjects3= [];
gdjs.Player_32settings_32gunCode.GDDialog_9595nameObjects1= [];
gdjs.Player_32settings_32gunCode.GDDialog_9595nameObjects2= [];
gdjs.Player_32settings_32gunCode.GDDialog_9595nameObjects3= [];
gdjs.Player_32settings_32gunCode.GDDialog_9595text2Objects1= [];
gdjs.Player_32settings_32gunCode.GDDialog_9595text2Objects2= [];
gdjs.Player_32settings_32gunCode.GDDialog_9595text2Objects3= [];
gdjs.Player_32settings_32gunCode.GDDLG_9595STICKERObjects1= [];
gdjs.Player_32settings_32gunCode.GDDLG_9595STICKERObjects2= [];
gdjs.Player_32settings_32gunCode.GDDLG_9595STICKERObjects3= [];
gdjs.Player_32settings_32gunCode.GDDialog_9595textObjects1= [];
gdjs.Player_32settings_32gunCode.GDDialog_9595textObjects2= [];
gdjs.Player_32settings_32gunCode.GDDialog_9595textObjects3= [];
gdjs.Player_32settings_32gunCode.GDnext_9595buttonObjects1= [];
gdjs.Player_32settings_32gunCode.GDnext_9595buttonObjects2= [];
gdjs.Player_32settings_32gunCode.GDnext_9595buttonObjects3= [];
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects1= [];
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects2= [];
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects3= [];
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects1= [];
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects2= [];
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects3= [];
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects1= [];
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects2= [];
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects3= [];
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595SHOOTObjects1= [];
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595SHOOTObjects2= [];
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595SHOOTObjects3= [];


gdjs.Player_32settings_32gunCode.mapOfGDgdjs_9546Player_959532settings_959532gunCode_9546GDplayer_95959595gunObjects1Objects = Hashtable.newFrom({"player_gun": gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1});
gdjs.Player_32settings_32gunCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1, gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects2.length;i<l;++i) {
    if ( gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects2[k] = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects2[i];
        ++k;
    }
}
gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects2 */
{for(var i = 0, len = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects2.length ;i < len;++i) {
    gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects2[i].getBehavior("Animation").setAnimationName("run");
}
}}

}


{

/* Reuse gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length;i<l;++i) {
    if ( gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[k] = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i];
        ++k;
    }
}
gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1 */
{for(var i = 0, len = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length ;i < len;++i) {
    gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i].getBehavior("Animation").setAnimationName("fall");
}
}}

}


};gdjs.Player_32settings_32gunCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length;i<l;++i) {
    if ( gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[k] = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i];
        ++k;
    }
}
gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1 */
{for(var i = 0, len = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length ;i < len;++i) {
    gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


};gdjs.Player_32settings_32gunCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_gun"), gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_gun_arm"), gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1);
{for(var i = 0, len = gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1.length ;i < len;++i) {
    gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1[i].getBehavior("Sticker").Stick(gdjs.Player_32settings_32gunCode.mapOfGDgdjs_9546Player_959532settings_959532gunCode_9546GDplayer_95959595gunObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player_gun"), gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length;i<l;++i) {
    if ( gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[k] = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i];
        ++k;
    }
}
gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_gun_arm"), gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1);
{for(var i = 0, len = gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1.length ;i < len;++i) {
    gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Player_32settings_32gunCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player_gun"), gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length;i<l;++i) {
    if ( !(gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[k] = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i];
        ++k;
    }
}
gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1 */
gdjs.copyArray(runtimeScene.getObjects("player_gun_arm"), gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1);
{for(var i = 0, len = gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1.length ;i < len;++i) {
    gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length ;i < len;++i) {
    gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
{ //Subevents
gdjs.Player_32settings_32gunCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MBLBTN_JUMP"), gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects2);
for (var i = 0, k = 0, l = gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects2.length;i<l;++i) {
    if ( gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects2[k] = gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects2[i];
        ++k;
    }
}
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects1_1final.indexOf(gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects2[j]) === -1 )
            gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects1_1final.push(gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects1_1final, gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_gun"), gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1);
{for(var i = 0, len = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length ;i < len;++i) {
    gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length ;i < len;++i) {
    gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i].getBehavior("Animation").setAnimationName("jump");
}
}}

}


{

gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MBLBTN_LEFT"), gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects2);
for (var i = 0, k = 0, l = gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects2.length;i<l;++i) {
    if ( gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects2[k] = gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects2[i];
        ++k;
    }
}
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects1_1final.indexOf(gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects2[j]) === -1 )
            gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects1_1final.push(gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects1_1final, gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_gun"), gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_gun_arm"), gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1);
{for(var i = 0, len = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length ;i < len;++i) {
    gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length ;i < len;++i) {
    gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1.length ;i < len;++i) {
    gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MBLBTN_RIGHT"), gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects2);
for (var i = 0, k = 0, l = gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects2.length;i<l;++i) {
    if ( gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects2[k] = gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects2[i];
        ++k;
    }
}
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects1_1final.indexOf(gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects2[j]) === -1 )
            gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects1_1final.push(gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects1_1final, gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_gun"), gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_gun_arm"), gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1);
{for(var i = 0, len = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length ;i < len;++i) {
    gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length ;i < len;++i) {
    gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1.length ;i < len;++i) {
    gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};

gdjs.Player_32settings_32gunCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Player_32settings_32gunCode.GDPlayerObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDPlayerObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDPlayerObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDbulletObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDbulletObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDbulletObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDbullet_9595collisionObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDbullet_9595collisionObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDbullet_9595collisionObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDinteract_9595buttonObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDinteract_9595buttonObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDinteract_9595buttonObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDdoge_9595followObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDdoge_9595followObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDdoge_9595followObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDblack_9595stripeObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDblack_9595stripeObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDblack_9595stripeObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDinteract_9595boxObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDinteract_9595boxObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDinteract_9595boxObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDdialogueboxObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDdialogueboxObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDdialogueboxObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595nameObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595nameObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595nameObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595text2Objects1.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595text2Objects2.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595text2Objects3.length = 0;
gdjs.Player_32settings_32gunCode.GDDLG_9595STICKERObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDDLG_9595STICKERObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDDLG_9595STICKERObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595textObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595textObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595textObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDnext_9595buttonObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDnext_9595buttonObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDnext_9595buttonObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595SHOOTObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595SHOOTObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595SHOOTObjects3.length = 0;

gdjs.Player_32settings_32gunCode.eventsList2(runtimeScene);
gdjs.Player_32settings_32gunCode.GDPlayerObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDPlayerObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDPlayerObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDplayer_9595gunObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDplayer_9595gun_9595armObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDbulletObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDbulletObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDbulletObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDbullet_9595collisionObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDbullet_9595collisionObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDbullet_9595collisionObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDinteract_9595buttonObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDinteract_9595buttonObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDinteract_9595buttonObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDdoge_9595followObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDdoge_9595followObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDdoge_9595followObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDblack_9595stripeObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDblack_9595stripeObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDblack_9595stripeObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDinteract_9595boxObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDinteract_9595boxObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDinteract_9595boxObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDdialogueboxObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDdialogueboxObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDdialogueboxObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595nameObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595nameObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595nameObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595text2Objects1.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595text2Objects2.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595text2Objects3.length = 0;
gdjs.Player_32settings_32gunCode.GDDLG_9595STICKERObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDDLG_9595STICKERObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDDLG_9595STICKERObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595textObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595textObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDDialog_9595textObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDnext_9595buttonObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDnext_9595buttonObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDnext_9595buttonObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595LEFTObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595RIGHTObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595JUMPObjects3.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595SHOOTObjects1.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595SHOOTObjects2.length = 0;
gdjs.Player_32settings_32gunCode.GDMBLBTN_9595SHOOTObjects3.length = 0;


return;

}

gdjs['Player_32settings_32gunCode'] = gdjs.Player_32settings_32gunCode;
