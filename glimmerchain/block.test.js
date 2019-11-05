describe('Block', () => {
  const timestamp = 'a date';
  const lastHash = 'glim-hash';
  const hash = 'glimmer-hash';
  const data = ['blockchain', 'data'];
  const block = new Block([ timestamp, lastHash, hash, data, ]);

  it('has a timestamp, lastHash, hash, and a data property', () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });
});
//test
