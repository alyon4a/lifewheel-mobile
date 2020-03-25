//TODO OOP! adapter class for all the fetches
//TODO move this to env config
const BASE_URL = 'http://localhost:3000'

const parseData = response => response.json()

const catchError = error => console.log(`%c${error}`, 'color: red;')


export const fetchCategories = (user_id) => { 
    return fetch_this(user_id, 'categories')
}

export const postLifeWheel = (user_id, categoryScores) =>  {
    const life_wheel = {category_scores: categoryScores}
    return post_this(user_id, 'life_wheels', life_wheel)
} 

export const fetchLifeWheels = (user_id) =>  {
    return fetch_this(user_id, 'life_wheels')
} 

export const fetchFullLifeWheels = (user_id) =>  {
    return fetch_this(user_id, 'full_life_wheels')
} 

export const fetchHabits = (user_id) => { 
    return fetch_this(user_id, 'habits');
}

export const postHabitRecords = (user_id, habitRecodrds) =>  {
    return post_this(user_id, 'habit_records', habitRecodrds)
} 

export const fetchWeeklyHabitRecords = (user_id, start_date) => {
    return fetch_this(user_id, `weekly_habit_records?start_date=${start_date}`);
}

const fetch_this = (user_id, fetch_url) => {
    return fetch(`${BASE_URL}/users/${user_id}/${fetch_url}`)
            .then(parseData)
            .catch(catchError)
}

const post_this = (user_id, post_url, post_data) => {
    return fetch(`${BASE_URL}/users/${user_id}/${post_url}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(post_data)
    })
    .then(parseData)
    .catch(catchError);
}