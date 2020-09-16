$(function(){

	let btnProductAdd = $('#btnProductAdd')
	let manufaturer = $('#productManufacturer')
	let productName = $('#productName')
	let price = $('#productPrice')

	btnProductAdd.click(function(){
		addProduct(
			productName.val(), 
			manufaturer.val(), 
			price.val(),

			function(addedProduct){
				window.alert("Added")
			}
		)
	})

	
})