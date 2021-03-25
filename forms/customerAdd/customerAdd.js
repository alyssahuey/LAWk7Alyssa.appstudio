/*
customerAdd.onshow = function() {
    txtaCustomersAdd.style.height = "100px"
     query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        console.log(`The results are: \n ${results}`)
        results = JSON.parse(req.responseText)
        //console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)

        if (results.length == 0)
            lblMessage6.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
            txtaCustomersAdd.value = message
        } // end else

    } else // the transit didn't work - bad wifi? server turned off?
        lblMessage6.value = "Error code: " + req.status
}

btnAdd.onclick=function(){
  let customerName = inptNameAdd.value
  let street = inptStreetName.value 
  let city = inptCity.value 
  let state = inptState.value 
  let zipcode = inptZipcode.value 
  query = "INSERT INTO customer (name, street, city, state, zipcode) VALUES ('" + customerName + "', '" + street + "', '" + city + "', '" + state + "', '" + zipcode + "')"
  //alert(query)
  
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=jad64177&query=" + query)
    if (req.status == 200) {
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblMessage6.value = "You have successfully added the customer!"
        else
            lblMessage6.value = "There was a problem with adding the customer to the database."
    } else 
        // transit error
        lblMessage6.value = "Error: " + req.status
}
*/
