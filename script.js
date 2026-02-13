/* ELEMENTOS */
const intro = document.getElementById("intro");
const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");
const card = document.querySelector(".card");
const ring = document.querySelector(".ring-container");
const hearts = document.querySelector(".hearts");

/* TEXTO */
const text = document.getElementById("hiddenText").innerText;
const target = document.getElementById("typing");
let i = 0;

/* TEXTO LETRA POR LETRA */
function typeText(){
  if(i < text.length){
    target.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    setTimeout(typeText, 40);
  }
}

/* FADE IN MÚSICA */
function fadeIn(){
  music.volume = 0;
  music.play().catch(()=>{});
  let v = 0;
  const fade = setInterval(()=>{
    if(v < 0.4){
      v += 0.02;
      music.volume = v;
    }else{
      clearInterval(fade);
    }
  },100);
}

/* INICIAR TODO */
intro.addEventListener("click", ()=>{
  intro.style.display="none";

  card.classList.remove("hidden");
  ring.classList.remove("hidden");
  hearts.classList.remove("hidden");

  fadeIn();
  musicBtn.style.display="block";
  musicBtn.classList.add("music-playing");

  typeText();
});

/* BOTÓN PAUSA */
let playing = true;
musicBtn.addEventListener("click", ()=>{
  if(playing){
    music.pause();
    musicBtn.textContent="▶️";
    musicBtn.classList.remove("music-playing");
  }else{
    music.play();
    musicBtn.textContent="⏸️";
    musicBtn.classList.add("music-playing");
  }
  playing = !playing;
});

/* ❤️ CORAZONES INTENSOS */
setInterval(()=>{
  for(let j=0;j<3;j++){
    const heart = document.createElement("span");
    heart.innerHTML = Math.random()>0.5 ? "❤️":"💖";
    heart.style.left = Math.random()*100+"vw";
    heart.style.fontSize = (14+Math.random()*24)+"px";
    heart.style.animationDuration = (4+Math.random()*4)+"s";
    hearts.appendChild(heart);
    setTimeout(()=>heart.remove(),8000);
  }
},300);

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openImage(img){
  lightbox.style.display="flex";
  lightboxImg.src = img.src;
}
function closeImage(){
  lightbox.style.display="none";
}
