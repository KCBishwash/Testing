var thePointsCal
beforeEach(function() {
	thePointsCal = new PointsCalculator()
})

describe('Technical Complexity Factors Tests.',() => {

	describe('Setting Technical complexity factors to lowest value by setting Technical Factors weighting at 0.',() => {
		it('should have Technical complexity factors of 0.6', () => {
			thePointsCal.sumTechnicalFac = 0
			thePointsCal.calcTechnicalFactors ()
			expect(thePointsCal.productTechnicalFac).to.equal(0.6)
		})
	})

	describe('Setting Technical complexity factors to one above lowest value by setting Technical Factors weighting at 14.',() => {
		it('should have Technical complexity factors of 0.74', () => {
			thePointsCal.sumTechnicalFac = 14
			thePointsCal.calcTechnicalFactors ()
			expect(thePointsCal.productTechnicalFac).to.equal(0.74)
		})
	})

	describe('Setting Technical complexity factors to one below the highest value by setting Technical Factors weighting at 56.',() => {
		it('should have Technical complexity factors of 1.16', () => {
			thePointsCal.sumTechnicalFac = 56
			thePointsCal.calcTechnicalFactors ()
			expect(thePointsCal.productTechnicalFac).to.equal(1.16)
		})
	})

	describe('Setting Technical complexity factors to the highest value by setting Technical Factors weighting at 70.',() => {
		it('should have Technical complexity factors of 1.3', () => {
			thePointsCal.sumTechnicalFac = 70
			thePointsCal.calcTechnicalFactors ()
			expect(thePointsCal.productTechnicalFac).to.equal(1.3)
		})
	})
})