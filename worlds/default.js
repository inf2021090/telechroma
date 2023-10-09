
export function init(Constants) {
    Constants.AvatarNames = [
        "newwhite"
    ];

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js"
    ];

    Constants.DefaultCards = [
        {
            card: {
                name: "entrance",
                type: "object",
                // match position of portal opened below
                translation: [-12, -0.4, -10.82],
                rotation: [0, -1.97, 0],
                spawn: "default",
            }
        },
        {
            card: {
                name:"world model",
                type: "3d",
                fileName: "/artgallery_042122.glb.zip",
                dataLocation: "./assets/3D/artgallery_pool.glb",
                //dataLocation: "3gkoR_36xHp5-TB2swDY0iqUyhSXz2JwqpQnlM7mfYVgDxMTFxRdSEgBDgsCFEkSFEkEFQgWEgITSQ4ISBJIIAMxBR4LLhQmDDYEJT8DVCAfBhEeEDIsMD4-VUgOCEkEFQgWEgITSQoOBBUIEQIVFAJIVSoPLiM9MAINDgQAM1YWUAMoHVEjEgw1Pw4qJVZKDg0sJCNVKT4DCiwFLkgDBhMGSCQGVl8xNCQqSkoKUi8vIQkOPy4WXx0NKi8DChUvJjEVVlUyLAAdEVItMFc",
                singleSided: true,
                shadow: true,
                layers: ["walk"],
                translation:[0, -1.676, 0],
                dataScale:[1,1,1],

                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
                loadSynchronously: true,
            }
        },
        {
            card:{
                name:"pool",
                type: "object",
                translation: [-2.5, -1.6, -5.5],
                layers: ["pointer", "walk"],
                behaviorModules: ["Pool"],
                poolSize: [5.6, 5.6],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "./assets/sky/shanghai_riverside_2k.exr",
                dataType: "exr",
                toneMappingExposure: 1.2,
                loadSynchronously: true,
            }
        },
    ]
}
