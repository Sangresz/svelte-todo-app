export interface TodoData {
  id: string;
  label: string;
  state: 'done' | 'tbd';
}

export interface ListData {
  id: string;
  label: string;
  todos: TodoData[]
}

const lists: ListData[] = [
  { id: '1', label: 'HTML', todos: [] },
  { id: '2', label: 'CSS', todos: [] },
  {
      id: '3', label: 'Esame Saw', todos: [
          { id: '1', label: 'Concordare il progetto', state: 'done' },
          { id: '2', label: 'Sviluppare il progetto', state: 'tbd' },
          { id: '3', label: 'Consegnare il progetto', state: 'tbd' },
          { id: '4', label: 'Sostenere esame', state: 'tbd' },
      ]
  },
  {
      id: '4', label: 'Git', todos: [
          { id: '1', label: 'git add', state: 'done' },
          { id: '2', label: 'git commit', state: 'done' },
          { id: '3', label: 'git push', state: 'tbd' },
          { id: '4', label: 'leave building', state: 'tbd' },
      ]
  },
];

export function createDb() {
  let db = $state(lists)

  function addList(label: string) {
    const newList: ListData = {
      id: window.crypto.randomUUID(),
      label: label,
      todos: []
    }

    db.push(newList)
  }

  function getList(id: string) {
    return db.find(list => list.id === id)
  }

  function deleteList(id: string) {
    db = db.filter(list => list.id !== id)
  }

  return {
    get lists() {
      return db
    },
    addList,
    getList,
    deleteList
  }
}

export const db = createDb()