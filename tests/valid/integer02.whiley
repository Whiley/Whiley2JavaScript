function testint(int x) -> int:
	return x

function test():
	assert(testint(1) == 1)

	assert(testint(10) == 10)