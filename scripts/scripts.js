
const api ="https://tribe.api.fdnd.nl/v1/member"
get()
async function get (){
const response= await fetch(api)
const data=await response.json()
// console.log(data.data[0].name)
document.querySelector('div').innerHTML=data.data[11].name
}
console.log('hallo')