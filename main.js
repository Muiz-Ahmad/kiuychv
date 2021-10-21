function setup(){
canvas=createCanvas(300,300);
canvas.center();
background("white")
canvas.mouseReleased(classifycanvas);
synth=window.speechSynthesis;
}
function draw(){
strokeWeight(13);
stroke(0);
if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY)
}
}
function preload(){
classifier=ml5.imageClassifier('DoddleNet');
}
function clearCanvas()
{
    background("white")
}
function classifycanvas()
{
    classifier.classify(canvas,gotResult)
}
function gotResult(error,result)
{
if(error){
    console.error(error);
}
console.log(result);
document.getElementById("Label").innerHTML="label: "+result[0].label;
document.getElementById("confidence").innerHTML="confidence: "+Math.round(result[0].confidence*100)+"%";
utterThis=new SpeechSynthesisUtterance(result[0].label);
synth.speak(utterThis);
}
