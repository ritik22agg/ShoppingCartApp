
function fetchProducts(done){
	$.get('/api/products', function(data){
		// console.log("is this working")
		// console.log(data)
		done(data)
	})
}

function createProductCard(product){
	return $(`
	<div class = "col-4 card mx-2 p-4">
		<h4 class="product-name">${product.name}</h4>
		<div class="product-manufacturer">${product.manufacturer}</div>
		<br>
		<div class = "row">
			<div class = "col m-3 p-3">
				<b>Rs ${product.price}</b>
			</div>
					
			<button class = "col btn btn-primary m-3">Buy</button>			
		</div>			
	</div>`
	)
}

$(function(){

	let productList = $('#product-list')
	fetchProducts(function(products){
		productList.empty()
		for(product of products){
			productList.append(createProductCard(product))
		}
	})

})