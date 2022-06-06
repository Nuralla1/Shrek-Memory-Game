var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,o=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))i.call(t,r)&&l(e,r,t[r]);return e},n=(e,a)=>t(e,r(a));import{s as d,A as p,R as c,r as m,a as g}from"./vendor.8b56ad73.js";const f=["/assets/shrek1.49248c49.png","/assets/shrek2.387fabc3.png","/assets/shrek3.98ba192d.jpeg","/assets/shrek4.4350b947.png","/assets/shrek5.6a282818.png","/assets/shrek6.331f750b.png","/assets/shrek7.7517a1bd.png","/assets/shrek8.b33b7bda.png"],b=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 0.5rem;
`,u=d.div`
  background-image: url("../src/img/MAIN.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,h=d.div`
  margin-top: 30px;
  font-weight: bold;
  color: white;
  font-size: 40px;
  font-family: "Times New Roman", sans-serif;
`,k=d.button`
  color: darkslategrey;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkslategrey;
  border-radius: 10px;
  transition: all 0.5s;
  :hover {
    color: olivedrab;
    border: 2px solid olivedrab;
    padding: 0.5em 2em;
    position: relative;
  }
`,v=d.div`
  position: relative;
  perspective: 1000px;
`,x=p`
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  backface-visibility: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
`,y=d.img`
  ${x}

  z-index: ${e=>e.flipped?2:1};
  transform: ${e=>e.flipped?"rotate(0deg)":"rotateY(180deg)"};
`,E=d.img`
  ${x}

  z-index: ${e=>e.flipped?1:2};
  transform: ${e=>e.flipped?"rotateY(180deg)":"rotate(360deg)"};
  position: absolute;
  top: 0px;
  left: 0px;
`,O=({card:e,callback:t})=>c.createElement(v,{onClick:()=>{e.clickable&&t(e)}},c.createElement(y,{flipped:e.flipped,src:e.frontImage,alt:"card-front"}),c.createElement(E,{flipped:e.flipped,src:e.backImage,alt:"card-back"}));const S=()=>{const[e,t]=m.exports.useState([...f,...f].map(((e,t)=>({id:`card${t}`,flipped:!1,backImage:"/assets/shrek_cover.e679e964.png",frontImage:e,clickable:!0,matchingCardId:t<f.length?`card${f.length+t}`:"card"+(t-f.length)}))).map((e=>[Math.random(),e])).sort(((e,t)=>e[0]-t[0])).map((e=>e[1])));m.exports.useState(!1);const[r,a]=m.exports.useState(0),[s,i]=m.exports.useState(void 0),[l,d]=m.exports.useState(0),p=m.exports.useMemo((()=>new Audio("/assets/shrek_09. Smash Mouth - All Star.6634069b.mp3")),[]),[g,v]=m.exports.useState(!1),x=e=>{if(t((t=>t.map((t=>t.id===e.id?n(o({},t),{flipped:!0,clickable:!1}):t)))),s){if(s.matchingCardId===e.id)return a((e=>e+1)),d((e=>e+1)),t((t=>t.map((t=>t.id===s.id||t.id===e.id?n(o({},t),{clickable:!1}):t)))),void i(void 0);d((e=>e+1)),setTimeout((()=>{t((t=>t.map((t=>t.id===s.id||t.id===e.id?n(o({},t),{flipped:!1,clickable:!0}):t))))}),1e3),i(void 0)}else i(o({},e))};return m.exports.useEffect((()=>{r===e.length/2&&alert("GAME WON")}),[r]),c.createElement(u,null,c.createElement(b,null,e.map((e=>c.createElement(O,{key:e.id,card:e,callback:x})))),c.createElement(h,null,`Turns: ${l}`),c.createElement(k,{onClick:()=>{g?p.pause():p.play(),v((e=>!e))}},g?"Pause music":"Play music️️"))};g.render(c.createElement(c.StrictMode,null,c.createElement(S,null)),document.getElementById("root"));
