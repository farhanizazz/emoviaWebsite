<script>
	import car1 from '$lib/images/car1.png';
	import aboutus from '$lib/images/Mask group.png';
	import { browser } from '$app/environment';
	import Carousel from 'svelte-carousel';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';
	import { active } from './store';
	import bgVid from '$lib/videos/bg.mp4';
	import car2 from '$lib/images/car2.png';
	import car3 from '$lib/images/car3.png';
	import bgImg from '$lib/images/bg.png';
	import mailIcon from '$lib/images/contact/mail.png';
	import mapIcon from '$lib/images/contact/map.png';
	import phoneIcon from '$lib/images/contact/phone.png';

	let isInView1;
	let isInView2;
	let scrollDirection;
	const handleChange1 = ({ detail }) => {
		isInView1 = detail.inView;
		scrollDirection = detail.scrollDirection.vertical;
		console.log(detail);
	};
	const handleChange2 = ({ detail }) => {
		isInView2 = detail.inView;
		scrollDirection = detail.scrollDirection.vertical;
		console.log(detail);
	};

	// onMount(() => {
	// 	gsap.registerPlugin(ScrollTrigger);
	// 	const tl = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: '#content',
	// 			scrub: 1,
	// 			start: 'top 60%'
	// 		}
	// 	});

	// 	tl.to('.nav', {
	// 		y: 20
	// 	}, 1)
	// });
</script>

<div class="h-32 w-full top-0 bg-[#fff] fixed -z-10 nav" />
<header class="relative flex items-center justify-center h-screen overflow-hidden">
	<div class="w-full h-full bg-[#fff]/90 backdrop-brightness-100">
		<div
			on:inview_enter={() => {
				active.set('home');
			}}
			use:inview={{ unobserveOnEnter: false, rootMargin: '-25%' }}
			class="flex items-center h-full"
		>
			{#if browser}
				<Carousel arrows={false} let:currentPageIndex let:pagesCount let:showPage autoplay={true}>
					<div slot="dots" class="flex gap-1">
						{#each Array(pagesCount) as _, pageIndex (pageIndex)}
							<button
								on:click={() => showPage(pageIndex)}
								class="h-2 w-2 {currentPageIndex === pageIndex
									? 'bg-secondary'
									: 'bg-main'} rounded-full mt-12"
							/>
						{/each}
					</div>
					<div class="flex flex-col justify-center items-center w-full h-full gap-10 pt-20">
						<div class="flex flex-row gap-20 items-center">
							<img alt="" src={car1} class="h-[60vh]" />
							<div>
								<p
									class="md:leading-[1.3] text-left font-extrabold font-content text-main md:text-5xl lg:text-[8vh]"
								>
									EMOVIA<br />CIPTA<br />PEMUDA
								</p>
								<button
									class="rounded-full bg-secondary px-[2em] py-[0.75em] font-content font-extrabold text-main lg:text-[2.5vh] md:text-l mt-5 hover:bg-main hover:text-secondary"
									>ABOUT US</button
								>
							</div>
						</div>
					</div>
					<div class="flex flex-col justify-center items-center w-full h-full gap-10 pt-20">
						<div class="flex flex-row gap-20 items-center">
							<img alt="" src={car2} class="h-[60vh]" />
							<div>
								<p
									class="md:leading-[1.3] text-left font-extrabold font-content text-main md:text-5xl lg:text-[8vh]"
								>
									OUR<br />AWESOME<br />PROJECT
								</p>
								<button
									class="rounded-full bg-secondary px-[2em] py-[0.75em] font-content font-extrabold text-main lg:text-[2.5vh] md:text-l mt-5 hover:bg-main hover:text-secondary"
									>PORTOFOLIO</button
								>
							</div>
						</div>
					</div>
					<div class="flex flex-col justify-center items-center w-full h-full gap-10 pt-20">
						<div class="flex flex-row gap-20 items-center">
							<img alt="" src={car3} class="h-[60vh]" />
							<div>
								<p
									class="md:leading-[1.3] text-left font-extrabold font-content text-main md:text-5xl lg:text-[8vh]"
								>
									LET'S<br />WORK<br />WITH US
								</p>
								<button
									class="rounded-full bg-secondary px-[2em] py-[0.75em] font-content font-extrabold text-main lg:text-[2.5vh] md:text-l mt-5 hover:bg-main hover:text-secondary"
									>CONTACT US</button
								>
							</div>
						</div>
					</div>
				</Carousel>
			{/if}
		</div>
	</div>
	<video
		autoplay
		loop
		muted
		class="absolute -z-10 w-[177.77777778vh] min-w-full min-h-[56.25vw] max-w-none top-0"
	>
		<source src={bgVid} type="video/mp4" />
		<img alt="" src={bgImg} />
	</video>
</header>

<div class="bg-main content relative -z-20" id="content">
	<div
		class="content1 h-screen flex items-center px-20"
		use:inview={{ rootMargin: '-10%', unobserveOnEnter: true }}
		on:inview_change={handleChange1}
	>
		{#if isInView1}
			<div
				on:inview_enter={() => {
					active.set('services');
				}}
				use:inview={{ unobserveOnEnter: false, rootMargin: '-25%' }}
				in:fly={{ delay: 100, y: 50 }}
				class="flex flex-col items-center gap-12 justify-center mt-20"
			>
				<h1 class="basis-full text-4xl font-bold text-secondary font-content block" id="About">
					ABOUT US
				</h1>
				<div class="flex flex-row gap-14">
					<!-- <div class="flex flex-row gap-14 items-center opacity-0" > -->
					<img alt="" src={aboutus} class="h-64" />
					<div>
						<p class="text-[#fff] font-content font-extrabold text-[2.5vw] leading-tight mb-6">
							WE ARE EMOVIA, WE PRODUCE<br /><span class="text-secondary">AWESOME PROJECTS.</span>
						</p>
						<p class="text-[#fff] font-content text-[1.25vw] font-light leading-loose text-justify">
							PT Emovia Cipta Pemuda Running in Event Creative Media, Film Production House, Company
							Profile Video Production, Drone Inspection and Mapping. There are subsidiaries beneath
							PT Emovia Cipta Pemuda such as Emovia Production and Atas Langit Creative.
						</p>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<div
		class="content2 h-screen flex items-center"
		use:inview={{ unobserveOnEnter: true }}
		on:inview_change={handleChange2}
	>
		{#if isInView2}
			<div
				on:inview_enter={() => {
					active.set('about');
				}}
				use:inview={{ rootMargin: '-30%', unobserveOnEnter: false }}
				in:fly={{ delay: 100, y: 50 }}
				class="flex flex-col gap-14 items-center px-20"
			>
				<h1 class="basis-full text-4xl font-bold text-secondary font-content block" id="Services">
					OUR SERVICES
				</h1>
				<div class="flex flex-row gap-14">
					<!-- <div class="flex flex-row gap-14 items-center opacity-0" > -->
					<img alt="" src={aboutus} class="h-64" />
					<div>
						<p class="text-secondary font-content font-extrabold text-4xl leading-tight">
							PT. EMOVIA CIPTA<br />PEMUDA
						</p>
						<p class="text-[#fff] font-content text-xl font-light leading-loose text-justify">
							PT Emovia Cipta Pemuda Running in Event Creative Media, Film Production House, Company
							Profile Video Production, Drone Inspection and Mapping. There are subsidiaries beneath
							PT Emovia Cipta Pemuda such as Emovia Production and Atas Langit Creative.
						</p>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<div class="bg-bgContact bg-cover">
	<div class="flex-col bg-[#fff]/90 center py-5">
		<div class="flex flex-row justify-center items-center py-20 gap-10">
			<h1 class="text-4xl font-bold text-main">
				Contact <span class="text-secondary">Us.</span>
			</h1>
			<div class="flex flex-row items-center justify-center text-main font-semibold gap-20">
				<div class="flex items-center flex-row gap-4">
					<img class="h-12" src={phoneIcon} alt="" />
					<h1 class="text-sm text-center">+62-882-3311-2001</h1>
				</div>
				<div class="flex items-center flex-row gap-4">
					<img class="h-12" src={mailIcon} alt="" />
					<h1 class="text-sm text-center">
						zahid@emoviaciptapemuda.com<br />aka@emoviaciptapemuda.com
					</h1>
				</div>
				<div class="flex items-center flex-row gap-4">
					<img class="h-12" src={mapIcon} alt="" />
					<h1 class="text-sm text-center">
						Rewwin, Waru Sub-District, Sidoarjo City,<br />East Java, 61256
					</h1>
				</div>
			</div>
		</div>
		<div>
			<h1 class="text-center font-semibold text-main">Feel free to contact us. We'll consider all suggestions, ideas, and projects</h1>
		</div>
	</div>
</div>

<style>
</style>
