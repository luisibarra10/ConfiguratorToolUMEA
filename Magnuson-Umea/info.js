
var umeaInfo = {
    "defaultLayers": [
        "Single_General1",
        "Single_Key",
        "Single_Label1",
        "Single_SidePanel1"
        

    ],

    /* "Geometry": [
        {
            "Id": 1,
            "Code": "bodyGeometry",
            "isVisible": true,
            "Options": [
                {
                    "Id": 1,
                    "Code": "_1",
                    "Label": "Single",
                    "UsedLayers": [
                        "Single_Top1_1"
                    ],
                },
                {
                    "Id": 2,
                    "Code": "_2",
                    "Label": "Double",
                    "UsedLayers": [
                        "Single_Top1_2"
                    ],
                },
                {
                    "Id": 3,
                    "Code": "_3",
                    "Label": "Triple",
                    "UsedLayers": [
                        "Single_Top1_3"
                    ],
                },
               
            ]
        },
        {
            "Id": 2,
            "Code": "topGeometry",
            "isVisible": true,
            "Options": [
                {
                    "Id": 1,
                    "Code": "_1",
                    "Label": "Waste Opening",
                    "UsedLayers": [
                        "Single_Top1_1"
                    ],
                },
                {
                    "Id": 2,
                    "Code": "_2",
                    "Label": "Paper Opening",
                    "UsedLayers": [
                        "Single_Top1_2"
                    ],
                },
                {
                    "Id": 3,
                    "Code": "_3",
                    "Label": "Circle Opening",
                    "UsedLayers": [
                        "Single_Top1_3"
                    ],
                },

            ]
        },

        {
            "Id": 3,
            "Code": "hoodGeometry",
            "isVisible": true,
            "Options": [
                {
                    "Id": 1,
                    "Code": "_0",
                    "Label": "None",
                    "UsedLayers": [
                        "Single_Hood1_0"
                    ],
                },
                {
                    "Id": 2,
                    "Code": "_1",
                    "Label": "Flat Hood",
                    "UsedLayers": [
                        "Single_Hood1_1"
                    ],
                },
                {
                    "Id": 3,
                    "Code": "_2",
                    "Label": "Angled Hood",
                    "UsedLayers": [
                        "Single_Hood1_2"
                    ],
                }

                
            ]
        },
        {
            "Id": 4,
            "Code": "labelGeometry",
            "isVisible": true,
            "Options": [
                {
                    "Id": 1,
                    "Code": "_1",
                    "Label": "Label 1",
                    "UsedLayers": [
                        "Single_Label1_1"
                    ],
                },
                {
                    "Id": 2,
                    "Code": "_2",
                    "Label": "Label 2",
                    "UsedLayers": [
                        "Single_Label1_2"
                    ],
                },

            ]
        },
        {
            "Id": 5,
            "Code": "sidePanelGeometry",
            "isVisible": true,
            "Options": [
                {
                    "Id": 1,
                    "Code": "_1",
                    "Label": "No cutout",
                    "UsedLayers": [
                        "Single_SidePanel1_1"
                    ],
                },
                {
                    "Id": 2,
                    "Code": "_2",
                    "Label": "Waste Cutout",
                    "UsedLayers": [
                        "Single_SidePanel1_2"
                    ],
                },
                {
                    "Id": 3,
                    "Code": "_3",
                    "Label": "Recycling Cutout",
                    "UsedLayers": [
                        "Single_SidePanel1_3"
                    ],
                },
                {
                    "Id": 4,
                    "Code": "_4",
                    "Label": "Advertising Panel",
                    "UsedLayers": [
                        "Single_SidePanel1_4"
                    ],
                },

            ]
        },

    ],
    */
    "Features": [
        {
            "Id": 1,
            "Name": "1) BODY COLOR",
            "Code": "body",
            "UsedLayers": [
                "Single_General1",
                "Double_General",
                "Triple_General",
                "Single_SidePanel1Back",
                "Single_SidePanel2Back",
                "Single_SidePanel3Back",
                "Single_SidePanel4Back1",
                "Double_SidePanel1Back",
                "Double_SidePanel2Back",
                "Double_SidePanel3Back",
                "Double_SidePanel4Back1",
                "Triple_SidePanel1Back",
                "Triple_SidePanel2Back",
                "Triple_SidePanel3Back",
                "Triple_SidePanel4Back1"
                

                
                
            ],
            "isColor": true,
            "isVisible": true,
            "Message": [
                {
                    "Id": 1,
                    "Message": "1) Select the garbage container type and color option Select the garbage container type and color option"
                },
                {
                    "Id": 2,
                    "Message": "1) Select the garbage container type and color option Select the garbage container type and color option"
                },
            ],
            
            "Options": [
                {
                    "Id": 1,
                    "Name": "skyWhite",
                    "HexaColor": "#FFFFFF",
                },
                {
                    "Id": 2,
                    "Name": "brightbondSilver",
                    "HexaColor": "#b0b1af",
                },
                {
                    "Id": 3,
                    "Name": "mineralBronze",
                    "HexaColor": "#3c3629",
                }
            ],
            "Geometry": [
                {
                    "Id": 1,
                    "UsedLayers": [
                        "Single_General1",
                        "Single_SidePanel1Back",
                        "Single_SidePanel2Back",
                        "Single_SidePanel3Back",
                        "Single_SidePanel4Back",
                        
                        

                    ],
                    "Label": "Single"
                },
                {
                    "Id": 2,
                    "UsedLayers": [
                        "Double_General",
                        "Double_SidePanel1Back",
                        "Double_SidePanel2Back",
                        "Double_SidePanel3Back",
                        "Double_SidePanel4Back",
                    ],
                    "Label": "Double"
                },
                {
                    "Id": 3,
                    "UsedLayers": [
                        "Triple_General",
                        "Triple_SidePanel1Back",
                        "Triple_SidePanel2Back",
                        "Triple_SidePanel3Back",
                        "Triple_SidePanel4Back",
                        
                    ],
                    "Label": "Triple"
                },

            ],
        },
        {
            "Id": 2,
            "Name": "2) TOP ",
            "Code": "top",
            "UsedLayers": [
                "Single_Top1_1",
                "Single_Top1_2",
                "Single_Top1_3"

            ],
            "isColor": true,
            "isVisible": true,
            "Message": [
                {
                    "Id": 1,
                    "Message": "1) Select the garbage container type and color option Select the garbage container type and color option"
                },
                {
                    "Id": 2,
                    "Message": "2) Select the garbage container type and color option Select the garbage container type and color option"
                }
            ],
            

          
            "Options": [
                {
                    "Id": 1,
                    "Name": "skyWhite",
                    "HexaColor": "#ffffff",
                    
           
                },
                {
                    "Id": 2,
                    "Name": "seaGreen",
                    "HexaColor": "#0E793D",
                    
                },
                {
                    "Id": 3,
                    "Name": "brightbondSilver",
                    "HexaColor": "#B0AFB1",
                    
                },
                {
                    "Id": 4,
                    "Name": "mineralBronze",
                    "HexaColor": "#3D372B",
                    
                },
                {
                    "Id": 5,
                    "Name": "marigoldYellow",
                    "HexaColor": "#FBD712",
                },
                {
                    "Id": 6,
                    "Name": "marineBlue",
                    "HexaColor": "#1C3B70",
                },
                {
                    "Id": 7,
                    "Name": "clementineOrange",
                    "HexaColor": "#DD5427",
                }
            ],
            "Geometry": [
                {
                    "Id": 1,
                    "UsedLayers": [
                        "Single_Top1_1"
                    ],
                    "Label" : "Waste Opening"
                },
                {
                    "Id": 2,
                    "UsedLayers": [
                        "Single_Top1_2"
                    ],
                    "Label": "Paper Opening"
                },
                {
                    "Id": 3,
                    "UsedLayers": [
                        "Single_Top1_3"
                    ],
                    "Label": "Circle Opening"
                },

            ],
        },
        {
            "Id": 3,
            "Name": "3) HOOD",
            "Code": "hood",
            "UsedLayers": [
                "Single_Hood1",
                "Single_Hood2",
                
            ],
          
            "isColor": true,
            "isVisible": true,
            
            "Message": [
                {
                    "Id": 1,
                    "Message": "1) Select the garbage container type and color option Select the garbage container type and color option"
                },
                {
                    "Id": 2,
                    "Message": "2) Select the garbage container type and color option Select the garbage container type and color option"
                }
            ],



            "Options": [
                {
                    "Id": 1,
                    "Name": "skyWhite",
                    "HexaColor": "#ffffff",


                },
                {
                    "Id": 2,
                    "Name": "seaGreen",
                    "HexaColor": "#0E793D",

                },
                {
                    "Id": 3,
                    "Name": "brightbondSilver",
                    "HexaColor": "#B0AFB1",

                },
                {
                    "Id": 4,
                    "Name": "mineralBronze",
                    "HexaColor": "#3D372B",

                },
                {
                    "Id": 5,
                    "Name": "marigoldYellow",
                    "HexaColor": "#FBD712",
                },
                {
                    "Id": 6,
                    "Name": "marineBlue",
                    "HexaColor": "#1C3B70",
                },
                {
                    "Id": 7,
                    "Name": "clementineOrange",
                    "HexaColor": "#DD5427",
                }
            ],
            "Geometry": [
                {
                    "Id": 1,
                    "UsedLayers": [
                        "Single_Hood0",
                        
                    ],
                    "Label": "None"
                },
                {
                    "Id": 2,
                    "UsedLayers": [
                        "Single_Hood1",
                        
                    ],
                    "Label": "Flat Hood"
                },
                {
                    "Id": 3,
                    "UsedLayers": [
                        "Single_Hood2",
                        
                    ],
                    "Label": "Angled Hood"
                },

            ],
        },
        {
            "Id": 4,
            "Name": "4) LABELS",
            "Code": "labels",
            "UsedLayers": [
                "Single_Label1"
            ],
            "isVisible": true,
            "isColor": true,
            "Message": [
                {
                    "Id": 1,
                    "Message": "1) Select the garbage container type and color option Select the garbage container type and color option"
                },
                {
                    "Id": 2,
                    "Message": "2) Select the garbage container type and color option Select the garbage container type and color option"
                }
            ],



            "Options": [
                {
                    "Id": 1,
                    "Name": "skyWhite",
                    "HexaColor": "#ffffff",


                },
                {
                    "Id": 2,
                    "Name": "seaGreen",
                    "HexaColor": "#0E793D",

                },
                {
                    "Id": 3,
                    "Name": "brightbondSilver",
                    "HexaColor": "#B0AFB1",

                },
                {
                    "Id": 4,
                    "Name": "mineralBronze",
                    "HexaColor": "#3D372B",

                },
                {
                    "Id": 5,
                    "Name": "marigoldYellow",
                    "HexaColor": "#FBD712",
                },
                {
                    "Id": 6,
                    "Name": "marineBlue",
                    "HexaColor": "#1C3B70",
                },
                {
                    "Id": 7,
                    "Name": "clementineOrange",
                    "HexaColor": "#DD5427",
                }
            ],
            "Geometry": [
                {
                    "Id": 1,
                    "Label": "Glass",
                    "Path": "assets/layout/Glass.png",
                    "UsedLayers": [
                        "Single_Label1"
                    ],
                },
                {
                    "Id": 2,
                    "Label": "Cans",
                    "Path": "assets/layout/Cans.png",
                    "UsedLayers": [
                        "Single_Label1"
                    ],
                },
                {
                    "Id": 3,
                    "Label": "Compost",
                    "Path": "assets/layout/Compost.png",
                    "UsedLayers": [
                        "Single_Label1"
                    ],
                },
                {
                    "Id": 4,
                    "Label": "Paper",
                    "Path": "assets/layout/Paper.png",
                    "UsedLayers": [
                        "Single_Label1"
                    ],
                },
                {
                    "Id": 5,
                    "Label": "Landfill",
                    "Path": "assets/layout/Landfill.png",
                    "UsedLayers": [
                        "Single_Label1"
                    ],
                },
                {
                    "Id": 6,
                    "Label": "Organics",
                    "Path": "assets/layout/Organics.png",
                    "UsedLayers": [
                        "Single_Label1"
                    ],
                },
                {
                    "Id": 7,
                    "Label": "Plastic",
                    "Path": "assets/layout/Plastic.png",
                    "UsedLayers": [
                        "Single_Label1"
                    ],
                }, {
                    "Id": 8,
                    "Label": "Recycling",
                    "Path": "assets/layout/Recycling.png",
                    "UsedLayers": [
                        "Single_Label1"
                    ],
                }, {
                    "Id": 9,
                    "Label": "RecyclingArrows",
                    "Path": "assets/layout/RecyclingArrows.png",
                    "UsedLayers": [
                        "Single_Label1"
                    ],
                }, {
                    "Id": 10,
                    "Label": "Waste",
                    "Path": "assets/layout/Waste.png",
                    "UsedLayers": [
                        "Single_Label1"
                    ],
                },

                
            ],

        },
        {
            "Id": 5,
            "Name": "5) SIDEPANELS",
            "Code": "sidepanel",
            "UsedLayers": [
                
                "Single_SidePanel1",
                "Single_SidePanel2",
                "Single_SidePanel4Back2",
                "Single_SidePanel3",
                "Single_SidePanel4",
                
                
            ],
            "isColor": true,
            "isVisible": true,
            "Message": [
                {
                    "Id": 1,
                    "Message": "1) Select the garbage container type and color option Select the garbage container type and color option"
                },
                {
                    "Id": 2,
                    "Message": "2) Select the garbage container type and color option Select the garbage container type and color option"
                }
            ],



            "Options": [
                {
                    "Id": 1,
                    "Name": "skyWhite",
                    "HexaColor": "#ffffff",


                },
                {
                    "Id": 2,
                    "Name": "seaGreen",
                    "HexaColor": "#0E793D",

                },
                {
                    "Id": 3,
                    "Name": "brightbondSilver",
                    "HexaColor": "#B0AFB1",

                },
                {
                    "Id": 4,
                    "Name": "mineralBronze",
                    "HexaColor": "#3D372B",

                },
                {
                    "Id": 5,
                    "Name": "marigoldYellow",
                    "HexaColor": "#FBD712",
                },
                {
                    "Id": 6,
                    "Name": "marineBlue",
                    "HexaColor": "#1C3B70",
                },
                {
                    "Id": 7,
                    "Name": "clementineOrange",
                    "HexaColor": "#DD5427",
                }
            ],
            "Geometry": [
                {
                    "Id": 1,
                    "UsedLayers": [
                        
                        "Single_SidePanel1",
                        
                    ],
                    "Label": "No Cutout"
                },
                {
                    "Id": 2,
                    "UsedLayers": [
                        "Single_SidePanel2",
                        
                    ],
                    "Label": "Waste Cutout"
                },
                {
                    "Id": 3,
                    "UsedLayers": [
                        "Single_SidePanel3",
                        
                    ],
                    "Label": "Recycling Cutout"
                },
                {
                    "Id": 4,
                    "UsedLayers": [
                        "Single_SidePanel4",
                        "Single_SidePanel4Back2",

                    ],
                    "Label": "Advertising Cutout"
                },
            ],

        }


    ]
}