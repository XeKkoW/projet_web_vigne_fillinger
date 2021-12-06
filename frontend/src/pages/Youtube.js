import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';
import DisplayYoutube from '../components/DisplayYoutube';
import Navigation from '../components/Navigation';

//https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyDNsMl3sAqcGzAss2CzNrXwX6iUJkNWXHU
//PLGsXxFxHCgL9cMPyAcL54m7dJRpzoJENQ

const Youtube = () => {
	const [data, setData] = useState(undefined);
	const [play, setPlay] = useState([true])

	useEffect(() => {
		if (play) {
			axios.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLGsXxFxHCgL9cMPyAcL54m7dJRpzoJENQ&maxResults=15&key=AIzaSyDNsMl3sAqcGzAss2CzNrXwX6iUJkNWXHU")
				.then((res) => {
					setData(res.data);
					setPlay(false)

				})
		}
	}, [play])

	if (data == undefined) {
		return (<div></div>)


	}
	else {
		console.log(data);
		return (
			<div className="pageMedia">
				<Navigation />
				<div className="supportPageMedia">
					<p className="titrePlaylistMusiqueWorld">Playlist: Musiques des Worlds</p>
					<ul>
						{data.items.map((item) => (
							//console.log(item.snippet.thumbnails.medium),
							< DisplayYoutube title={item.snippet.title} medium={item.snippet.thumbnails.medium} id={item.id} resourceId={item.snippet.resourceId} />
						))}
					</ul>
					</div>
				{console.log(data)}
			</div>
		);
	}

};

export default Youtube;
