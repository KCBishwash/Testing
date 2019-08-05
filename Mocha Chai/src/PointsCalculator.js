
class PointsCalculator {
   constructor () {
		this.sumActorWeight = 0
		this.sumUseCaseWeight = 0
		this.unadjustedPoints = 0
		this.sumTechnicalFac = null
		this.productTechnicalFac = 0
		this.sumEnvironmentalFac = null
		this.productEnvironmentalFac = 0
		this.productUseCasePoints = 0
		this.environmentalFac = 0
		this.estManHrs = 0
	}
	//method for 'add' button on the Total Actor Weight Form.
	addActorWeight(newActor) {}
	//method for 'ok' button on the Total Actor Weight Form.
	setActorWeight(){}
	//method for 'add' button on the Total Use Case Weight Form.
	addUseCaseWeight(newUseCase) {}
	//method for 'ok' button on the Total Actor Weight Form.
	setUseCaseWeight(){}
	//method for 'Unadjusted Use case Points' button on the home page.
	getUnadjustedPoints() {}
	//method for 'Technical Complexity Weight' button on the Total Technical Complexity Weight Form.
	setTechnicalFac(techOne,techTwo,techThree,techFour,techFive,techSix,techSeven,techEight,techNine,techTen,techEleven,techTwelve,techThirteen) {}
	//method for 'ok' button on the Total Technical Complexity Weight Form.
	setTechnicalWeight() {}
	//method for 'Total Environment Factor Weight' button on the Total Environment Factor Weight Form.
	setEnvironmentalFac(enviOne,enviTwo,enviThree,enviFour,enviFive,enviSix,enviSeven,enviEight) {}
	//method for 'ok' button on the Total Environment Factor Weight Form.
	setEnvironmentWeight() {}
	//private method for calcualting unadjusted points every time Actor weight or Use case Weight is changed.
	sumUnadjustedPoints() {}
	//method for 'Technical Complexity Factor' button on the home page.
	calcTechnicalFactors () {}
	//method for 'Environment Factor Factor' button on the home page.
	calcEnvironmentalFactors() {}
	//method for 'UCP' button on the home page.
	calcUseCasePoints() {}
	//method for calculating UCP.
	calcEstManHrs() {}
	//method for calculating estimated man hours.
}


class Actor { 
   constructor (newName,newWeight) {
		this.name = newName
		this.weight = newWeight
	}
}

class UseCase{ 
   constructor (newName,newWeight) {
		this.name = newName
		this.weight = newWeight
	}
}