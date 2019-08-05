var thePointsCal
beforeEach(function() {
	thePointsCal = new PointsCalculator()
})

describe('Environmental Complexity Factors Tests.',() => {

	describe('Setting Environmental complexity factor to one above the lowest value by setting Environmental Factors weighting at 4.5.',() => {
		it('should have Environmental complexity factors of 1.265', () => {
			thePointsCal.sumEnvironmentalFac = 4.5
			expect(thePointsCal.productEnvironmentalFac).to.equal(1.265)
		})
	})


	describe('Setting Environmental complexity factor to the highest value by setting Environmental Factors weighting at 22.5.',() => {
		it('should have Environmental complexity factors of 0.725', () => {
			thePointsCal.sumEnvironmentalFac = 22.5
			expect(thePointsCal.productEnvironmentalFac).to.equal(0.725)
		})
	})

	
})