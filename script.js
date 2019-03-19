var names = [];
var tiers= [];


$(".Enters").click(function(){
var Tier= $(".level").val();
var Champions= $(".chara").val();
names.push(Champions);
tiers.push(Tier);
$(".levels").append("<div>"+ Champions +"</div>");
   $(".Tiers").append("<div>"+ Tier +"</div>");
});

$(".Hi").click(function(){
    var firstItem = names[0];
    var Totalchampiontiers = 0;
    tiers.forEach(function(currentTier){
    

	/*
	create variable to store total
	in foreach loop, add each element to total using parsefloat()
	*/
	
	Totalchampiontiers = Totalchampiontiers + parseFloat(currentTier);
    });
    alert("Thank You for Purchasing " + firstItem+ " and everything else" + "Total Champion : " +Totalchampiontiers);
    });
    
    

