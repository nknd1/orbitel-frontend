export interface Contract {
  id: number
  contractNumber: string
  startDate: string
  endDate: string
  tariff: string
  status: string
}

export const contractsMock: Contract[] = [
  {
    id: 1,
    contractNumber: 'C-001',
    startDate: '2023-01-01',
    endDate: '2024-01-01',
    tariff: 'Тариф Стандарт',
    status: 'Активен',
  },
  {
    id: 2,
    contractNumber: 'C-002',
    startDate: '2022-05-15',
    endDate: '2023-05-15',
    tariff: 'Тариф Базовый',
    status: 'Завершён',
  },
  {
    id: 3,
    contractNumber: 'C-003',
    startDate: '2023-03-10',
    endDate: '2024-03-10',
    tariff: 'Тариф Премиум',
    status: 'Активен',
  },
]
