const playSlider = () =>{
    let html = document.querySelector("html"),
    worksContainerItem = document.querySelectorAll("#works .container__item"),
    worksDotsUl=document.querySelector(".works-dots"),
    oldWorksDots=worksDotsUl.querySelectorAll(".dots"),
    customersContainerItem = document.querySelectorAll("#customers .container__item"),
    customersDotsUl=document.querySelector(".customers-dots"),
    oldCustomersDots=customersDotsUl.querySelectorAll(".dots"),
    nav=document.querySelector("nav"),
    addClass = (items, index, classStyle) => {
    items[index].classList.add(classStyle);
    },
    removeClass = (items, index, classStyle) => {
    items[index].classList.remove(classStyle);
    },
    changeSlide = (list, index) => {
        list.forEach(e => {
            e.style.display = "none";
            e.style.order = "0";
        });
        let adder;
        if (document.body.clientWidth<600) adder=0;
        else if (document.body.clientWidth>800) adder=2;
        else adder=1;
        for (i = index; i<=index+adder; i++){
            c=i<list.length?i:(i-list.length);
            list[c].style.display = "inline";
            list[c].style.order = String(i);
        }
    },
    currentWorksSlideIndex=0,
    currentCustomersSlideIndex=0;
    

    //Удаление точек
    for(let i=0;i<oldWorksDots.length;i++){
        oldWorksDots[i].remove();
    };
    for(let i=0;i<oldCustomersDots.length;i++){
        oldCustomersDots[i].remove();
    };
    
    
    //Добавление точек
    for(let i=0;i<worksContainerItem.length;i++){
    let newDot = document.createElement("li");
    newDot.classList.add("dots");
    worksDotsUl.appendChild(newDot);
    };
    let worksDots = worksDotsUl.querySelectorAll(".dots");
    worksDots[0].classList.add("dots-active");
    
    for(let i=0;i<customersContainerItem.length;i++){
        let newDot = document.createElement("li");
        newDot.classList.add("dots");
        customersDotsUl.appendChild(newDot);
    };
    let customersDots = customersDotsUl.querySelectorAll(".dots");
    customersDots[0].classList.add("dots-active");
    
    //Анимация
    const animateWorksSlide = () => {
    removeClass(worksContainerItem, currentWorksSlideIndex, "container__item-active");
    removeClass(worksDots,currentWorksSlideIndex,"dots-active");
    currentWorksSlideIndex++;
    if (currentWorksSlideIndex===worksContainerItem.length) currentWorksSlideIndex=0;
    addClass(worksContainerItem, currentWorksSlideIndex, "container__item-active");
    addClass(worksDots,currentWorksSlideIndex,"dots-active");
    changeSlide(worksContainerItem,currentWorksSlideIndex);
    };
    changeSlide(worksContainerItem,currentWorksSlideIndex);
    let idWorksAnimate = setInterval(animateWorksSlide, 7000);
    
    
    const animateCustomersSlide = () => {
        removeClass(customersContainerItem, currentCustomersSlideIndex, "container__item-active");
        removeClass(customersDots,currentCustomersSlideIndex,"dots-active");
        currentCustomersSlideIndex++;
        if (currentCustomersSlideIndex===customersContainerItem.length) currentCustomersSlideIndex=0;
        addClass(customersContainerItem, currentCustomersSlideIndex, "container__item-active");
        addClass(customersDots,currentCustomersSlideIndex,"dots-active");
        changeSlide(customersContainerItem,currentCustomersSlideIndex);
        };
        changeSlide(customersContainerItem,currentCustomersSlideIndex);
        let idCustomerswAnimate = setInterval(animateCustomersSlide, 7000);
    

    //Делегирование (клик)
    html.addEventListener("click", (event) => {
        let target = event.target;
        if (document.body.clientWidth<800) nav.style.display="none";
        if (!target.matches(".arrow, .dots, #burgermenu")) return;
        //Обработка клика по кнопкам
        if (target.matches("#works .arrow")){
            removeClass(worksContainerItem, currentWorksSlideIndex, "container__item-active");
            removeClass(worksDots,currentWorksSlideIndex,"dots-active");
            if (target.matches(".left")) {
                currentWorksSlideIndex--; if(currentWorksSlideIndex===-1) currentWorksSlideIndex=worksContainerItem.length-1;
            }else{
                currentWorksSlideIndex++; if(currentWorksSlideIndex===worksContainerItem.length) currentWorksSlideIndex=0;
            };
            addClass(worksContainerItem, currentWorksSlideIndex, "container__item-active");
            addClass(worksDots,currentWorksSlideIndex,"dots-active");
            changeSlide(worksContainerItem,currentWorksSlideIndex);

        }  else if (target.matches("#customers .arrow")){
            removeClass(customersContainerItem, currentCustomersSlideIndex, "container__item-active");
            removeClass(customersDots,currentCustomersSlideIndex,"dots-active");
            if (target.matches(".left")) {
                currentCustomersSlideIndex--; if(currentCustomersSlideIndex===-1) currentCustomersSlideIndex=customersContainerItem.length-1;
            }else{
                currentCustomersSlideIndex++; if(currentCustomersSlideIndex===customersContainerItem.length) currentCustomersSlideIndex=0;
            };
            addClass(customersContainerItem, currentCustomersSlideIndex, "container__item-active");
            addClass(customersDots,currentCustomersSlideIndex,"dots-active");
            changeSlide(customersContainerItem,currentCustomersSlideIndex);
        } 
        //Обработка клика по точкам
        else if (target.matches("#works .dots") && (!target.matches(".dots-active"))){
            removeClass(worksContainerItem, currentWorksSlideIndex, "container__item-active");
            removeClass(worksDots,currentWorksSlideIndex,"dots-active");
            for (let i=0; i<worksContainerItem.length;i++){
                if(worksDots[i]==target){
                    currentWorksSlideIndex=i;
                    break;
                };
            };
            addClass(worksContainerItem, currentWorksSlideIndex, "container__item-active");
            addClass(worksDots,currentWorksSlideIndex,"dots-active");
            changeSlide(worksContainerItem,currentWorksSlideIndex);

        }else if (target.matches("#customers .dots") && (!target.matches(".dots-active"))){
            removeClass(customersContainerItem, currentCustomersSlideIndex, "container__item-active");
            removeClass(customersDots,currentCustomersSlideIndex,"dots-active");
            for (let i=0; i<customersContainerItem.length;i++){
                if(customersDots[i]==target){
                    currentCustomersSlideIndex=i;
                    break;
                };
            };
            addClass(customersContainerItem, currentCustomersSlideIndex, "container__item-active");
            addClass(customersDots,currentCustomersSlideIndex,"dots-active");
            changeSlide(customersContainerItem,currentCustomersSlideIndex);
        }
        //Burger-menu
        else if (target.matches("#burgermenu")){
            nav.style.display = nav.style.display == "none"? "flex":"none";
        };
    });
       
    };
    
    playSlider();
     