window.onload = function() {

    var question = localStorage.getItem("question");

    var question_container = document.getElementsByClassName("question")[0];
    var question_div = document.createElement("div");
    question_div.style.color = "gold";
    question_div.style.fontFamily = "Swiss911";
    question_div.style.fontSize = "5em";
    question_div.style.top = "50%";
    question_div.style.position = "relative";
    question_div.style.transform = "translateY(-50%)";
    question_div.appendChild(document.createTextNode(question));
    question_container.appendChild(question_div);

    var team_dropdown = document.getElementsByClassName("teams")[0];
    
    var i = 0;
    while (true) {
        if (localStorage.getItem("team" + String(i)) == null) {
            break;
        } 
        var team = document.createElement("option");
        team.setAttribute("value", localStorage.getItem("team" + String(i)));
        team.appendChild(document.createTextNode(localStorage.getItem("team" + String(i))));
        team_dropdown.appendChild(team);
        i += 1;
    }


    document.getElementsByClassName("correct")[0].addEventListener("click", function() {
        var team = document.getElementsByClassName("teams")[0];
        var selected_team = team.options[team.selectedIndex].text;
        localStorage.setItem(selected_team, Number(localStorage.getItem(selected_team)) + Number(localStorage.getItem("points")));
        localStorage.setItem(localStorage.getItem("selected"), "disabled");
        document.getElementsByClassName("showans")[0].click();
    });

    document.getElementsByClassName("incorrect")[0].addEventListener("click", function() {
        var team = document.getElementsByClassName("teams")[0];
        var selected_team = team.options[team.selectedIndex].text;
        localStorage.setItem(selected_team, Number(localStorage.getItem(selected_team)) - Number(localStorage.getItem("points")));
        localStorage.setItem(localStorage.getItem("selected"), "disabled");
    });

    document.getElementsByClassName("showans")[0].addEventListener("click", function() {
        var answer_div = document.createElement("div");
        answer_div.style.color = "gold";
        answer_div.style.fontFamily = "Swiss911";
        answer_div.style.fontSize = "3em";
        answer_div.style.top = "50%";
        answer_div.style.position = "relative";
        answer_div.style.transform = "translateY(-50%)";
        answer_div.appendChild(document.createTextNode(localStorage.getItem("answer")));
        document.getElementsByClassName("reveal-answer")[0].appendChild(answer_div);
        setTimeout(function() {
            window.close();
        }, 3000);
    });    
}
