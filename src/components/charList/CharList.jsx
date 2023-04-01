import { Component } from 'react';

import PropTypes from 'prop-types';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

class CharList extends Component {
	state = {
		charList: [],
		loading: true,
		error: false,
		newItemLoading: false,
		offset: 210,
		endChar: false
	}
	marvelService = new MarvelService();

	componentDidMount() {
		this.onRequest();
	}

	onCharListLoaded = (newCharList) => {
		let ended = false;
		if (newCharList.length < 9) {
			ended = true;
		}
		this.setState(({ offset, charList }) => ({
			charList: [...charList, ...newCharList],
			loading: false,
			newItemLoading: false,
			offset: offset + 9,
			endChar: ended
		}))
	}

	onRequest = (offset) => {
		this.onCharListLoading();
		this.marvelService.getAllCharacters(offset)
			.then(this.onCharListLoaded)
			.catch(this.onError)
	}

	onCharListLoading = () => {
		this.setState({
			newItemLoading: true
		})
	}
	onError = () => {
		this.setState({
			error: true,
			loading: false
		})
	}
	refItems = [];

	setRef = ref => {
		this.refItems.push(ref);
	}

	focusItem = id => {
		this.refItems.forEach(item => item.classList.remove("char__item_selected"));
		this.refItems[id].classList.add("char__item_selected");
		this.refItems[id].focus();
	}
	renderItems = (arr) => {
		const items = arr.map((item, i) => {
			return (
				<li className="char__item"
					tabIndex={0}
					ref={this.setRef}
					key={item.id}
					onClick={() => {
						this.props.onCharSelected(item.id)
						this.focusItem(i)
					}}
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							this.props.onCharSelected(item.id);
							this.focusItem(i);
						}
					}}
				>
					<img src={item.thumbnail} alt={item.name} style={{ objectFit: item.thumbnail.includes("image_not_available") ? "contain" : "cover" }} />
					<div className="char__name">{item.name}</div>
				</li>
			)
		})

		return (
			<ul className="char__grid">
				{items}
			</ul>
		)
	}
	render() {
		const { charList, loading, error, offset, newItemLoading, endChar } = this.state;

		const items = this.renderItems(charList);

		const errorMessage = error ? <ErrorMessage /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(loading || error) ? items : null;

		return (

			<div className="char__list">
				{errorMessage}
				{spinner}
				{content}
				<button className="button button__main button__long"
					disabled={newItemLoading}
					style={{ "display": endChar ? "none" : "block" }}
					onClick={() => this.onRequest(offset)}>
					<div className="inner">load more</div>
				</button>
			</div>
		)
	}
}

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired
}
export default CharList;