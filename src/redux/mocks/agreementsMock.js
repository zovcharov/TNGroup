export default [
    {
        DocumentId: 0,
        DocumentType: 'Паспорт проекта',
        ProjectId: 1,
        Status: 'Согласовано',
        Result: 0,
        DateCreate: (new Date()).toDateString(),
        DateEnd: (new Date()).toDateString(),
        LastDateUpdate: (new Date()).toDateString(),
        PerformanceList: [],
        Id: 0,
        Name: 'Согласование проекта'
    }, {
        DocumentId: 0,
        DocumentType:  'Задача',
        ProjectId: 1,
        Status: 'Не согласовано',
        Result: 0,
        DateCreate: (new Date()).toDateString(),
        DateEnd: (new Date()).toDateString(),
        LastDateUpdate: (new Date()).toDateString(),
        PerformanceList: [],
        Id: 1,
        Name: 'Согласование задачи'
    }, {
        DocumentId: 0,
        DocumentType: 'Календарный план',
        ProjectId: 1,
        Status: 'На рассмотрении',
        Result: 0,
        DateCreate: (new Date()).toDateString(),
        DateEnd: (new Date()).toDateString(),
        LastDateUpdate: (new Date()).toDateString(),
        PerformanceList: [],
        Id: 2,
        Name: 'Покупка товаров'
    }
]
