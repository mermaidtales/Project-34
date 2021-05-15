const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var enginge, world;

var gamestate = "PLAY";

function preload() {
//preload the images here
  backImg = loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

  engine = Engine.create ()
  world = engine.world 

  ground = new Ground (600, 600, 1200, 20)

  hero = new Hero (200, 350, 250, 150)

  rope = new Fly (hero.body, {x:500, y: 50})

  monster = new Monster (1350, 350, 300, 350);

}

function draw() {
  background(backImg);

  ground.display ();

  rope.display ();

  monster.display ();

  hero.display ();

}

function mouseDragged () {
  Matter.Body.setPosition (hero.body, {x: mouseX, y: mouseY});
}