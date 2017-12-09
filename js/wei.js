/**
 * Created by lenovo on 17/12/5 005.
 */
//Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//点击开始
var music=document.getElementById("music");
var musicsd=document.querySelectorAll(".musicsd")[0];
var musicas=document.querySelectorAll(".musicas")[0];
var audio=document.querySelectorAll("audio")[0];
var as=1;
 music.onclick=function(){
    if(as==1){
        musicas.style.display="none";
        musicsd.style.animation="none";
        audio.pause();
        as=0;
    }else{
        musicsd.style.display="block";
        musicas.style.animation="circle 1s infinite linear";
        audio.play();
        as=1;
    }
};

