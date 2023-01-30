import {v4 as uuidv4} from 'uuid'

export const navBarData = [
  {
    id: uuidv4(),
    linkName: 'Resources',
    subLinks: [
      {
        id: uuidv4(),
        linkName: 'Course',
        linkAddress: 'course'
      },
      {
        id: uuidv4(),
        linkName: 'Course',
        linkAddress: 'course'
      },
      {
        id: uuidv4(),
        linkName: 'Course',
        linkAddress: 'course'
      }
    ]
  }

]

