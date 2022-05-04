const getAllEvents = async (req, res) => {

  res.status(200).json([
    {
      id: 1,
      task: 'Praca',
      description: 'Raport dla Roberta',
      day: '31',
      month: '05',
      year: '2022',
      hour: '13',
      minute: '00'
    },
    {
      id: 2,
      task: 'Nauka',
      description: 'Sprawozdanie z fizyki',
      day: '15',
      month: '06',
      year: '2022',
      hour: '08',
      minute: '00'
    },
    {
      id: 3,
      task: 'Nauka',
      description: 'Korepetycje z chemii',
      day: '20',
      month: '07',
      year: '2022',
      hour: '11',
      minute: '00'
    }
  ])
}

module.exports = {
  getAllEvents
}