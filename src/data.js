
export  function films_fantasy(jsonData){
  return jsonData.films.filter(function(data){
    return data.genre == 'fantasy';
  });
}

export function films_genders(jsonData){
  let genders_list= [];
  return jsonData.films.filter(function(data){
    if(!genders_list.includes(data.genre)){
      return genders_list.push(data.genre);
    }
  });
} 
  
//Array.reduce(callback(acumulador, valorActual[,
//indice[, array]])[, valorInicial])



  //document.getElementById("all_movies").innerHTML = data_fantasyFilms;
    //console.log(data_fantasyFilms);
  




//export const anotherExample = () => {
  //return 'OMG';
//};
