
var sallingApi = {

 getStores(brand){

    return fetch("https://localhost:5001/api/stores/" + brand)
    .then( async response => {
 
       const data = await response.json();
       if(!response.ok){
         const error = data.message
         return Promise.reject(error)
       }
       return data
    })
    .catch(error => {
      console.error("There was error", error.message)
    })

  }
,


 getOfffersByStore(storeId){

    return fetch("https://localhost:5001/api/offers/" + storeId)
    .then( async response => {
 
       const data = await response.json();
       if(!response.ok){
         const error = data.message
         return Promise.reject(error)
       }
       return data
    })
    .catch(error => {
      console.error("There was an error", error.message)
    })

  }
}
export default sallingApi