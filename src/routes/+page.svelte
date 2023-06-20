<script>
	import car1 from '$lib/images/carousel1.png';
	import aboutus from '$lib/images/Mask group.png';
	import { browser } from '$app/environment';
	import Carousel from 'svelte-carousel';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';
	import { active } from './store';
	import bgVid from '$lib/videos/bg.mp4'

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
<!-- <div class="w-full h-screen bg-bg bg-cover bg-center z-50">
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
									class="lg:leading-[1.3]  text-left font-extrabold font-content text-main md:text-5xl lg:text-[8vh]"
								>
									EMOVIA<br />CIPTA<br />PEMUDA
								</p>
								<button
									class="rounded-full bg-secondary px-[2.5em] py-[0.75em] font-content font-extrabold text-main lg:text-[3vh] md:text-l mt-5 hover:bg-main hover:text-secondary"
									>ABOUT US</button
								>
							</div>
						</div>
					</div>
					<div class="flex flex-col justify-center items-center w-full h-full gap-10 pt-20">
						<div class="flex flex-row gap-20 items-center">
							<img alt="" src={car1} class="h-[60vh]" />
							<div>
								<p
									class="lg:leading-[1.3]  text-left font-extrabold font-content text-main md:text-5xl lg:text-[8vh]"
								>
									EMOVIA<br />CIPTA<br />PEMUDA
								</p>
								<button
									class="rounded-full bg-secondary px-[2.5em] py-[0.75em] font-content font-extrabold text-main lg:text-[3vh] md:text-l mt-5 hover:bg-main hover:text-secondary"
									>ABOUT US</button
								>
							</div>
						</div>
					</div>
					<div class="flex flex-col justify-center items-center w-full h-full gap-10 pt-20">
						<div class="flex flex-row gap-20 items-center">
							<img alt="" src={car1} class="h-[60vh]" />
							<div>
								<p
									class="lg:leading-[1.3]  text-left font-extrabold font-content text-main md:text-5xl lg:text-[8vh]"
								>
									EMOVIA<br />CIPTA<br />PEMUDA
								</p>
								<button
									class="rounded-full bg-secondary px-[2.5em] py-[0.75em] font-content font-extrabold text-main lg:text-[3vh] md:text-l mt-5 hover:bg-main hover:text-secondary"
									>ABOUT US</button
								>
							</div>
						</div>
					</div>
				</Carousel>
			{/if}
		</div>
	</div>
</div> -->

<header
  class="relative flex items-center justify-center h-screen overflow-hidden"
>
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
								class="md:leading-[1.3]  text-left font-extrabold font-content text-main md:text-5xl text-[8vh]"
							>
								EMOVIA<br />CIPTA<br />PEMUDA
							</p>
							<button
								class="rounded-full bg-secondary px-[2.5em] py-[0.75em] font-content font-extrabold text-main text-[3vh] md:text-l mt-5 hover:bg-main hover:text-secondary"
								>ABOUT US</button
							>
						</div>
					</div>
				</div>
				<div class="flex flex-col justify-center items-center w-full h-full gap-10 pt-20">
					<div class="flex flex-row gap-20 items-center">
						<img alt="" src={car1} class="h-[60vh]" />
						<div>
							<p
								class="md:leading-[1.3]  text-left font-extrabold font-content text-main md:text-5xl lg:text-[8vh]"
							>
								EMOVIA<br />CIPTA<br />PEMUDA
							</p>
							<button
								class="rounded-full bg-secondary px-[2.5em] py-[0.75em] font-content font-extrabold text-main lg:text-[3vh] md:text-l mt-5 hover:bg-main hover:text-secondary"
								>ABOUT US</button
							>
						</div>
					</div>
				</div>
				<div class="flex flex-col justify-center items-center w-full h-full gap-10 pt-20">
					<div class="flex flex-row gap-20 items-center">
						<img alt="" src={car1} class="h-[60vh]" />
						<div>
							<p
								class="md:leading-[1.3]  text-left font-extrabold font-content text-main md:text-5xl lg:text-[8vh]"
							>
								EMOVIA<br />CIPTA<br />PEMUDA
							</p>
							<button
								class="rounded-full bg-secondary px-[2.5em] py-[0.75em] font-content font-extrabold text-main lg:text-[3vh] md:text-l mt-5 hover:bg-main hover:text-secondary"
								>ABOUT US</button
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
    <source
      src={bgVid}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
  </header>


<div class="bg-main px-40 py-52 content relative -z-20" id="content">
	<div
		class="content1"
		use:inview={{ rootMargin: '-10%', unobserveOnEnter: true }}
		on:inview_change={handleChange1}
		id="about"
	>
		{#if isInView1}
			<div
				on:inview_enter={() => {
					active.set('services');
				}}
				use:inview={{ unobserveOnEnter: false, rootMargin: '-25%' }}
				in:fly={{ delay: 100, y: 50 }}
				class="flex flex-row gap-14 items-center mt-10"
			>
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
		{/if}
	</div>

	<div
		class="content2 mt-96"
		use:inview={{ unobserveOnEnter: true }}
		on:inview_change={handleChange2}
	>
		{#if isInView2}
			<div
				on:inview_enter={() => {
					active.set('about');
				}}
				use:inview={{ rootMargin: '-10%', unobserveOnEnter: false }}
				in:fly={{ delay: 100, y: 50 }}
				class="flex flex-row gap-14 items-center"
			>
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
		{/if}
	</div>
</div>

<style>
</style>
