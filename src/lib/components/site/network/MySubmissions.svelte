<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Send, Clock, ThumbsUp } from 'lucide-svelte';
</script>

<section aria-labelledby="my-submissions-title" class="space-y-4">
	<span class="block font-headline text-[10px] tracking-[0.2em] text-outline uppercase">
		USER // PERSONAL_QUEUE
	</span>
	<h2
		id="my-submissions-title"
		class="font-headline text-2xl font-black tracking-wider text-foreground"
	>
		MY_SUBMISSIONS
	</h2>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<!-- Submission 1 -->
		<article class="border-2 border-outline-variant bg-surface-container-low p-5">
			<div class="mb-3 flex items-start justify-between gap-2">
				<div>
					<h3 class="font-headline text-base font-bold tracking-wider text-foreground">
						HYDRO_CONTROLLER_V2
					</h3>
					<span class="font-mono text-xs text-secondary">Submitted 8h ago</span>
				</div>
				<Badge variant="secondary" class="font-mono text-[10px]">IoT</Badge>
			</div>
			<p class="mb-4 text-sm leading-relaxed text-on-surface-variant">
				Automated hydroponics controller with pH/EC sensors, peristaltic dosing pumps, and
				grow-light scheduling. ESP32-S3 based with web dashboard.
			</p>
			<div class="flex items-center gap-4 border-t-2 border-outline-variant pt-3">
				<span class="flex items-center gap-1.5 font-mono text-sm font-bold text-primary">
					<ThumbsUp class="h-3.5 w-3.5" />
					▲ 12
				</span>
				<span class="font-mono text-[10px] text-secondary">PENDING REVIEW</span>
				<span
					class="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-on-surface-variant"
				>
					<Clock class="h-3 w-3" />
					3 votes so far
				</span>
			</div>
		</article>

		<!-- Submission 2 -->
		<article class="border-2 border-outline-variant bg-surface-container-low p-5">
			<div class="mb-3 flex items-start justify-between gap-2">
				<div>
					<h3 class="font-headline text-base font-bold tracking-wider text-foreground">
						USB_PD_TESTER
					</h3>
					<span class="font-mono text-xs text-secondary">Submitted 3d ago</span>
				</div>
				<Badge variant="outline" class="font-mono text-[10px]">POWER</Badge>
			</div>
			<p class="mb-4 text-sm leading-relaxed text-on-surface-variant">
				USB Power Delivery protocol analyzer and load tester. Supports up to 100W, displays
				voltage/current graphs on built-in OLED. Open-source PCB design.
			</p>
			<div class="flex items-center gap-4 border-t-2 border-outline-variant pt-3">
				<span class="flex items-center gap-1.5 font-mono text-sm font-bold text-primary">
					<ThumbsUp class="h-3.5 w-3.5" />
					▲ 34
				</span>
				<span class="font-mono text-[10px] text-primary">APPROVED</span>
				<span
					class="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-on-surface-variant"
				>
					<Clock class="h-3 w-3" />
					18 votes total
				</span>
			</div>
		</article>
	</div>

	<!-- Submit button -->
	<Button
		variant="outline"
		class="border-2 border-primary font-mono text-sm tracking-wider text-primary hover:bg-primary hover:text-primary-foreground"
	>
		<Send class="mr-2 h-4 w-4" />
		SUBMIT_NEW_PROJECT
	</Button>
</section>
