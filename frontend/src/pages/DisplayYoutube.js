import React from 'react';
import Youtube from './Youtube';

const DisplayYoutube = (props) => {
	const title = props.title
	const medium = props.medium
	const id = props.id
	const resourceId = props.resourceId


	return (
		<div>
			<ul>
				<li>
					<a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank">
						<p>
							<img width={medium.width} height={medium.height} src={medium.url} alt="image vidéo" />

						</p>
						<h3>{title}</h3>
					</a>
				</li>
			</ul>

		</div>
	);
};

export default DisplayYoutube;