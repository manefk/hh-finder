const formatSalary = salary => {
		let text = ''
		if (salary) {
			const currency = salary.currency
			if (salary.from && salary.to) {
				text = salary.from === salary.to ? `${salary.from} ${currency}`
												 : `${salary.from} - ${salary.to} ${currency}`
			} else if (salary.from) {
				text = `от ${salary.from} ${currency}`
			} else {
				text = `до ${salary.to} ${currency}`
			}
		}
		else {
			text = 'не указана'
		}
		return text
	}

const findTownId = (response, townName) => {
	let id;
	let found = false
	let townLowerCase = townName.toLowerCase()
	for (let i=0; i< response.length; i++) {
		if (found === true) break
		response[i].areas.forEach(region => {
			if (townLowerCase === region.name.toLowerCase()) {
				id = region.id;
				found = true
			}
			region.areas.forEach(town => {
				if(townLowerCase === town.name.toLowerCase()) {
					id = town.id
					found = true
				}
			})})
	}
	return id
}






export {formatSalary, findTownId}


