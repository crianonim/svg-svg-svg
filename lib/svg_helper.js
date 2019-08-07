
const _svg=(function(){
    const createSVGElement=(tag,attr,parent)=>{
        const el=document.createElementNS("http://www.w3.org/2000/svg", tag);
        Object.entries(attr).forEach( ([key,value])=>{
            el.setAttribute(key,value);
        })
        if (parent) {
            parent.appendChild(el);
        }
        return el;
    }
    return {
        createSVGElement
    }
})() 