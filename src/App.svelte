<script>
import "./app.css";
import * as Avatar from "$lib/components/ui/avatar";
import * as HoverCard from "$lib/components/ui/hover-card";
import { Button } from "$lib/components/ui/button";
import camera from '../images/camera.png'
import coffee from '../images/coffee.jpg'
import homePage from '../images/homePage.png'
import portrait from '../images/portrait.jpg'
import snow from '../images/snow.jpg'
import office from '../images/office.jpg'
import waahhoo from '../images/waahhoo.png'
</script>

<div class="fixed border border-transparent border-b-neutral-800 h-24 w-screen pt-2 bg-white">
	<div class="flex flex-col h-full items-center justify-center space-y-2">
		<h1 class="text-2xl font-bold">ALEX TIRADOR</h1>
		<div class="flex flex-row h-full justify-between space-x-12 align-text-middle">
			<Button variant="outline">Home</Button>
			<Button variant="outline">About</Button>
			<Button variant="outline">Skills</Button>
			<Button variant="outline">Contact</Button>
		</div>
	</div>
</div>
<div class="flex flex-col h-screen items-center justify-center">
	<section id="home">
		<p class="text-3xl z-20 font-bold">ALEX TIRADOR</p>
		<div class="bg-[url('https://cdn.b12.io/media/fbeb727a-6267-11e7-9ce2-0242ac110002-nastuh-abootalebi-284882.jpg')] bg-no-repeat sm:bg-cover md:bg-cover lg:bg-cover xl:bg-cover">
			<img src="{office}" alt="home">
		</div>
	</section>
	
	<h1 class="text-6xl">Waahhoo</h1>
	<HoverCard.Root>
		<HoverCard.Trigger>
			<Avatar.Root class="h-48 w-48">
				<Avatar.Image src="{waahhoo}" alt="avatar"/>
				<Avatar.Fallback>Waahhoo</Avatar.Fallback>
			</Avatar.Root>
		</HoverCard.Trigger>
		<HoverCard.Content class="w-80">
			<div class="flex justify-between">
				<Avatar.Root class="h-16 w-16">
					<Avatar.Image src="{waahhoo}" alt="avatar"/>
					<Avatar.Fallback>Waahhoo</Avatar.Fallback>
				</Avatar.Root>
				<div class="space-y-1">
					<h4 class="text-md font-semibold">Alex Tirador</h4>
					<p class="text-sm">Junior CS Major @</p>
					<p class="text-sm">The University of Maryland</p>
				</div>
			</div>
		</HoverCard.Content>
	</HoverCard.Root>
	<p class="text-lg">Hey look this works!</p>
</div>