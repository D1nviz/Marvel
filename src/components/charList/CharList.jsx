import { useState, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../../services/MarvelService';

import './charList.scss';

const CharList = (props) => {

	const [charList, setCharList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(210);
	const [endChar, setEndChar] = useState(false);

	const {loading, error, getAllCharacters} = useMarvelService();

	useEffect(() => onRequest(offset, true), []);

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllCharacters(offset).then(onCharListLoaded);
	};

	const onCharListLoaded = (newCharList) => {
		let ended = newCharList.length < 9 ? setNewItemLoading(true) : setNewItemLoading(false);

		setCharList(charList => [...charList, ...newCharList]);
		setNewItemLoading(false);
		setOffset(offset => offset + 9);
		setEndChar(ended)
	};

	const itemRefs = useRef([]);

	const focusOnItem = (id) => {

		itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
		itemRefs.current[id].classList.add('char__item_selected');
		itemRefs.current[id].focus()
	};

	const renderItems = arr => {
		const items = arr.map((item, i) => {
			return (
				<li className="char__item"
					tabIndex={0}
					ref={elem => itemRefs.current[i] = elem}
					key={item.id}
					onClick={() => {
						props.onCharSelected(item.id)
						focusOnItem(i)
					}}
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							props.onCharSelected(item.id);
							focusOnItem(i);
						}
					}}
				>
					<img src={item.thumbnail} alt={item.name} style={{ objectFit: item.thumbnail.includes("image_not_available") ? "contain" : "cover" }} />
					<div className="char__name">{item.name}</div>
				</li>
			)
		});

		return (
			<ul className="char__grid">
				{items}
			</ul>
		)
	}

	const items = renderItems(charList);

	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading && !newItemLoading ? <Spinner /> : null;

	return (
		<div className="char__list">
			{errorMessage}
			{spinner}
			{items}
			<button className="button button__main button__long"
				disabled={newItemLoading}
				style={{ "display": endChar ? "none" : "block" }}
				onClick={() => onRequest(offset)}>
				<div className="inner">load more</div>
			</button>
		</div>
	)
};

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired
}

export default CharList;