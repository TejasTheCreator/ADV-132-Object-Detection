img = "";
status = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
canvas = createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector('coco ssd', modelLoaded);
document.getElementById("status").innerHTML = "status: detcting objects";
}

function modelLoaded()
{
    console.log("model loaded successfully!!!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results)
{
if (error)
{
    console.log(error);
}
    console.log(results);
}

function draw()
{
    image(img,0,0,640,420);
    fill("#f25b1f");
    text("dog" ,20 , 77);
    noFill();
    stroke("#f25b1f");
    rect(15,60,315,350);

    fill("#f25b1f");
    text("cat" ,580 , 88);
    noFill();
    stroke("#f25b1f");
    rect(300,70,305,324);
}