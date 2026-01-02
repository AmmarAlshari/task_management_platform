import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './users.entity';
import { TrainingProgram } from './training.program.entity';
import { Status } from '../common/status.enum';

@Entity('enrollments')
export class Enrollment {
  @PrimaryGeneratedColumn()
  enrollment_id: number;

  @ManyToOne(() => User, (user) => user.enrollments)
  user: User;

  @ManyToOne(() => TrainingProgram, (tp) => tp.enrollments)
  trainingProgram: TrainingProgram;

  @Column({ type: 'enum', enum: Status, default: Status.ACTIVE })
  status: Status;

  @CreateDateColumn({ name: 'enrolled_at' })
  enrolledAt: Date;

  @Column({ type: 'date', nullable: true })
  completedAt: Date;
}
