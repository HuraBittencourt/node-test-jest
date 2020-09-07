import db from './db';
function addMovie(obj: any) {
  //save on database
  db.set({
    description: "Qualquer coisa para comecar",
    ...obj
  })
  
}

function getMovie(id) {
  return db.get(id)
}

const lib = {
  getMovie,
  addMovie
}

export default lib;