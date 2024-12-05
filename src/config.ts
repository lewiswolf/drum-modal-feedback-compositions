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
			name: 'Julia Set X Barrell Jones',
			links: [{ href: 'https://linktr.ee/julia___set', type: 'website' }],
		},
		video: ['ywyDa7hx5ec'],
	},
	{
		author: {
			name: 'Lewis Wolstanholme X Ciarán Corr',
			links: [{ href: 'https://lewiswolstanholme.co.uk', type: 'website' }],
		},
		audio: [],
	},
	{
		author: {
			name: 'Napoleon Skywalker',
			links: [],
		},
		video: ['yQt1CheMuUo'],
	},
	{
		author: {
			name: 'Rodrigo Constanzo',
			links: [{ href: 'https://rodrigoconstanzo.com', type: 'website' }],
		},
		video: ['4XrQqV744z8', '511Se3g2A2w'],
	},
] as const
