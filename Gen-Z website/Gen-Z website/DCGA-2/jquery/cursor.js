/**
 * Cursor JS
 */
jQuery(document).ready(function(e){const r=document.querySelector(".zelda-cursor"),t=document.querySelector(".zelda-cursor2");
if(jQuery(".zelda-cursor")[0]){let e={x:0,y:0,largeX:0,largeY:0,targetX:0,targetY:0};document.addEventListener("mousemove",r=>
{e.targetX=r.pageX,e.targetY=r.pageY});const a=()=>{e.x+=.2*(e.targetX-e.x),e.y+=.1*(e.targetY-e.y),e.largeX+=.8*(e.targetX-e.largeX),
    e.largeY+=.12*(e.targetY-e.largeY),r.style.transform=`translate(${e.x-5}px, ${e.y-5}px) `,t.style.transform=`translate(${e.largeX-25}px, 
        ${e.largeY-25}px)`,requestAnimationFrame(a)};a()}});