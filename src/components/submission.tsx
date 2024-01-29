// dependencies
import { Fragment, useEffect, useRef, useState } from 'react'
import { Playbar } from 'maxmsp-gui'

const Submission: React.FC<{
	author?: SubmissionJSON['author']
	audio?: SubmissionJSON['audio']
	video?: SubmissionJSON['video']
	updatePlaying?: boolean
	onPlay: (b: boolean) => void
}> = ({ author = undefined, audio = [], video = [], updatePlaying = undefined, onPlay = () => {} }): JSX.Element => {
	/*
	Generates an interactive submission from a given object of type SubmissionJSON.
	*/

	// set playbar width relative to parent width
	const self = useRef<HTMLDivElement>(null)
	const [width, setWidth] = useState<number>(0)
	useEffect(() => {
		const listener = (): void => {
			setWidth(self.current?.clientWidth || 0)
		}
		window.addEventListener('resize', listener)
		listener()
		return () => {
			window.removeEventListener('resize', listener)
		}
	}, [])

	// synchronise the audio and the slider
	const audio_ref = useRef<HTMLAudioElement>(null)
	const [audio_playing, setPlayingState] = useState<boolean>(false)
	const [audio_time, setCurrentTime] = useState<number>(0)
	const interval = useRef<ReturnType<typeof setInterval> | undefined>(undefined)
	// update playing
	useEffect(() => {
		if (updatePlaying !== undefined) {
			setPlaying(updatePlaying)
			updatePlaying ? audio_ref.current?.play() : audio_ref.current?.pause()
		} else {
			setPlaying(false)
		}
	}, [updatePlaying])
	// toggle playing, fire call back, and destroy interval
	const setPlaying = (b: boolean) => {
		setPlayingState(b)
		if (!b) {
			window.clearInterval(interval.current)
			interval.current = undefined
		}
	}
	// run an interval to keep track of time
	useEffect(() => {
		if (audio_playing) {
			interval.current = window.setInterval(() => {
				if (audio_ref.current && !audio_ref.current.ended) {
					setCurrentTime(audio_ref.current.currentTime / audio_ref.current.duration)
				} else {
					setCurrentTime(0)
					setPlaying(false)
					onPlay(false)
				}
			}, 10)
		}
	}, [audio_playing, onPlay])
	// clean up on unmount
	useEffect(() => {
		const cleanup_audio = audio_ref.current
		return (): void => {
			cleanup_audio?.pause()
			clearInterval(interval.current)
		}
	}, [])

	return (
		<div className='submission' ref={self}>
			{audio.length ? (
				audio.map((filename: string) => (
					<Fragment key={filename}>
						<audio ref={audio_ref} src={`${import.meta.env.BASE_URL}/audio/${filename}`} />
						<Playbar
							ariaLabel={author ? `audio player for ${author.name.toLowerCase()}` : 'audio player'}
							setPlaying={audio_playing}
							setValue={audio_time}
							width={width}
							onChange={(v: number) => {
								// scrub through the audio
								setCurrentTime(v)
								if (audio_ref.current) {
									audio_ref.current.currentTime = v * audio_ref.current.duration
								}
							}}
							onPlay={(b: boolean) => {
								// play or pause the audio
								if (b && audio_ref.current) {
									setPlaying(true)
								} else {
									audio_ref.current?.pause()
									setPlaying(false)
								}
								onPlay(b)
							}}
						/>
					</Fragment>
				))
			) : (
				<></>
			)}
			{video.length ? (
				<div className='videos'>
					{video.map((hash: string) => (
						<iframe
							allow='accelerometer; autoplay; encrypted-media; fullscreen; gyroscope;'
							frameBorder={0}
							key={hash}
							src={`https://www.youtube-nocookie.com/embed/${hash}?theme=dark&color=white`}
							title={author ? author.name : 'anonymous'}
						/>
					))}
				</div>
			) : (
				<></>
			)}
			<h3>{author ? author.name.toLowerCase() : 'anonymous'}</h3>
			{author ? (
				author.links.map((obj: { href: string; type: 'instagram' | 'vimeo' | 'website' }) => {
					const href = ((): string => {
						switch (obj.type) {
							case 'instagram':
								return `https://instagram.com/${obj.href}`
							case 'vimeo':
								return `https://vimeo.com/${obj.href}`
							default:
								return obj.href
						}
					})()
					return (
						<p key={obj.href}>
							<i>{obj.type}</i>
							<span>{' : '}</span>
							<a href={href} target='_blank'>
								{obj.href.replace(/.+\/\/|www.|/g, '')}
							</a>
						</p>
					)
				})
			) : (
				<></>
			)}
		</div>
	)
}

export default Submission
