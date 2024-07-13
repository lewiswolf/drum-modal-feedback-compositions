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
	// add objects here
] as const
