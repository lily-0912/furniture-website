// ハンバーガー

function toggleNav() {
  const parent = document.querySelector("#js__header"),
    hamburger = document.querySelector("#js__hamburger"),
    background = document.querySelector("#js__hamburger-background");

  hamburger.addEventListener("click", function () {

    setTimeout(()=>{
      parent.classList.toggle("nav-open");
    } , 300);


    // if (parent.classList.contains("nav-open")) {
    //   setTimeout(() => {
    //     parent.classList.remove("nav-open");
    //   }, 300)
    // } else {
    //   setTimeout(() => {
    //     parent.classList.add("nav-open");
    //   }, 300)
    // }

    background.addEventListener("click", function () {
      parent.classList.remove("nav-open");
    });
  });
};

toggleNav();


// プロダクトのフェードイン

  window.addEventListener("DOMContentLoaded" , function(){

    // 要素の10%が画面に入ったら左から順に下からフェードイン
  const fadeInFromBottoms = document.querySelectorAll("#js__fade-in__from-bottom"),
        observerOpitions = {
          threshold: 0.1
        };

  const observer = new IntersectionObserver((fadeInFromBottoms, observer) =>{
    fadeInFromBottoms.forEach((fadeInFromBottom , index) => {
      if(fadeInFromBottom.isIntersecting){
        setTimeout(() => {
          fadeInFromBottom.target.classList.add("fade-in__from-bottom");
          observer.unobserve(fadeInFromBottom.target);
        } , index * 100);
      };
    });
  } , observerOpitions);

  fadeInFromBottoms.forEach((fadeInFromBottom) => {
    observer.observe(fadeInFromBottom);
  });

    
  // 左からフェードイン
  const fadeInFromLefts = document.querySelectorAll("#js__fade-in__from-left");
  fadeInFromLefts.forEach((fadeInFromLeft) =>{
      fadeInFromLeft.classList.add("fade-in__from-left");
  });
});