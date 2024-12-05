// dependencies
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// src
import './scss/index.scss'
import { Submissions } from './components/index.tsx'

createRoot(document.getElementById('root') as NonNullable<HTMLDivElement>).render(
	<StrictMode>
		<header>
			<h1>Drum Modal Feedback: Concept Design of an Augmented Percussion Instrument</h1>
			{/* <h2>curated by Lewis Wolstanholme, Jordie Shier, Rodrigo Constanzo & Andrew McPherson</h2> */}
			{/* <p>description and links</p> */}
		</header>
		<main>
			<Submissions randomise_config={true} />
		</main>
		<footer>
			<p>
				This work is supported by the Centre for Doctoral Training in Artificial Intelligence and Music at Queen Mary
				University of London, funded by UK Research and Innovation (UKRI) under EPSRC grant EP/S022694/1.
			</p>
			<br />
			<p>
				All research carried out as part of this work was conducted by the authors, except for select musical works
				which were written in collaboration with other artists. All collaborating artists gave express permission for
				their work and acknowledgement to be included in this research, and they retain all rights to their musical
				and artistic products.
			</p>
		</footer>
	</StrictMode>,
)
