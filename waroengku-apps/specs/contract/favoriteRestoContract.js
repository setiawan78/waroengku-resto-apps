const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it('should return the resto that has been added', async () => {
    favoriteResto.putWaroengku({ id: 1 });
    favoriteResto.putWaroengku({ id: 2 });

    expect(await favoriteResto.getWaroengku(1))
      .toEqual({ id: 1 });
    expect(await favoriteResto.getWaroengku(2))
      .toEqual({ id: 2 });
    expect(await favoriteResto.getWaroengku(3))
      .toEqual(undefined);
  });

  it('should refuse a resto from being added if it does not have the correct property', async () => {
    favoriteResto.putWaroengku({ aProperty: 'property' });

    expect(await favoriteResto.getAllWaroengku())
      .toEqual([]);
  });

  it('can return all of the restos that have been added', async () => {
    favoriteResto.putWaroengku({ id: 1 });
    favoriteResto.putWaroengku({ id: 2 });

    expect(await favoriteResto.getAllWaroengku())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite resto', async () => {
    favoriteResto.putWaroengku({ id: 1 });
    favoriteResto.putWaroengku({ id: 2 });
    favoriteResto.putWaroengku({ id: 3 });

    await favoriteResto.deleteWaroengku(1);

    expect(await favoriteResto.getAllWaroengku())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a resto even though the resto has not been added', async () => {
    favoriteResto.putWaroengku({ id: 1 });
    favoriteResto.putWaroengku({ id: 2 });
    favoriteResto.putWaroengku({ id: 3 });

    await favoriteResto.deleteWaroengku(4);

    expect(await favoriteResto.getAllWaroengku())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteRestoModel };
