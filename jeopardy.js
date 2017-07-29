window.onload = function() {
    var password = prompt("Enter game password");
    while(password != config["password"]) {
        password = prompt("Enter game password");
    }
    var sheet = document.styleSheets[0];
    var columns = config["numCategories"];
    var rows = config["numQuestionsPerCategory"];
    var team_count = 0;
    var wrapper = document.getElementsByClassName("wrapper")[0];
    sheet.insertRule(".wrapper { grid-template-columns: repeat(" + String(columns) + ", 1fr); }", 0);

    for (var i = 0; i < rows + 1; i += 1) {
        for (var j = 0; j < columns; j+= 1) {
            var blk = document.createElement("div");
            var classname = "row" + String(i) + "col" + String(j);
            blk.classList.add(classname);
            if (localStorage.getItem(classname) == null) {
                localStorage.setItem(classname, "enabled");
            } else if (localStorage.getItem(classname) == "disabled") {
                blk.classList.add("disabled");
            }
            blk.classList.add("block");
            blk.style.textAlign = "center";
            sheet.insertRule(classname + "{ grid-row: " + String(i) + "; grid-column: " + String(j) + ";}", 0);

            if (i != 0) {
                blk.addEventListener("mouseover", function() {
                    this.style.backgroundColor = "#3333ff";
                });

                blk.addEventListener("mouseleave", function() {
                    this.style.backgroundColor = "#002080";
                });
 
                blk.addEventListener("click", function() {
                    console.log(this.className);
                    var row = Number(String(this.className).substring(3,4));
                    var col = Number(String(this.className).substring(7,8));
                    var category = Object.keys(config.data)[col];
                    var question = config.data[category][row - 1];
                    localStorage.setItem("selected", this.className.substring(0,8));
                    localStorage.setItem("question", question["question"]);
                    localStorage.setItem("points", question["numPoints"]);
                    localStorage.setItem("answer", question["answer"]);
                    window.open("question.html");
                });
            }


            wrapper.appendChild(blk);
        }
    }

    // set category headers
    i = 0;
    for (var cat in config.data) {
        var header = document.getElementsByClassName("row0col" + String(i))[0];
        var text = document.createTextNode(cat);
        var title = document.createElement("div");
        title.style.color = "gold";
        title.style.fontFamily = "Swiss911";
        title.style.fontSize = "2em";
        title.style.top = "50%";
        title.style.position = "relative";
        title.style.transform = "translateY(-50%)";
        title.appendChild(text);
        header.appendChild(title);
        j = 1;
        for (var q = 0; q < config.data[cat].length; q += 1){
            blk = document.getElementsByClassName("row" + String(j) + "col" + String(i))[0];
            var price = document.createElement("div");
            price.style.color = "gold";
            price.style.fontFamily = "Swiss911";
            price.style.fontSize = "4.5em";
            price.style.top = "50%";
            price.style.position = "relative";
            price.style.transform = "translateY(-50%)";
            price.appendChild(document.createTextNode("$" + String(config.data[cat][q]["numPoints"])));
            blk.appendChild(price);
            j += 1;
        }
        i += 1;
    }

    document.getElementsByClassName("addteam")[0].addEventListener("click", function() {
        var name = prompt("Enter team name: ");
        if (name != null && localStorage.getItem(name) == null) {
            localStorage.setItem(name, 0);
            localStorage.setItem("team" + String(team_count), name)
            team_count += 1;
        }
    });

    document.getElementsByClassName("viewscores")[0].addEventListener("click", function() {
        var scores = "";
        var i = 0;
        while (true) {
            if (localStorage.getItem("team" + String(i)) == null) {
                break;
            } 
            scores += localStorage.getItem("team" + String(i)) + " has " + localStorage.getItem(localStorage.getItem("team" + String(i))) + " points.\n";
            i += 1;
        }
        alert(scores);
    });

    document.getElementsByClassName("newgame")[0].addEventListener("click", function() {
        localStorage.clear();
        location.reload();
    });

    window.addEventListener("visibilitychange", function() {
        for(var i = 0; i < rows + 1; i += 1) {
            for (var j = 0; j < columns; j += 1) {
                var classname = "row" + String(i) + "col" + String(j);
                if (localStorage.getItem(classname) == "disabled") {
                    document.getElementsByClassName(classname)[0].classList.add("disabled");
                }
            }
        }
    });

}



