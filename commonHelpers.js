import{a as y,i as l,S as f}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();y.defaults.baseURL="https://pixabay.com/";const v=document.querySelector(".search-form"),d=document.querySelector(".gallery"),m=document.querySelector(".loader"),a=document.querySelector(".load-more");let u="",n=1;v.addEventListener("submit",L);function L(o){o.preventDefault(),n=1,u=o.target.elements.searchQuery.value.trim(),m.style.display="block",p(u).then(r=>{if(r.hits.length===0)return d.innerHTML="",a.style.display="none",l.warning({title:"Wrong request",message:"Sorry, there are no images matching your search query. Please try again!"});d.innerHTML=g(r.hits),m.style.display="none",a.style.display="block",new f(".gallery a"),r.totalHits<=n*40&&(l.warning({title:"That's all",message:"Try another word"}),a.style.display="none")}).catch(r=>l.error({title:"Error",message:`Oh, we have problem: ${r}`})),o.target.elements.searchQuery.value=""}a.addEventListener("click",w);function w(){n+=1,p(u).then(o=>{if(d.insertAdjacentHTML("beforeend",g(o.hits)),o.totalHits<=n*40){l.warning({title:"Try another word",message:"We're sorry, but you've reached the end of search results."}),a.style.display="none";return}new f(".gallery a")})}async function p(o){return(await y.get("api/",{params:{key:"41293253-42a55b268bdac57d89d3cc200",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:n}})).data}function g(o){return o.map(({webformatURL:r,largeImageURL:c,tags:i,likes:e,views:t,comments:s,downloads:h,id:b})=>`<a class="gallery__link" href="${c}">
  <div class="gallery-item" id="${b}">
    <img class="gallery-item__img" src="${r}" alt="${i}" loading="lazy">
    <div class="info">
      <p class="info-item"><b>Likes</b>${e}</p>
      <p class="info-item"><b>Views</b>${t}</p>
      <p class="info-item"><b>Comments</b>${s}</p>
      <p class="info-item"><b>Downloads</b>${h}</p>
    </div>
  </div>
</a>`).join("")}
//# sourceMappingURL=commonHelpers.js.map