export default [
	{
		name: 'PupMe',
		image: 'https://i.imgur.com/bj6XWlJ.png',
		text: [
			{
				description:
					"Having a ruff day? Know you're gonna be stressed out later? Dreading that 9am class you have? - Don't worry anymore! With PupMe you can schedule to have cute photos of your favorite dogs and cats sent directly to your phone through push notifications. Simply open the app, turn on 'push notifications' and schedule to have dog and cat photos sent to you when you need it most."
			},
			{
				heading: 'Development',
				description:
					'Project started in late February as a side-side-project. By mid-March I had a working copy down not including the push notifications, and had version 1.0.0 ready for release in early April.'
			},
			{
				heading: 'Tech Specs',
				description:
					'Developed in React Native using redux for state management, redux-persist for storage/cacheing, and react-native-push-notification for scheduling the notifications. This app was my first attempt at implementing react-native-elements. Wrapping up the entire app in ThemeProvider allowed for me to reuse elements easier and create a consistent theme in the app.'
			}
		],
		links: {}
	},
	{
		name: "Connect'd",
		image: 'https://i.imgur.com/02F50ok.png',
		text: [
			{
				description:
					"Meeting someone for the first time can be tricky when you decide to exchange contact information. Phone number? Facebook? Instagram? Snapchat? Can't ask for all because it takes too long. Connect'd allows you to create customized cards containing the contact details and social media information that you want to share in 1-click. Met someone while walking across your university campus? Share your Snapchat and Instagram handles. At a professional networking event? Share your LinkedIn and work email. Never again have to decide which ONE contact you want to exchange."
			},
			{
				heading: 'Development',
				description:
					'Co-founded AddMe LLC and developed an iOS/Android app that allows users to share any amount of contacts, social media handles, phone numbers, and profiles on one simple scan. Project started January of 2018, and was eventually taken down December 2018 to refocus.'
			},
			{
				heading: 'Tech Specs',
				description:
					'React Native iOS/Android app using react-native-fire-base for authentication, apollo for GraphQL requests, and redux for state management. NodeJS server hosted on DigitalOcean taking in GraphQL request and validating against Firebase Auth. Sequelize framework used to translate schematics to secure SQL queries on a separated MySQL server.'
			}
		],
		links: {}
	},
	{
		name: 'Collideascope',
		image: 'https://i.imgur.com/ffZKwDL.jpg',
		text: [
			{
				description:
					"Collideascope came to be one day when I couldn't figure out how to spell the word kaleidoscope properly. After much debate in my head I settled with collide + ascope, and thus this game was born. I wrote the entire game in one 14 hour binge, then spent a little bit of time over the rest of the month touching up the game, adding in the user interface, and play testing. Collideascope is a fast paced competitive color matching game inside of a kaleidoscope. Hold down the left and right side of the screen to move around the inside of a kaleidoscope. Hit the squares that match the background color, hit the white squares to change color, and dodge everything else."
			},
			{
				heading: 'Tech Specs',
				description:
					'Designed and developed over the course of one month in Unity 5.4 using C# 6. Collideascope runs on a single render texture, with two in game cameras, one to capture the player, and one to capture the scene. The scene camera is then rendered 24 times onto the screen to simulate a kaleidoscope effect. The players is simulated over the inner 6 triangles as a treadmill, with only 1-2 visible at a time.'
			}
		],
		links: {}
	}
];
