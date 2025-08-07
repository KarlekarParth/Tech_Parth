document.addEventListener("keydown",function(event){
    const key= event.key.toLowerCase();
    switch(key){
        case 'a':
            document.getElementById("TabA").currentTime=0;
            document.getElementById("TabA").play();
            break;
        case 's':
                document.getElementById("TabS").currentTime=0;
                document.getElementById("TabS").play();
                break;
        case 'd':
                document.getElementById("TabD").currentTime=0;
                document.getElementById("TabD").play();
                break;
        case 'j':
                document.getElementById("TabJ").currentTime=0;
                document.getElementById("TabK").play();
                break;
        case 'k':
                document.getElementById("TabK").currentTime=0;
                document.getElementById("TabK").play();
                break;
        case 'l':
                document.getElementById("TabL").currentTime=0;
                document.getElementById("TabL").play();
                break;
    }

    let A = document.querySelector("#box13");
    A.addEventListener("click",function(){
        document.getElementById("TabA").currentTime=0;
        document.getElementById("TabA").play();
    })
    let S = document.querySelector("#t11");
    S.addEventListener("click",function(){
        document.getElementById("TabS").currentTime=0;
        document.getElementById("TabS").play();
    })
    let D = document.querySelector("#t12");
    D.addEventListener("click",function(){
        document.getElementById("TabD").currentTime=0;
        document.getElementById("TabD").play();
    })
    let J = document.querySelector("#box23");
    J.addEventListener("click",function(){
        document.getElementById("TabJ").currentTime=0;
        document.getElementById("TabJ").play();
    })
    let K = document.querySelector("#t21");
    K.addEventListener("click",function(){
        document.getElementById("TabK").currentTime=0;
        document.getElementById("TabK").play();
    })
    let L = document.querySelector("#t22");
    L.addEventListener("click",function(){
        document.getElementById("TabL").currentTime=0;
        document.getElementById("TabL").play();
    })
})
const keyMap = {
    'a': 'box13',
    's': 'box13',
    'd': 'box13',
    'j': 'box23',
    'k': 'box23',
    'l': 'box23',
  };

function triggerPressEffect(element) {
  element.classList.add("pressed");
  setTimeout(() => {
    element.classList.remove("pressed");
  }, 100);
}
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  const boxId = keyMap[key];
  if (boxId) {
    const box = document.getElementById(boxId);
    if (box) triggerPressEffect(box);
  }
});

Object.values(keyMap).forEach(id => {
  const box = document.getElementById(id);
  if (box) {
    box.addEventListener("mousedown", () => triggerPressEffect(box));
  }
});
