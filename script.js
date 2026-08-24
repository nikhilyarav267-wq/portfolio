const videos=document.querySelectorAll(".portfolio-video");
function setSoundButton(button,video){const on=!video.muted;button.classList.toggle("is-on",on);button.setAttribute("aria-pressed",String(on));button.setAttribute("aria-label",on?"Mute video":"Unmute video")}
document.querySelectorAll(".sound-btn").forEach(button=>{const video=button.closest(".video-card").querySelector("video");button.addEventListener("click",e=>{e.stopPropagation();video.muted=!video.muted;if(video.paused)video.play().catch(()=>{});setSoundButton(button,video)})});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{const video=entry.target;if(entry.isIntersecting)video.play().catch(()=>{});else video.pause()}),{threshold:.35});videos.forEach(video=>observer.observe(video));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll(".project,.about,.contact,.section-head").forEach(el=>{el.classList.add("reveal");revealObserver.observe(el)});
