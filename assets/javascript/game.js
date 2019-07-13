$(document).ready(function () {
var playerselected = false;
var defenderselected = false;
var playerHealthpoints = 0;
var playerAttack = 0;
var playerAttackUpdate = 0;
var playername = "";
var enemyname = "";
var enemyCounterAttack = 0;
var enemyHealthpoints = 0;
var player = "";
var defender = "";
var counterwin = 0;
var line1 = $("<div>");
var line2 = $("<div>");
var powerAttack = Math.floor(Math.random() * 20 + 1);



var maul = {
    name: "maul",
    healthPoints: 100,
    attackPower: powerAttack,
    counterAttackPower: 10,
};
var luke = {
    name: "luke",
    healthPoints: 100,
    attackPower: powerAttack,
    counterAttackPower: 5,
};
var obi = {
    name: "obi",
    healthPoints: 100,
    attackPower: powerAttack,
    counterAttackPower: 20,
};
var mace = {
    name: "mace",
    healthPoints: 100,
    attackPower: powerAttack,
    counterAttackPower: 25,
};



    $("#maulAP").text(maul.name + " " + maul.healthPoints);

    $("#lukeAP").text(luke.name + " " + luke.healthPoints);

    $("#obiAP").text(obi.name + " " + obi.healthPoints);

    $("#maceAP").text(mace.name + " " + mace.healthPoints);

    $("#attack").attr("disabled", true);

    line1.text("Choose your Charater to start the game");

    $("#defenderDiv").append(line1);
//MAUL SETTINGS
    $("#boxmaul").on("click", function () {
        line1.empty();
        if (playerselected === false) {
            $(".hidden").show();
            //Selected maul
            $("#boxmaul").appendTo("#playerDiv");
            playerselected = true;
            $("#attack").attr("disabled", false);
            playerHealthpoints = maul.healthPoints;
            playerAttack = maul.attackPower;
            playername = maul.name;
            player = "maul";
            $("#boxluke").appendTo("#enemyDiv");
          
            $("#boxobi").appendTo("#enemyDiv");
            
            $("#boxmace").appendTo("#enemyDiv");
           
        }
        else if (($("#boxmaul").css("border-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemyname = maul.name;
            enemyHealthpoints = maul.healthPoints;
            enemyCounterAttack = maul.counterAttackPower;
            defender = "maul";
            $("#boxmaul").appendTo("#defenderDiv");
            $("#boxmaul").css("border-color", "black");
            $("#boxmaul").css("color", "yellow");
        }
    })
//LUKE SETTINGS
    $("#boxluke").on("click", function () {
        line1.empty();
        if (playerselected === false) {
            $(".hidden").show();
            //Selected luke
            $("#boxluke").appendTo("#playerDiv");
            playerselected = true;
            $("#attack").attr("disabled", false);
            playername = luke.name;
            playerHealthpoints = luke.healthPoints;
            playerAttack = luke.attackPower;
            player = "luke";
            $("#boxmaul").appendTo("#enemyDiv");
            $("#boxmaul").css("border-color", "red");
            $("#boxobi").appendTo("#enemyDiv");
            $("#boxobi").css("border-color", "red");
            $("#boxmace").appendTo("#enemyDiv");
            $("#boxmace").css("border-color", "red");
        }
        else if (($("#boxluke").css("border-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemyname = luke.name;
            enemyHealthpoints = luke.healthPoints;
            enemyCounterAttack = luke.counterAttackPower;
            defender = "luke";
            $("#boxluke").appendTo("#defenderDiv");
            $("#boxluke").css("border-color", "black");
            $("#boxluke").css("color", "yellow");

        }
    })

    //OBI SETTINGS
    $("#boxobi").on("click", function () {
        line1.empty();
        if (playerselected === false) {
            $(".hidden").show();
            //Selected obi
            $("#boxobi").appendTo("#playerDiv");
            playerselected = true;
            $("#attack").attr("disabled", false);
            playername = obi.name;
            playerHealthpoints = obi.healthPoints;
            playerAttack = obi.attackPower;
            player = "obi";
            $("#boxmaul").appendTo("#enemyDiv");
            $("#boxmaul").css("border-color", "red");
            $("#boxluke").appendTo("#enemyDiv");
            $("#boxluke").css("border-color", "red");
            $("#boxmace").appendTo("#enemyDiv");
            $("#boxmace").css("border-color", "red");
        }
        else if (($("#boxobi").css("border-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemyname = obi.name;
            enemyHealthpoints = obi.healthPoints;
            enemyCounterAttack = obi.counterAttackPower;
            defender = "obi";
            $("#boxobi").appendTo("#defenderDiv");
            $("#boxobi").css("border-color", "black");
            $("#boxobi").css("color", "yellow");
        }
    })

    //MACE SETTINGS
    $("#boxmace").on("click", function () {
        line1.empty();
        if (playerselected === false) {
            $(".hidden").show();
            //Selected mace
            $("#boxmace").appendTo("#playerDiv");
            playerselected = true;
            $("#attack").attr("disabled", false);
            playername = mace.name;
            playerHealthpoints = mace.healthPoints;
            playerAttack = mace.attackPower;
            player = "mace";
            $("#boxmaul").appendTo("#enemyDiv");
            $("#boxmaul").css("border-color", "red");
            $("#boxluke").appendTo("#enemyDiv");
            $("#boxluke").css("border-color", "red");
            $("#boxobi").appendTo("#enemyDiv");
            $("#boxobi").css("border-color", "red");
        }
        else if (($("#boxmace").css("border-color") === "rgb(255, 0, 0)") && (defenderselected == false)) {
            defenderselected = true;
            enemyname = mace.name;
            enemyHealthpoints = mace.healthPoints;
            enemyCounterAttack = mace.counterAttackPower;
            defender = "mace";
            $("#boxmace").appendTo("#defenderDiv");
            $("#boxmace").css("border-color", "black");
            $("#boxmace").css("color", "yellow");
        }
    })
    //ATTACK SETTINGS
    $("#attack").on("click", function () {
        line1.empty();
        line2.empty();
        if (playerselected === true && defenderselected === true) {
            playerAttackUpdate = playerAttack + playerAttackUpdate;
            playerHealthpoints = playerHealthpoints - enemyCounterAttack;
            enemyHealthpoints = enemyHealthpoints - playerAttackUpdate;
            $("#" + player + "AP").text( player + " " + playerHealthpoints);
            $("#" + defender + "AP").text(enemyHealthpoints);
            if (playerHealthpoints > 0 && enemyHealthpoints > 0) {
                line1.text("You attacked " + enemyname + " for " + playerAttackUpdate + " damage");
                $("#defenderDiv").append(line1);
                line2.text(enemyname + " attacked you back for " + enemyCounterAttack + " damage");
                $("#defenderDiv").append(line2);
            }
            else if (playerHealthpoints === 0) {
                $("#attack").attr("disabled", true);
                line1.text("You've been defeated...GAME OVER!!!");
                $("#defenderDiv").append(line1);
                //$("#defenderDiv").append(resetbutton);
                $("#resetbutton").css("visibility", "visible");
                line2.empty();
            }
            else if (enemyHealthpoints <= 0) {
               
                $("#box" + defender).css("display", "none");
                defenderselected = false;
                counterwin++;
                line1.text("You've defeated " + enemyname + ", choose another enemy");
                line2.empty();
                
                if (counterwin === 3) {
                    line1.empty();
                    line1.text("YOU WON!!!");
                    $("#defenderDiv").append(line1);
                    //$("#defenderDiv").append(resetbutton);
                    $("#resetbutton").css("visibility", "visible");
                    line2.empty();
                    $("#attack").attr("disabled", true);
                  
                }
            }
        }
        else {
            line1.text("Enemy has not been selected");
            $("#defenderDiv").append(line1);
            line2.empty();
        }
    })
    //RESET SETTINGS
    $("#resetbutton").on("click", function(){
        $("#resetbutton").hide();
        location.reload();

       /* line1.empty();
        playerselected = false;
        defenderselected = false;
        maul = {
            name: "maul",
            healthPoints: 100,
            attackPower: 8,
            counterAttackPower: 10,
        };
        luke = {
            name: "luke",
            healthPoints: 120,
            attackPower: 5,
            counterAttackPower: 5,
        };
        obi = {
            name: "obi",
            healthPoints: 150,
            attackPower: 8,
            counterAttackPower: 20,
        };
        mace = {
            name: "mace FLANDERS",
            healthPoints: 180,
            attackPower: 15,
            counterAttackPower: 25,
        };
        playerHealthpoints = 0;
        playerAttack = 0;
        playerAttackUpdate = 0;
        playername = "";
        enemyname = "";
        enemyCounterAttack = 0;
        enemyHealthpoints = 0;
        player = "";
        defender = "";
        counterwin = 0;
        line1 = $("<div>");
        line2 = $("<div>");
        $("#boxmaul").appendTo("#playerDiv");
        $("#boxmaul").css("border-color", "white");
        $("#boxmaul").css("color","black");
        $("#boxmaul").css("display", "inline-flex");
        $("#boxluke").appendTo("#playerDiv");
        $("#boxluke").css("border-color", "white");
        $("#boxluke").css("color","black");
        $("#boxluke").css("display", "inline-flex");
        $("#boxobi").appendTo("#playerDiv");
        $("#boxobi").css("border-color", "white");
        $("#boxobi").css("color","black");
        $("#boxobi").css("display", "inline-flex");
        $("#boxmace").appendTo("#playerDiv");
        $("#boxmace").css("border-color", "white");
        $("#boxmace").css("color","black");
        $("#boxmace").css("display", "inline-flex");
        $("#maulAP").text(maul.healthPoints);
        $("#lukeAP").text(luke.healthPoints);
        $("#obiAP").text(obi.healthPoints);
        $("#maceAP").text(mace.healthPoints);
        $("#attack").attr("disabled", true);
        line1.text("Choose your Charater to start the game");
        $("#defenderDiv").append(line1);*/
        
    })
});