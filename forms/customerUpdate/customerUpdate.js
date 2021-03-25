/*
customerUpdate.onshow = function() {
        txtaCustomersUpdate.style.height = "100px"
        query = "SELECT * FROM customer"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

        if (req.status == 200) { //transit trip worked. 
            console.log(`The results are: \n ${results}`)
            results = JSON.parse(req.responseText)
            //console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)

            if (results.length == 0)
                lblMessage4.value = "There are no customers in the database."
            else {
                let message = ""
                for (i = 0; i < results.length; i++)
                    message = message + results[i][1] + "\n"
                txtaCustomersUpdate.value = message
            } // end else
            else // the transit didn't work - bad wifi? server turned off?
                lblMessage4.value = "Error code: " + req.status
        }

        btnUpdate.onclick = function() {
                let newName = inptNameUpdate.value
                let oldName = inptOldName.value
                query = "SELECT * FROM customer WHERE `name` = '" + oldName + "'"
                req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
                if (req.status == 200) {
                    allCustomerData = JSON.parse(req.responseText)
                    if (allCustomerData.length > 0) {
                        query = "UPDATE customer SET `name` ='" + newName + "' WHERE `name` = '" + oldName + "'"
                        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
                        if (req.status == 200) // transit worked
                            if (req.responseText == 500) // update worked
                                lblMessage4.value = `You have successfully updated ${oldName} to ${newName}.`
                        else
                            lblMessage4.value = `There was a problem updating ${oldName} to ${newName}.`
                        else // transit error
                            lblMessage4.value = `Error: ${req.status}`
                    }
                }
            }
*/