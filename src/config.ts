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
			links: [{ href: 'https://linktr.ee/julia___set', type: 'website' }],
			name: 'Julia Set X Barrell Jones',
		},
		video: ['ywyDa7hx5ec'],
	},
	{
		audio: ['riser.wav'],
		author: {
			links: [{ href: 'https://lewiswolstanholme.co.uk', type: 'website' }],
			name: 'Lewis Wolstanholme X Ciarán Corr',
		},
	},
	{
		author: {
			links: [],
			name: 'Napoleon Skywalker',
		},
		video: ['yQt1CheMuUo'],
	},
	{
		author: {
			links: [{ href: 'https://rodrigoconstanzo.com', type: 'website' }],
			name: 'Rodrigo Constanzo',
		},
		video: ['4XrQqV744z8', '511Se3g2A2w'],
	},
] as const
