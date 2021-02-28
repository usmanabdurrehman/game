let express = require('express')
let app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/hmn',async (req,res)=>{
	const Stripe = require('stripe');
	const stripe = Stripe('sk_test_51IPVU9JUoCLQAplkmZphW3TYjnxBUndL1XbHwlWyib5vNwUhY71DH9SLKlT8sZoEX6XMiWorawKR7TliTOx1xx1J00GWYo8Cse');

	const product = await stripe.products.create({
	  name: 'Test Product Upwork',
	});
	await stripe.plans.create({
	  amount: 999,
	  currency: 'usd',
	  interval: 'month',
	  product: product.id,
	});
	await stripe.plans.create({
	  amount: 7188,
	  currency: 'usd',
	  interval: 'year',
	  product: product.id,
	});
	res.send('Product added with the two plans')
})

app.listen(4000,()=>{
	console.log('Server running on 4000')
})

// pk_test_51IPVU9JUoCLQAplkrUCuZmj9xgGnalPldN02D7Od1cioXD5svpuwFEuyydGZTNEhUXUuEoAW62zRBLtgjlSTk1e100CEI2qZNR
// sk_test_51IPVU9JUoCLQAplkmZphW3TYjnxBUndL1XbHwlWyib5vNwUhY71DH9SLKlT8sZoEX6XMiWorawKR7TliTOx1xx1J00GWYo8Cse