function getCount(){

        var req = new XMLHttpRequest();  
        req.open('GET', 
        "https://uirb3uoyjh.execute-api.us-east-1.amazonaws.com/prod/resume_counter", 
        false);   
        req.send();  
        if(req.status == 200)
            {  
                len = req.responseText.length;
                console.log(req.responseText.substring(1, len-1));
                document.getElementById("count").textContent = req.responseText.substring(10, len-3);
            }
        else {
            console.log(req.status)
        }
    }

    window.onload = function(){
            getCount();
        };