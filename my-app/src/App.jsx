import{useState,useRef,useEffect,useCallback} from "react";
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');`;

   const P = {
  forestDeep:  "#1a2e1a",
  forestMid:   "#2d4a2a",
  forestLight: "#4a7a44",
  leafBright:  "#7ab840",
  leafPale:    "#a8d060",
  wood:        "#5c3a1e",
  woodLight:   "#8a5a30",
  woodPale:    "#c4956a",
  bark:        "#3a2010",
  amber:       "#e8a040",
  amberPale:   "#f5cc80",
  warmGlow:    "#fff0c0",
  pinkFlower:  "#e8607a",
  pinkLight:   "#f0a0b0",
  whiteFlower: "#f5f0e8",
  moss:        "#4a6a30",
  soil:        "#2a1a08",
  paper:       "#f5ead8",
  paperDark:   "#e0cfa8",
  ink:         "#2a1808",
  ropeStr:     "#8a6a40",
};

const PHOTOS = [
  {label:"A.mistry", caption:"Summer '25 Upload", type:"portrait", bg:"#e8c8a8", fg:"#7a4a28"},
  {label:"Forest Trail", caption:"Exploring...",  type:"landscape", bg:"#5a8a50", fg:"#1a3a18"},
  { label:"Luna 🐱",        caption:"My sleepy cat",              type:"cat",       bg:"#d8c0a0", fg:"#6a4a28" },
  { label:"Forest Brew",    caption:"Best Coffee",                type:"coffee",    bg:"#c87a3a", fg:"#5a2a08" },
  { label:"Curious Thing",  caption:"Marketplace Find!",          type:"trinket",   bg:"#b0c890", fg:"#3a5820" },
  { label:"First Pixel",    caption:"My First Pixel Art",         type:"art",       bg:"#e8c840", fg:"#7a6000" },
  { label:"Sunset Glow",    caption:"Last night's sky",           type:"landscape", bg:"#e87040", fg:"#6a2010" },
  { label:"R. Bloom",       caption:"Portrait session",           type:"portrait",  bg:"#e8b0b8", fg:"#8a3848" },
  { label:"Morning Mist",   caption:"Day 3 of the hike!",         type:"landscape", bg:"#90b0c8", fg:"#304858" },
  { label:"Old Tome",       caption:"Found at the shop",          type:"trinket",   bg:"#c0a060", fg:"#5a3810" },
  { label:"Night Market",   caption:"Late night wander",          type:"landscape", bg:"#5040a0", fg:"#180858" },
  { label:"K. Tanaka",      caption:"Festival portrait",          type:"portrait",  bg:"#e8a878", fg:"#7a3818" },
  { label:"My Garden",      caption:"My balcony garden!",         type:"landscape", bg:"#60a058", fg:"#183810" },
  { label:"The Sea",        caption:"Ocean calling…",             type:"landscape", bg:"#4080c0", fg:"#104060" },
  { label:"B. Chen",        caption:"Quick snap!",                type:"portrait",  bg:"#d8c0a0", fg:"#806040" },
  { label:"Forest Noodle",  caption:"Best noodles ever",          type:"coffee",    bg:"#e0a038", fg:"#703800" },
  { label:"Curiosity #7",   caption:"What is this thing??",       type:"trinket",   bg:"#b8c898", fg:"#385020" },
  { label:"Snow Day",       caption:"First snow of winter",       type:"landscape", bg:"#d0e8f0", fg:"#506070" },
  { label:"Mango",          caption:"My neighbor's dog",          type:"cat",       bg:"#e8c068", fg:"#7a4808" },
  { label:"Z. Osei",        caption:"Graduation day!!",           type:"portrait",  bg:"#f0d080", fg:"#7a6000" },
  { label:"Rainy Day",      caption:"Rainy afternoon",            type:"landscape", bg:"#8090a8", fg:"#283040" },
  { label:"Vintage Jar",    caption:"Flea market find",           type:"trinket",   bg:"#c09858", fg:"#503818" },
  { label:"Terrace View",   caption:"Morning coffee spot",        type:"coffee",    bg:"#e8c888", fg:"#7a4818" },
  { label:"P. Nguyen",      caption:"Selfie at the wall!",        type:"portrait",  bg:"#e0b8c8", fg:"#784060" },
];

function seededRng(seed) {
    let s = seed;
    return()=>{
        s= (s*1664525 + 1013904223) & 0xffffffff;
        return (s >>> 0) / 0xffffffff; };
    }

    function IllustrationPortrait({ bg, fg, size}) { 
        const s = size;
return (
    <svg width={s} height={s} viewBox="0 0 40 40" style={{display:"block"}}>
      <rect width={40} height={40} fill={bg}/>
      <ellipse cx={20} cy={13} rx={8} ry={9} fill={fg}/>
      <ellipse cx={20} cy={13} rx={6} ry={7} fill={bg} opacity={.5}/>
      <rect x={9} y={24} width={22} height={16} rx={4} fill={fg}/>
      <rect x={11} y={24} width={18} height={14} rx={3} fill={bg} opacity={.4}/>
      <circle cx={16} cy={12} r={1.5} fill={P.forestDeep} opacity={.7}/>
      <circle cx={24} cy={12} r={1.5} fill={P.forestDeep} opacity={.7}/>
      <path d="M17 17 Q20 19 23 17" stroke={P.forestDeep} strokeWidth={.8} fill="none" opacity={.6}/>
    </svg>
  );
    }
function IllustrationCat({ bg, fg, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{display:"block"}}>
      <rect width={40} height={40} fill={bg}/>
      <ellipse cx={20} cy={24} rx={12} ry={10} fill={fg}/>
      <ellipse cx={20} cy={15} rx={9} ry={8} fill={fg}/>
      <polygon points="12,10 8,4 16,10" fill={fg}/>
      <polygon points="28,10 32,4 24,10" fill={fg}/>
      <circle cx={16} cy={15} r={2} fill="#50c050"/>
      <circle cx={24} cy={15} r={2} fill="#50c050"/>
      <ellipse cx={20} cy={19} rx={3} ry={2} fill={P.pinkFlower} opacity={.7}/>
      <line x1={10} y1={17} x2={20} y2={19} stroke={fg} strokeWidth={.5}/>
      <line x1={30} y1={17} x2={20} y2={19} stroke={fg} strokeWidth={.5}/>
    </svg>
  );
}

function IllustrationCoffee({ bg, fg, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{display:"block"}}>
      <rect width={40} height={40} fill={bg}/>
      <rect x={10} y={18} width={20} height={16} rx={3} fill={fg}/>
      <rect x={12} y={20} width={16} height={12} rx={2} fill={bg} opacity={.5}/>
      <rect x={30} y={20} width={5} height={9} rx={2} fill={fg}/>
      <rect x={6} y={34} width={28} height={4} rx={2} fill={fg} opacity={.8}/>
      <path d="M16 12 Q17 8 16 4" stroke={fg} strokeWidth={1} fill="none" opacity={.5}/>
      <path d="M20 10 Q21 6 20 2" stroke={fg} strokeWidth={1} fill="none" opacity={.4}/>
      <path d="M24 12 Q25 8 24 4" stroke={fg} strokeWidth={1} fill="none" opacity={.5}/>
    </svg>
  );
}

function IllustrationArt({ bg, fg, size }) {
  const dots = [[4,4],[10,6],[16,4],[22,8],[28,4],[34,6],[6,14],[12,12],[18,16],[24,12],[30,14],[8,22],[14,20],[20,24],[26,20],[32,22],[6,30],[12,28],[18,32],[24,28],[30,30]];
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{display:"block"}}>
      <rect width={40} height={40} fill={bg}/>
      {dots.map((d,i)=>(
        <circle key={i} cx={d[0]} cy={d[1]} r={2.2}
          fill={i%4===0?fg:i%4===1?P.pinkFlower:i%4===2?P.leafBright:P.amber} opacity={.8}/>
      ))}
    </svg>
  );
}
function IllustrationLandscape({ bg, fg, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{display:"block"}}>
      <rect width={40} height={40} fill={bg}/>
      <ellipse cx={20} cy={28} rx={20} ry={16} fill={fg}/>
      <ellipse cx={8} cy={24} rx={7} ry={14} fill={fg} opacity={.9}/>
      <ellipse cx={32} cy={26} rx={6} ry={12} fill={fg} opacity={.8}/>
      <ellipse cx={20} cy={8} rx={10} ry={7} fill={bg} opacity={.4}/>
      <circle cx={30} cy={7} r={4} fill={P.amberPale} opacity={.8}/>
      <ellipse cx={30} cy={7} rx={4} ry={4} fill={P.amber} opacity={.3}/>
    </svg>
  );
}

function IllustrationTrinket({ bg, fg, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{display:"block"}}>
      <rect width={40} height={40} fill={bg}/>
      <rect x={14} y={8} width={12} height={24} rx={3} fill={fg}/>
      <rect x={16} y={10} width={8} height={20} rx={2} fill={bg} opacity={.4}/>
      <ellipse cx={20} cy={20} rx={4} ry={5} fill={P.amberPale} opacity={.7}/>
      <rect x={11} y={30} width={18} height={6} rx={2} fill={fg} opacity={.8}/>
      <rect x={17} y={4} width={6} height={6} rx={1} fill={fg}/>
    </svg>
  );
}

function PhotoIllustration({ type, bg, fg, size }) {
  const p = { bg, fg, size };
  switch(type) {
    case "portrait":  return <IllustrationPortrait  {...p}/>;
    case "landscape": return <IllustrationLandscape {...p}/>;
    case "cat":       return <IllustrationCat       {...p}/>;
    case "coffee":    return <IllustrationCoffee    {...p}/>;
    case "art":       return <IllustrationArt       {...p}/>;
    default:          return <IllustrationTrinket   {...p}/>;
  }
}

const WORLD_W = 3600;
const WORLD_H = 2000;
const NUM_PHOTOS = 88;

function buildPhotoLayout() {
  const rng = seededRng(77);
  return Array.from({ length: NUM_PHOTOS }, (_, i) => {
    const base = PHOTOS[i % PHOTOS.length];
    const size = 54 + Math.floor(rng() * 44);
    return {
      ...base, uid: i,
      x: rng() * (WORLD_W - 240) + 90,
      y: rng() * 760 + 320,
      size,
      rot: (rng() - 0.5) * 22,
      stringFrom: rng() > 0.5,
    };
  });
}

const photoLayout = buildPhotoLayout();

function Leaf({ x, y, rot, scale = 1, color = P.leafBright, opacity = 0.85 }) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rot}) scale(${scale})`} opacity={opacity}>
      <ellipse cx={0} cy={0} rx={12} ry={5} fill={color}/>
      <line x1={-10} y1={0} x2={10} y2={0} stroke={P.forestMid} strokeWidth={.4} opacity={.5}/>
    </g>
  );
}

function HangingBulb({ x, wireTop, glowAmt }) {
  return (
    <g>
      <line x1={x} y1={wireTop} x2={x} y2={wireTop+60} stroke={P.ropeStr} strokeWidth={.8}/>
      <ellipse cx={x} cy={wireTop+70} rx={6} ry={8} fill={P.amberPale} opacity={glowAmt}/>
      <ellipse cx={x} cy={wireTop+70} rx={4} ry={6} fill={P.warmGlow} opacity={glowAmt*.9}/>
      <ellipse cx={x} cy={wireTop+70} rx={12} ry={10} fill={P.amber} opacity={glowAmt*.18}/>
      <ellipse cx={x} cy={wireTop+92} rx={16} ry={8} fill={P.amber} opacity={glowAmt*.08}/>
    </g>
  );
}
export default function App() {
  return (
    <div style={{ backgroundColor: P.forestDeep, height: "100vh", padding: "50px" }}>
      <style>{FONTS}</style>
      <h1 style={{ color: "white", fontFamily: "'Caveat', cursive", fontSize: "40px" }}>
        Testing My Drawings!
      </h1>

      <div style={{ display: "flex", gap: "40px", marginTop: "40px" }}>
        
        <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "5px" }}>
          <IllustrationCat bg="#d8c0a0" fg="#6a4a28" size={150} />
          <p style={{ textAlign: "center", fontFamily: "'Caveat', cursive", color: "black", fontSize: "24px" }}>Luna 🐱</p>
        </div>

    
        <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "5px" }}>
          <IllustrationCoffee bg="#c87a3a" fg="#5a2a08" size={150} />
          <p style={{ textAlign: "center", fontFamily: "'Caveat', cursive", color: "black", fontSize: "24px" }}>Forest Brew</p>
        </div>

      </div>
    </div>
  );
}