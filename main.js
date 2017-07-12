

let database = ''

customers.results.map(function(item){
	database +=

`	<div class=wrapper>
		<img src="${item.picture.large}"/>
	<div>
	<h6>
		${item.name.first} ${item.name.last}
	</h6>		
	<a>
	${item.email}
	</a>
	</div>
	<div class=info> 
	<article>
		<p>${item.location.street}</p>
		<p>${item.location.city} ${item.location.state} ${item.location.postcode}</p>
		<p>${item.phone}</p>
	</article>
	</div> 
	</div> 
`	
})


document.querySelector('.container').innerHTML = database 