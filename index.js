const SVGView = document.querySelector('svg-view');
const SVGCode = document.querySelector('svg-code');
const render=()=>{

}
const renderSVGView=()=>{

}

let s1=_svg.createSVGElement('svg',{viewBox:"0 0 100 100","class":"svg1"},document.query);

const defaultValues={
    "circle":'"cx":50,"cy":30,"r":10',
    "rect":'"x":20,"y":50,"width":40,"height":20',
    "polygon":'"points":"10 10 45 15 20 35"'
}

const input=document.querySelector('input')
document.querySelector('select').addEventListener('change',(e)=>{
    console.log(e.target.value);
    input.value=defaultValues[e.target.value];
})

document.querySelector('button.new-svg').addEventListener('click',()=>{
    s1=_svg.createSVGElement('svg',{viewBox:"0 0 100 100","class":"svg1"},document.body)
})
document.querySelector('button.shape').addEventListener('click',()=>{
    const shape=document.querySelector('select').value;
    const content=input.value;
    _svg.createSVGElement(shape,JSON.parse('{'+content+'}'),s1);
    console.log(shape,content);
})