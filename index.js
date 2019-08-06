const poly1=document.querySelector('.poly1');
const svg=document.querySelector('svg.img1');
const p=svg.createSVGPoint();
p.x=30;
p.y=40;
console.log(poly1.points)

const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

svg2.setAttribute('viewBox','0 0 400 400');
const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute('cx',"100");
circle.setAttribute('cy',"100");
circle.setAttribute('r',"50");
svg2.appendChild(circle)
document.body.appendChild(svg2);