function test(int x) -> int:
	return x + 1

function main():
	assert(test(1) == 2)

	assert(test(10) == 11)