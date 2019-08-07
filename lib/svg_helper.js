
const _svg=(function(){
    
    const createSVGElement=(tag,attr,parent=null)=>{
        const el=document.createElementNS("http://www.w3.org/2000/svg", tag);
        Object.entries(attr).forEach( ([key,value])=>{
            el.setAttribute(key,value);
        })
        if (parent) {
            parent.appendChild(el);
        }
        return el;
    }


    const circle=(cx,cy,r,parent=null)=>{
        return createSVGElement('circle',{cx,cy,r},parent);
    }
    const rect=(x,y,width,height,parent=null)=>{
        return createSVGElement('rect',{x,y,width,height},parent);
    }
    const polygon=(points,parent=null)=>{
        return createSVGElement('polygon',{points},parent);
    }
    return {
        createSVGElement,
        circle,
        rect,
        polygon,
    }
})() 