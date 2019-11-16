import React, { useState, FC } from "react"

import CardTitle from "components/cardTitle"
import CardLanguage from "components/cardLanguage"

import ICard from './types'

import "./card.styl"

const Card: FC<ICard> = props => {
	let {
		th = "",
		en = "",
		jp = "",
		price,
		subMenu = null,
		preload = false
	} = props

	if (preload)
		return (
			<div className="card">
				<div className="body">
					<h2 className="name">
						<p className="preload" />
					</h2>
					<p className="price preload-price">
						<span className="preload" />
					</p>
				</div>
				<footer className="footer">
					<button
						aria-label="Switch to English"
						className="other preload-other"
						name="loading-1"
					>
						<div className="preload small" />
					</button>
					<button
						aria-label="Switch to Japanese"
						className="other preload-other"
						name="loading-2"
					>
						<div className="preload small" />
					</button>
				</footer>
			</div>
		)

	if (subMenu === null) {
		let [language, setLanguage] = useState("th")

		switch (language) {
			case "th":
				return (
					<div className="card">
						<CardTitle name={th} price={price} />
						<footer className="footer">
							<CardLanguage
								language="en"
								name={en}
								onClick={() => setLanguage("en")}
							/>
							<CardLanguage
								language="jp"
								name={jp}
								onClick={() => setLanguage("jp")}
							/>
						</footer>
					</div>
				)

			case "en":
				return (
					<div className="card">
						<CardTitle name={en} price={price} />
						<footer className="footer">
							<CardLanguage
								language="th"
								name={th}
								onClick={() => setLanguage("th")}
							/>
							<CardLanguage
								language="jp"
								name={jp}
								onClick={() => setLanguage("jp")}
							/>
						</footer>
					</div>
				)

			case "jp":
				return (
					<div className="card">
						<CardTitle name={jp} price={price} />
						<footer className="footer">
							<CardLanguage
								language="th"
								name={th}
								onClick={() => setLanguage("th")}
							/>
							<CardLanguage
								language="en"
								name={en}
								onClick={() => setLanguage("en")}
							/>
						</footer>
					</div>
				)

			default:
				return (
					<div className="card">
						<CardTitle name={th} price={price} />
						<footer className="footer">
							<CardLanguage
								language="en"
								name={en}
								onClick={() => setLanguage("en")}
							/>
							<CardLanguage
								language="jp"
								name={jp}
								onClick={() => setLanguage("en")}
							/>
						</footer>
					</div>
				)
		}
	}

	let [selected, setSelected] = useState(0)

	if (selected === 0)
		return (
			<div className="card">
				<CardTitle name={subMenu[0]} price={price} />
				<footer className="footer">
					<button
						className="other"
						name={subMenu[1]}
						aria-label={subMenu[1]}
						onClick={() => setSelected(1)}
					>
						{subMenu[1]}
					</button>
				</footer>
			</div>
		)

	return (
		<div className="card">
			<CardTitle name={subMenu[1]} price={price} />
			<footer className="footer">
				<button
					className="other"
					name={subMenu[0]}
					aria-label={subMenu[0]}
					onClick={() => setSelected(0)}
				>
					{subMenu[0]}
				</button>
			</footer>
		</div>
	)
}

export default Card
