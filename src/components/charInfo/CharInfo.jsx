import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import Skeleton from "../skeleton/Skeleton"


import './charInfo.scss';


const CharInfo = (props) => {

	const [char, setChar] = useState(null);

	const {loading, error, getCharacter, clearError} = useMarvelService();

	useEffect(() => updateChar(), [props.charId]);

	const updateChar = () => {
		clearError();
		const { charId } = props;
		if (!charId) return;
		
		getCharacter(charId).then(onCharLoaded)
	}

	const onCharLoaded = char => setChar(char);
	

	const skeleton = char || loading || error ? null : <Skeleton />
	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading ? <Spinner /> : null;
	const content = !(loading || error || !char) ? <View char={char} /> : null;

	return (
		<div className="char__info">
			{skeleton}
			{errorMessage}
			{spinner}
			{content}
		</div>
	)
}

const View = ({ char }) => {

	const { name, description, thumbnail, homepage, wiki, comics } = char;
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
								<a href={item.resourceURI}>{item.name}</a>
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