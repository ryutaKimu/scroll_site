let imageItems = [...document.querySelectorAll(".img-wrap")];
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");

let setItemActive = (entries) => {
  console.log(entries);
  entries.map((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.add('active');
    }else{
        entry.target.classList.remove('active');
    }
  })
};
let options = {
    rootMargin:"0px",
    threshold:1,


};
let observer = new IntersectionObserver(setItemActive, options);

observer.observe(titleMessage);


//img 

imageItems.map((item,index)=>{
    item.children[0].style.backgroundImage = `url(./img/${index+1}.jpg)`;
    index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item);
})

titles.map((title,index)=>{
    index % 2 == 0 ? (title.style.left = "45%") : (title.style.left="35%");
    observer.observe(title);
})