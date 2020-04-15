
//Menu building variables
var canvas = document.getElementById('babylonCanvas');


////**************************************************************************
//********************* BABYLON ENGINE INITIALIZATION *****************
////**************************************************************************
var engine = new BABYLON.Engine(canvas, true, { premultipliedAlpha: false, preserveDrawingBuffer: true, stencil: true });
var scene = new BABYLON.Scene(engine);
var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
camera.setTarget(BABYLON.Vector3.Zero());
var baseUrl;
var model;
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8); //Background color

var createScene = function () {

    // Model loader
    BABYLON.GLTFFileLoader.IncrementalLoading = true;
    baseUrl = "/assets/models/";
    lowFile = "complete-umea.glb";

    BABYLON.SceneLoader.ImportMesh("", baseUrl, lowFile, scene, function (meshes) {

        // Camera 
        scene.createDefaultCameraOrLight(true, true, true);
        scene.activeCamera.alpha = Math.PI / 3;
        scene.activeCamera.beta = 7 * Math.PI / 16;
        scene.activeCamera.radius = 5000;
        scene.activeCamera.panningSensibility = 5;

        //Lightning
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 2, 0), scene);
        light.intensity = 0.3;

        model = meshes;

        for (var i = 1; i < meshes.length; i++) {

            meshes[i].actionManager = new BABYLON.ActionManager(scene);
            meshes[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev) {
            }, false));

            meshes[i].isVisible = umeaInfo.defaultLayers.includes(meshes[i].name);
            
            //meshes[i]._material.albedoColor = new BABYLON.Color3.FromHexString("#FF4444");

            //console.log(meshes[i]);

          /*  if (meshes[i].name == "Single_SidePanel1") {
                meshes[i].position = new BABYLON.Vector3(0, 2, 0);
                meshes[i].rotation = new BABYLON.Vector3(Math.PI / 4, 0, 0);
            }*/

    }


        var hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("assets/environment/room.dds", scene);
        scene.environmentTexture = hdrTexture;

    });

    /*BABYLON.SceneLoader.ImportMesh("", baseUrl, "Roswell.glb", scene, function (meshesB) {

        for (var i = 1; i < meshesB.length; i++) {
            console.log(meshesB);
            meshesB[i]._position.x = 2;
        }
    });*/

    return scene;
}


// call the createScene function
var scene = createScene();


// run the render loop
engine.runRenderLoop(function () {
    window.addEventListener("resize", function () { engine.resize(); });

    scene.render();

});


//FEATURES


var $featuresList = $("<div>", { "class": "list-group", "id": "featuresList" });
$("#featureChoice").append($featuresList);

for (nFeatures = 0; nFeatures < umeaInfo.Features.length; nFeatures++) {
    var $feature = $("<a>", {
        "class": "btn btn-feat",
        "id": "feature-" + umeaInfo.Features[nFeatures].Id,
        "text": umeaInfo.Features[nFeatures].Name,
        "onClick": "CreateOptions(\"" + umeaInfo.Features[nFeatures].Code + "\")"
    });
    $featuresList.append($feature)

}


//OPTIONS

function CreateOptions(inputFeaturesCode) {
    $("#geometryChoice").empty();
    $("#colorChoice").empty();
    $("#messageChoice").empty();
    for (nFeatures = 0; nFeatures < umeaInfo.Features.length; nFeatures++) {
        if (umeaInfo.Features[nFeatures].Code == inputFeaturesCode)
            if (umeaInfo.Features[nFeatures].Code) {                

                if (umeaInfo.Features[nFeatures].Code != "labels") {

                    if (umeaInfo.Features[nFeatures].isVisible) {
                        for (nOptions = 0; nOptions < umeaInfo.Features[nFeatures].Geometry.length; nOptions++) {
                            var $label = $("<a>", {
                                "class": "btn btn-geo",
                                "id": "feature-" + umeaInfo.Features[nFeatures].Geometry[nOptions].id,
                                "src": "assets/layout/" + umeaInfo.Features[nFeatures].Geometry[nOptions].Label + ".png",
                                "text": umeaInfo.Features[nFeatures].Geometry[nOptions].Label,
                                "onClick": "CreateGeometry(" + umeaInfo.Features[nFeatures].Geometry[nOptions].Id + ",\"" +
                                    inputFeaturesCode + "\")"
                            });
                            $("#geometryChoice").append($label);
                        }
                    }
                }

                if (umeaInfo.Features[nFeatures].Code == "labels") {

                    if (umeaInfo.Features[nFeatures].isVisible) {
                        for (nOptions = 0; nOptions < umeaInfo.Features[nFeatures].Geometry.length; nOptions++) {
                            var $geome = $("<img>", {
                                "class": "img-item2",
                                "id": "label-" + umeaInfo.Features[nFeatures].Geometry[nOptions].Id,
                                "src": "assets/layout/" + umeaInfo.Features[nFeatures].Geometry[nOptions].Label + ".png",
                                "text": umeaInfo.Features[nFeatures].Geometry[nOptions].Label,
                                "onClick": "ChangeLabel(\"" + umeaInfo.Features[nFeatures].Geometry[nOptions].Path + "\"" +  ",\"" +
                                    umeaInfo.Features[nFeatures].Geometry[nOptions].UsedLayers + "\")"
                            });
                            $("#geometryChoice").append($geome);
                        }
                    }
                }




                for (var nOptions = 0; nOptions < umeaInfo.Features[nFeatures].Message.length; nOptions++) {

                    var $messageOption = $("<div>", {
                        "class": "btn",
                        "id": "feature-" + umeaInfo.Features[nFeatures].Message[nOptions].id,
                        "text": umeaInfo.Features[nFeatures].Message[nOptions].Message,
                        "onClick": "CreateMessage(" + umeaInfo.Features[nFeatures].Message[nOptions].Id + ",\"" +
                            inputFeaturesCode + "\")"
                    });
                    $("#messageChoice").append($messageOption); 
                }

                for (var nOptions = 0; nOptions < umeaInfo.Features[nFeatures].Options.length; nOptions++) {
                    var $imgOption = $("<img>", {
                        "class": "img-item",
                        "id": "color-" + umeaInfo.Features[nFeatures].Options[nOptions].Name,
                        "src": "assets/layout/" + umeaInfo.Features[nFeatures].Options[nOptions].Name + ".png",
                        "onClick": "changeColor(\"" + umeaInfo.Features[nFeatures].Options[nOptions].HexaColor + "," +
                            inputFeaturesCode + "\")"
                    });
                    $("#colorChoice").append($imgOption);
                }
               

               

                }
            }

            }

        

    
    //for (nFeatures = 0; nFeatures < umeaInfo.Features.length; nFeatures++) {
        //if (umeaInfo.Features[nFeatures].Code == inputFeaturesCode)
        //if (umeaInfo.Features[nFeatures].Code) {
            //for (var nGeo = 0; nGeo < umeaInfo.Features[nFeatures].message; nGeo++) {
                //var $geo = $("<a>", {
                    //"class": "btn ",
                    //"id": "feature-" + umeaInfo.Features[nFeatures].message,
                    //"text": umeaInfo.Features[nFeatures].message,
                    //"onClick": "CreateGeometry(\"" + umeaInfo.Features[nFeatures].Id + "\")"
                //});
                //$("#messageChoice").append($geo);
            //}
        //}
    //}


function changeColor(args) {

    var res = args.split(",");
    var hexaColor = res[0];
    var featureCode = res[1];
    var layers;

    //Layer selection
    for (nFeatures = 0; nFeatures < umeaInfo.Features.length; nFeatures++)
        if (umeaInfo.Features[nFeatures].Code == featureCode)
            layers = umeaInfo.Features[nFeatures].UsedLayers;


    //Color Appliction
    for (var meshes = 1; meshes < model.length; meshes++) {
        if (layers.includes(model[meshes]._material.name)) {
            model[meshes]._material.albedoColor = new BABYLON.Color3.FromHexString(hexaColor);
      
        }
    }
}




function CreateGeometry(id, featureCode) {
    
    var newId = id -1;
    var geolayer;

    for (var nFeatures = 0; nFeatures < umeaInfo.Features.length; nFeatures++) {
        if (umeaInfo.Features[nFeatures].Code == featureCode) {
            geolayer = umeaInfo.Features[nFeatures].Geometry[newId].UsedLayers;
            console.log(geolayer);
            for (var meshes = 1; meshes < model.length; meshes++) {
                if (umeaInfo.Features[nFeatures].UsedLayers.includes(model[meshes].name))
                    model[meshes].isVisible = false;
                if (geolayer.includes(model[meshes].name)) {
                    model[meshes].isVisible = umeaInfo.Features[nFeatures].Geometry[newId].UsedLayers.includes(model[meshes].name);
        
                }
            }
        }
    }
}

function ChangeLabel(Path, featureCode) {

    for (var meshes = 1; meshes < model.length; meshes++) {
        if (featureCode.includes(model[meshes]._material.name)) {
            model[meshes]._material._albedoTexture = new BABYLON.Texture(Path, scene);
            model[meshes]._material._opacityTexture = new BABYLON.Texture(Path, scene);
            model[meshes]._material._albedoTexture.vAng = -Math.PI;
            model[meshes]._material._albedoTexture.wAng = -Math.PI;
            model[meshes]._material._opacityTexture.vAng = -Math.PI;
            model[meshes]._material._opacityTexture.wAng = -Math.PI;
        }
    }
    
}

$("#feature-1").click();
