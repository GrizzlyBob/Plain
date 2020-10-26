
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var object,ground,ball
var engine,world
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  object = Bodies.rectangle(300,250,30,30)
  World.add(world,object)
  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(400,380,800,20,options)
  World.add(world,ground)
  var Mouse = {
    restitution:1.0
  }
  ball = Bodies.circle(20,10,20,Mouse)
  World.add(world,ball)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine)
  rectMode(CENTER)
  rect(object.position.x,object.position.y,30,30)
rect(ground.position.x,ground.position.y,800,20)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
}
