gdjs.Intro2Code = {};
gdjs.Intro2Code.localVariables = [];
gdjs.Intro2Code.GDjogarObjects1= [];
gdjs.Intro2Code.GDjogarObjects2= [];
gdjs.Intro2Code.GDbg_9595introObjects1= [];
gdjs.Intro2Code.GDbg_9595introObjects2= [];
gdjs.Intro2Code.GDIntro2Objects1= [];
gdjs.Intro2Code.GDIntro2Objects2= [];
gdjs.Intro2Code.GDvoltarObjects1= [];
gdjs.Intro2Code.GDvoltarObjects2= [];
gdjs.Intro2Code.GDcursorObjects1= [];
gdjs.Intro2Code.GDcursorObjects2= [];


gdjs.Intro2Code.mapOfGDgdjs_9546Intro2Code_9546GDjogarObjects1Objects = Hashtable.newFrom({"jogar": gdjs.Intro2Code.GDjogarObjects1});
gdjs.Intro2Code.mapOfGDgdjs_9546Intro2Code_9546GDvoltarObjects1Objects = Hashtable.newFrom({"voltar": gdjs.Intro2Code.GDvoltarObjects1});
gdjs.Intro2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Intro2Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.Intro2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Intro2Code.GDcursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Intro2Code.GDcursorObjects1);
{for(var i = 0, len = gdjs.Intro2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Intro2Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Intro2Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Intro2Code.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("jogar"), gdjs.Intro2Code.GDjogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Intro2Code.mapOfGDgdjs_9546Intro2Code_9546GDjogarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NewScene", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sounds/cockatrice_playcard.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("voltar"), gdjs.Intro2Code.GDvoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Intro2Code.mapOfGDgdjs_9546Intro2Code_9546GDvoltarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sounds/cockatrice_playcard.mp3", false, 100, 1);
}}

}


};

gdjs.Intro2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Intro2Code.GDjogarObjects1.length = 0;
gdjs.Intro2Code.GDjogarObjects2.length = 0;
gdjs.Intro2Code.GDbg_9595introObjects1.length = 0;
gdjs.Intro2Code.GDbg_9595introObjects2.length = 0;
gdjs.Intro2Code.GDIntro2Objects1.length = 0;
gdjs.Intro2Code.GDIntro2Objects2.length = 0;
gdjs.Intro2Code.GDvoltarObjects1.length = 0;
gdjs.Intro2Code.GDvoltarObjects2.length = 0;
gdjs.Intro2Code.GDcursorObjects1.length = 0;
gdjs.Intro2Code.GDcursorObjects2.length = 0;

gdjs.Intro2Code.eventsList0(runtimeScene);
gdjs.Intro2Code.GDjogarObjects1.length = 0;
gdjs.Intro2Code.GDjogarObjects2.length = 0;
gdjs.Intro2Code.GDbg_9595introObjects1.length = 0;
gdjs.Intro2Code.GDbg_9595introObjects2.length = 0;
gdjs.Intro2Code.GDIntro2Objects1.length = 0;
gdjs.Intro2Code.GDIntro2Objects2.length = 0;
gdjs.Intro2Code.GDvoltarObjects1.length = 0;
gdjs.Intro2Code.GDvoltarObjects2.length = 0;
gdjs.Intro2Code.GDcursorObjects1.length = 0;
gdjs.Intro2Code.GDcursorObjects2.length = 0;


return;

}

gdjs['Intro2Code'] = gdjs.Intro2Code;
