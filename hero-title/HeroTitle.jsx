import style from "./heroTitle.module.scss";

const HeroTitle = (props) => {
	const { h1 } = props;

	return (
		<div className={style.hero_title__heading}>
			<h1>{h1}</h1>
			{props.children}
		</div>
	);
};

export default HeroTitle;
