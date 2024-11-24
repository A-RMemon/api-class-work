let cards = document.getElementById('cards')
let loading = document.getElementById('loading');
let container = document.getElementById('container')


const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
let api_key = `ab198133971b476d8de3818c07a50447`
let city = 'hyderabad'
  
async function fetching(){
    try{
        await fetch(`https://newsapi.org/v2/everything?q=canada&from=2024-10-23&sortBy=publishedAt&apiKey=${api_key}`, requestOptions)
        .then((response) => response.json())
        .then((data)=>{
            console.log(data)
          
            for(let item of data.articles){
                let image =item.urlToImage; 
                console.log(item)
                cards.innerHTML += ` <div class="card" style="margin-bottom: 20px;">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-text">${item.author}</h5>
                <h5 class="card-text">${item.source.name}</h5>
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
              <a href=${item.url} class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`;
          loading.style.display='none';
          container.style.display = 'block'

            }
    })
    }catch(e){
        console.log(e.message);
    }
    }



fetching();

// async function fetching() {
//     try {
//         const response = await fetch(
//             `https://newsapi.org/v2/everything?q=canada&from=2024-10-23&sortBy=publishedAt&apiKey=${api_key}`, 
//             requestOptions
//         );
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//         data.articles.forEach((item) => {
//             const image = item.urlToImage || 'placeholder.jpg';
//             const author = item.author || 'Unknown Author';
//             const sourceName = item.source?.name || 'Unknown Source';
//             cards.innerHTML += `
//                 <div class="card" style="width: 18rem;">
//                     <img src="${image}" class="card-img-top" alt="News Image">
//                     <div class="card-body">
//                         <h5>${author}</h5>
//                         <h5>${sourceName}</h5>
//                         <h5 class="card-title">${item.title}</h5>
//                         <p class="card-text">${item.description}</p>
//                         <a href=${item.url} class="btn btn-primary" target="_blank">Read More</a>
//                     </div>
//                 </div>`;
//         });
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         cards.innerHTML = `<p>Failed to load news articles. Please try again later.</p>`;
//     }
// }

