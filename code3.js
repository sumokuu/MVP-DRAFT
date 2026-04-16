gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.GDmenu_9595bgObjects1= [];
gdjs.menuCode.GDmenu_9595bgObjects2= [];
gdjs.menuCode.GDmenu_9595titleObjects1= [];
gdjs.menuCode.GDmenu_9595titleObjects2= [];
gdjs.menuCode.GDnew_9595gameObjects1= [];
gdjs.menuCode.GDnew_9595gameObjects2= [];
gdjs.menuCode.GDcontinueObjects1= [];
gdjs.menuCode.GDcontinueObjects2= [];
gdjs.menuCode.GDkeysObjects1= [];
gdjs.menuCode.GDkeysObjects2= [];
gdjs.menuCode.GDquitObjects1= [];
gdjs.menuCode.GDquitObjects2= [];
gdjs.menuCode.GDmenu_9595splashObjects1= [];
gdjs.menuCode.GDmenu_9595splashObjects2= [];
gdjs.menuCode.GDBUTTONS_9595INTERACT_9595SCREENObjects1= [];
gdjs.menuCode.GDBUTTONS_9595INTERACT_9595SCREENObjects2= [];
gdjs.menuCode.GDPlayerObjects1= [];
gdjs.menuCode.GDPlayerObjects2= [];
gdjs.menuCode.GDplayer_9595gunObjects1= [];
gdjs.menuCode.GDplayer_9595gunObjects2= [];
gdjs.menuCode.GDplayer_9595gun_9595armObjects1= [];
gdjs.menuCode.GDplayer_9595gun_9595armObjects2= [];
gdjs.menuCode.GDbulletObjects1= [];
gdjs.menuCode.GDbulletObjects2= [];
gdjs.menuCode.GDbullet_9595collisionObjects1= [];
gdjs.menuCode.GDbullet_9595collisionObjects2= [];
gdjs.menuCode.GDinteract_9595buttonObjects1= [];
gdjs.menuCode.GDinteract_9595buttonObjects2= [];
gdjs.menuCode.GDdoge_9595followObjects1= [];
gdjs.menuCode.GDdoge_9595followObjects2= [];
gdjs.menuCode.GDblack_9595stripeObjects1= [];
gdjs.menuCode.GDblack_9595stripeObjects2= [];
gdjs.menuCode.GDinteract_9595boxObjects1= [];
gdjs.menuCode.GDinteract_9595boxObjects2= [];
gdjs.menuCode.GDdialogueboxObjects1= [];
gdjs.menuCode.GDdialogueboxObjects2= [];
gdjs.menuCode.GDDialog_9595nameObjects1= [];
gdjs.menuCode.GDDialog_9595nameObjects2= [];
gdjs.menuCode.GDDialog_9595text2Objects1= [];
gdjs.menuCode.GDDialog_9595text2Objects2= [];
gdjs.menuCode.GDDLG_9595STICKERObjects1= [];
gdjs.menuCode.GDDLG_9595STICKERObjects2= [];
gdjs.menuCode.GDDialog_9595textObjects1= [];
gdjs.menuCode.GDDialog_9595textObjects2= [];
gdjs.menuCode.GDnext_9595buttonObjects1= [];
gdjs.menuCode.GDnext_9595buttonObjects2= [];
gdjs.menuCode.GDMBLBTN_9595LEFTObjects1= [];
gdjs.menuCode.GDMBLBTN_9595LEFTObjects2= [];
gdjs.menuCode.GDMBLBTN_9595RIGHTObjects1= [];
gdjs.menuCode.GDMBLBTN_9595RIGHTObjects2= [];
gdjs.menuCode.GDMBLBTN_9595JUMPObjects1= [];
gdjs.menuCode.GDMBLBTN_9595JUMPObjects2= [];
gdjs.menuCode.GDMBLBTN_9595SHOOTObjects1= [];
gdjs.menuCode.GDMBLBTN_9595SHOOTObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("menu_bg"), gdjs.menuCode.GDmenu_9595bgObjects1);
{gdjs.evtTools.sound.unloadAllAudio(runtimeScene);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Title-screen-WIP-3.mp3", false, 100, 1);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.menuCode.GDmenu_9595bgObjects1.length !== 0 ? gdjs.menuCode.GDmenu_9595bgObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("new_game"), gdjs.menuCode.GDnew_9595gameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDnew_9595gameObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDnew_9595gameObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDnew_9595gameObjects1[k] = gdjs.menuCode.GDnew_9595gameObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDnew_9595gameObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("menu_splash"), gdjs.menuCode.GDmenu_9595splashObjects1);
/* Reuse gdjs.menuCode.GDnew_9595gameObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDmenu_9595splashObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDmenu_9595splashObjects1[i].getBehavior("Animation").setAnimationName("1");
}
}{for(var i = 0, len = gdjs.menuCode.GDmenu_9595splashObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDmenu_9595splashObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.menuCode.GDnew_9595gameObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDnew_9595gameObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs.menuCode.GDnew_9595gameObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDnew_9595gameObjects1[i].setTint("0;4;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("new_game"), gdjs.menuCode.GDnew_9595gameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDnew_9595gameObjects1.length;i<l;++i) {
    if ( !(gdjs.menuCode.GDnew_9595gameObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDnew_9595gameObjects1[k] = gdjs.menuCode.GDnew_9595gameObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDnew_9595gameObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("menu_splash"), gdjs.menuCode.GDmenu_9595splashObjects1);
/* Reuse gdjs.menuCode.GDnew_9595gameObjects1 */
{for(var i = 0, len = gdjs.menuCode.GDmenu_9595splashObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDmenu_9595splashObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.menuCode.GDmenu_9595splashObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDmenu_9595splashObjects1[i].getBehavior("Animation").setAnimationName("0");
}
}{for(var i = 0, len = gdjs.menuCode.GDmenu_9595splashObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDmenu_9595splashObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.menuCode.GDnew_9595gameObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDnew_9595gameObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.menuCode.GDnew_9595gameObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDnew_9595gameObjects1[i].setTint("212;229;155");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("new_game"), gdjs.menuCode.GDnew_9595gameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDnew_9595gameObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDnew_9595gameObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDnew_9595gameObjects1[k] = gdjs.menuCode.GDnew_9595gameObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDnew_9595gameObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BUTTONS_INTERACT_SCREEN"), gdjs.menuCode.GDBUTTONS_9595INTERACT_9595SCREENObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.menuCode.GDBUTTONS_9595INTERACT_9595SCREENObjects1.length !== 0 ? gdjs.menuCode.GDBUTTONS_9595INTERACT_9595SCREENObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BUTTONS_INTERACT_SCREEN"), gdjs.menuCode.GDBUTTONS_9595INTERACT_9595SCREENObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDBUTTONS_9595INTERACT_9595SCREENObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDBUTTONS_9595INTERACT_9595SCREENObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDBUTTONS_9595INTERACT_9595SCREENObjects1[k] = gdjs.menuCode.GDBUTTONS_9595INTERACT_9595SCREENObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDBUTTONS_9595INTERACT_9595SCREENObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 1 rat city", false);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDmenu_9595bgObjects1.length = 0;
gdjs.menuCode.GDmenu_9595bgObjects2.length = 0;
gdjs.menuCode.GDmenu_9595titleObjects1.length = 0;
gdjs.menuCode.GDmenu_9595titleObjects2.length = 0;
gdjs.menuCode.GDnew_9595gameObjects1.length = 0;
gdjs.menuCode.GDnew_9595gameObjects2.length = 0;
gdjs.menuCode.GDcontinueObjects1.length = 0;
gdjs.menuCode.GDcontinueObjects2.length = 0;
gdjs.menuCode.GDkeysObjects1.length = 0;
gdjs.menuCode.GDkeysObjects2.length = 0;
gdjs.menuCode.GDquitObjects1.length = 0;
gdjs.menuCode.GDquitObjects2.length = 0;
gdjs.menuCode.GDmenu_9595splashObjects1.length = 0;
gdjs.menuCode.GDmenu_9595splashObjects2.length = 0;
gdjs.menuCode.GDBUTTONS_9595INTERACT_9595SCREENObjects1.length = 0;
gdjs.menuCode.GDBUTTONS_9595INTERACT_9595SCREENObjects2.length = 0;
gdjs.menuCode.GDPlayerObjects1.length = 0;
gdjs.menuCode.GDPlayerObjects2.length = 0;
gdjs.menuCode.GDplayer_9595gunObjects1.length = 0;
gdjs.menuCode.GDplayer_9595gunObjects2.length = 0;
gdjs.menuCode.GDplayer_9595gun_9595armObjects1.length = 0;
gdjs.menuCode.GDplayer_9595gun_9595armObjects2.length = 0;
gdjs.menuCode.GDbulletObjects1.length = 0;
gdjs.menuCode.GDbulletObjects2.length = 0;
gdjs.menuCode.GDbullet_9595collisionObjects1.length = 0;
gdjs.menuCode.GDbullet_9595collisionObjects2.length = 0;
gdjs.menuCode.GDinteract_9595buttonObjects1.length = 0;
gdjs.menuCode.GDinteract_9595buttonObjects2.length = 0;
gdjs.menuCode.GDdoge_9595followObjects1.length = 0;
gdjs.menuCode.GDdoge_9595followObjects2.length = 0;
gdjs.menuCode.GDblack_9595stripeObjects1.length = 0;
gdjs.menuCode.GDblack_9595stripeObjects2.length = 0;
gdjs.menuCode.GDinteract_9595boxObjects1.length = 0;
gdjs.menuCode.GDinteract_9595boxObjects2.length = 0;
gdjs.menuCode.GDdialogueboxObjects1.length = 0;
gdjs.menuCode.GDdialogueboxObjects2.length = 0;
gdjs.menuCode.GDDialog_9595nameObjects1.length = 0;
gdjs.menuCode.GDDialog_9595nameObjects2.length = 0;
gdjs.menuCode.GDDialog_9595text2Objects1.length = 0;
gdjs.menuCode.GDDialog_9595text2Objects2.length = 0;
gdjs.menuCode.GDDLG_9595STICKERObjects1.length = 0;
gdjs.menuCode.GDDLG_9595STICKERObjects2.length = 0;
gdjs.menuCode.GDDialog_9595textObjects1.length = 0;
gdjs.menuCode.GDDialog_9595textObjects2.length = 0;
gdjs.menuCode.GDnext_9595buttonObjects1.length = 0;
gdjs.menuCode.GDnext_9595buttonObjects2.length = 0;
gdjs.menuCode.GDMBLBTN_9595LEFTObjects1.length = 0;
gdjs.menuCode.GDMBLBTN_9595LEFTObjects2.length = 0;
gdjs.menuCode.GDMBLBTN_9595RIGHTObjects1.length = 0;
gdjs.menuCode.GDMBLBTN_9595RIGHTObjects2.length = 0;
gdjs.menuCode.GDMBLBTN_9595JUMPObjects1.length = 0;
gdjs.menuCode.GDMBLBTN_9595JUMPObjects2.length = 0;
gdjs.menuCode.GDMBLBTN_9595SHOOTObjects1.length = 0;
gdjs.menuCode.GDMBLBTN_9595SHOOTObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDmenu_9595bgObjects1.length = 0;
gdjs.menuCode.GDmenu_9595bgObjects2.length = 0;
gdjs.menuCode.GDmenu_9595titleObjects1.length = 0;
gdjs.menuCode.GDmenu_9595titleObjects2.length = 0;
gdjs.menuCode.GDnew_9595gameObjects1.length = 0;
gdjs.menuCode.GDnew_9595gameObjects2.length = 0;
gdjs.menuCode.GDcontinueObjects1.length = 0;
gdjs.menuCode.GDcontinueObjects2.length = 0;
gdjs.menuCode.GDkeysObjects1.length = 0;
gdjs.menuCode.GDkeysObjects2.length = 0;
gdjs.menuCode.GDquitObjects1.length = 0;
gdjs.menuCode.GDquitObjects2.length = 0;
gdjs.menuCode.GDmenu_9595splashObjects1.length = 0;
gdjs.menuCode.GDmenu_9595splashObjects2.length = 0;
gdjs.menuCode.GDBUTTONS_9595INTERACT_9595SCREENObjects1.length = 0;
gdjs.menuCode.GDBUTTONS_9595INTERACT_9595SCREENObjects2.length = 0;
gdjs.menuCode.GDPlayerObjects1.length = 0;
gdjs.menuCode.GDPlayerObjects2.length = 0;
gdjs.menuCode.GDplayer_9595gunObjects1.length = 0;
gdjs.menuCode.GDplayer_9595gunObjects2.length = 0;
gdjs.menuCode.GDplayer_9595gun_9595armObjects1.length = 0;
gdjs.menuCode.GDplayer_9595gun_9595armObjects2.length = 0;
gdjs.menuCode.GDbulletObjects1.length = 0;
gdjs.menuCode.GDbulletObjects2.length = 0;
gdjs.menuCode.GDbullet_9595collisionObjects1.length = 0;
gdjs.menuCode.GDbullet_9595collisionObjects2.length = 0;
gdjs.menuCode.GDinteract_9595buttonObjects1.length = 0;
gdjs.menuCode.GDinteract_9595buttonObjects2.length = 0;
gdjs.menuCode.GDdoge_9595followObjects1.length = 0;
gdjs.menuCode.GDdoge_9595followObjects2.length = 0;
gdjs.menuCode.GDblack_9595stripeObjects1.length = 0;
gdjs.menuCode.GDblack_9595stripeObjects2.length = 0;
gdjs.menuCode.GDinteract_9595boxObjects1.length = 0;
gdjs.menuCode.GDinteract_9595boxObjects2.length = 0;
gdjs.menuCode.GDdialogueboxObjects1.length = 0;
gdjs.menuCode.GDdialogueboxObjects2.length = 0;
gdjs.menuCode.GDDialog_9595nameObjects1.length = 0;
gdjs.menuCode.GDDialog_9595nameObjects2.length = 0;
gdjs.menuCode.GDDialog_9595text2Objects1.length = 0;
gdjs.menuCode.GDDialog_9595text2Objects2.length = 0;
gdjs.menuCode.GDDLG_9595STICKERObjects1.length = 0;
gdjs.menuCode.GDDLG_9595STICKERObjects2.length = 0;
gdjs.menuCode.GDDialog_9595textObjects1.length = 0;
gdjs.menuCode.GDDialog_9595textObjects2.length = 0;
gdjs.menuCode.GDnext_9595buttonObjects1.length = 0;
gdjs.menuCode.GDnext_9595buttonObjects2.length = 0;
gdjs.menuCode.GDMBLBTN_9595LEFTObjects1.length = 0;
gdjs.menuCode.GDMBLBTN_9595LEFTObjects2.length = 0;
gdjs.menuCode.GDMBLBTN_9595RIGHTObjects1.length = 0;
gdjs.menuCode.GDMBLBTN_9595RIGHTObjects2.length = 0;
gdjs.menuCode.GDMBLBTN_9595JUMPObjects1.length = 0;
gdjs.menuCode.GDMBLBTN_9595JUMPObjects2.length = 0;
gdjs.menuCode.GDMBLBTN_9595SHOOTObjects1.length = 0;
gdjs.menuCode.GDMBLBTN_9595SHOOTObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
