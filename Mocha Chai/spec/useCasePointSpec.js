var thePointsCal
beforeEach(function() {
	thePointsCal = new PointsCalculator()
})

describe('Use Case Points Tests.',() => {

	describe('Calculate Total use case points with lowest value of unadjusted Use case points at 36, Technical Complexity Factors at 0.74 and Environmental Complexity factor at 1.265.',() => {
		it('should have a use case points of 33.6996', () => {
			thePointsCal.unadjustedPoints = 36
			thePointsCal.productTechnicalFac = 0.74
			thePointsCal.productEnvironmentalFac = 1.265
			expect(thePointsCal.productUseCasePoints).to.equal(33.6996)
		})
	})

	describe('Calculate Total use case points with highest value of unadjusted Use case points at 36, Technical Complexity Factors at 1.3 and Environmental Complexity factor at 0.725.',() => {
		it('should have a use case points of 33.93', () => {
			thePointsCal.unadjustedPoints = 36
			thePointsCal.productTechnicalFac = 1.3
			thePointsCal.productEnvironmentalFac = 0.725
			expect(thePointsCal.productUseCasePoints).to.equal(33.93)
		})
	})
})