/*
customerDelete.onshow = function() {
    txtaCustomersDelete.style.height = "100px"
     query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        console.log(`The results are: \n ${results}`)
        results = JSON.parse(req.responseText)
        //console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)

        if (results.length == 0)
            lblMessage2.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
            txtaCustomersDelete.value = message
        } // end else

    } else // the transit didn't work - bad wifi? server turned off?
        lblMessage2.value = "Error code: " + req.status
}


btnDelete.onclick=function(){
   let customerNameDel = inptNameDel.value
    
    let found = false
    for (i = 0; i < allCustomerData.length; i++) {
        if (customerNameDel == allCustomerData[i][1]){
            found = true
            break 
        }
    }
    if (found == false) 
       lblMessage2.value = "That customer name is not in the database."
    else if (found == true) {
      
      query = "DELETE FROM customer WHERE name = '" + customerNameDel + "'"  
      alert(query)
      
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=clc90595&query=" + query)
      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    
                lblMessage2.value = `You have successfully deleted the customer named ${customerNameDel}.`
            else
                lblMessage2.value = `There was a problem deleting ${customerNameDel} from the database.`
      else
        lblMessage2.value = `Error: ${req.status}`
    }
*/