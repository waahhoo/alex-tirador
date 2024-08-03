<script>import "./app.css";
import waahhoo from '../dist/waahhoo.png'
import Counter from './lib/Counter.svelte'
</script>

<main>
<div>
	<img src="{waahhoo}" class="logo" alt="Vite Logo" />
</div>
<h1>Waahhoo</h1>

<p class="text-lg">
	Hey look this works!
</p>
</main>


<style>
.logo {
	height: 10em;
	padding: 1.5em;
	padding-left: 22%;
	will-change: filter;
	transition: filter 400ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
