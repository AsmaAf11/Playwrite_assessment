function getRandomIndexes(total, count) {
  const indexes = [];
  while (indexes.length < count) {
    const rand = Math.floor(Math.random() * total);
    if (!indexes.includes(rand)) {
      indexes.push(rand);
    }
  }
  return indexes;
}

module.exports = { getRandomIndexes };