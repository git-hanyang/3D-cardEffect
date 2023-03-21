

//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const buttons=document.querySelectorAll('#size-btn')


//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(150px)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
setInterval(()=>{card.style.transition= 'none'}, 300)

  //Popout
  container.style.transform="perspective(500px) translateZ(-250px)"
  title.style.transform = "translateZ(80px)";
  sneaker.style.transform = "perspective(800px) translateZ(150px) rotateZ(-45deg)";
  description.style.transform = "translateZ(70px)";
  sizes.style.transform = "translateZ(80px)";
  purchase.style.transform = "perspective(600px) translateZ(50px)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});


for(let button of buttons){

    //to add class to only ONE selected button
    button.addEventListener('click',function(e){
        this.classList.add('active')

    //to remove class from unselected button
        console.log(this.innerText)

        buttons.forEach((el)=>{
            if(el.innerText!==this.innerText){
                el.className=''
            }
        })
    })
}

purchase.addEventListener('click',()=>{
    alert('Out of stock')
})



//Features

///css:
///transform-style: preserve-3d; this is to apply on parent node for those with translateZ(0px)
//transition: all 0.75s ease-out;


//<on mousemove>
///transform: perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(150px);
///transform: perspective(800px) translateZ(150px) rotateZ(-45deg);
///transform: translateZ(80px)







//https://www.w3schools.com/css/css3_transitions.asp
//https://www.w3schools.com/cssref/css3_pr_transform.php
