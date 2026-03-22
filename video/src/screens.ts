export const SCREENS = [
	{
		id: '01-hero',
		title: 'MISSION_CONTROL',
		subtitle: 'Build X — Get T-Deck + $275',
		image: 'assets/screens/01-hero.png',
		duration: 150 // 5s at 30fps
	},
	{
		id: '02-streak-heat',
		title: 'STREAK_HEAT',
		subtitle: 'Consecutive build days boost your rewards',
		image: 'assets/screens/02-streak-heat.png',
		duration: 120 // 4s
	},
	{
		id: '03-shipments',
		title: 'RECENT_SHIPMENTS',
		subtitle: 'Community hardware projects',
		image: 'assets/screens/03-shipments.png',
		duration: 120
	},
	{
		id: '04-rewards',
		title: 'REWARD_LOG',
		subtitle: 'Mission rewards for hardware builders',
		image: 'assets/screens/04-rewards.png',
		duration: 120
	},
	{
		id: '05-terminal',
		title: 'HARDWARE_TERMINAL',
		subtitle: 'Verify and ship your project',
		image: 'assets/screens/05-terminal.png',
		duration: 120
	},
	{
		id: '06-login',
		title: 'AUTHENTICATE',
		subtitle: 'Secure access via Hack Club OAuth',
		image: 'assets/screens/06-login.png',
		duration: 120
	},
	{
		id: '07-hackclub-auth',
		title: 'HACK_CLUB_AUTH',
		subtitle: 'Continue to Source YSWS',
		image: 'assets/screens/07-hackclub-auth.png',
		duration: 120
	}
] as const;

export const FPS = 30;
export const TRANSITION_DURATION = 20; // frames (~0.67s)
