export { default as Weather } from './Weather'
export { default as Daily } from './Daily'
export { default as SearchBar } from './SearchBar'

export let HelperFunctionAPI = (url, callbackFn, type, updateView) => {
  let apiKey = '&APPID=a4aaf9e2c3889a342be449d98c9f64d3'

  let requestURL =
    type === 'Farenheit'
      ? url + '&units=imperial' + apiKey
      : url + '&units=metric' + apiKey

  fetch(requestURL)
    //fetches from the API and converts the response into JSON data
    .then(resp => resp.json())
    .then(data => {
      if (data.cod !== '200') {
        //if data could not be found, throws a new error with the error message given by response object
        throw new Error(data.message)
      } else {
        //initializing the weekData array with the first day of the week
        let weekData = [data.list[0]]
        for (let i = 8; i < data.list.length; i++) {
          //since I wanted to make a simpler web app, I filtered out the data for the 3 hour cycles and pushed in the data for each unique day instead
          if (i % 8 === 0) {
            weekData.push(data.list[i])
          }
        }
        //sends weekly data, city information and api url back up to the parent to update state
        callbackFn(weekData, url, data.city, true, '')
        //if the update view function was passed in, change parent view
        if (updateView) updateView()
      }
    })
    .catch(err => {
      //catches error and sends it up to parent to display error message
      callbackFn([], '', null, false, err.message)
      console.log(err)
    })
}
