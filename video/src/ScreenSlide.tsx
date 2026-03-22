import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig
} from 'remotion';

interface ScreenSlideProps {
	image: string;
	title: string;
	subtitle: string;
	index: number;
	total: number;
}

export const ScreenSlide: React.FC<ScreenSlideProps> = ({
	image,
	title,
	subtitle,
	index,
	total
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	// Gentle zoom from 1.0 → 1.05 over the slide duration
	const zoom = interpolate(frame, [0, 150], [1, 1.05], {
		extrapolateRight: 'clamp'
	});

	// Title slides in from left
	const titleX = spring({
		frame: frame - 10,
		fps,
		config: { damping: 18, stiffness: 80 }
	});
	const titleTranslate = interpolate(titleX, [0, 1], [-60, 0]);

	// Subtitle fades in
	const subtitleOpacity = interpolate(frame, [20, 40], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp'
	});

	// Progress bar
	const progress = (index + 1) / total;

	return (
		<AbsoluteFill style={{ backgroundColor: '#131313' }}>
			{/* Screen image with zoom */}
			<AbsoluteFill
				style={{
					transform: `scale(${zoom})`,
					transformOrigin: 'center center'
				}}
			>
				<Img
					src={staticFile(image)}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</AbsoluteFill>

			{/* Dark gradient overlay at bottom */}
			<AbsoluteFill
				style={{
					background:
						'linear-gradient(to top, rgba(19,19,19,0.95) 0%, rgba(19,19,19,0.7) 15%, transparent 40%)'
				}}
			/>

			{/* Title + subtitle overlay */}
			<div
				style={{
					position: 'absolute',
					bottom: 80,
					left: 60,
					right: 60,
					display: 'flex',
					flexDirection: 'column',
					gap: 8
				}}
			>
				<div
					style={{
						fontFamily: "'Space Grotesk', sans-serif",
						fontSize: 18,
						fontWeight: 700,
						letterSpacing: '0.2em',
						color: '#00FF41',
						transform: `translateX(${titleTranslate}px)`,
						textShadow: '0 0 20px rgba(0,255,65,0.4)'
					}}
				>
					{'// ' + title}
				</div>
				<div
					style={{
						fontFamily: "'Inter', sans-serif",
						fontSize: 28,
						fontWeight: 400,
						color: '#BDF4FF',
						opacity: subtitleOpacity,
						textShadow: '0 2px 8px rgba(0,0,0,0.6)'
					}}
				>
					{subtitle}
				</div>
			</div>

			{/* Progress bar at bottom */}
			<div
				style={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					height: 4,
					backgroundColor: '#1C1B1B'
				}}
			>
				<div
					style={{
						height: '100%',
						width: `${progress * 100}%`,
						backgroundColor: '#00FF41',
						boxShadow: '0 0 10px rgba(0,255,65,0.5)'
					}}
				/>
			</div>

			{/* Step indicator */}
			<div
				style={{
					position: 'absolute',
					top: 30,
					right: 40,
					fontFamily: "'Space Grotesk', monospace",
					fontSize: 14,
					fontWeight: 600,
					color: '#00FF41',
					letterSpacing: '0.15em',
					opacity: 0.7
				}}
			>
				{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
			</div>
		</AbsoluteFill>
	);
};
