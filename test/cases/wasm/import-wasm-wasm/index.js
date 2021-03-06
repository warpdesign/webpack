it("should allow to run a WebAssembly module with imports", function() {
	return import("./wasm.wasm").then(function(wasm) {
		const result = wasm.addNumber(20);
		expect(result).toEqual(42);
	});
});
