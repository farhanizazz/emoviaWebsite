<script>
	import Icon from 'svelte-icon/Icon.svelte';
	import menuIcon from '$lib/images/menuIcon.svg?raw';
	import { active } from './store.js';
	import logo from '$lib/images/EMOVIA LOGO 1.png';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';

	let activeNav;
	let path;
	let open = false;

	active.subscribe((value) => {
		activeNav = value;
	});

	$: path = $page.url.pathname;
	$: console.log(path);

	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor.offsetTop + window.innerHeight,
			behavior: 'smooth'
		});
	}
</script>

{#if open}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="h-screen w-screen fixed flex flex-row bg-[#000]/50 z-20"
		transition:fade={{ duration: 100 }}
	>
		<div
			class="w-2/5 h-screen bg-[#00263D]"
			transition:fly={{ x: -200, duration: 200, easing: sineOut }}
		/>
		<div
			class="w-3/5 h-screen"
			on:click={() => {
				open = !open;
			}}
		/>
	</div>
{/if}

<div
	class="flex justify-between sm:px-10 md:px-20 sm:py-1 md:py-5 items-center bg-opacity-0 fixed top-10 h-0 left-0 right-0 z-10"
>
	<img alt="logo" src={logo} class="md:h-10 md:w-auto sm:w-20 sm:h-auto" />
	<button
		on:click={() => {
			open = !open;
		}}
		class="md:hidden"
	>
		<Icon data={menuIcon} color="#001e4c" />
	</button>
	<div class="flex-row font-menu gap-x-5 text-2xl sm:hidden md:flex">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a
			href="/"
			class="text-main hover:text-secondary { path == '/' && 'text-secondary'}">HOME</a
		>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a
			href="/about"
			class="text-main hover:text-secondary { path == '/about' && 'text-secondary'} mix-blend-difference">ABOUT</a
		>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a
			href="#Services"
			class="text-main hover:text-secondary {activeNav == 'about' && 'text-secondary'}"
			on:click={handleAnchorClick}>SERVICES</a
		>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#" class="text-main hover:text-secondary {activeNav == 'contact' && 'text-secondary'}"
			>CONTACT</a
		>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#" class="text-main hover:text-secondary {activeNav == 'faq' && 'text-secondary'}"
			>F.A.Q</a
		>
	</div>
</div>

<style lang="postcss">
</style>
