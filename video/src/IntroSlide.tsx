import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const IntroSlide: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	// Title spring animation
	const titleProgress = spring({
		frame: frame - 15,
		fps,
		config: { damping: 14, stiffness: 60 }
	});
	const titleY = interpolate(titleProgress, [0, 1], [40, 0]);
	const titleOpacity = interpolate(titleProgress, [0, 1], [0, 1]);

	// Subtitle appears after title
	const subProgress = spring({
		frame: frame - 35,
		fps,
		config: { damping: 16, stiffness: 70 }
	});
	const subOpacity = interpolate(subProgress, [0, 1], [0, 1]);

	// Blinking cursor
	const cursorVisible = Math.floor(frame / 15) % 2 === 0;

	// Scanline effect
	const scanlineY = (frame * 3) % 1080;

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#131313',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column'
			}}
		>
			{/* Ghost watermark */}
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					fontFamily: "'Space Grotesk', sans-serif",
					fontSize: 200,
					fontWeight: 900,
					color: 'rgba(255,255,255,0.03)',
					letterSpacing: '-0.02em',
					whiteSpace: 'nowrap',
					userSelect: 'none'
				}}
			>
				0xSOURCE
			</div>

			{/* Scanline */}
			<div
				style={{
					position: 'absolute',
					top: scanlineY,
					left: 0,
					right: 0,
					height: 2,
					backgroundColor: 'rgba(0,255,65,0.06)',
					pointerEvents: 'none'
				}}
			/>

			{/* Main content */}
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 20,
					transform: `translateY(${titleY}px)`,
					opacity: titleOpacity
				}}
			>
				{/* Status chip */}
				<div
					style={{
						fontFamily: "'Space Grotesk', monospace",
						fontSize: 14,
						fontWeight: 600,
						letterSpacing: '0.25em',
						color: '#00FF41',
						padding: '6px 16px',
						borderBottom: '2px solid #00FF41'
					}}
				>
					SYSTM_INITIALIZED //
				</div>

				{/* Title */}
				<div
					style={{
						fontFamily: "'Space Grotesk', sans-serif",
						fontSize: 72,
						fontWeight: 900,
						color: '#FFFFFF',
						textAlign: 'center',
						lineHeight: 1.1,
						letterSpacing: '-0.02em'
					}}
				>
					SOURCE <span style={{ color: '#00FF41' }}>YSWS</span>
				</div>

				{/* Subtitle */}
				<div
					style={{
						fontFamily: "'Inter', sans-serif",
						fontSize: 22,
						color: '#BDF4FF',
						opacity: subOpacity,
						textAlign: 'center',
						maxWidth: 600
					}}
				>
					WALKTHROUGH // HOMEPAGE &amp; AUTH FLOW
				</div>

				{/* Terminal prompt */}
				<div
					style={{
						fontFamily: "'Space Grotesk', monospace",
						fontSize: 16,
						color: 'rgba(255,255,255,0.4)',
						marginTop: 30,
						opacity: subOpacity
					}}
				>
					guest@source:~$ ./walkthrough.sh
					<span style={{ opacity: cursorVisible ? 1 : 0 }}>█</span>
				</div>
			</div>

			{/* Bottom border glow */}
			<div
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					height: 4,
					backgroundColor: '#00FF41',
					boxShadow: '0 0 20px rgba(0,255,65,0.4)'
				}}
			/>
		</AbsoluteFill>
	);
};
