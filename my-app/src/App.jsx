import{useState,useRef,useEffect,useCallback} from "react";
import { createClient } from '@supabase/supabase-js'; 

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
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
const NUM_PHOTOS = 0;

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
const getMyUserId = () => {
  let id = localStorage.getItem("my_secret_id");
  if (!id) {
    id = "user_" + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("my_secret_id", id);
  }
  return id;
};
const MY_USER_ID = getMyUserId();

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
export default function ForestPhotoWall() { 
  const [pan, setPan] = useState({ x: -100, y: -40 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);
  const fileInputRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [draggingPhoto, setDraggingPhoto] = useState(null);
  const [newPhoto, setNewPhoto] = useState(false);
  const [uploadPulse, setUploadPulse] = useState(false);
  const [tick, setTick] = useState(0);
  const [realPhotos, setRealPhotos] = useState([]);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 70);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      console.log("Checking the Catalog for saved photos...");
      const exactly24HoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const { data, error } = await supabase
        .from('pinned_photos')
        .select('*')
        .gte('created_at', exactly24HoursAgo); 

      if (error) {
        console.error("Failed to read the Catalog!", error);
      } else {
        setRealPhotos(data); 
      }
    };
    fetchPhotos();
  }, []);

  const onDown = useCallback((e) => {
    if (e.target.closest("button")) return;
    setIsDragging(true);
    dragRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  }, [pan]);

  const onMove = useCallback((e) => {
    if (!isDragging) return;
    setPan({
      x: Math.min(0, Math.max(-(WORLD_W - window.innerWidth + 60), e.clientX - dragRef.current.x)),
      y: Math.min(0, Math.max(-(WORLD_H - window.innerHeight + 60), e.clientY - dragRef.current.y)),
    });
  }, [isDragging]);

  const onUp = useCallback(() => setIsDragging(false), []);

  const handleUploadClick = () => {
    const today = new Date().toDateString();
    const lastUpload = localStorage.getItem("lastUploadDate");
    if (lastUpload === today) {
      alert("You've already pinned a masterpiece today! 🌸 Come back tomorrow to add another.");
      return; // This stops the file picker from opening
    }
    if (fileInputRef.current) {
     fileInputRef.current.click(); 
    }
  };
 
  
  const handleFileSelected = async (e) => {
    const file = e.target.files[0];
    if (!file) return; 

    setUploadPulse(true);
    
    console.log("1. Sending heavy photo to the Warehouse...");
    
    const fileExtension = file.name.split('.').pop();
    const safeRandomString = Math.random().toString(36).substring(2, 10);
    const fileName = `${Date.now()}-${safeRandomString}.${fileExtension}`;

    const { data: storageData, error: storageError } = await supabase.storage
      .from('wall-photos')
      .upload(fileName, file);

    if (storageError) {
      console.error("Warehouse error!", storageError);
      setUploadPulse(false);
      return;
    }

    console.log("2. Getting the receipt link...");
    
    const { data: publicData } = supabase.storage
      .from('wall-photos')
      .getPublicUrl(fileName);
      
    const imageUrl = publicData.publicUrl;

    console.log("3. Writing the Index Card to the Database...");
    const userLabel = prompt("Write a short label for the bottom of the photo:") || "My Photo";
    const userCaption = prompt("Write a secret message for when people hover over it:") || "A memory...";
    const hasString = Math.random() > 0.5;

    const newPhotoData = { 
      url: imageUrl, 
      x: -pan.x + (window.innerWidth / 2) - 50 + (Math.random() * 300 - 150), 
      y: -pan.y + (window.innerHeight / 2) - 50 + (Math.random() * 200 - 100), 
      rot: (Math.random() - 0.5) * 22,
      label: userLabel,
      caption: userCaption,
      stringFrom: hasString,
      owner_id: MY_USER_ID
    };
   
    const {data: insertedData, error: dbError } = await supabase
      .from('pinned_photos')
      .insert([newPhotoData])
      .select();
    if (dbError) {
      console.error("Catalog error!", dbError);
    } else if (insertedData && insertedData.length > 0) {
      console.log("SUCCESS! Photo is permanently saved in the cloud.");
      setRealPhotos(prevPhotos => [...prevPhotos, insertedData[0]]);
      const today = new Date().toDateString();
      localStorage.setItem("lastUploadDate", today);
    }

    setUploadPulse(false);
  };

  // animated values
  const flutter = (id, freq = 0.08) => Math.sin(tick * freq + id * 0.9) * 2;
  const glow = (id) => 0.75 + 0.25 * Math.sin(tick * 0.12 + id * 1.3);
  const sway = (id) => Math.sin(tick * 0.06 + id * 2.1) * 1.5;

  // hanging vine positions
  const vines = [80, 280, 520, 780, 1040, 1280, 1520, 1780, 2020, 2280, 2540, 2800, 3060, 3320];
  const bulbs = [200, 440, 700, 960, 1200, 1460, 1720, 1980, 2240, 2500, 2760, 3020, 3280];
  const flowerPositions = [
    {x:140,y:400,c:P.pinkFlower},{x:380,y:320,c:P.whiteFlower},{x:620,y:440,c:P.pinkLight},
    {x:860,y:360,c:P.pinkFlower},{x:1100,y:410,c:P.whiteFlower},{x:1380,y:350,c:P.pinkFlower},
    {x:1640,y:420,c:P.pinkLight},{x:1900,y:370,c:P.pinkFlower},{x:2160,y:430,c:P.whiteFlower},
    {x:2420,y:360,c:P.pinkFlower},{x:2680,y:410,c:P.pinkLight},{x:2940,y:380,c:P.pinkFlower},
    {x:3200,y:420,c:P.whiteFlower},{x:3420,y:360,c:P.pinkFlower},
  ];

  const explored = Math.min(100, Math.round(Math.max(0,-pan.x) / Math.max(1, WORLD_W - window.innerWidth) * 100));


  const handlePhotoMouseDown = (e, photo) => {
    e.stopPropagation();
    e.preventDefault();
    if (photo.owner_id !== MY_USER_ID) {
      console.log("Hands off! This isn't your photo.");
      return; // Stops the drag completely!
    }
    setDraggingPhoto({
      id: photo.id,
      startX: e.clientX,
      startY: e.clientY,
      origX: photo.x,
      origY: photo.y
    });
  };


  const handleWallMouseMove = (e) => {
    if (!draggingPhoto) return;
    
    const dx = e.clientX - draggingPhoto.startX;
    const dy = e.clientY - draggingPhoto.startY;

    setRealPhotos((prev) => prev.map(p => 
      p.id === draggingPhoto.id 
        ? { ...p, x: draggingPhoto.origX + dx, y: draggingPhoto.origY + dy } 
        : p
    ));
  };

  const handleWallMouseUp = async () => {
    if (!draggingPhoto) return;

    const finalPhoto = realPhotos.find(p => p.id === draggingPhoto.id);
    setDraggingPhoto(null);

    if (finalPhoto) {
      const { error } = await supabase
        .from('pinned_photos')
        .update({ x: finalPhoto.x, y: finalPhoto.y })
        .eq('id', finalPhoto.id);
        
      if (error) console.error("Failed to save new position:", error);
    }
  };

  return (
    <>
      <style>{`
        ${FONTS}
        * { margin:0; padding:0; box-sizing:border-box; }
        body { overflow:hidden; background:#0e1a0e; }
        .fw-root {
          width:100vw; height:100vh; overflow:hidden; position:relative;
          cursor:${isDragging ? "grabbing" : "grab"}; user-select:none;
          background: radial-gradient(ellipse 120% 80% at 40% 0%, #2a4a22 0%, #0e1a0e 70%);
        }
        .fw-world { position:absolute; will-change:transform; }

        /* Photo card */
        .fw-card {
          position:absolute; cursor:pointer;
          transition: filter .15s, transform .15s;
          filter: drop-shadow(2px 4px 12px rgba(0,0,0,.55));
        }
        .fw-card:hover {
          filter: drop-shadow(0 0 18px rgba(232,160,64,.6)) drop-shadow(2px 4px 12px rgba(0,0,0,.55)) brightness(1.1);
          z-index:9999 !important;
        }
        .fw-caption {
          position:absolute; bottom:calc(100% + 8px); left:50%; transform:translateX(-50%);
          background:rgba(20,12,4,.92); border:1px solid ${P.woodPale};
          padding:4px 10px; white-space:nowrap;
          font-family:'Caveat',cursive; font-size:13px; color:${P.paper};
          pointer-events:none; z-index:10001; border-radius:2px;
          box-shadow: 0 2px 8px rgba(0,0,0,.4);
        }

        /* Upload button */
        .fw-upload {
          font-family:'Caveat',cursive; font-size:16px; font-weight:700;
          background: ${P.wood}; color:${P.paper};
          border: 2px solid ${P.woodPale}; border-radius:4px;
          padding:9px 20px; cursor:pointer; letter-spacing:.5px;
          box-shadow: 0 4px 12px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.1);
          transition: all .15s;
          display:flex; align-items:center; gap:8px;
        }
        .fw-upload:hover { background:${P.woodLight}; transform:translateY(-1px); box-shadow:0 6px 16px rgba(0,0,0,.5); }
        .fw-upload:active { transform:translateY(0); }

        /* UI panels */
        .fw-panel {
          background: rgba(20,12,4,.82); border:1px solid rgba(140,90,48,.5);
          backdrop-filter:blur(4px); border-radius:4px;
        }

        @keyframes leaf-fall {
          0%   { transform: translate(0,0) rotate(0deg); opacity:.8; }
          100% { transform: translate(30px, 60px) rotate(180deg); opacity:0; }
        }
        @keyframes pulse-upload {
          0%,100% { box-shadow:0 0 0 0 rgba(232,160,64,.4); }
          50%     { box-shadow:0 0 0 12px rgba(232,160,64,0); }
        }
        .pulse { animation: pulse-upload .9s ease-out 2; }

        @keyframes new-photo-drop {
          0%   { opacity:0; transform:rotate(8deg) translateY(-30px); }
          70%  { transform:rotate(8deg) translateY(4px); }
          100% { opacity:1; transform:rotate(8deg) translateY(0); }
        }
        .new-drop { animation: new-photo-drop .7s cubic-bezier(.34,1.56,.64,1) forwards; }

        @keyframes float-text {
          0%  { opacity:1; transform:translateY(0); }
          100%{ opacity:0; transform:translateY(-28px); }
        }
        .float-text { animation: float-text 1.1s forwards; font-family:'Caveat',cursive; font-size:15px; color:#7ab840; font-weight:700; }

        /* Custom scrollbar hidden */
        ::-webkit-scrollbar { display:none; }
      `}</style>

      <div className="fw-root" onMouseDown={onDown} onMouseMove={(e) => { onMove(e); handleWallMouseMove(e); }} onMouseUp={() => { onUp(); handleWallMouseUp(); }} onMouseLeave={() => { onUp(); handleWallMouseUp(); }}>

        {/* ═══════════ WORLD ═══════════ */}
        <div className="fw-world" style={{ transform:`translate(${pan.x}px,${pan.y}px)`, width:WORLD_W, height:WORLD_H }}>

          {/* ── SVG: Environment ── */}
          <svg width={WORLD_W} height={WORLD_H} style={{position:"absolute",top:0,left:0}}>
            <defs>
              {/* Wood texture pattern */}
              <pattern id="wd" x="0" y="0" width="6" height="60" patternUnits="userSpaceOnUse">
                <rect width="6" height="60" fill={P.wood}/>
                <rect x="0" y="0" width="1" height="60" fill={P.bark} opacity=".3"/>
                <rect x="4" y="0" width="1" height="60" fill={P.woodLight} opacity=".2"/>
              </pattern>
              {/* Moss/bark wall */}
              <pattern id="bark" x="0" y="0" width="40" height="30" patternUnits="userSpaceOnUse">
                <rect width="40" height="30" fill={P.forestDeep}/>
                <rect x="2" y="2" width="18" height="10" rx="1" fill={P.forestMid} opacity=".5"/>
                <rect x="22" y="14" width="16" height="10" rx="1" fill={P.forestMid} opacity=".4"/>
                <rect x="0" y="13" width="40" height="1" fill={P.bark} opacity=".3"/>
              </pattern>
              {/* Dappled light filter */}
              <filter id="dapple" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency=".02 .04" numOctaves="3" seed="8" result="noise"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.4  0 0 0 0 0.6  0 0 0 0 0.2  0 0 0 0.18 0" in="noise" result="green"/>
                <feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="green"/></feMerge>
              </filter>
              <filter id="softglow">
                <feGaussianBlur stdDeviation="6" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <radialGradient id="canopyGrad" cx="50%" cy="0%" r="70%">
                <stop offset="0%"  stopColor={P.forestLight} stopOpacity=".9"/>
                <stop offset="60%" stopColor={P.forestDeep}  stopOpacity=".8"/>
                <stop offset="100%" stopColor="#060e06" stopOpacity="1"/>
              </radialGradient>
              <radialGradient id="floorGrad" cx="50%" cy="100%" r="60%">
                <stop offset="0%"  stopColor={P.soil}/>
                <stop offset="100%" stopColor={P.forestDeep}/>
              </radialGradient>
            </defs>

            {/* Sky / canopy light at top */}
            <rect width={WORLD_W} height={280} fill="url(#canopyGrad)"/>

            {/* Dappled sunlight patches */}
            {[200,600,1100,1600,2000,2400,2900,3300].map((lx,i)=>(
              <ellipse key={i} cx={lx} cy={120+i%2*40} rx={60+i*8} ry={30}
                fill={P.leafPale} opacity={.08+.04*Math.sin(tick*.05+i)} filter="url(#softglow)"/>
            ))}

            {/* Background trees (silhouettes) */}
            {[60,300,560,820,1080,1340,1580,1840,2100,2360,2620,2880,3140,3400].map((tx,i)=>{
              const h = 320 + (i%3)*60;
              const w = 50 + (i%4)*14;
              return (
                <g key={i}>
                  <rect x={tx-w/2} y={0} width={w} height={h+60} fill={P.bark} opacity={.7}/>
                  <ellipse cx={tx} cy={50} rx={w+20} ry={80} fill={P.forestMid} opacity={.65}/>
                  <ellipse cx={tx} cy={20} rx={w+10} ry={60} fill={P.forestLight} opacity={.35}/>
                </g>
              );
            })}

            {/* Dense canopy layer */}
            {[0,180,380,580,760,980,1200,1380,1580,1780,1980,2180,2380,2580,2780,2980,3180,3380].map((cx,i)=>(
              <ellipse key={i} cx={cx+70} cy={i%2===0?30:55} rx={120+i%4*20} ry={90+i%3*20}
                fill={i%3===0?P.forestLight:i%3===1?P.leafBright:P.forestMid}
                opacity={.6+.2*Math.sin(tick*.03+i)} />
            ))}

            {/* Hanging vines from canopy */}
            {vines.map((vx,i)=>{
              const len = 200+i%4*60;
              const sw = sway(i);
              return (
                <g key={i}>
                  <path d={`M${vx} 0 Q${vx+sw*3} ${len*.5} ${vx+sw} ${len}`}
                    stroke={P.forestMid} strokeWidth={2+i%2} fill="none" opacity={.7}/>
                  {/* Leaves on vine */}
                  {[0.3, 0.5, 0.7, 0.9].map((t,j)=>{
                    const ly = len * t;
                    const lx = vx + sw * t;
                    return <Leaf key={j} x={lx+(j%2===0?10:-10)} y={ly} rot={j*45+sway(i*2+j)*3}
                      scale={0.7+j*.15} color={j%2===0?P.leafBright:P.forestLight} opacity={.75}/>;
                  })}
                </g>
              );
            })}

            {/* Rope / wire across ceiling for bulbs */}
            {[0, 160, 320].map((wy,ri)=>(
              <path key={ri} d={`M0 ${wy+80} Q${WORLD_W/2} ${wy+100} ${WORLD_W} ${wy+80}`}
                stroke={P.ropeStr} strokeWidth={1.5} fill="none" opacity={.55}/>
            ))}

            {/* Hanging pendant bulbs */}
            {bulbs.map((bx,i)=>(
              <HangingBulb key={i} x={bx} wireTop={40+i%3*20} glowAmt={glow(i)}/>
            ))}

            {/* The wooden wall / back bar ── */}
            <rect x={0} y={280} width={WORLD_W} height={900} fill="url(#bark)"/>
            {/* Wood counter along the bottom of the wall zone */}
            <rect x={0} y={1060} width={WORLD_W} height={36} fill="url(#wd)"/>
            <rect x={0} y={1060} width={WORLD_W} height={4} fill={P.woodLight} opacity={.5}/>
            <rect x={0} y={1092} width={WORLD_W} height={3} fill={P.bark} opacity={.7}/>

            {/* Wall trim at top */}
            <rect x={0} y={278} width={WORLD_W} height={14} fill="url(#wd)"/>
            <rect x={0} y={288} width={WORLD_W} height={3} fill={P.woodPale} opacity={.35}/>

            {/* ── FRAMED SIGNS / MENU BOARDS (background art) ── */}
            {[180, 700, 1300, 1900, 2500, 3100].map((fx,i)=>(
              <g key={i}>
                <rect x={fx} y={310} width={140} height={100} rx={3} fill={P.bark}/>
                <rect x={fx+3} y={313} width={134} height={94} rx={2} fill={P.forestDeep}/>
                <rect x={fx+6} y={316} width={128} height={88} rx={1} fill={P.forestMid} opacity={.4}/>
                {/* Decorative lines */}
                {[0,1,2,3,4].map(l=>(
                  <rect key={l} x={fx+12} y={328+l*14} width={60+l%2*20} height={3} rx={1}
                    fill={P.woodPale} opacity={.25}/>
                ))}
              </g>
            ))}

            {/* ── SHELVES with jars / bottles ── */}
            {[0, 360, 720, 1080, 1440, 1800, 2160, 2520, 2880].map((sx,si)=>(
              <g key={si}>
                {/* Shelf plank */}
                <rect x={sx} y={740} width={380} height={10} fill={P.wood}/>
                <rect x={sx} y={740} width={380} height={3} fill={P.woodLight} opacity={.4}/>
                {/* Jars / bottles */}
                {[20,60,100,140,190,240,290,330].map((jx,ji)=>{
                  const h = 28+ji%3*10;
                  const w = 14+ji%2*6;
                  const jcol = [P.woodPale,"#8ab890","#c8d880","#90c8d0","#e8c870","#d080a0","#b0a8d0",P.amberPale][ji%8];
                  return (
                    <g key={ji}>
                      <rect x={sx+jx} y={740-h} width={w} height={h} rx={2} fill={jcol} opacity={.85}/>
                      <rect x={sx+jx+1} y={740-h+2} width={w-2} height={h-4} rx={1} fill="white" opacity={.12}/>
                      <rect x={sx+jx+2} y={740-h-4} width={w-4} height={6} rx={1} fill={P.wood}/>
                    </g>
                  );
                })}
              </g>
            ))}

            {/* Lower shelf */}
            {[0, 400, 800, 1200, 1600, 2000, 2400, 2800, 3200].map((sx,si)=>(
              <g key={si}>
                <rect x={sx} y={900} width={380} height={8} fill={P.wood}/>
                {[10,55,100,155,210,260,310,350].map((jx,ji)=>{
                  const col = [P.bark,P.woodPale,P.forestMid,"#c4d898","#e8c88a",P.woodLight,P.moss,"#b8ccd8"][ji%8];
                  return <rect key={ji} x={sx+jx} y={868} width={36} height={32} rx={1} fill={col} opacity={.8}/>;
                })}
              </g>
            ))}

            {/* ── FLOOR: soil + plants ── */}
            <rect x={0} y={1100} width={WORLD_W} height={900} fill="url(#floorGrad)"/>
            {/* Mossy ground strip */}
            <ellipse cx={WORLD_W/2} cy={1110} rx={WORLD_W/2+100} ry={40} fill={P.moss} opacity={.5}/>

            {/* Floor plants — large leaves */}
            {[50,180,340,500,680,860,1040,1220,1400,1580,1760,1940,2120,2300,2480,2660,2840,3020,3200,3380].map((px,i)=>{
              const h = 80 + i%4*30;
              const side = i%2===0 ? 1 : -1;
              return (
                <g key={i} transform={`translate(${px},1108)`}>
                  <ellipse cx={side*14} cy={-h*.6} rx={28+i%3*8} ry={h*.5} fill={i%3===0?P.leafBright:i%3===1?P.forestLight:P.leafPale} opacity={.8+flutter(i)*.03} transform={`rotate(${side*(-15+i%3*8)})`}/>
                  <ellipse cx={0} cy={-h*.4} rx={20+i%2*10} ry={h*.35} fill={P.forestMid} opacity={.7}/>
                  <rect x={-3} y={-h} width={6} height={h} rx={2} fill={P.forestDeep} opacity={.8}/>
                </g>
              );
            })}

            {/* ── FLOATING FLOWER PETALS ── */}
            {flowerPositions.map((fp,i)=>{
              const drift = flutter(i*3) * 4;
              return (
                <g key={i}>
                  {[0,1,2,3,4].map(p=>(
                    <ellipse key={p}
                      cx={fp.x + Math.cos(p*72*(Math.PI/180))*7 + drift}
                      cy={fp.y + Math.sin(p*72*(Math.PI/180))*7 + flutter(i+p)*2}
                      rx={5} ry={3}
                      transform={`rotate(${p*72 + tick*.5},${fp.x+drift},${fp.y})`}
                      fill={fp.c} opacity={.8}/>
                  ))}
                  <circle cx={fp.x+drift} cy={fp.y} r={3} fill={P.amberPale} opacity={.9}/>
                </g>
              );
            })}

            {/* ── STOOLS at the counter ── */}
            {[260, 540, 880, 1220, 1560, 1900, 2240, 2580, 2920, 3260].map((sx,i)=>(
              <g key={i} transform={`translate(${sx},1095)`}>
                <ellipse cx={0} cy={-38} rx={18} ry={5} fill={P.woodLight}/>
                <rect x={-4} y={-38} width={8} height={38} fill={P.wood}/>
                {/* Legs */}
                <line x1={-14} y1={-8} x2={-18} y2={22} stroke={P.bark} strokeWidth={3}/>
                <line x1={14} y1={-8} x2={18} y2={22} stroke={P.bark} strokeWidth={3}/>
                <line x1={-18} y1={8} x2={18} y2={8} stroke={P.bark} strokeWidth={2}/>
              </g>
            ))}

            {/* ── HANGING FRAMES / CHALKBOARDS ── */}
            {[440, 1040, 1640, 2240, 2840].map((fx,i)=>(
              <g key={i}>
                {/* Rope */}
                <line x1={fx+40} y1={280} x2={fx+40} y2={310} stroke={P.ropeStr} strokeWidth={1.2}/>
                <line x1={fx+120} y1={280} x2={fx+120} y2={310} stroke={P.ropeStr} strokeWidth={1.2}/>
                {/* Frame */}
                <rect x={fx} y={310} width={160} height={110} rx={4} fill={P.wood}/>
                <rect x={fx+4} y={314} width={152} height={102} rx={2} fill={P.forestDeep}/>
                {/* Chalk text visual */}
                {[0,1,2,3,4,5].map(l=>(
                  <rect key={l} x={fx+14} y={326+l*14} width={30+l%3*20} height={4} rx={2}
                    fill={P.paperDark} opacity={.18+l*.02}/>
                ))}
              </g>
            ))}

            {/* ── POTTED plants on counter ── */}
            {[80,320,620,920,1220,1520,1820,2120,2420,2720,3020,3320].map((px,i)=>(
              <g key={i} transform={`translate(${px},1062)`}>
                <rect x={-8} y={-12} width={16} height={12} rx={2} fill={i%2===0?"#7a5030":P.woodLight}/>
                <rect x={-6} y={-10} width={12} height={10} rx={1} fill={P.forestMid} opacity={.4}/>
                {/* Plant */}
                <ellipse cx={-8} cy={-20} rx={10} ry={8} fill={P.leafBright} opacity={.9} transform={`rotate(${-20+flutter(i)*2})`}/>
                <ellipse cx={8} cy={-18} rx={9} ry={7} fill={P.forestLight} opacity={.85} transform={`rotate(${20+flutter(i+1)*2})`}/>
                <ellipse cx={0} cy={-26} rx={8} ry={10} fill={P.leafPale} opacity={.8}/>
                {i%3===0 && <circle cx={0} cy={-32} r={4} fill={P.pinkFlower} opacity={.9}/>}
                {i%3===1 && <circle cx={6} cy={-28} r={3} fill={P.whiteFlower} opacity={.9}/>}
              </g>
            ))}
          </svg>

          {/* ═══ WALL SIGN ═══ */}
          <div style={{
            position:"absolute", left:WORLD_W/2-420, top:294,
            width:840, textAlign:"center", pointerEvents:"none", zIndex:10,
          }}>
            <div style={{
              fontFamily:"'Caveat',cursive", fontSize:"28px", fontWeight:700,
              color:P.paper, letterSpacing:"2px",
              textShadow:`0 0 20px ${P.amber}, 0 2px 4px rgba(0,0,0,.8)`,
              lineHeight:1.2,
            }}>
              ✦ Riverside Exhibit Photo Gallery ✦
            </div>
            <div style={{
              fontFamily:"'Playfair Display',serif", fontStyle:"italic", fontSize:"13px",
              color:P.amberPale, opacity:.8, marginTop:2, letterSpacing:"1px",
            }}>
              Add your photo to become part of our Riverside story.
            </div>
          </div>

         {/* ═══ PHOTO CARDS ═══ */}
          {photoLayout.map((p) => (
            <div
              key={p.uid}
              className="fw-card"
              style={{
                position:"absolute",
                left: p.x, top: p.y,
                width: p.size + 24, height: p.size + 42,
                transform: `rotate(${p.rot}deg)`,
                zIndex: Math.floor(p.y) + 20,
              }}
              onMouseEnter={() => setHovered(p.uid)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* String/pin from top */}
              {p.stringFrom ? (
                <div style={{
                  position:"absolute", top:-18, left:"50%", transform:"translateX(-50%)",
                  width:1, height:18, background:P.ropeStr, opacity:.7,
                }}/>
              ) : null}

              {/* Tack */}
              <div style={{
                position:"absolute", top: p.stringFrom ? -22 : -6, left:"50%",
                transform:"translateX(-50%)",
                width:10, height:10, borderRadius:"50%",
                background: ["#c84040","#4060c8","#c88040","#408040","#c04080"][p.uid % 5],
                boxShadow:`0 0 6px rgba(0,0,0,.6)`,
                zIndex:2,
              }}/>

              {/* Paper frame */}
              <div style={{
                background: P.paper,
                padding: "5px 5px 18px 5px",
                width:"100%", height:"100%",
                boxShadow:"1px 2px 8px rgba(0,0,0,.55), inset 0 0 0 1px rgba(180,140,100,.3)",
                position:"relative",
              }}>
                <PhotoIllustration type={p.type} bg={p.bg} fg={p.fg} size={p.size}/>
                
                {/* Handwritten label */}
                <div style={{
                  position:"absolute", bottom:3, left:0, right:0,
                  textAlign:"center",
                  fontFamily:"'Caveat',cursive",
                  fontSize: Math.max(9, p.size / 7) + "px",
                  fontWeight:600,
                  color: P.ink,
                  lineHeight:1,
                  padding:"0 3px",
                  overflow:"hidden",
                }}>
                  {p.label.length > 12 ? p.label.slice(0,11) + "…" : p.label}
                </div>
              </div>
              {hovered === p.uid && (
                <div className="fw-caption">{p.caption}</div>
              )}
            </div>
          ))}

          {/* ═══ REAL UPLOADED PHOTOS ═══ */}
          {realPhotos.map((p,index) => (
            <div
              key={p.id}
              className="fw-card"
              onMouseDown={(e) => handlePhotoMouseDown(e, p)}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "absolute",
                left: p.x, 
                top: p.y,
                width: 100, 
                height: 120,
                transform: `rotate(${p.rot}deg)`,
                zIndex: Math.floor(p.y) + 1000,
                cursor: p.owner_id === MY_USER_ID ? (draggingPhoto?.id === p.id ? "grabbing" : "grab") : "default"
              }}
            >
              {p.stringFrom ? (
                <div style={{
                  position:"absolute", top:-18, left:"50%", transform:"translateX(-50%)",
                  width:1, height:18, background:P.ropeStr, opacity:.7,
                }}/>
              ) : null}

              <div style={{
                position: "absolute", top: p.stringFrom ? -22 : -6, left: "50%",
                transform: "translateX(-50%)",
                width: 10, height: 10, borderRadius: "50%",
                background: ["#c84040","#4060c8","#c88040","#408040","#c04080"][index % 5],
                boxShadow: `0 0 6px rgba(0,0,0,.6)`,
                zIndex: 2,
              }}/>
              {/* The Paper Frame */}
              <div style={{
                background: P.paper,
                padding: "6px 6px 20px 6px",
                width: "100%", height: "100%",
                boxShadow: "1px 2px 8px rgba(0,0,0,.55)",
                position: "relative",
              }}>
                <img 
                  src={p.url} 
                  alt="Player Upload" 
                  draggable="false"
                  style={{ width: "100%", height: "100%", objectFit: "cover",pointerEvents: "none"}} 
                />
                {p.label && (
                  <div style={{
                    position:"absolute", bottom:3, left:0, right:0,
                    textAlign:"center", fontFamily:"'Caveat',cursive",
                    fontSize: "14px", fontWeight:600, color: P.ink,
                    lineHeight:1, padding:"0 3px", overflow:"hidden",
                  }}>
                    {p.label.length > 12 ? p.label.slice(0,11) + "…" : p.label}
                  </div>
                )}
              </div>
              {hovered === p.id && p.caption && (
                <div className="fw-caption">{p.caption}</div>
              )}
            </div>
          ))}
        </div>

        {/* ═══ UI OVERLAY ═══ */}

        {/* Drag hint — bottom left */}
        <div className="fw-panel" style={{
          position:"fixed", bottom:22, left:22, zIndex:9999,
          padding:"8px 14px",
          fontFamily:"'Caveat',cursive", fontSize:"15px", color:P.amberPale,
          display:"flex", alignItems:"center", gap:8, pointerEvents:"none",
        }}>
          <span style={{fontSize:18}}>🖐</span> drag to wander
        </div>

        {/* Explored counter — bottom center */}
        <div className="fw-panel" style={{
          position:"fixed", bottom:22, left:"50%", transform:"translateX(-50%)", zIndex:9999,
          padding:"5px 16px",
          fontFamily:"'Caveat',cursive", fontSize:"14px", color:P.woodPale,
          pointerEvents:"none",
        }}>
          🌿 {explored}% explored · {NUM_PHOTOS} photos pinned
        </div>

        {/* Upload — bottom right */}
        <div style={{position:"fixed", bottom:22, right:22, zIndex:9999, display:"flex", flexDirection:"column", alignItems:"flex-end", gap:6}}>
          {uploadPulse && (
            <div className="float-text" style={{position:"absolute",bottom:54,right:10}}>
              📌 pinned!
            </div>
          )}
          <input 
          type="file" 
          accept="image/*" 
          style={{ display: 'none' }} 
          ref={fileInputRef} 
          onChange={handleFileSelected} 
        />
          <button className={`fw-upload ${uploadPulse ? "pulse" : ""}`} onClick={handleUploadClick}>
            <span>🌸</span> Pin a Photo
          </button>
        </div>

        {/* Top vignette for depth */}
        <div style={{
          position:"fixed", top:0, left:0, right:0, height:"120px",
          background:"linear-gradient(to bottom, rgba(6,14,6,.7) 0%, transparent 100%)",
          pointerEvents:"none", zIndex:100,
        }}/>
        {/* Bottom vignette */}
        <div style={{
          position:"fixed", bottom:0, left:0, right:0, height:"100px",
          background:"linear-gradient(to top, rgba(6,14,6,.75) 0%, transparent 100%)",
          pointerEvents:"none", zIndex:100,
        }}/>
        {/* Left/right vignettes */}
        <div style={{position:"fixed",top:0,left:0,bottom:0,width:"80px",background:"linear-gradient(to right,rgba(6,14,6,.5),transparent)",pointerEvents:"none",zIndex:100}}/>
        <div style={{position:"fixed",top:0,right:0,bottom:0,width:"80px",background:"linear-gradient(to left,rgba(6,14,6,.5),transparent)",pointerEvents:"none",zIndex:100}}/>

      </div>
    </>
  );
}
