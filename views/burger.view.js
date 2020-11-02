module.exports = function (props){
	const {id, burger_name, devoured} = props;
	return /*html*/ `
		<li>
			${burger_name}
            
			<button class="change-devoured" data-id="${id}" data-newdevoured="${!devoured}">Eat!</button>
		</li>
		`
}