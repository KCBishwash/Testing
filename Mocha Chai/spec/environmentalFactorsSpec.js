var thePointsCal
beforeEach(function() {
	thePointsCal = new PointsCalculator()
})

describe('Environmental Factors Tests.',() => {

	describe('Setting all Environmental factors to lowest value by setting all Environment factors to 0.',() => {
		it('should have Environmental weighting of 0', () => {
			thePointsCal.setEnvironmentalFac(0,0,0,0,0,0,0,0)			
			expect(thePointsCal.sumEnvironmentalFac).to.equal(0)
		})
	})

	describe('Setting all Environmental factors to one above the lowest value by setting all Environment factors to 1.',() => {
		it('should have Environmental weighting of 4.5', () => {
			thePointsCal.setEnvironmentalFac(1,1,1,1,1,1,1,1)			
			expect(thePointsCal.sumEnvironmentalFac).to.equal(4.5)
		})
	})

	describe('Setting all Environmental factors to one below the highest value by setting all Environmental factors to the rating of 4.',() => {
		it('should have Environmental weighting of 18', () => {
			thePointsCal.setEnvironmentalFac(4,4,4,4,4,4,4,4)			
			expect(thePointsCal.sumEnvironmentalFac).to.equal(18)
		})
	})

	describe('Setting all Environmental factors to the highest value by setting all Environmental factors to the rating of 4.',() => {
		it('should have Environmental weighting of 22.5', () => {
			thePointsCal.setEnvironmentalFac(5,5,5,5,5,5,5,5)			
			expect(thePointsCal.sumEnvironmentalFac).to.equal(22.5)
		})
	})

	describe('Setting Environmental factors to the lowest value by setting Environmental factor seven to the rating of 1.',() => {
		it('should have Environmental weighting of -1', () => {
			thePointsCal.setEnvironmentalFac(0,0,0,0,0,0,1,0)			
			expect(thePointsCal.sumEnvironmentalFac).to.equal(-1)
		})
	})

	describe('Setting Environmental factors to one above the lowest value by setting Environmental factor four to the rating of 1.',() => {
		it('should have Environmental weighting of 0.5', () => {
			thePointsCal.setEnvironmentalFac(0,0,0,1,0,0,0,0)			
			expect(thePointsCal.sumEnvironmentalFac).to.equal(0.5)
		})
	})

	describe('Setting Environmental factors to one below the highest value by setting Environmental factor one to the rating of 1.',() => {
		it('should have Environmental weighting of 1.5', () => {
			thePointsCal.setEnvironmentalFac(1,0,0,0,0,0,0,0)			
			expect(thePointsCal.sumEnvironmentalFac).to.equal(1.5)
		})
	})

	describe('Setting Environmental factors to the highest value by setting Environmental factor six to the rating of 1.',() => {
		it('should have Environmental weighting of 2', () => {
			thePointsCal.setEnvironmentalFac(0,0,0,0,0,1,0,0)			
			expect(thePointsCal.sumEnvironmentalFac).to.equal(2)
		})
	})

})