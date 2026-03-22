<script lang="ts">
	import { Toaster as Sonner, type ToasterProps as SonnerProps } from 'svelte-sonner';

	let { ...restProps }: SonnerProps = $props();
</script>

<Sonner
	theme="dark"
	class="toaster group"
	position="bottom-right"
	toastOptions={{
		classes: {
			toast:
				'!bg-[#131313] !border-2 !border-[#2a2a2a] !rounded-none !font-mono !text-sm !shadow-[2px_2px_0px_0px_#00FF41]',
			title: '!text-[#e0e0e0] !font-mono !text-xs !font-bold',
			description: '!text-[#888] !font-mono !text-xs',
			success: '!border-[#00FF41] !text-[#00FF41]',
			error: '!border-[#ff4141] !text-[#ff4141]',
			warning: '!border-[#F0FF00] !text-[#F0FF00]',
			info: '!border-[#00E3FD] !text-[#00E3FD]',
			actionButton: '!bg-[#00FF41] !text-[#131313] !rounded-none !font-mono !text-xs !font-bold',
			cancelButton:
				'!bg-transparent !border !border-[#2a2a2a] !text-[#888] !rounded-none !font-mono !text-xs'
		}
	}}
	{...restProps}
/>
