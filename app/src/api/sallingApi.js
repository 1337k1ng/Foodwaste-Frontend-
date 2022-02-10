
var sallingApi = {

 getStores(brand){

    return fetch("https://localhost:5001/api/stores/" + brand)
    .then( async response => {
 
       const data = await response.json();
        console.log(data)
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
}
export default sallingApi