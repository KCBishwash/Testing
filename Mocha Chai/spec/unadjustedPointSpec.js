var thePointsCal
beforeEach(function() {
	thePointsCal = new PointsCalculator()
})

describe('Unadjusted use case points Tests.',() => {

	describe('Total Unadjusted Use Case Points at lowest Actor weigth value and lowest Use Case weight value',() => {
		it('should have Unadjusted Use Case Points of 6', () => {
			var aActor = new Actor('Simple Actor',1)
			var aUseCase = new UseCase('Simple Use Case',5)		
			expect(thePointsCal.unadjustedPoints).to.equal(6)
		})
	})

	describe('Total Unadjusted Use Case Points at highest Actor weigth value and highest Use Case weight value',() => {
		it('should have Unadjusted Use Case Points of 6', () => {
			var aSimActor = new Actor('Simple Actor',1)
			var aAvgActor = new Actor('Average Actor',2)
			var aComActor = new Actor('Complex Actor',3)				
			var aSimUseCase = new UseCase('Simple Use Case',5)
			var aAvgUseCase = new UseCase('Average Use Case',10)
			var aComUseCase = new UseCase('Complex Use Case',15)			
			expect(thePointsCal.unadjustedPoints).to.equal(36)
		})
	})
	
})