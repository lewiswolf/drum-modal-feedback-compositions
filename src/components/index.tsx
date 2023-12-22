import { useState } from 'react'
// src
import config from '../config'
import Submission from './submission'

const random_config_cache: Readonly<SubmissionJSON[]> = config.sort(() => Math.random() - 0.5)

export const Submissions: React.FC<{
	randomise_config?: boolean
}> = ({ randomise_config = true }): JSX.Element => {
	/*
	This component renders an array of submissions, making sure that only submission is allowed to be playing at
	*/

	const [index_playing, setIndex] = useState<number>(0)
	return (
		<>
			{(randomise_config ? random_config_cache : config).map((S: SubmissionJSON, i: number) => {
				i++
				return (
					<Submission
						{...S}
						key={i}
						updatePlaying={index_playing === i + 1}
						onPlay={(b: boolean) => {
							if (b) {
								setIndex(i + 1)
							} else {
								setIndex(0)
							}
						}}
					/>
				)
			})}
		</>
	)
}
