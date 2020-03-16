
const BASE_URL = 'http://localhost:3000'

const parseData = response => response.json()

const catchError = error => console.log(`%c${error}`, 'color: red;')


export const fetchCategories = (user_id) => { 
    return fetch(`${BASE_URL}/users/${user_id}/categories`)
            .then(parseData)
            .catch(catchError)}

export const postLifeWheel = (user_id, categoryScores) =>  {
    const life_wheel = {category_scores: categoryScores}
    return fetch(`${BASE_URL}/users/${user_id}/life_wheels`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(life_wheel)
    })
    .then(parseData)
    .catch(catchError);
} 

// export const patchKaiju = (kaiju) =>  fetch(kaijusURL + kaiju.id, {
//                                     method: 'PATCH',
//                                     headers: {'Content-Type':'application/json'},
//                                     body: JSON.stringify({name: kaiju.name,
//                                                           power: kaiju.power,
//                                                           image: kaiju.image})
//                                 })
//                                 .then(parseData)
//                                 .catch(catchError);

// export const deleteKaiju = (kaiju) =>  fetch(kaijusURL + kaiju.id, {
//                                     method: 'DELETE',
//                                     headers: {'Content-Type':'application/json'}
//                                 })
//                                 .then(parseData)
//                                 .catch(catchError);

// //////////////////////////////////////////////////////

// // Fetches for sightings, will return a promise
// // GET /sightings
// export const fetchSightings = () => fetch(sightingsURL)
// .then(parseData)
// .catch(catchError)

// // TODO: define a few more sighting fetches
