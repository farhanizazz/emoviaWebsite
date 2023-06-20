<script>
	import '../app.css';
	import Nav from './Nav.svelte';
	import icon from '$lib/images/Asset 1.png'
</script>


<svelte:head>
	<link rel="icon" href={icon} type="image/x-icon">
	<title>
		Emovia Cipta Pemuda
	</title>
</svelte:head>

<div>
	<Nav />

	<slot />
</div>
