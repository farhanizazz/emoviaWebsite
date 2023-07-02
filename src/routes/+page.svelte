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
	import Nav from './Nav.svelte';

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
	const style = {
		carouselOuterDiv: 'flex flex-col justify-center sm:items-start md:items-center w-full h-full gap-10 md:pt-20 sm:pt-20 px-5',
		carouseInnerDiv: 'flex sm:flex-col-reverse md:flex-row sm:gap-5 md:gap-20 sm:items-start md:items-center',
		carouselImg: 'md:h-[60vh] sm:w-40 md:w-auto',
		carouselTitle: 'md:leading-[1.3] text-left font-extrabold font-content text-main md:text-5xl lg:text-[8vh] sm:text-lg',
		carouselButton: 'rounded-full bg-secondary px-[2em] py-[0.75em] font-content font-extrabold text-main lg:text-[2.5vh] md:text-l sm:text-xs mt-5 hover:bg-main hover:text-secondary'
	}
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
					<div class={style.carouselOuterDiv}>
						<div class={style.carouseInnerDiv}>
							<img alt="" src={car1} class={style.carouselImg} />
							<div>
								<p
									class={style.carouselTitle}
								>
									EMOVIA<br />CIPTA<br />PEMUDA
								</p>
								<button
									class={style.carouselButton}
									>ABOUT US</button
								>
							</div>
						</div>
					</div>
					<div class={style.carouselOuterDiv}>
						<div class={style.carouseInnerDiv}>
							<img alt="" src={car2} class={style.carouselImg}/>
							<div>
								<p
								class={style.carouselTitle}
								>
									OUR<br />AWESOME<br />PROJECT
								</p>
								<button
								class={style.carouselButton}
									>PORTOFOLIO</button
								>
							</div>
						</div>
					</div>
					<div class={style.carouselOuterDiv}>
						<div class={style.carouseInnerDiv}>
							<img alt="" src={car3} class={style.carouselImg} />
							<div>
								<p
									class={style.carouselTitle}
								>
									LET'S<br />WORK<br />WITH US
								</p>
								<button
								class={style.carouselButton}
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
		class="content1 h-full py-20 flex items-center px-10 justify-center"
		use:inview={{ rootMargin: '-10%', unobserveOnEnter: true }}
		on:inview_change={handleChange1}
		id="About"
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
				<h1 class="basis-full text-4xl font-bold text-secondary font-content block">
					ABOUT US
				</h1>
				<div class="flex sm:flex-col md:flex-row gap-14 items-center">
					<!-- <div class="flex flex-row gap-14 items-center opacity-0" > -->
					<img alt="" src={aboutus} class="md:h-64 sm:h-auto sm:w-full" />
					<div class="max-w-[22rem]">
						<p class="text-[#fff] font-content font-extrabold text-xl leading-tight mb-6">
							WE ARE EMOVIA, WE PRODUCE<br /><span class="text-secondary">AWESOME PROJECTS.</span>
						</p>
						<p class="text-[#fff] font-content text-sm font-light leading-loose text-justify">
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
		class="content2 h-full flex items-center justify-center"
		use:inview={{ unobserveOnEnter: true }}
		on:inview_change={handleChange2}
		id="Services"
	>
		{#if isInView2}
			<div
				on:inview_enter={() => {
					active.set('about');
				}}
				use:inview={{ rootMargin: '-30%', unobserveOnEnter: false }}
				in:fly={{ delay: 100, y: 50 }}
				class="flex flex-col gap-14 items-center px-10 py-36"
			>
				<h1 class="basis-full text-4xl font-bold text-secondary font-content block">
					OUR SERVICES
				</h1>
				<div class="flex sm:flex-col md:flex-row gap-14 items-center">
					<!-- <div class="flex flex-row gap-14 items-center opacity-0" > -->
					<img alt="" src={aboutus} class="md:h-64 sm:h-auto sm:w-full" />
					<div class="max-w-[22rem]">
						<p class="text-[#fff] font-content font-extrabold text-xl leading-tight mb-6">
							WE ARE EMOVIA, WE PRODUCE<br /><span class="text-secondary">AWESOME PROJECTS.</span>
						</p>
						<p class="text-[#fff] font-content text-sm font-light leading-loose text-justify">
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

<style>
</style>
