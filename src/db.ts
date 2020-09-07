const data: any = {}

async function set(dataValue: any) {
  console.log({data})
  const autoIncrementId = data.length + 1;
  data[autoIncrementId] = dataValue
}

async function get(id: any) {
  return data[id];
}

const db = {
  get,
  set
}

export default db;