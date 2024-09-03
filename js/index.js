let myhttp = new XMLHttpRequest
let row = document.querySelector(".row")
let selectdFood = document.querySelector("select")
const searchInput = document.getElementById('search-input');
let userInput= document.querySelector("#userInput")
selectdFood.addEventListener("change",function(){
  userInput.value=''
  getdata(selectdFood.value)
})
userInput.addEventListener("blur",function(){
getdata(userInput.value)
}) 

selectdFood.addEventListener("change",function(){
    getdata(this.value)     
})



getdata('pizza')
function getdata(data){
    myhttp.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${data}`)
myhttp.send()
myhttp.addEventListener("readystatechange",function(){
  if(this.readyState == 4){
       let allData =  JSON.parse(myhttp.response)
       console.log(allData.recipes);
        showData(allData.recipes)

     }
})
}



function showData (arr){
    let cartona = ''

    for (let index = 0 ;index < arr.length ; index++){
        cartona+=`
         <div class="col-md-4">
        <img class="w-100 mb-2" src="${arr[index].image_url}" alt="">
        <p><b>Title: </b>${arr[index].title}</p>
        <p><b>ID: </b>${arr[index].recipe_id}</p>
        <p><b>publisher: </b>${arr[index].publisher}</p>
      <p> <b>Social Rank: </b>${arr[index].social_rank}</p>
      </div> `
    }
    row.innerHTML=cartona
}