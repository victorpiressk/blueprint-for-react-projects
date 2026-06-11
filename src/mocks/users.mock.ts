import type { User } from '../types/models/user'
import { UserRole, UserStatus } from '../types/enums/user.enums'

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Ana Souza',
    username: 'anasouza',
    email: 'ana.souza@email.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    bio: 'Desenvolvedora frontend apaixonada por design systems.',
    role: UserRole.Admin,
    status: UserStatus.Active,
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Carlos Lima',
    username: 'carloslima',
    email: 'carlos.lima@email.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
    bio: 'Engenheiro de software com foco em arquitetura de sistemas.',
    role: UserRole.User,
    status: UserStatus.Active,
    createdAt: '2024-02-20T14:30:00Z'
  },
  {
    id: '3',
    name: 'Fernanda Rocha',
    email: 'fernanda.rocha@email.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    bio: 'Designer UX especializada em acessibilidade.',
    role: UserRole.User,
    status: UserStatus.Inactive,
    createdAt: '2024-03-10T09:15:00Z'
  },
  {
    id: '4',
    name: 'Marcos Oliveira',
    email: 'marcos.oliveira@email.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=4',
    bio: '',
    role: UserRole.User,
    status: UserStatus.Banned,
    createdAt: '2024-04-05T16:45:00Z'
  }
]
