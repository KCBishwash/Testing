describe('Use Case Function Point Calculator.', () => {
	var thePointsCal
	beforeEach(function() {
		thePointsCal = new PointsCalculator()
	})

	describe('Actor Weight Tests.',() => {

		describe('Adding One simple Actor.',() => {
			it('should have a weight of 1', () => {
				var aActor = new Actor('Simple Actor',1)			
				expect(thePointsCal.sumActorWeight).to.equal(1)
			})
		})
		
		describe('Adding One Average Actor.',() => {
			it('should have a weight of 3', () => {
				var aActor = new Actor('Average',2)			
				expect(thePointsCal.sumActorWeight).to.equal(2)
			})
		})

		describe('Adding One complex Actor.',() => {
			it('should have a weight of 3', () => {
				var aActor = new Actor('Complex Actor',3)			
				expect(thePointsCal.sumActorWeight).to.equal(3)
			})
		})

		describe('Adding actors with simple, average and complex complexity.',() => {
			it('should have a weight of 6', () => {
				var aSimActor = new Actor('Simple Actor',1)
				var aAvgActor = new Actor('Average Actor',2)
				var aComActor = new Actor('Complex Actor',3)			
				expect(thePointsCal.sumActorWeight).to.equal(6)
			})
		})
	})

 })