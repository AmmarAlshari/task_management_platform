import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UsersRoles } from '../common/roles.enum';
import { TrainingProgram } from './training.program.entity';
import { Enrollment } from './enrollments.entity';
import { Submission } from './submissions.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ type: 'enum', enum: UsersRoles, default: UsersRoles.INTERN })
  role: UsersRoles;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => TrainingProgram, (tp) => tp.createdBy)
  trainingPrograms: TrainingProgram[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.user)
  enrollments: Enrollment[];
  @OneToMany(() => Submission, (submission) => submission.user)
  submissions: Submission[];
}
