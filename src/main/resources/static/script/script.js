$(function(){
	$(".panier").on("click", function(e) {
		elt = e.currentTarget;
		
		$.ajax({
			type : "GET",
			url : "http://localhost:8080"+elt.getAttribute("name")
			+"/addPanier/"+elt.getAttribute("id"),
			timeout : 3000
		});
		
		$(this).next(".info").show("slow").delay(1000).hide("slow");
	});
	
	$(".delete-prod").on("click", function(e) {
		elt = e.currentTarget;
		if (confirm("Etes-vous sûre de vouloir supprimer !")){
			$.ajax({
				type : "GET",
				url : "http://localhost:8080"+elt.getAttribute("name")
				+"/deleteProduit/"+elt.getAttribute("id"),
				timeout : 3000,
				success : function(){
					alert("Suppression effectué !");
				}
			});
		}
	});
	
	$(".delete-cat").on("click", function(e) {
		elt = e.currentTarget;
		if (confirm("Etes-vous sûre de vouloir supprimer !")){
			$.ajax({
				type : "GET",
				url : "http://localhost:8080"+elt.getAttribute("name")
				+"/deleteCategorie/"+elt.getAttribute("id"),
				timeout : 3000,
				success : function(){
					alert("Suppression effectué !");
				},
				error : function(){
					alert("Impossible de supprimer !");
				}
			});
		}
	});
	
});