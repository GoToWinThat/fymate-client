import { chunk } from "./globals";



it('chunking correctly', () => {
    const result = chunk([1,2,3], 1)
    expect(result.length).toBe(3)
  });