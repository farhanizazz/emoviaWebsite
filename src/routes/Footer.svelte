<script>
	import mailIcon from '$lib/images/contact/mail.png';
	import mapIcon from '$lib/images/contact/map.png';
	import phoneIcon from '$lib/images/contact/phone.png';
</script>

<div class="bg-bgContact bg-cover">
	<div class="flex-col bg-[#fff]/90 center py-5">
		<div class="flex flex-col items-center py-20 gap-10 px-20">
			<h1 class="text-4xl font-bold text-main">
				Contact <span class="text-secondary">Us.</span>
			</h1>
			<div class="flex md:flex-row sm:flex-col items-center text-main font-semibold max-w-6xl text-sm align-center text-center">
				<div class="flex items-center flex-col gap-4 w-full">
					<img class="h-12" src={phoneIcon} alt="" />
					<h1 class="">+62-882-3311-2001</h1>
				</div>
				<div class="flex items-center flex-col gap-4 w-full">
					<img class="h-12" src={mailIcon} alt="" />
					<h1 class="">
						zahid@emoviaciptapemuda.com<br />aka@emoviaciptapemuda.com
					</h1>
				</div>
				<div class="flex items-center flex-col gap-4 w-full">
					<img class="h-12" src={mapIcon} alt="" />
					<h1 class="">
						Rewwin, Waru Sub-District, Sidoarjo City, East Java, 61256
					</h1>
				</div>
			</div>
		</div>
		<div>
			<h1 class="text-center font-semibold text-main">Feel free to contact us. We'll consider all suggestions, ideas, and projects</h1>
		</div>
	</div>
</div>