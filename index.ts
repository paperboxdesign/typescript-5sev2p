import './style.css';
import 'babylonjs';

class App {
  private _engine: BABYLON.Engine;
  private _scene: BABYLON.Scene;

  constructor() {
    const appDiv = <HTMLCanvasElement>document.getElementById('renderCanvas');
    this._engine = new BABYLON.Engine(appDiv, true);
    this._scene = new BABYLON.Scene(this._engine);

    let light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), this._scene);

    let ground = BABYLON.Mesh.CreateGround("ground", 50, 50, 2, this._scene);

    let box = BABYLON.Mesh.CreateBox('box1',4, this._scene );
    box.position.y = 2;

    // var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), this._scene);    

    //this.initCamera();

    var camera = 
      new BABYLON.ArcRotateCamera('camera1', 
      BABYLON.Tools.ToRadians( 30 ), 
      BABYLON.Tools.ToRadians( 65 ),
      30,
      BABYLON.Vector3.Zero(),
      this._scene);

    camera.attachControl(appDiv, true);      

    // for (let i = 0; i < 25; i++) {
    //   let box = BABYLON.Mesh.CreateBox(`box_${i}`, 2, this._scene);
    //   box.position = new BABYLON.Vector3(Math.random() * 50.0 - 25.0, 1, 
    //   Math.random() * 50.0 - 25.0);
    // }
  }

  private initCamera() {
    // Rotation around x-axis (rad)
    let alpha = BABYLON.Tools.ToRadians( 30 );
    // Rotation around y-axis (rad)
    let beta = BABYLON.Tools.ToRadians( 65 );
    // Distance between the target point the camera is going to be orbiting
    let radius = 30;
    // Orbit center 
    let target = BABYLON.Vector3.Zero();

    let camera = new BABYLON.ArcRotateCamera(
      'camera1', 
      alpha, 
      beta, 
      radius,
      target, 
      this._scene );

    // Set some basic camera settings
    // camera.panningAxis = new BABYLON.Vector3(1, 0, 1)
    // camera.minZ = 0.1
    // camera.allowUpsideDown = false
    // camera.lowerRadiusLimit = 2
    // camera.upperRadiusLimit = 100
    // camera.upperBetaLimit = Math.PI / 2.2
    // camera.panningSensibility = 1000
    // camera.checkCollisions = true
    // camera.collisionRadius = new BABYLON.Vector3(2, 2, 2)      

    // const camera = new BABYLON.ArcRotateCamera(
    //   'camera',
    //   -Math.PI / 2,
    //   Math.PI / 2.5,
    //   15,
    //   new BABYLON.Vector3(4, 0, 4),
    //   this._scene
    // );
    // camera.lowerBetaLimit = BABYLON.Tools.ToRadians(10);
    // camera.upperBetaLimit = BABYLON.Tools.ToRadians(80);
    // camera.lowerRadiusLimit = 5;
    // camera.upperRadiusLimit = 20;
  }

  onUpdate() 
  {
    this._scene.render();
  }

  resize() 
  {
    this._engine.resize();
  }

  // dipose() 
  // {
  //   while( this.disposables.length > 0 ) 
  //     this.disposables.pop().dispose();
  //   this.scene.dispose();
  //   this.engine.dispose();
  //   this.canvas = null;
  // }  

  run() {
    this._engine.runRenderLoop(() => {
      this._scene.render();
    });
  }
}

new App().run();
