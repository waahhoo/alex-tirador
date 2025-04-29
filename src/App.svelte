<script>
// @ts-nocheck

import "./app.css"
import Autoplay from "embla-carousel-autoplay";
import * as Avatar from "$lib/components/ui/avatar"
import * as HoverCard from "$lib/components/ui/hover-card"
import * as Card from "$lib/components/ui/card"
import * as Carousel from "$lib/components/ui/carousel/index.js";
import { Button } from "$lib/components/ui/button"
import { Github, Linkedin, Mail, MapPin } from 'lucide-svelte';
import resume from '../images/AlexTiradorResume.pdf'
import coffee from '../images/coffee.jpg'
import linkedin from '../images/linkedin.png'
import gmail from '../images/gmail.png'
import waahhoo from '../images/waahhoo.png'

let skillsArr = [
	{name: "C Hashmap", githubURL: "https://github.com/waahhoo/c-hashmap"},
	{name: "Project 2", githubURL: "empty"},
	{name: "Project 3", githubURL: "empty"}
];

const carouselPlugin = Autoplay({ delay: 2000 });
</script>

<div class="navBar fixed border border-transparent h-24 w-full bg-white z-10">
	<div class="flex flex-col h-full items-center justify-center space-y-2">
		<Button class="text-black text-3xl font-bold bg-white hover:bg-white" href="#home">
			ALEX TIRADOR
		</Button>
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
			<Button class="hover:bg-green-500 hover:text-white hover:border-green-500 border border-2 border-black bg-white text-black font-semibold" href="#contact">Contact</Button>
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
<div class="aboutMe flex flex-col items-center justify-center pb-28">
	<section id="about">
		<div class="flex flex-row items-center justify-center space-x-10 pt-28">
			<div class="w-[20%] space-y-4">
				<p class="text-green-500 font-bold">Who am I</p>
				<h1 class="text-3xl font-bold">Discover my interests and hobbies</h1>
				<p class="text-lg text-neutral-600">
					Welcome to my personal portfolio, my name is Alex. On this website I showcase my technical skills, personal projects, and diverse interests. 
					Based in Hyattsville, Maryland, I am passionate about Software Development and Cybersecurity. 
					I also love photography and going hiking with my friends during my breaks from school!
				</p>
				<div>
					<a href="#contact" class="text-neutral-400 underline hover:no-underline text-lg">Contact Me</a>
				</div>
			</div>
			<div class="flex items-center justify-center w-[20%]">
				<img src="{coffee}" alt="coffee">
			</div>
		</div>
	</section>
</div>
<div class="mySkills flex flex-col items-center justify-center bg-neutral-100 pb-28 w-full">
	<section id="skills" class="w-full">
		<div class="space-y-4">
			<div class="flex items-center justify-center w-full">
				<div class="w-[20%] space-y-4 text-left">
					<p class="text-green-500 font-bold pt-28">My Skills</p>
					<h1 class="text-3xl font-bold">Explore my expertise and projects</h1>
				</div>
			</div>
			<div class="flex flex-row items-center justify-center space-x-10 w-full">
				<Carousel.Root class="w-full max-w-xs" plugins={[carouselPlugin]}
				on:mouseenter={carouselPlugin.stop}
				on:mouseleave={carouselPlugin.reset}>
				  <Carousel.Content>
					{#each skillsArr as project (project.name)}
					  <Carousel.Item>
						<div class="p-1">
						  <Card.Root>
							<Card.Content class="flex aspect-square items-center justify-center p-6">
							  <a href={project.githubURL} target="_blank" rel="noopener noreferrer">
								<Button>{project.name}</Button>
							  </a>
							</Card.Content>
						  </Card.Root>
						</div>
					  </Carousel.Item>
					{/each}
				  </Carousel.Content>
				  <Carousel.Previous />
				  <Carousel.Next />
				</Carousel.Root>
			</div>
		</div>
	</section>
</div>
<div class="contactMe flex items-center justify-center w-full pb-28">
	<section id="contact" class="justify-center text-left space-y-12 pt-28 w-[35%]">
		<div>
			<p class="text-green-500 font-bold">Where to reach me</p>
			<p class="text-3xl font-bold">Here are a few helpful links</p>
		</div>
		<div class="flex flex-col space-y-8">
			<div class="flex flex-row space-x-2 items-center">
				<Mail />
				<HoverCard.Root>
					<HoverCard.Trigger>
						<h1 class="text-xl text-neutral-400 font-semibold underline hover:text-green-500">alextirador512(at)gmail.com</h1>
					</HoverCard.Trigger>
					<HoverCard.Content class="w-80">
						<div class="flex items-center justify-center space-x-4">
							<Avatar.Root class="h-16 w-16">
								<Avatar.Image src="{gmail}" alt="avatar"/>
								<Avatar.Fallback>gmail</Avatar.Fallback>
							</Avatar.Root>
							<div class="space-y-1">
								<h4 class="text-md font-semibold">Alex Tirador</h4>
								<p class="text-sm">alextirador512(at)gmail.com</p>
							</div>
						</div>
					</HoverCard.Content>
				</HoverCard.Root>
			</div>
			<div class="flex flex-row space-x-2 items-center">
				<Linkedin />
				<HoverCard.Root>
					<HoverCard.Trigger href="https://www.linkedin.com/in/alex-tirador/" target="_blank" rel="noopener noreferrer">
						<h1 class="text-xl text-neutral-400 font-semibold underline hover:text-green-500">https://www.linkedin.com/in/alex-tirador</h1>
					</HoverCard.Trigger>
					<HoverCard.Content class="w-64">
						<div class="flex items-center justify-center space-x-8">
							<Avatar.Root class="h-16 w-16">
								<Avatar.Image src="{linkedin}" alt="avatar"/>
								<Avatar.Fallback>linkedin</Avatar.Fallback>
							</Avatar.Root>
							<div class="space-y-1">
								<h4 class="text-md font-semibold">Alex Tirador</h4>
								<p class="text-sm">alex-tirador</p>
							</div>
						</div>
					</HoverCard.Content>
				</HoverCard.Root>
			</div>
			<div class="flex flex-row space-x-2 items-center">
				<Github />
				<HoverCard.Root>
					<HoverCard.Trigger href="https://github.com/waahhoo" target="_blank" rel="noopener noreferrer">
						<h1 class="text-xl text-neutral-400 font-semibold underline hover:text-green-500">https://github.com/waahhoo</h1>
					</HoverCard.Trigger>
					<HoverCard.Content class="w-64">
						<div class="flex items-center justify-center space-x-4">
							<Avatar.Root class="h-16 w-16">
								<Avatar.Image src="{waahhoo}" alt="avatar"/>
								<Avatar.Fallback>Waahhoo</Avatar.Fallback>
							</Avatar.Root>
							<div class="space-y-1">
								<h4 class="text-md font-semibold">Alex Tirador</h4>
								<p class="text-sm">Waahhoo</p>
							</div>
						</div>
					</HoverCard.Content>
				</HoverCard.Root>
			</div>
		</div>
		<div class="space-y-4">
			<p class="text-2xl font-bold">Location</p>
			<div class="flex flex-row space-x-2">
				<MapPin />
				<a class="text-xl text-neutral-400 font-semibold underline hover:text-green-500" 
				target="_blank" rel="noopener noreferrer" 
				href="https://www.google.com/maps/place/College+Park,+MD/@38.998334,-76.9372489,13z/data=!3m1!4b1!4m6!3m5!1s0x89b7c41e0d714699:0xeb8c0de36dd36d95!8m2!3d38.9896967!4d-76.93776!16zL20vMHBjNng?entry=ttu">
					College Park, MD
				</a>
			</div>
		</div>
	</section>
</div>
<div class="flex flex-row items-center justify-center w-full pb-4 bg-green-950 text-white">
	<div class="flex flex-col items-center justify-center space-y-10 pt-28">
		<div class="flex flex-row items-center justify-center space-x-20">
			<div class="flex flex-col items-center justify-center">
				<h1 class="text-2xl font-bold">Location</h1>
				<a class="text-xl text-white font-semibold underline hover:no-underline" 
				target="_blank" rel="noopener noreferrer" 
				href="https://www.google.com/maps/place/College+Park,+MD/@38.998334,-76.9372489,13z/data=!3m1!4b1!4m6!3m5!1s0x89b7c41e0d714699:0xeb8c0de36dd36d95!8m2!3d38.9896967!4d-76.93776!16zL20vMHBjNng?entry=ttu">
					College Park, MD
				</a>
			</div>
			<div class="flex flex-col items-center justify-center">
				<h1 class="text-2xl font-bold">Resume</h1>
				<a class="text-xl text-white font-semibold underline hover:no-underline" 
				target="_blank" rel="noopener noreferrer" download
				href="{resume}">
					MyResume.pdf
				</a>
			</div>
			<div class="flex flex-col items-center justify-center">
				<h1 class="text-2xl font-bold">Connect</h1>
				<a class="text-xl text-white font-semibold underline hover:no-underline" 
				target="_blank" rel="noopener noreferrer" 
				href="https://www.linkedin.com/in/alex-tirador/">
					LinkedIn
				</a>
			</div>
		</div>
		<p class="pt-36 text-xs">All the design and code of this website is my own, homepage background was taken from online, the rest of the images on the site are my own as well.</p>
		<!-- links to the page in test.svelte -->
	</div>
</div>
<!-- test -->
<!-- <Button href="src/test.svelte">
	click me pls
</Button> -->