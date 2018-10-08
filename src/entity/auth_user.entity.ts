import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import {Role} from './auth_role.entity'
import {DateFormat} from '../utils/date.util'

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column({length: 50, default: '', comment: '姓名'})
  name: string

  @Column({length: 50, default: '', unique: true, comment: '账号'})
  username: string

  @Column({length: 50, default: '', comment: '密码'})
  password: string

  @Column({length: 50, default: '', unique: true, comment: '手机'})
  mobile: string

  @Column({length: 50, default: '', unique: true, comment: '邮箱'})
  email: string

  @Column({default: true, width: 1, comment: '封禁状态 1.有效 0:无效'})
  status: boolean

  @ManyToMany(() => Role, role => role.user)
  @JoinTable({name: 'user_role'})
  role: Role[]

  @CreateDateColumn({
    select: false, comment: '创建时间', transformer: {
      from: (date: Date) => DateFormat(date, 'YYYY-MM-DD HH:mm:ss'),
      to: () => new Date(),
    },
  })
  createdAt: Date

  @UpdateDateColumn({
    select: false, comment: '更新时间', transformer: {
      from: (date: Date) => DateFormat(date, 'YYYY-MM-DD HH:mm:ss'),
      to: () => new Date(),
    },
  })
  updatedAt: Date
}