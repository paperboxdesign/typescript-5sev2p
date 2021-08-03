

const B = BABYLON;
const V3 = B.Vector3;

export default class Demo
{
  canvas:HTMLCanvasElement;
  engine:B.Engine;
  scene:B.Scene;

  disposables = [];

  constructor( canvas:HTMLCanvasElement, msg:string="" ) 
  {
    //document.getElementById('text').innerHTML = msg;

    this.canvas = canvas;
    this.engine = new B.Engine( canvas );
    this.scene = new B.Scene( this.engine );
    //this.scene.clearColor = B.Color4.FromHexString("#4BC69BFF");
    this.engine.runRenderLoop(  this.onUpdate.bind( this ) );
  }

  onUpdate() 
  {
    this.scene.render();
  }

  resize() 
  {
    this.engine.resize();
  }

  dipose() 
  {
    while( this.disposables.length > 0 ) 
      this.disposables.pop().dispose();
    this.scene.dispose();
    this.engine.dispose();
    this.canvas = null;
  }

  

  // addLight() 
  // {
  //   let light = new B.HemisphericLight('demo_sun', new V3(0,1,0), this.scene);
  //   this.disposables.push( light );
  // }

  // addGround() 
  // {
  //   let ground_params = {
  //     height:10, 
  //     width:10, 
  //     subdivisions: 2,
  //     updatable: true
  //   };

  //   let ground = BABYLON.MeshBuilder.CreateGround(
  //     'demo_floor', 
  //     ground_params, 
  //     this.scene
  //   );

  //   this.disposables.push( ground );
  // }
}




