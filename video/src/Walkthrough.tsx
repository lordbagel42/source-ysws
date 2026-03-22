import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from 'remotion';
import { ScreenSlide } from './ScreenSlide';
import { IntroSlide } from './IntroSlide';
import { SCREENS, TRANSITION_DURATION } from './screens';

// Cross-fade wrapper
const FadeIn: React.FC<{ children: React.ReactNode; durationFrames?: number }> = ({
	children,
	durationFrames = TRANSITION_DURATION
}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, durationFrames], [0, 1], {
		extrapolateRight: 'clamp'
	});
	return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};

export const Walkthrough: React.FC = () => {
	const INTRO_DURATION = 90; // 3 seconds
	let offset = 0;

	return (
		<AbsoluteFill style={{ backgroundColor: '#131313' }}>
			{/* Intro */}
			<Sequence from={offset} durationInFrames={INTRO_DURATION + TRANSITION_DURATION}>
				<IntroSlide />
			</Sequence>
			{offset += INTRO_DURATION}

			{/* Screen slides with cross-fade overlap */}
			{SCREENS.map((screen, i) => {
				const from = offset;
				const dur = screen.duration + TRANSITION_DURATION;
				offset += screen.duration;

				return (
					<Sequence key={screen.id} from={from} durationInFrames={dur}>
						<FadeIn>
							<ScreenSlide
								image={screen.image}
								title={screen.title}
								subtitle={screen.subtitle}
								index={i}
								total={SCREENS.length}
							/>
						</FadeIn>
					</Sequence>
				);
			})}
		</AbsoluteFill>
	);
};

/** Total duration for the composition registration */
export function getWalkthroughDuration(): number {
	const INTRO_DURATION = 90;
	const screenFrames = SCREENS.reduce((sum, s) => sum + s.duration, 0);
	return INTRO_DURATION + screenFrames + TRANSITION_DURATION; // extra pad at end
}
