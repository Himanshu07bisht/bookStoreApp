<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Simple AJAX POST Example</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("#postDataButton").click(function(){
        // Data to be sent in the POST request
        var postData = {
            name: "John Doe",
            email: "john@example.com"
        };

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts", // Sample API endpoint
            type: "POST",
            data: postData, // Data to be sent in the request body
            success: function(response){
                // This function executes if the request succeeds
                console.log("Data posted successfully:", response);
                // Do something with the response data
                $("#responseData").text(JSON.stringify(response));
            },
            error: function(xhr, status, error){
                // This function executes if the request fails
                console.error("Error posting data:", error);
                // Handle the error
            }
        });
    });
});
</script>
</head>
<body>

<button id="postDataButton">Post Data</button>
<div id="responseData"></div>

</body>
</html>