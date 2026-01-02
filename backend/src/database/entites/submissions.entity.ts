import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './users.entity';
import { Task } from './tasks.entity';
import { SubmissionStatus } from '../common/SubmissionStatus .enum';

@Entity('submissions')
export class Submission {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.submissions)
  user: User;

  @ManyToOne(() => Task, (task) => task.submissions)
  task: Task;

  @Column()
  content: string;

  @Column({ type: 'enum', enum: SubmissionStatus })
  status: Submission;

  @Column({ nullable: true })
  feedback: string;

  @CreateDateColumn({ name: 'submitted_at' })
  submittedAt: Date;

  @Column({ type: 'date', nullable: true })
  reviewedAt: Date;
}
