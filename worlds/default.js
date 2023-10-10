
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
        {
            card: {
                translation: [-8.386168085755843, 0.5513715066261082, 1.8525159187801616],
                scale: [0.42309445921482913, 0.42309445921482913, 0.42309445921482913],
                rotation: [-0.047083509297983175, 0.7842899731479388, 0.03221561170841563, 0.6177657610567653],
                layers: ["pointer"],
                name: "marble_bust_01_4k.glb",
                dataLocation: "3OQuvAm1c-8wKHK7AbQKtCDhN8mcNcXcO4f9Y4N-ziWQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgPCsHfHstJQEieh4lJHcMLXs8LHYudwwKHAt-fWAsICJhKCIuJiNhKC48JC4pfn17YSImLD0gOSo9PCpgDhZ4PQwKJgh4Ngh7JxU8HgUfJgYmGj4bICg4DScaKig_AAZ7Gi0QPwwXd2ArLjsuYCx9ATwdDDohBTY2K3chLCA7Oxx5CjtiAiIcGAcDBB55BjUpNxc3GggMCHs",
                dataScale: [7.767846944202322, 7.767846944202322, 7.767846944202322],
                fileName: "marble_bust_01_4k.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
    ]
}
