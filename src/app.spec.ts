import mockDb from "./db";

import lib from './lib';


jest.mock('./db', () => ({
  get: jest.fn(),
  set: jest.fn(),
}));

const { addMovie, getMovie } = lib;

// beforeEach(() => jest.clearAllMocks());

test('addMovie with mock', async () => {
  await addMovie({name: 'Exterminator'});
  expect(mockDb.set).toHaveBeenCalledWith({name: 'Exterminator', description: 'Qualquer coisa para comecar'});
});

test('getMovie with mock', async () => {
  (mockDb.get as jest.Mock).mockResolvedValueOnce({
    name: "Queen",
    description: "Qualquer coisa para comecar"
  });
  
  const actual = await getMovie(1);
  
  expect(mockDb.get).toHaveBeenCalledWith(1);
  expect(actual).toEqual({description: "Qualquer coisa para comecar", name: "Queen"});
});

test('addMovie with spy', async () => {
  const setRes = jest.spyOn(mockDb, 'set').mockImplementationOnce(async ():Promise<any> => await {})

  await addMovie({name: "Star Wars"})
  expect(setRes).toHaveBeenCalledWith({name: "Star Wars", description: "Qualquer coisa para comecar"})
});

test('getMovie with spy', async () => {
  const getRes = jest.spyOn(mockDb, 'get').mockResolvedValueOnce({
    name: "Pokemon",
    description: "Qualquer coisa para comecar"
  })

  const res = await getMovie(1)
  
  expect(getRes).toHaveBeenCalledWith(1);
  expect(res).toEqual({description: "Qualquer coisa para comecar", name: "Pokemon"})
})