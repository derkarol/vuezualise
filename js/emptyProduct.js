var oneExtrusion = {
	createMesh: function() {
			return {
				walls:[{
					name: "wall_dalle",
					width: 10000,
					height: 200,
					depth: 6000,
					materialName: "WALL_MATERIAL_DALLE",
					position: {x: 1500, y: 100, z: 1500}
				   }],
				
				
				"extrusions": [
					               			               
					   	{
							name: "extrude_0", 
							"section":{"id":267,
									   "provider":"Cover"},
							"path":{
								"points":[
									{"x":100,"y":2000,"z":0},
									{"x":100,"y":0,"z":0}
										]
							},
							"spin":0,
							"planes":[
								{"x":0,"y":0,"z":-1,"d":0},
								{"x":0,"y":0,"z":-1,"d":-2200}
									]
						},
						{
							name: "extrude_1", 
							"section":{"id":267,
									   "provider":"Cover"},
							"path":{
								"points":[{"x":2000,"y":2000,"z":100},
											  {"x":0,"y":2000,"z":100}]},
							"spin":0,
							"planes":[
								{"x":0,"y":0,"z":-1,"d":0},	
									  {"x":0,"y":0,"z":-1,"d":-2200}]
						},
						{
							name: "extrude_2", 
							"section":{"id":267,
									   "provider":"Cover"},
							"path":{
								"points":[
									{"x":0,"y":2000,"z":2000},
									{"x":0,"y":2000,"z":0}]
							},
							"spin":0,
							"planes":[
								{"x":0,"y":0,"z":-1,"d":0},	
									  {"x":0,"y":0,"z":-1,"d":-2200}]
						},
					{
							name: "extrude_3", 
							"section":{"id":267,
									   "provider":"Cover"},
							"path":{
								"points":[
									{"x":2100,"y":2000,"z":0},
									{"x":2100,"y":0,"z":0}
										]
							},
							"spin":0,
							"planes":[
								{"x":0,"y":0,"z":-1,"d":0},
								{"x":0,"y":0,"z":-1,"d":-2200}
									]
						},
					{
							name: "extrude_4", 
							"section":{"id":267,
									   "provider":"Cover"},
							"path":{
								"points":[
									{"x":100,"y":2000,"z":1900},
									{"x":100,"y":0,"z":1900}
										]
							},
							"spin":0,
							"planes":[
								{"x":0,"y":0,"z":-1,"d":0},
								{"x":0,"y":0,"z":-1,"d":-2200}
									]
						},
					{
							name: "extrude_5", 
							"section":{"id":267,
									   "provider":"Cover"},
							"path":{
								"points":[
									{"x":2100,"y":2000,"z":1900},
									{"x":2100,"y":0,"z":1900}
										]
							},
							"spin":0,
							"planes":[
								{"x":0,"y":0,"z":-1,"d":0},
								{"x":0,"y":0,"z":-1,"d":-2200}
									]
						},
						{
							name: "extrude_6", 
							"section":{"id":267,
									   "provider":"Cover"},
							"path":{
								"points":[{"x":2000,"y":2000,"z":2000},
											  {"x":100,"y":2000,"z":2000}]},
							"spin":0,
							"planes":[
								{"x":0,"y":0,"z":-1,"d":0},	
									  {"x":0,"y":0,"z":-1,"d":-2200}]
						},
						{
							name: "extrude_7", 
							"section":{"id":267,
									   "provider":"Cover"},
							"path":{
								"points":[
									{"x":2000,"y":2000,"z":2000},
									{"x":2000,"y":2000,"z":0}]
							},
							"spin":0,
							"planes":[
								{"x":0,"y":0,"z":-1,"d":0},	
									  {"x":0,"y":0,"z":-1,"d":-2200}]
						}
					
					]
				
			};
		},

		createVariables: function() {
			return {name: "conservatory",
					variables: {
					            smthHeight: {text: "conservatory.variable.smthHeight", 
											   type: "float", 
											   value: 2000.0
											  },
								smthWidth: {text: "conservatory.variable.smthWidth", 
											   type: "float", 
											   value: 2000.0
											  },
								smthDepth: {text: "conservatory.variable.smthDepth", 
											   type: "float", 
											   value: 2000.0
											  }, 
								color: {text: "gate.variable.color", type: "customColor", value: 0,
						            	     choices: [{id: 609, rgb: '#262E38', value: 0x262E38, picture: "", name: "RAL7016", dark: true, description: "Jaune"},
						            	               {id: 661, rgb: '#FAFFFF', value: 0xFAFFFF, picture: "", name: "RAL9010", dark: false, description: "Rose"},
						            	               {id: 504, rgb: '#690F14', value: 0x690F14, picture: "", name: "RAL3004", dark: true, description: "Bleu"},
						            	               {id: 548, rgb: '#4D6999', value: 0x4D6999, picture: "", name: "RAL5014", dark: true, description: "Vert"},
						            	               {id: 565, rgb: '#0A381F', value: 0x0A381F, picture: "", name: "RAL6005", dark: true, description: "Bleu"},
						            	               {id: 642, rgb: '#38261C', value: 0x38261C, picture: "", name: "RAL8014", dark: true, description: "Vert"},
						            	               {id: 658, rgb: '#03050A', value: 0x03050A, picture: "", name: "RAL9005", dark: true, description: "Blanc"}]
							            	
							            }}}
		},

		createAnchors: function(product, scene) {
			var anchors=[];
			var smthHeightZ=product.variables.smthHeight.value;
			var smthWidthZ=product.variables.smthWidth.value;
			var smthDepthZ=product.variables.smthDepth.value;
			
			
			anchors[0]=new S3DAnchor("anchor_node_0", new S3DPosition(0.0, 0.0, 0.0));
			anchors[1]=new S3DAnchor("anchor_node_1", new S3DPosition(0.0, smthHeightZ, 0.0));
			anchors[2]=new S3DAnchor("anchor_node_2", new S3DPosition(smthWidthZ, smthHeightZ, 0.0));
			anchors[3]=new S3DAnchor("anchor_node_3", new S3DPosition(0.0, smthHeightZ, smthDepthZ));
			anchors[4]=new S3DAnchor("anchor_node_4", new S3DPosition(smthWidthZ, 0.0, 0.0));
			anchors[5]=new S3DAnchor("anchor_node_5", new S3DPosition(0.0, 0.0, smthDepthZ));
			anchors[6]=new S3DAnchor("anchor_node_6", new S3DPosition(smthWidthZ, 0.0, smthDepthZ));
			anchors[7]=new S3DAnchor("anchor_node_7", new S3DPosition(smthWidthZ, smthHeightZ, smthDepthZ));
			
			
			
			for(var iAnch=0; iAnch<anchors.length; iAnch++)
				scene.add(anchors[iAnch]);
			
			//this is what links does in deafult
			
			anchors[0].wiredObjects.push(new S3DPointWired(1, "extrude_0", "doCompile"));
			anchors[1].wiredObjects.push(new S3DPointWired(0, "extrude_0", "doCompile"));
			
			anchors[1].wiredObjects.push(new S3DPointWired(1, "extrude_1", "doCompile"));
			anchors[2].wiredObjects.push(new S3DPointWired(0, "extrude_1", "doCompile"));
			
			anchors[1].wiredObjects.push(new S3DPointWired(1, "extrude_2", "doCompile"));
			anchors[3].wiredObjects.push(new S3DPointWired(0, "extrude_2", "doCompile"));
			
			anchors[2].wiredObjects.push(new S3DPointWired(0, "extrude_3", "doCompile"));
			anchors[4].wiredObjects.push(new S3DPointWired(1, "extrude_3", "doCompile"));
			
			anchors[3].wiredObjects.push(new S3DPointWired(0, "extrude_4", "doCompile"));
			anchors[5].wiredObjects.push(new S3DPointWired(1, "extrude_4", "doCompile"));
			
			anchors[6].wiredObjects.push(new S3DPointWired(1, "extrude_5", "doCompile"));
			anchors[7].wiredObjects.push(new S3DPointWired(0, "extrude_5", "doCompile"));
			
			anchors[3].wiredObjects.push(new S3DPointWired(1, "extrude_6", "doCompile"));
			anchors[7].wiredObjects.push(new S3DPointWired(0, "extrude_6", "doCompile"));
			
			anchors[2].wiredObjects.push(new S3DPointWired(1, "extrude_7", "doCompile"));
			anchors[7].wiredObjects.push(new S3DPointWired(0, "extrude_7", "doCompile"));
			
			
			//anchors[3].wiredObjects.push(new S3DPointWired(0, "extrude_1", "doCompile"));
		},

		createModifiers: function() {
			return {modifiers: [{objectName: "anchor_node_0",
								 properties: {position: {x: "0.0",
									 					 y: "0.0",
									 					 z: "0.0"}
								 			 }
							},
								{objectName: "anchor_node_1",
									 properties: {position: {x: "0.0",
										 					 y: "smthHeight",
										 					 z: "0.0"}
									 			 }
							},
								{objectName: "anchor_node_2",
									 properties: {position: {x: "smthWidth",
										 					 y: "smthHeight",
										 					 z: "0.0"}
												 }
							},
								{objectName: "anchor_node_3",
									 properties: {position: {x: "0.0",
										 					 y: "smthHeight",
										 					 z: "smthDepth"}
												 }
							},
								{objectName: "anchor_node_4",
									 properties: {position: {x: "smthWidth",
										 					 y: "0.0",
										 					 z: "0.0"}
												 }
							},
								{objectName: "anchor_node_5",
									 properties: {position: {x: "0.0",
										 					 y: "0.0",
										 					 z: "smthDepth"}
												 }
							},
								{objectName: "anchor_node_6",
									 properties: {position: {x: "smthWidth",
										 					 y: "0.0",
										 					 z: "smthDepth"}
												 }
							},
								{objectName: "anchor_node_7",
									 properties: {position: {x: "smthWidth",
										 					 y: "smthHeight",
										 					 z: "smthDepth"}
												 }
							},
		 						{objectName: "wall_dalle", 
		 							 properties: {attribute: {width: "smthWidth+7000", depth: "smthDepth+3500"},
		 								 		  position: {x: "(smthWidth+7000)/2-3500", z: "(smthDepth+3500)/2-1500"}
		 							 			 }
								}
								
		]}},

		createScene: function(properties) {
			var screen={};
			screen.width=properties!=undefined ? properties.width : 800;
			screen.height=properties!=undefined ? properties.height : 400;

			var mockup={version: "1.0",
						scene: {name: "SCENE",
								objectType: "scene", 
								materials: [{name: "DEFAULT_ALUMINIUM", attribute: {color: 0x888888}},
								            {name: "SECMATERIAL_1", attribute: {color: 0xFFFF17}},
								            {name: "SECMATERIAL_INTERIOR", attribute: {color: 0x808080}},
								            {name: "WALL_MATERIAL_DALLE", attribute: {color: 0x808080}},
								            {name: "GROUND_MATERIAL", attribute: {color: 0xd7cbb0, enableLight: false}}, //enableHSL: true, color: 0xFFFFFF, specular: 0x050505}},
											{name: "WALL_MATERIAL_01", attribute: {color: 0xFFFFFF, map:{diffuse: {url: "./pic/textures/Julien/1.jpg"}}}},
											{name: "WALL_MATERIAL_02", attribute: {color: 0xFFFFFF, map:{diffuse: {url: "./pic/textures/Julien/2.jpg"}}}},
											{name: "WALL_MATERIAL_03", attribute: {color: 0xFFFFFF, map:{diffuse: {url: "./pic/textures/Julien/3.jpg"}}}},
								            {name: "WALL_MATERIAL_07", attribute: {color: 0xFFFFFF, map:{diffuse: {url: "./pic/textures/07/diffuse_p2.jpg"},
												  														 bump: {url: "./pic/textures/07/disp_p2.jpg",
												  															 	scale: 5}
												 														}
								            									  }
								            },				   
								            {name: "WALL_MATERIAL_13", attribute: {color: 0xFFFFFF, map:{diffuse: {url: "./pic/textures/13/diffuse.jpg"},
												  														 bump:    {url: "./pic/textures/13/disp.jpg",
												  															      scale: 5}
												 														}
								            									  }
								            }], 
								objects: [{objectType: "background", name: "BACKGROUND_1", attribute: {visible: false, url: "./pic/background/HouseConservatory.jpg"}},
								          {objectType: "light", name: "LIGHT_1", attribute: {colorType: __AMBIANT_LIGHT, color: 0xDDDDDD}},	
								          {objectType: "light", name: "LIGHT_DIRECT", attribute: {colorType: __DIRECTIONAL_LIGHT, color: 0xFFFFFF, intensity: 0.3}},
										  {objectType: "camera", name: "CAMERA_1",
											    viewAngle: 45.0,
											    farPlane: 110000,
											    nearPlane: 1000,
													position: {x: 7000.0, y: 3000.0, z: 10000}},
										  {objectType: "axis", name:"axis1", attribute:{size:4000}},
								          {objectType: "renderer", 
								        	  			name: "RENDERER", 
								        	  			DOMElement: "container", 
								        	  			camera: "CAMERA_1",
								        	  			attribute: {width: screen.width, //window.innerWidth, 
								        	  						height: screen.height, //window.innerHeight, 
								        	  						antialias: true, 
								        	  						logarithmicDepthBuffer: false,
								        	  						useShadowMap: true}},
								          {objectType: "skybox", name: "SKYBOX", attribute: {path: './pic/skybox/sun/', groundMaterialName: "GROUND_MATERIAL"}}						        	  						
								       ]
								}
						};
			
			return mockup;
		},

		createSwitchers: function() {
			return ["SKYSPHERE", "SKYBOX", "GROUND", "AXIS", "wall_house", "wall_dalle"];	
		},

		createAnimations: function() {
		 
			return [];
		},
		
		createProduct: function(engine, properties) {
			var aLoader=new S3DSceneLoader(engine, this.createScene(properties));
			
			var s3dProduct=new S3DProduct(this.createVariables(),
									 engine,
									 this.createModifiers(),
									 this.createMesh());
			s3dProduct.anchors=this.createAnchors(s3dProduct.product, engine.getScene());	
			s3dProduct.switchers=this.createSwitchers();
			engine.setAnimations(this.createAnimations());
			
			return s3dProduct;
		}
}

