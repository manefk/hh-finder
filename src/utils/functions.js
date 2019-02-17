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

const findTownId = (arrayList, name) => {

	const findInEl = (el, name) => {
		if (el.name.toLowerCase() === name.toLowerCase()) {
			return el.id
		}
		return findInElArray(el.areas, name)
	}

	const findInElArray = (arrayList, name) => {
		if (arrayList.length === 0) { 
			return false 
		}
		let attempt = findInEl(arrayList[0], name)
		if (attempt) {
			return attempt
		} else {
			return findInElArray(arrayList.slice(1), name)
		}	
	}
	
	return findInElArray(arrayList, name)
}

export {formatSalary, findTownId}


