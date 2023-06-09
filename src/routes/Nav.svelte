<script>
    import logo from '$lib/images/EMOVIA LOGO 1.png'
    import { page } from '$app/stores';
    let path;

    $: path = $page.url.pathname;
</script>

<div class="flex justify-between px-20 items-center bg-opacity-0 sticky top-10 z-10 h-0">
    <img alt="logo" src={logo} class="h-10"/>

    <div class="flex flex-row font-menu gap-x-3 lg:text-2xl">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" class='text-main hover:text-secondary {path == '/' && 'text-secondary'}'>HOME</a>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" class="text-main hover:text-secondary {path == '/services' && 'text-secondary'}">SERVICES</a>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" class="text-main hover:text-secondary {path == '/about' && 'text-secondary'}">ABOUT</a>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" class="text-main hover:text-secondary {path == '/contact' && 'text-secondary'}">CONTACT</a>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#" class="text-main hover:text-secondary {path == '/faq' && 'text-secondary'}">F.A.Q</a>
    </div>
</div>


<style lang="postcss">
</style>