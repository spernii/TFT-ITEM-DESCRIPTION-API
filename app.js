let itemObj //json file


fetch('https://spernii.github.io/tft-api/items.json')
  .then(response => response.json())
  .then(data => itemObj = data)
  .then(()=>{
    
    appInit()
  })
  

let appInit = ()=>{
    const stats = document.getElementById('stats')
    const description = document.getElementById('description')
    const shadowDescription = document.getElementById('shodow-description')
    const searchBar = document.getElementById('searchbar');
    const submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('click', (e)=>{
        let searchBarInput = searchBar.value // value input of user
        if(searchBarInput == ""){
          console.log('Enter Some')
        }else{
          let itemsArr = Object.keys(itemObj.items) //keys of the json file for item names
          let responsText = itemsArr.filter(item=>{
            console.log(item)
            if(searchBarInput == item.toLowerCase()){
              
              stats.textContent = JSON.stringify(itemObj.items[item].stats)
              description.textContent = JSON.stringify(itemObj.items[item].description)
              shadowDescription.textContent = JSON.stringify(itemObj.items[item]['shadow-description'])
              
            }
          })
          
          
        }
        
    })
}