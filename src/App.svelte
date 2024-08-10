<script>
import "./app.css";
import * as Avatar from "$lib/components/ui/avatar";
import * as HoverCard from "$lib/components/ui/hover-card";
import camera from '../images/camera.png'
import coffee from '../images/coffee.jpg'
import homePage from '../images/homePage.png'
import portrait from '../images/portrait.jpg'
import snow from '../images/snow.jpg'
import waahhoo from '../images/waahhoo.png'
</script>

<div class="flex flex-col h-screen items-center justify-center">
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