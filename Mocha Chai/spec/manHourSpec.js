var thePointsCal
beforeEach(function() {
	thePointsCal = new PointsCalculator()
})

describe('Estimated Man Hour Tests.',() => {

	describe('Calculate Estimated Manhours  with lowest use case points at 33.6996.',() => {
		it('should have man hour of 1213.1856', () => {
			thePointsCal.productUseCasePoints = 33.6996
			thePointsCal.calcEstManHrs( )
			expect(thePointsCal.estManHrs).to.equal(1213.1856)
		})
	})

	describe('Calculate Estimated Manhours  with highest use case points at 33.93.',() => {
		it('should have man hour of 678.6', () => { 
			thePointsCal.productUseCasePoints = 33.6996
			thePointsCal.calcEstManHrs( )
			expect(thePointsCal.estManHrs).to.equal(678.6)
		})
	})
})