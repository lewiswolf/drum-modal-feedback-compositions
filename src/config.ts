export type SubmissionJSON = {
	author?: {
		name: string
		links: { href: string; type: 'instagram' | 'vimeo' | 'website' }[]
		quote?: string
	}
	audio?: string[]
	video?: string[]
}

export const config: SubmissionJSON[] = [
	{
		author: {
			name: 'Anonymous X Barrell Jones',
			links: [],
			// name: 'Julia Set X Barrell Jones',
			// links: [{ href: 'https://linktr.ee/julia___set', type: 'website' }],
		},
		video: ['ywyDa7hx5ec'],
	},
	{
		author: {
			name: 'Anonymous X Ciarán Corr',
			links: [],
			// name: 'Lewis Wolstanholme X Ciarán Corr',
			// links: [{ href: 'https://lewiswolstanholme.co.uk', type: 'website' }],
		},
		audio: [],
	},
	{
		author: {
			name: 'Anonymous',
			// name: 'Napoleon Skywalker',
			links: [],
		},
		video: [],
	},
	{
		author: {
			name: 'Anonymous',
			links: [],
			// name: 'Rodrigo Constanzo',
			// links: [{ href: 'https://rodrigoconstanzo.com', type: 'website' }],
		},
		video: ['4XrQqV744z8', '511Se3g2A2w'],
	},
] as const
