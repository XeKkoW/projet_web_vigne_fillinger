import React from 'react';

//affichage d'une playliste Youtube avec lien cliquable qui ouvre la vidéo dans un nouvelle onglet

const DisplayYoutube = (props) => {
	const title = props.title
	const medium = props.medium
	const id = props.id
	const resourceId = props.resourceId


	return (
		<div className="miniatureVideo">
			<ul>
				<li>
					<a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank">
						<p>
							<img width={medium.width} height={medium.height} src={medium.url} alt="image vidéo" />

						</p>
					</a>
				</li>
			</ul>

		</div>
	);
};
//liens des vidéos
//<h3>{title}</h3>
export default DisplayYoutube;