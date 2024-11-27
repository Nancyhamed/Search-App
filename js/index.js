const accessKey="l08vH9KzEa5TFmxSI6PxC1zIpaoaQSFfDuzFeqi9wOw";

const form= document.querySelector("#form");
const input=document.querySelector("#input");
const searchBtn=document.querySelector("#searchBtn");
const imgcontainer=document.querySelector(".img-container");
const showBtn=document.querySelector("#showBtn");



let page=1;
let keyword ="";

async function searchImage() {
    keyword=input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    

    const response= await fetch(url);
    const data= await response.json();

    if(page==1){
        imgcontainer.innerHTML="";
    }

    const result=data.results;
    result.map((e)=>{
        const img=document.createElement("img");
        img.src=e.urls.small;
        const link = document.createElement("a");
        link.href=e.links.html;
        link.target="_blank";
        link.appendChild(img);
        imgcontainer.appendChild(link);
    })

    showBtn.style.display="block";


}

showBtn.addEventListener("click",()=>{
    page++;
    searchImage();
})


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})