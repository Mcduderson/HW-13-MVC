module.exports = function (props){
	const { burger_name } = props;
	return /*html*/ `
		<li>
			${burger_name}
		</li>
		`
}