const worksList = [
    {
        title:'Сайт про котиков',
        description:'Сайт про котиков, где можно заказать кошачьего доктора и узнать больше о других котовых сервисах',
        imgUrl:'./img/iam.png',
    },
    {
        title:'Калькулятор',
        description:'Сервис, в котором можно совершать простые маптематичесские операции',
        imgUrl:'./img/logo.png',
    },
    {
        title:'google',
        description:'отличный выбор для поисковика',
        imgUrl:'./img/image4.png',
    },
]

/* получаю доступ к элементам, в которых буду что то менять*/
const nameProject = document.getElementsByClassName('portfolio_name')[0]
const descriptionProject = document.getElementsByClassName('portfolio_description')[0]
const imgProgect = document.getElementsByClassName('imgPrjct')[0]



/* получаем кнопки */
const backButton = document.getElementsByClassName('arr')[0]
const nextButton = document.getElementsByClassName('arr')[1]


/* поменяли содержимое объекта с именем проекта */



let index = 0
updateWork()

/* перерисовываем элемент */
function updateWork(){
    nameProject.innerHTML = worksList[index].title
    descriptionProject.innerHTML = worksList[index].description
    imgProgect.src = worksList[index].imgUrl
}
 
/* увеличиваем номер показываемового элемента на 1 */
function showNextWork(){
    if(index<worksList.length-1){
        index+=1
    }
    else{
        index=0
    }
    updateWork()
}

/* уменшьшаем номер */
function showPrevWork(){
 
    if(index>0){
        index-=1
    }

    else{
        index=worksList.length-1
    } 
    updateWork()
  
}


nextButton.addEventListener('click',()=>showNextWork())
backButton.addEventListener('click',()=>showPrevWork())
