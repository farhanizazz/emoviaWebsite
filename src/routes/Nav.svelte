<script>
	import { active } from './store.js';
	import logo from '$lib/images/EMOVIA LOGO 1.png';
	import { page } from '$app/stores';

	let activeNav;
	let path;
	active.subscribe((value) => {
		activeNav = value;
	});

	$: path = $page.url.pathname;
	$: console.log(path);
</script>

<div class="flex justify-between px-20 py-5 items-center bg-opacity-0 fixed top-10 z-50 h-0 left-0 right-0">
	<img alt="logo" src={logo} class="h-10" />

	<div class="flex flex-row font-menu gap-x-5 text-2xl">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#" class="text-main hover:text-secondary {activeNav == 'home' && 'text-secondary'}"
			>HOME</a
		>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a
			href="#"
			class="text-main hover:text-secondary {activeNav == 'services' &&
				'text-secondary'} mix-blend-difference">SERVICES</a
		>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#about" class="text-main hover:text-secondary {activeNav == 'about' && 'text-secondary'}"
			>ABOUT</a
		>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#" class="text-main hover:text-secondary {activeNav == 'contact' && 'text-secondary'}"
			>CONTACT</a
		>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#" class="text-main hover:text-secondary {activeNav == 'faq' && 'text-secondary'}">F.A.Q</a
		>
	</div>
</div>

<style lang="postcss">
</style>
