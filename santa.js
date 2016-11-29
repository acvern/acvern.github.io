        var listOfNames = [];
        var finalNames = [];
        
        function loadNames() {
  	    var xmlhttp;
  	    if (window.XMLHttpRequest) {
    		xmlhttp = new XMLHttpRequest();
  	    } 
	    else {
    		// code for older browsers
    		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	    }
	    xmlhttp.onreadystatechange = function() {
    	    	if (this.readyState == 4 && this.status == 200) {
      		    listOfNames = this.responseText.trim().split(" ");
        	}
  	    };
  	    xmlhttp.open("GET", "https://raw.githubusercontent.com/alvernchen/alvernchen.github.io/master/names.txt", true);
  	    xmlhttp.send();
	}

        function loadFinal() {
  	    var xmlhttp;
  	    if (window.XMLHttpRequest) {
    		xmlhttp = new XMLHttpRequest();
  	    } else {
    		// code for older browsers
    		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	    }
  	    xmlhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
      		finalNames = this.responseText.trim().split(" ");
    		}
  	    };
  	    xmlhttp.open("GET", "https://raw.githubusercontent.com/alvernchen/alvernchen.github.io/master/final.txt", true);
  	    xmlhttp.send();
	}
        
        function displayName() {
            var name = document.getElementById("name").value;
            if (listOfNames.indexOf(name) !== -1) {
                document.getElementById("rec").innerHTML = "You are sending a gift to " + finalNames[listOfNames.indexOf(name)];
                }
            else {
                document.getElementById("rec").innerHTML = "Invalid entry, or I screwed up.";
                }
            }
        
        function main() {
        	loadNames();
            loadFinal();
        }
        
        window.onload = main();