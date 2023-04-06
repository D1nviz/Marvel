import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './comicsList.scss';

const ComicsList = () => {

	const [comicsList, setComicsList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(210);
	const [endComics, setEndComics] = useState(false);

	const { getAllComics, loading, error } = useMarvelService();

	useEffect(() => onRequest(offset, true), []);

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllComics(offset).then(onComicsListLoaded);
	};

	const onComicsListLoaded = (newComicsList) => {
		let ended = (newComicsList.length < 8) ? true : false;
		setComicsList(comicsList => [...comicsList, ...newComicsList]);
		setNewItemLoading(false);
		setOffset(offset => offset + 9);
		setEndComics(ended);
	};

	const renderItems = arr => {
		const items = arr.map((item) => {
			return (
				<li className="comics__item"
					key={item.id}>
					<a href="#">
						<img src={item.thumbnail} alt="ultimate war" className="comics__item-img" />
						<div className="comics__item-name">{item.title}</div>
						<div className="comics__item-price">{item.price}</div>
					</a>
				</li>
			)
		});

		return (
			<ul className="comics__grid">
				{items}
			</ul>
		)
	}

	const items = renderItems(comicsList);
	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading && !newItemLoading ? <Spinner /> : null;

	return (
		<div className="comics__list">
			{errorMessage}
			{spinner}
			{items}

			<button className="button button__main button__long"
				disabled={newItemLoading}
				style={{ "display": endComics ? "none" : "block" }}
				onClick={() => onRequest(offset)}
			>
				<div className="inner">load more</div>
			</button>
		</div>
	)

}

export default ComicsList;