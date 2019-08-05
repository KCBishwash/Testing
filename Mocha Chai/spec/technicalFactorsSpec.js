var thePointsCal
beforeEach(function() {
	thePointsCal = new PointsCalculator()
})

describe('Technical Factors Tests.',() => {

	describe('Setting all technical complexity factors to lowest value by setting all technical factors to the rating of 0.',() => {
		it('should have Technical weighting of 0', () => {
			thePointsCal.setTechnicalFac(0,0,0,0,0,0,0,0,0,0,0,0,0)			
			expect(thePointsCal.sumTechnicalFac).to.equal(0)
		})
	})

	describe('Setting all technical complexity factors to one above the lowest value by setting all technical factors to the rating of 1.',() => {
		it('should have Technical weighting of 14', () => {
			thePointsCal.setTechnicalFac(1,1,1,1,1,1,1,1,1,1,1,1,1)			
			expect(thePointsCal.sumTechnicalFac).to.equal(14)
		})
	})

	describe('Setting all technical complexity factors to one below the highest value by setting all technical factors to the rating of 4.',() => {
		it('should have Technical weighting of 56', () => {
			thePointsCal.setTechnicalFac(4,4,4,4,4,4,4,4,4,4,4,4,4)			
			expect(thePointsCal.sumTechnicalFac).to.equal(56)
		})
	})

	describe('Setting all technical complexity factors to the highest value by setting all technical factors to the rating of 5.',() => {
		it('should have Technical weighting of 70', () => {
			thePointsCal.setTechnicalFac(5,5,5,5,5,5,5,5,5,5,5,5,5)			
			expect(thePointsCal.sumTechnicalFac).to.equal(70)
		})
	})

	describe('Setting technical factors to lowest value by setting Technical factor seven to the rating of 1.',() => {
		it('should have Technical weighting of 0.5', () => {
			thePointsCal.setTechnicalFac(0,0,0,0,0,0,1,0,0,0,0,0,0)			
			expect(thePointsCal.sumTechnicalFac).to.equal(0.5)
		})
	})

	describe('Setting technical factors to one above the lowest value by setting Technical factor five to the rating of 1.',() => {
		it('should have Technical weighting of 1', () => {
			thePointsCal.setTechnicalFac(0,0,0,0,1,0,0,0,0,0,0,0,0)			
			expect(thePointsCal.sumTechnicalFac).to.equal(1)
		})
	})

	describe('Setting technical factors to highest value by setting Technical factor one to the rating of 1.',() => {
		it('should have Technical weighting of 2', () => {
			thePointsCal.setTechnicalFac(1,0,0,0,0,0,0,0,0,0,0,0,0)			
			expect(thePointsCal.sumTechnicalFac).to.equal(2)
		})
	})

})