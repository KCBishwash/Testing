var thePointsCal
beforeEach(function() {
	thePointsCal = new PointsCalculator()
})

describe('Use Case Weight Tests.',() => {

	describe('Adding One simple Use Case weight.',() => {
		it('should have a weight of 5', () => {
			var aUseCase = new UseCase('Simple Use Case',5)			
			expect(thePointsCal.sumUseCaseWeight).to.equal(5)
		})
	})
	describe('Adding One average Use Case weight.',() => {
		it('should have a weight of 10', () => {
			var aUseCase = new UseCase('average Use Case',10)			
			expect(thePointsCal.sumUseCaseWeight).to.equal(10)
		})
	})
	describe('Adding One complex Use Case weight.',() => {
		it('should have a weight of 15', () => {
			var aUseCase = new UseCase('Complex Use Case',15)			
			expect(thePointsCal.sumUseCaseWeight).to.equal(15)
		})
	})

	describe('Adding use case weight with simple, average and complex complexity.',() => {
		it('should have a weight of 30', () => {
			var aSimUseCase = new UseCase('Simple Use Case',5)
			var aAvgUseCase = new UseCase('Average Use Case',10)
			var aComUseCase = new UseCase('Complex Use Case',15)			
			expect(thePointsCal.sumUseCaseWeight).to.equal(30)
		})
	})
})