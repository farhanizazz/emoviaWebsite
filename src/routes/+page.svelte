<script>
	import car1 from '$lib/images/carousel1.png';
	import { browser } from '$app/environment';
	import Carousel from 'svelte-carousel';
</script>

<div class="w-full h-screen bg-bg bg-cover bg-center">
	<div class="w-full h-full bg-[#fff]/90 backdrop-brightness-100">
		<div class="pt-20">
			{#if browser}
				<Carousel arrows={false} let:currentPageIndex let:pagesCount let:showPage autoplay={true}>
					<div slot="dots" class="flex gap-2">
						{#each Array(pagesCount) as _, pageIndex (pageIndex)}
							<button on:click={() => showPage(pageIndex)} class="h-3 w-3 bg-{currentPageIndex === pageIndex ? 'secondary' : 'main'} rounded-full mt-5"/>
						{/each}
					</div>
					<div class="flex flex-col justify-center items-center w-full h-full gap-10 pt-20">
						<div class="flex flex-row gap-20 items-center">
							<img alt="" src={car1} class="h-[22rem]" />
							<div>
								<p class="text-left font-extrabold font-content text-main md:text-5xl lg:text-6xl">
									EMOVIA<br />CIPTA<br />PEMUDA
								</p>
								<button
									class="rounded-full bg-secondary px-10 py-3 font-content font-bold text-main lg:text-xl md:text-l mt-5 hover:bg-main hover:text-secondary"
									>About Us</button
								>
							</div>
						</div>
					</div>
					<div class="flex flex-col justify-center items-center w-full h-full gap-10 pt-20">
						<div class="flex flex-row gap-20 items-center">
							<img alt="" src={car1} class="h-[22rem]" />
							<div>
								<p class="text-left font-extrabold font-content text-main md:text-5xl lg:text-6xl">
									EMOVIA<br />CIPTA<br />PEMUDA
								</p>
								<button
									class="rounded-full bg-secondary px-10 py-3 font-content font-bold text-main lg:text-xl md:text-l mt-5 hover:bg-main hover:text-secondary"
									>About Us</button
								>
							</div>
						</div>
					</div>
					<div class="flex flex-col justify-center items-center w-full h-full gap-10 pt-20">
						<div class="flex flex-row gap-20 items-center">
							<img alt="" src={car1} class="h-[22rem]" />
							<div>
								<p class="text-left font-extrabold font-content text-main md:text-5xl lg:text-6xl">
									EMOVIA<br />CIPTA<br />PEMUDA
								</p>
								<button
									class="rounded-full bg-secondary px-10 py-3 font-content font-bold text-main lg:text-xl md:text-l mt-5 hover:bg-main hover:text-secondary"
									>About Us</button
								>
							</div>
						</div>
					</div>
				</Carousel>
			{/if}
		</div>
	</div>
</div>

<style>
</style>
