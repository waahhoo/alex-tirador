<script>
import "./app.css"
import * as Avatar from "$lib/components/ui/avatar"
import * as HoverCard from "$lib/components/ui/hover-card"
import * as Card from "$lib/components/ui/card"
import { Button } from "$lib/components/ui/button"
import camera from '../images/camera.png'
import coffee from '../images/coffee.jpg'
import homePage from '../images/homePage.png'
import portrait from '../images/portrait.jpg'
import snow from '../images/snow.jpg'
import office from '../images/office.jpg'
import waahhoo from '../images/waahhoo.png'
</script>

<div class="navBar fixed border border-transparent h-24 w-full bg-white z-10">
	<div class="flex flex-col h-full items-center justify-center space-y-2">
		<h1 class="text-2xl font-bold">ALEX TIRADOR</h1>
		<div class="flex flex-row h-full justify-between space-x-12 align-text-middle">
			<Button class="text-neutral-500 bg-white font-semibold hover:bg-white hover:text-green-500" href="#home">
				<span class="underline-animation">Home</span>
			</Button>
			<Button class="text-neutral-500 bg-white font-semibold hover:bg-white hover:text-green-500" href="#about">
				<span class="underline-animation">About</span>
			</Button>
			<Button class="text-neutral-500 bg-white font-semibold hover:bg-white hover:text-green-500" href="#skills">
				<span class="underline-animation">Skills</span>
			</Button>
			<Button class="hover:bg-green-500 hover:text-white hover:border-green-500 border border-2 border-black bg-white text-black font-semibold">Contact</Button>
		</div>
	</div>
</div>
<div class="homeScreen flex flex-col overflow-hidden">
	<section id="home">
		<div class="bg-fixed bg-cover bg-no-repeat" data-bg="url('https://cdn.b12.io/media/fbeb727a-6267-11e7-9ce2-0242ac110002-nastuh-abootalebi-284882.jpg')" style=" background-image:url('https://cdn.b12.io/media/fbeb727a-6267-11e7-9ce2-0242ac110002-nastuh-abootalebi-284882.jpg')">
			<div class="w-screen overflow-hidden">
				<div class="container sm:max-sm:w-screen h-screen w-[40%] text-left pt-[20%]">
					<div class="flex flex-col h-full space-y-8">
						<p class="text-white text-6xl font-bold">Alex Tirador</p>
						<div class="space-y-2">
							<p class="text-white text-2xl">Junior Computer Science Major</p>
							<p class="text-white text-2xl">The University of Maryland, College Park</p>
						</div>
						<div class="flex">
							<Button class="hover:bg-green-500 hover:border-green-500 border border-white border-2 bg-transparent h-14 w-36 font-bold" href="#skills">MY SKILLS</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
<div class="aboutMe flex flex-col items-center justify-center pt-48">
	<section id="about">
		<div class="flex flex-col items-center justify-center space-y-4">
			<p class="text-green-500 font-bold">Who am I?</p>
			<h1 class="text-6xl">Waahhoo</h1>
			<HoverCard.Root>
				<HoverCard.Trigger href="https://github.com/waahhoo">
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
			<Card.Root class="w-[350px]">
				<Card.Header class="text-green-500 text-2xl font-bold">
					Alex Tirador
				</Card.Header>
				<Card.Description>Discover my interests and hobbies *MOST PR PHRASE EVER*</Card.Description>
				<Card.Content>
					<p>idk what to put on here for now so here you go !!!!</p>
				</Card.Content>
			</Card.Root>
		</div>
	</section>
</div>
<div class="mySkills flex flex-col items-center justify-center pt-48">
	<section id="skills">
		<div class="flex flex-col items-center justify-center space-y-4">
			<h1 class="text-4xl text-blue-400 font-semibold">This is my Skills tab</h1>
			<p class="text-4xl text-blue-400 font-semibold">as you can see it is empty because I do not have skills</p>
			<p class="text-4xl text-blue-400 font-semibold">;-;</p>
			<p class="text-4xl text-blue-400 font-semibold">What do you think about this cursed color pallete ??</p>
			<img src="{camera}" alt="camera">
		</div>
	</section>
</div>