import axios from 'axios';
async function  getResults(query){
    const key = 'pizza';
    try{
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${key}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    }catch(error){
        alert(error);
    }
   
}
getResults();