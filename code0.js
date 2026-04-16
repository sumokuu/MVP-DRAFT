gdjs.Player_32settingsCode = {};
gdjs.Player_32settingsCode.localVariables = [];
gdjs.Player_32settingsCode.GDPlayerObjects1= [];
gdjs.Player_32settingsCode.GDPlayerObjects2= [];
gdjs.Player_32settingsCode.GDPlayerObjects3= [];
gdjs.Player_32settingsCode.GDplayer_9595gunObjects1= [];
gdjs.Player_32settingsCode.GDplayer_9595gunObjects2= [];
gdjs.Player_32settingsCode.GDplayer_9595gunObjects3= [];
gdjs.Player_32settingsCode.GDplayer_9595gun_9595armObjects1= [];
gdjs.Player_32settingsCode.GDplayer_9595gun_9595armObjects2= [];
gdjs.Player_32settingsCode.GDplayer_9595gun_9595armObjects3= [];
gdjs.Player_32settingsCode.GDbulletObjects1= [];
gdjs.Player_32settingsCode.GDbulletObjects2= [];
gdjs.Player_32settingsCode.GDbulletObjects3= [];
gdjs.Player_32settingsCode.GDbullet_9595collisionObjects1= [];
gdjs.Player_32settingsCode.GDbullet_9595collisionObjects2= [];
gdjs.Player_32settingsCode.GDbullet_9595collisionObjects3= [];
gdjs.Player_32settingsCode.GDinteract_9595buttonObjects1= [];
gdjs.Player_32settingsCode.GDinteract_9595buttonObjects2= [];
gdjs.Player_32settingsCode.GDinteract_9595buttonObjects3= [];
gdjs.Player_32settingsCode.GDdoge_9595followObjects1= [];
gdjs.Player_32settingsCode.GDdoge_9595followObjects2= [];
gdjs.Player_32settingsCode.GDdoge_9595followObjects3= [];
gdjs.Player_32settingsCode.GDblack_9595stripeObjects1= [];
gdjs.Player_32settingsCode.GDblack_9595stripeObjects2= [];
gdjs.Player_32settingsCode.GDblack_9595stripeObjects3= [];
gdjs.Player_32settingsCode.GDinteract_9595boxObjects1= [];
gdjs.Player_32settingsCode.GDinteract_9595boxObjects2= [];
gdjs.Player_32settingsCode.GDinteract_9595boxObjects3= [];
gdjs.Player_32settingsCode.GDdialogueboxObjects1= [];
gdjs.Player_32settingsCode.GDdialogueboxObjects2= [];
gdjs.Player_32settingsCode.GDdialogueboxObjects3= [];
gdjs.Player_32settingsCode.GDDialog_9595nameObjects1= [];
gdjs.Player_32settingsCode.GDDialog_9595nameObjects2= [];
gdjs.Player_32settingsCode.GDDialog_9595nameObjects3= [];
gdjs.Player_32settingsCode.GDDialog_9595text2Objects1= [];
gdjs.Player_32settingsCode.GDDialog_9595text2Objects2= [];
gdjs.Player_32settingsCode.GDDialog_9595text2Objects3= [];
gdjs.Player_32settingsCode.GDDLG_9595STICKERObjects1= [];
gdjs.Player_32settingsCode.GDDLG_9595STICKERObjects2= [];
gdjs.Player_32settingsCode.GDDLG_9595STICKERObjects3= [];
gdjs.Player_32settingsCode.GDDialog_9595textObjects1= [];
gdjs.Player_32settingsCode.GDDialog_9595textObjects2= [];
gdjs.Player_32settingsCode.GDDialog_9595textObjects3= [];
gdjs.Player_32settingsCode.GDnext_9595buttonObjects1= [];
gdjs.Player_32settingsCode.GDnext_9595buttonObjects2= [];
gdjs.Player_32settingsCode.GDnext_9595buttonObjects3= [];
gdjs.Player_32settingsCode.GDMBLBTN_9595LEFTObjects1= [];
gdjs.Player_32settingsCode.GDMBLBTN_9595LEFTObjects2= [];
gdjs.Player_32settingsCode.GDMBLBTN_9595LEFTObjects3= [];
gdjs.Player_32settingsCode.GDMBLBTN_9595RIGHTObjects1= [];
gdjs.Player_32settingsCode.GDMBLBTN_9595RIGHTObjects2= [];
gdjs.Player_32settingsCode.GDMBLBTN_9595RIGHTObjects3= [];
gdjs.Player_32settingsCode.GDMBLBTN_9595JUMPObjects1= [];
gdjs.Player_32settingsCode.GDMBLBTN_9595JUMPObjects2= [];
gdjs.Player_32settingsCode.GDMBLBTN_9595JUMPObjects3= [];
gdjs.Player_32settingsCode.GDMBLBTN_9595SHOOTObjects1= [];
gdjs.Player_32settingsCode.GDMBLBTN_9595SHOOTObjects2= [];
gdjs.Player_32settingsCode.GDMBLBTN_9595SHOOTObjects3= [];


gdjs.Player_32settingsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Player_32settingsCode.GDPlayerObjects1, gdjs.Player_32settingsCode.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Player_32settingsCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Player_32settingsCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.Player_32settingsCode.GDPlayerObjects2[k] = gdjs.Player_32settingsCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Player_32settingsCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Player_32settingsCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Player_32settingsCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Player_32settingsCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.Player_32settingsCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Player_32settingsCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("jump");
}
}}

}


{

gdjs.copyArray(gdjs.Player_32settingsCode.GDPlayerObjects1, gdjs.Player_32settingsCode.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Player_32settingsCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Player_32settingsCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Player_32settingsCode.GDPlayerObjects2[k] = gdjs.Player_32settingsCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Player_32settingsCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Player_32settingsCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Player_32settingsCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Player_32settingsCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("run");
}
}}

}


{

/* Reuse gdjs.Player_32settingsCode.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Player_32settingsCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Player_32settingsCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Player_32settingsCode.GDPlayerObjects1[k] = gdjs.Player_32settingsCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Player_32settingsCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Player_32settingsCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Player_32settingsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Player_32settingsCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("fall");
}
}}

}


};gdjs.Player_32settingsCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Player_32settingsCode.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Player_32settingsCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Player_32settingsCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Player_32settingsCode.GDPlayerObjects1[k] = gdjs.Player_32settingsCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Player_32settingsCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Player_32settingsCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Player_32settingsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Player_32settingsCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


};gdjs.Player_32settingsCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Player_32settingsCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Player_32settingsCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Player_32settingsCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Player_32settingsCode.GDPlayerObjects1[k] = gdjs.Player_32settingsCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Player_32settingsCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Player_32settingsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Player_32settingsCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Player_32settingsCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Player_32settingsCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Player_32settingsCode.GDPlayerObjects1[k] = gdjs.Player_32settingsCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Player_32settingsCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Player_32settingsCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Player_32settingsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Player_32settingsCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}
{ //Subevents
gdjs.Player_32settingsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Player_32settingsCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Player_32settingsCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Player_32settingsCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Player_32settingsCode.GDPlayerObjects1[k] = gdjs.Player_32settingsCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Player_32settingsCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Player_32settingsCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Player_32settingsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Player_32settingsCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Player_32settingsCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Player_32settingsCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Player_32settingsCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Player_32settingsCode.GDPlayerObjects1[k] = gdjs.Player_32settingsCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Player_32settingsCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Player_32settingsCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Player_32settingsCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Player_32settingsCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};

gdjs.Player_32settingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Player_32settingsCode.GDPlayerObjects1.length = 0;
gdjs.Player_32settingsCode.GDPlayerObjects2.length = 0;
gdjs.Player_32settingsCode.GDPlayerObjects3.length = 0;
gdjs.Player_32settingsCode.GDplayer_9595gunObjects1.length = 0;
gdjs.Player_32settingsCode.GDplayer_9595gunObjects2.length = 0;
gdjs.Player_32settingsCode.GDplayer_9595gunObjects3.length = 0;
gdjs.Player_32settingsCode.GDplayer_9595gun_9595armObjects1.length = 0;
gdjs.Player_32settingsCode.GDplayer_9595gun_9595armObjects2.length = 0;
gdjs.Player_32settingsCode.GDplayer_9595gun_9595armObjects3.length = 0;
gdjs.Player_32settingsCode.GDbulletObjects1.length = 0;
gdjs.Player_32settingsCode.GDbulletObjects2.length = 0;
gdjs.Player_32settingsCode.GDbulletObjects3.length = 0;
gdjs.Player_32settingsCode.GDbullet_9595collisionObjects1.length = 0;
gdjs.Player_32settingsCode.GDbullet_9595collisionObjects2.length = 0;
gdjs.Player_32settingsCode.GDbullet_9595collisionObjects3.length = 0;
gdjs.Player_32settingsCode.GDinteract_9595buttonObjects1.length = 0;
gdjs.Player_32settingsCode.GDinteract_9595buttonObjects2.length = 0;
gdjs.Player_32settingsCode.GDinteract_9595buttonObjects3.length = 0;
gdjs.Player_32settingsCode.GDdoge_9595followObjects1.length = 0;
gdjs.Player_32settingsCode.GDdoge_9595followObjects2.length = 0;
gdjs.Player_32settingsCode.GDdoge_9595followObjects3.length = 0;
gdjs.Player_32settingsCode.GDblack_9595stripeObjects1.length = 0;
gdjs.Player_32settingsCode.GDblack_9595stripeObjects2.length = 0;
gdjs.Player_32settingsCode.GDblack_9595stripeObjects3.length = 0;
gdjs.Player_32settingsCode.GDinteract_9595boxObjects1.length = 0;
gdjs.Player_32settingsCode.GDinteract_9595boxObjects2.length = 0;
gdjs.Player_32settingsCode.GDinteract_9595boxObjects3.length = 0;
gdjs.Player_32settingsCode.GDdialogueboxObjects1.length = 0;
gdjs.Player_32settingsCode.GDdialogueboxObjects2.length = 0;
gdjs.Player_32settingsCode.GDdialogueboxObjects3.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595nameObjects1.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595nameObjects2.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595nameObjects3.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595text2Objects1.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595text2Objects2.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595text2Objects3.length = 0;
gdjs.Player_32settingsCode.GDDLG_9595STICKERObjects1.length = 0;
gdjs.Player_32settingsCode.GDDLG_9595STICKERObjects2.length = 0;
gdjs.Player_32settingsCode.GDDLG_9595STICKERObjects3.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595textObjects1.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595textObjects2.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595textObjects3.length = 0;
gdjs.Player_32settingsCode.GDnext_9595buttonObjects1.length = 0;
gdjs.Player_32settingsCode.GDnext_9595buttonObjects2.length = 0;
gdjs.Player_32settingsCode.GDnext_9595buttonObjects3.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595LEFTObjects1.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595LEFTObjects2.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595LEFTObjects3.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595RIGHTObjects1.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595RIGHTObjects2.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595RIGHTObjects3.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595JUMPObjects1.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595JUMPObjects2.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595JUMPObjects3.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595SHOOTObjects1.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595SHOOTObjects2.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595SHOOTObjects3.length = 0;

gdjs.Player_32settingsCode.eventsList2(runtimeScene);
gdjs.Player_32settingsCode.GDPlayerObjects1.length = 0;
gdjs.Player_32settingsCode.GDPlayerObjects2.length = 0;
gdjs.Player_32settingsCode.GDPlayerObjects3.length = 0;
gdjs.Player_32settingsCode.GDplayer_9595gunObjects1.length = 0;
gdjs.Player_32settingsCode.GDplayer_9595gunObjects2.length = 0;
gdjs.Player_32settingsCode.GDplayer_9595gunObjects3.length = 0;
gdjs.Player_32settingsCode.GDplayer_9595gun_9595armObjects1.length = 0;
gdjs.Player_32settingsCode.GDplayer_9595gun_9595armObjects2.length = 0;
gdjs.Player_32settingsCode.GDplayer_9595gun_9595armObjects3.length = 0;
gdjs.Player_32settingsCode.GDbulletObjects1.length = 0;
gdjs.Player_32settingsCode.GDbulletObjects2.length = 0;
gdjs.Player_32settingsCode.GDbulletObjects3.length = 0;
gdjs.Player_32settingsCode.GDbullet_9595collisionObjects1.length = 0;
gdjs.Player_32settingsCode.GDbullet_9595collisionObjects2.length = 0;
gdjs.Player_32settingsCode.GDbullet_9595collisionObjects3.length = 0;
gdjs.Player_32settingsCode.GDinteract_9595buttonObjects1.length = 0;
gdjs.Player_32settingsCode.GDinteract_9595buttonObjects2.length = 0;
gdjs.Player_32settingsCode.GDinteract_9595buttonObjects3.length = 0;
gdjs.Player_32settingsCode.GDdoge_9595followObjects1.length = 0;
gdjs.Player_32settingsCode.GDdoge_9595followObjects2.length = 0;
gdjs.Player_32settingsCode.GDdoge_9595followObjects3.length = 0;
gdjs.Player_32settingsCode.GDblack_9595stripeObjects1.length = 0;
gdjs.Player_32settingsCode.GDblack_9595stripeObjects2.length = 0;
gdjs.Player_32settingsCode.GDblack_9595stripeObjects3.length = 0;
gdjs.Player_32settingsCode.GDinteract_9595boxObjects1.length = 0;
gdjs.Player_32settingsCode.GDinteract_9595boxObjects2.length = 0;
gdjs.Player_32settingsCode.GDinteract_9595boxObjects3.length = 0;
gdjs.Player_32settingsCode.GDdialogueboxObjects1.length = 0;
gdjs.Player_32settingsCode.GDdialogueboxObjects2.length = 0;
gdjs.Player_32settingsCode.GDdialogueboxObjects3.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595nameObjects1.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595nameObjects2.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595nameObjects3.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595text2Objects1.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595text2Objects2.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595text2Objects3.length = 0;
gdjs.Player_32settingsCode.GDDLG_9595STICKERObjects1.length = 0;
gdjs.Player_32settingsCode.GDDLG_9595STICKERObjects2.length = 0;
gdjs.Player_32settingsCode.GDDLG_9595STICKERObjects3.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595textObjects1.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595textObjects2.length = 0;
gdjs.Player_32settingsCode.GDDialog_9595textObjects3.length = 0;
gdjs.Player_32settingsCode.GDnext_9595buttonObjects1.length = 0;
gdjs.Player_32settingsCode.GDnext_9595buttonObjects2.length = 0;
gdjs.Player_32settingsCode.GDnext_9595buttonObjects3.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595LEFTObjects1.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595LEFTObjects2.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595LEFTObjects3.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595RIGHTObjects1.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595RIGHTObjects2.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595RIGHTObjects3.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595JUMPObjects1.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595JUMPObjects2.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595JUMPObjects3.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595SHOOTObjects1.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595SHOOTObjects2.length = 0;
gdjs.Player_32settingsCode.GDMBLBTN_9595SHOOTObjects3.length = 0;


return;

}

gdjs['Player_32settingsCode'] = gdjs.Player_32settingsCode;
