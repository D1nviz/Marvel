import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './comicsList.scss';

const setContent = (proc, Component, newItemLoading) => {
	switch (proc) {
		case "waiting":
			return <Spinner />
		case "loading":
			return newItemLoading ? <Component /> : <Spinner />
		case "confirmed":
			return <Component />
		case "error":
			return <ErrorMessage />
		default:
			throw new Error("Unexpected process state");
	}
}

const ComicsList = () => {

	const [comicsList, setComicsList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(230);
	const [endComics, setEndComics] = useState(false);

	const { getAllComics, proc, setProcess } = useMarvelService();

	useEffect(() => onRequest(offset, true), []);

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllComics(offset)
			.then(onComicsListLoaded)
			.then(() => setProcess("confirmed"));
	};

	const onComicsListLoaded = (newComicsList) => {
		let ended = (newComicsList.length < 8) ? true : false;
		setComicsList(comicsList => [...comicsList, ...newComicsList]);
		setNewItemLoading(false);
		setOffset(offset => offset + 8);
		setEndComics(ended);
	};

	const renderItems = arr => {
		const items = arr.map((item, i) => {
			return (
				<li className="comics__item"
					key={i}>
					<Link to={`/comics/${item.id}`}>
						<img src={item.thumbnail} alt="ultimate war" className="comics__item-img" />
						<div className="comics__item-name">{item.title}</div>
						<div className="comics__item-price">{item.price}</div>
					</Link>
				</li>
			)
		});

		return (
			<ul className="comics__grid">
				{items}
			</ul>
		)
	}

	return (
		<div className="comics__list">
			{setContent(proc, () => renderItems(comicsList), newItemLoading)}

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