import { Composition } from 'remotion';
import { Walkthrough, getWalkthroughDuration } from './Walkthrough';
import { FPS } from './screens';

export const RemotionRoot: React.FC = () => {
	return (
		<Composition
			id="Walkthrough"
			component={Walkthrough}
			durationInFrames={getWalkthroughDuration()}
			fps={FPS}
			width={1920}
			height={1080}
		/>
	);
};
