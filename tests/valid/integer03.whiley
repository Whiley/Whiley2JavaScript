function test(int x) -> int:
	return x + 5

function main():
	assert(test(1) == 6)

	assert(test(10) == 15)