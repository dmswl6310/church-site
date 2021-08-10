//Fetch the items from the JSon file
function loadItems(){
    return fetch('data/data.json')
    .then(response=>response.json())
    .then(json=>json.items);
}

//Update the list with the given items
function displayItems(items){
const container=document.querySelector('.items');
container.innerHTML=items.map(item=>createHTMLString(item)).join('');
}

//Create HTML list item from the given data item
function createHTMLString(item){
    return `
    <li class="item"><div class="videoTitle">${item.title}</div>
    <iframe width="94%" height="330" src="${item.source}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </li>
    `;
    //<img src="${item.image}" alt="${item.type}" class="item__thumbnail">
    //<span class="item__description">${item.gender},${item.size}</span>
    //</li>
}

function onButtonClick(event,items){
    const dataset=event.target.dataset;
    const key=dataset.key;
    const value=dataset.value;

    if(key==null || value==null){
        return;
    }
    //누른 버튼의 type에 따른 list중 value가 같은것 출력
    displayItems(items.filter(item=>item[key]===value));

}

function setEventListeners(items){
    const viewall=document.querySelector(".thumb");
    const tags=document.querySelector(".tags");
    viewall.addEventListener('click',()=>displayItems(items));
    tags.addEventListener('click',event=>onButtonClick(event,items));
}

//main
loadItems()
.then(items=>{
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log);