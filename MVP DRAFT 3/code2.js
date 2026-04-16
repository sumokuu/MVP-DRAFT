gdjs.pauseCode = {};
gdjs.pauseCode.localVariables = [];


gdjs.pauseCode.eventsList0 = function(runtimeScene) {

};

gdjs.pauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.pauseCode.eventsList0(runtimeScene);


return;

}

gdjs['pauseCode'] = gdjs.pauseCode;
