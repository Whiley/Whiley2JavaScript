function testint(int x) -> int:
	return x + 5

function test():
	assert(testint(1) == 6)

	assert(testint(10) == 15)