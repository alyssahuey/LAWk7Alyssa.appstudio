/*
SELECT from database (assume pet names are unique)
 Algorithm
 1. create global variables req and query and results if not already done
 2. create SELECT query
 3. look at query
 4. test SELECT query in Database
 5. run ajax call (which runs the query)
    > if transit works, parse results. 
      > if results is empty, means no pets of that type in DB and tell user
      > if results has something in it, show results
         - build a message with each name
         - output the message into a control
    > if transit didn't work, tell user error in transit
*/

/*  SELECT CODE Cleaned up
        
    query = "SELECT * FROM pets"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "clc90595&pass=" + pw + "&database=clc90595&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblMessage1.textContent = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtResults.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage1.textContent = "Error code: " + req.status
}

*/
/*
customerSelect.onshow = function() {
    txtaCustomers.style.height = "100px"
     query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        console.log(`The results are: \n ${results}`)
        results = JSON.parse(req.responseText)
        //console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)

        if (results.length == 0)
            lblMessage.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
            txtaCustomers.value = message
        } // end else

    } else // the transit didn't work - bad wifi? server turned off?
        lblMessage.value = "Error code: " + req.status
}
*/