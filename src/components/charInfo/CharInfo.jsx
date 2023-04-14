import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';


import './charInfo.scss';


const CharInfo = (props) => {

	const [char, setChar] = useState(null);

	const { getCharacter, proc, setProcess } = useMarvelService();

	useEffect(() => updateChar(), [props.charId]);

	const updateChar = () => {
		const { charId } = props;
		if (!charId) return;

		getCharacter(charId)
			.then(onCharLoaded)
			.then(() => setProcess("confirmed"));
	}

	const onCharLoaded = char => setChar(char);

	return (
		<div className="char__info">
			{setContent(proc, View, char)}
		</div>
	)
}

const View = ({ data }) => {

	const { name, description, thumbnail, homepage, wiki, comics } = data;
	let slicedComics = comics.length > 9 ? comics.slice(0, 10) : comics;
	return (
		<>
			<div className="char__basics">
				<img src={thumbnail}
					alt={name}
					style={{ objectFit: thumbnail.includes("image_not_available") ? "contain" : "cover" }} />
				<div>
					<div className="char__info-name">{name}</div>
					<div className="char__btns">
						<a href={homepage} className="button button__main">
							<div className="inner">homepage</div>
						</a>
						<a href={wiki} className="button button__secondary">
							<div className="inner">Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className="char__descr">
				{description}
			</div>
			<div className="char__comics">Comics:</div>
			<ul className="char__comics-list">
				{comics.length === 0 ? "There is no comics with this character" : null}
				{
					slicedComics.map((item, i) => {
						return (
							<li key={i} className="char__comics-item">
								<NavLink to={`/comics/${item.resourceURI.substring(43)}`}>
									{item.name}
								</NavLink>
							</li>
						)
					})
				}
			</ul>
		</>
	)
}

CharInfo.propTypes = {
	charId: PropTypes.number
}

export default CharInfo;