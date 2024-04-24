fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
  renderUI(data)
  const az=document.getElementById('az')
  const za=document.getElementById('za')
  const card=document.querySelector('.card')
  az.addEventListener('click',(e)=>{
    e.preventDefault()
    let hello=data.sort((a,b)=>{return a.price - b.price})
    renderUI(hello)
    })
  za.addEventListener('click',(e)=>{
    e.preventDefault()
    let bye=data.sort((a,b)=>{return b.price - a.price})
    renderUI(bye)
  })

 
})
function renderUI(list) {
  let cardArea=document.querySelector('.cardArea')
  let innerHTML=""
  for (let i = 0; i < list.length; i++) {


    innerHTML+=
    `
    <div class="card" style="width: 18rem; ">
    <div class="card-body">
      <img style="width:200px" src="${list[i].image}">
      <h5 class="card-title">${list[i].title}</h5>
      <p class="card-text">${list[i].description}</p>
      <p class="card-text">${list[i].price}$</p>
    </div>
  </div>
  
    `
   
}
cardArea.innerHTML=innerHTML

}